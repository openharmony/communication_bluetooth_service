/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "sdp.h"
#include "avrcp_ct_sdp.h"

namespace OHOS {
namespace bluetooth {
const int ATTR_NUMBER2 = 2;
const int ATTR_NUMBER1 = 1;
/// Number of items when add service class id list.
const uint16_t AVRC_SERVICE_CLASS_ID_LIST_NUMBER = 0x0002;
/// Number of items when add protocol descriptor.
const uint16_t AVRC_PROTOCOL_DESCRIPTOR_LIST_NUMBER = 0x0002;
/// Number of items when add additional protocol descriptor.
const uint16_t AVRC_ADDITIONAL_PROTOCOL_DESCRIPTOR_LIST_NUMBER = 0x0001;
/// Number of items when add bluetooth profile descriptor list.
const uint16_t AVRC_BLUETOOTH_PROFILE_DESCRIPTOR_LIST_NUMBER = 0x0001;
/// Number of items when add attributes.
const uint16_t AVRC_ATTRIBUTE_ID_SUPPORTED_FEATURES_NUMBER = 0x0001;
/// Number of items when add browse group list.
const uint16_t AVRC_ATTRIBUTE_ID_BROWSE_GROUP_LIST_NUMBER = 0x0001;
/// Length of target service name.
const uint16_t AVRC_SERVICE_NAME_LENGTH = 0x001C;

AvrcCtSdpManager::AvrcCtSdpManager(uint32_t features) : sdpHandle_(0xFFFFFFFF), features_(features)
{
    HILOGI("features: %{public}u", features);
}

AvrcCtSdpManager::~AvrcCtSdpManager()
{
    HILOGI("enter");
}

int AvrcCtSdpManager::RegisterService(void)
{
    HILOGI("enter");

    int result = BT_SUCCESS;
    sdpHandle_ = SDP_CreateServiceRecord();

    /// Service Class ID List.
    BtUuid classIdList[AVRC_SERVICE_CLASS_ID_LIST_NUMBER];
    classIdList[0].type = BT_UUID_16;
    classIdList[0].uuid16 = AVRC_CT_AV_REMOTE_CONTROL;
    classIdList[1].type = BT_UUID_16;
    classIdList[1].uuid16 = AVRC_CT_AV_REMOTE_CONTROL_CONTROLLER;
    result |= SDP_AddServiceClassIdList(sdpHandle_, classIdList, AVRC_SERVICE_CLASS_ID_LIST_NUMBER);

    /// Protocol Descriptor List.
    result |= AddProtocolDescriptorList();

    /// Bluetooth Profile Descriptor List.
    SdpProfileDescriptor profileDsc;
    profileDsc.versionNumber = AVRC_CT_PROFILE_REV_1_6;
    profileDsc.profileUuid.type = BT_UUID_16;
    profileDsc.profileUuid.uuid16 = AVRC_CT_AV_REMOTE_CONTROL;
    result |=
        SDP_AddBluetoothProfileDescriptorList(sdpHandle_, &profileDsc, AVRC_BLUETOOTH_PROFILE_DESCRIPTOR_LIST_NUMBER);

    /// Supported Features.
    uint16_t attributes[AVRC_ATTRIBUTE_ID_SUPPORTED_FEATURES_NUMBER];
    attributes[0] = features_;
    result |= SDP_AddAttribute(sdpHandle_,
        AVRC_CT_ATTRIBUTE_ID_SUPPORTED_FEATURES,
        SDP_TYPE_UINT_16,
        &attributes,
        AVRC_ATTRIBUTE_ID_SUPPORTED_FEATURES_NUMBER);

    /// Add nothing for "provider name", because it is optional and useless.

    /// Service Name.
    std::string serviceName = "AV Remote Control Controller";
    result |= SDP_AddServiceName(
        sdpHandle_, SDP_ATTRIBUTE_PRIMARY_LANGUAGE_BASE, serviceName.c_str(), AVRC_SERVICE_NAME_LENGTH);

    /// Browse Group Identifiers.
    BtUuid browseGroupList[AVRC_ATTRIBUTE_ID_BROWSE_GROUP_LIST_NUMBER];
    browseGroupList[0].type = BT_UUID_16;
    browseGroupList[0].uuid16 = SDP_PUBLIC_BROWSE_GROUP_ROOT_UUID;
    result |= SDP_AddBrowseGroupList(sdpHandle_, browseGroupList, AVRC_ATTRIBUTE_ID_BROWSE_GROUP_LIST_NUMBER);

    /// Register target service.
    result |= SDP_RegisterServiceRecord(sdpHandle_);

    (result == BT_SUCCESS) ? (result = BT_SUCCESS) : (result = RET_BAD_STATUS);

    return result;
}

int AvrcCtSdpManager::UnregisterService(void) const
{
    HILOGI("enter");

    int result = BT_SUCCESS;

    result |= SDP_DeregisterServiceRecord(sdpHandle_);
    result |= SDP_DestroyServiceRecord(sdpHandle_);

    (result == BT_SUCCESS) ? (result = BT_SUCCESS) : (result = RET_BAD_STATUS);

    return result;
}

int AvrcCtSdpManager::FindTgService(const RawAddress &rawAddr,
    void (*callback)(const BtAddr *btAddr, const SdpService *serviceArray, uint16_t serviceNum, void *context))
{
    HILOGI("address: %{public}s", GET_ENCRYPT_AVRCP_ADDR(rawAddr));

    BtAddr btAddr;
    rawAddr.ConvertToUint8(btAddr.addr);

    BtUuid classIdList[AVRC_SERVICE_CLASS_ID_LIST_NUMBER];
    classIdList[0].type = BT_UUID_16;
    classIdList[0].uuid16 = AVRC_CT_AV_REMOTE_CONTROL;
    SdpUuid sdpUuid = {
        .uuidNum = AVRC_SERVICE_CLASS_ID_LIST_NUMBER,
        .uuid = classIdList
    };

    SdpAttributeIdList attributeIdList;
    attributeIdList.type = SDP_TYPE_LIST;

    attributeIdList.attributeIdList.attributeIdNumber = AVRC_SDP_ATTRIBUTE_NUM;
    attributeIdList.attributeIdList.attributeId[0] = SDP_ATTRIBUTE_SERVICE_CLASS_ID_LIST;
    attributeIdList.attributeIdList.attributeId[ATTR_NUMBER1] = SDP_ATTRIBUTE_BLUETOOTH_PROFILE_DESCRIPTOR_LIST;
    attributeIdList.attributeIdList.attributeId[ATTR_NUMBER2] = AVRC_CT_ATTRIBUTE_ID_SUPPORTED_FEATURES;

    int result = SDP_ServiceSearchAttribute(&btAddr, &sdpUuid, attributeIdList, nullptr, callback);
    (result == BT_SUCCESS) ? (result = BT_SUCCESS) : (result = RET_BAD_STATUS);

    return result;
}

int AvrcCtSdpManager::AddProtocolDescriptorList()
{
    HILOGI("enter");

    int result = BT_SUCCESS;

    SdpProtocolDescriptor dscList[AVRC_PROTOCOL_DESCRIPTOR_LIST_NUMBER];
    dscList[0].parameter[0].type = SDP_TYPE_UINT_16;
    dscList[0].parameter[0].value = UUID_PROTOCOL_AVCTP;
    dscList[0].parameterNumber = 1;
    dscList[0].protocolUuid.type = BT_UUID_16;
    dscList[0].protocolUuid.uuid16 = UUID_PROTOCOL_L2CAP;
    dscList[1].parameter[0].type = SDP_TYPE_UINT_16;
    dscList[1].parameter[0].value = AVCT_REV_1_4;
    dscList[1].parameterNumber = 1;
    dscList[1].protocolUuid.type = BT_UUID_16;
    dscList[1].protocolUuid.uuid16 = UUID_PROTOCOL_AVCTP;
    result |= SDP_AddProtocolDescriptorList(sdpHandle_, dscList, AVRC_PROTOCOL_DESCRIPTOR_LIST_NUMBER);

    if (IsSupportedCategory1() || IsSupportedCategory2()) {
        /// Additional Protocol Descriptor List.
        SdpAdditionalProtocolDescriptor addlDsc;
        addlDsc.protocolDescriptorNumber = AVRC_PROTOCOL_DESCRIPTOR_LIST_NUMBER;
        addlDsc.parameter[0].parameter[0].type = SDP_TYPE_UINT_16;
        addlDsc.parameter[0].parameter[0].value = AVCT_BR_PSM;
        addlDsc.parameter[0].parameterNumber = 1;
        addlDsc.parameter[0].protocolUuid.type = BT_UUID_16;
        addlDsc.parameter[0].protocolUuid.uuid16 = UUID_PROTOCOL_L2CAP;
        addlDsc.parameter[1].parameter[0].type = SDP_TYPE_UINT_16;
        addlDsc.parameter[1].parameter[0].value = AVCT_REV_1_4;
        addlDsc.parameter[1].parameterNumber = 1;
        addlDsc.parameter[1].protocolUuid.type = BT_UUID_16;
        addlDsc.parameter[1].protocolUuid.uuid16 = UUID_PROTOCOL_AVCTP;
        result |= SDP_AddAdditionalProtocolDescriptorList(
            sdpHandle_, &addlDsc, AVRC_ADDITIONAL_PROTOCOL_DESCRIPTOR_LIST_NUMBER);
    }

    return result;
}
}  // namespace bluetooth
}  // namespace OHOS
