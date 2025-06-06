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

#include <map>

#include "bluetooth_ble_advertiser_stub.h"
#include "bluetooth_log.h"
#include "ipc_types.h"
#include "parcel_bt_uuid.h"
#include "bt_def.h"

using std::placeholders::_1;
using std::placeholders::_2;
using std::placeholders::_3;
namespace OHOS {
namespace Bluetooth {
const std::map<uint32_t, std::function<ErrCode(BluetoothBleAdvertiserStub *, MessageParcel &, MessageParcel &)>>
    BluetoothBleAdvertiserStub::interfaces_ = {
        {BluetoothBleAdvertiserInterfaceCode::BLE_REGISTER_BLE_ADVERTISER_CALLBACK,
            std::bind(&BluetoothBleAdvertiserStub::RegisterBleAdvertiserCallbackInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_DE_REGISTER_BLE_ADVERTISER_CALLBACK,
            std::bind(&BluetoothBleAdvertiserStub::DeregisterBleAdvertiserCallbackInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_START_ADVERTISING,
            std::bind(&BluetoothBleAdvertiserStub::StartAdvertisingInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_ENABLE_ADVERTISING,
            std::bind(&BluetoothBleAdvertiserStub::EnableAdvertisingInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_DISABLE_ADVERTISING,
            std::bind(&BluetoothBleAdvertiserStub::DisableAdvertisingInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_STOP_ADVERTISING,
            std::bind(&BluetoothBleAdvertiserStub::StopAdvertisingInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_CLOSE,
            std::bind(&BluetoothBleAdvertiserStub::CloseInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_GET_ADVERTISER_HANDLE,
            std::bind(&BluetoothBleAdvertiserStub::GetAdvertiserHandleInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_SET_ADVERTISING_DATA,
            std::bind(&BluetoothBleAdvertiserStub::SetAdvertisingDataInner, _1, _2, _3)},
        {BluetoothBleAdvertiserInterfaceCode::BLE_CHANGE_ADVERTISING_PARAMS,
            std::bind(&BluetoothBleAdvertiserStub::ChangeAdvertisingParamsInner, _1, _2, _3)},
};

BluetoothBleAdvertiserStub::BluetoothBleAdvertiserStub()
{}

BluetoothBleAdvertiserStub::~BluetoothBleAdvertiserStub()
{}

int BluetoothBleAdvertiserStub::OnRemoteRequest(
    uint32_t code, MessageParcel &data, MessageParcel &reply, MessageOption &option)
{
    if (BluetoothBleAdvertiserStub::GetDescriptor() != data.ReadInterfaceToken()) {
        HILOGW("[OnRemoteRequest] fail: invalid interface token!");
        return OBJECT_NULL;
    }

    auto it = interfaces_.find(code);
    if (it == interfaces_.end()) {
        HILOGW("[OnRemoteRequest] fail: unknown code!");
        return IRemoteStub<IBluetoothBleAdvertiser>::OnRemoteRequest(code, data, reply, option);
    }

    auto fun = it->second;
    if (fun == nullptr) {
        HILOGW("[OnRemoteRequest] fail: not find function!");
        return IRemoteStub<IBluetoothBleAdvertiser>::OnRemoteRequest(code, data, reply, option);
    }

    ErrCode result = fun(this, data, reply);
    if (SUCCEEDED(result)) {
        return NO_ERROR;
    }

    HILOGW("[OnRemoteRequest] fail: Failed to call interface %{public}u, err:%{public}d", code, result);
    return result;
}

ErrCode BluetoothBleAdvertiserStub::RegisterBleAdvertiserCallbackInner(MessageParcel &data, MessageParcel &reply)
{
    sptr<IRemoteObject> remote = data.ReadRemoteObject();
    const sptr<IBluetoothBleAdvertiseCallback> callBack = OHOS::iface_cast<IBluetoothBleAdvertiseCallback>(remote);
    RegisterBleAdvertiserCallback(callBack);
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::DeregisterBleAdvertiserCallbackInner(MessageParcel &data, MessageParcel &reply)
{
    sptr<IRemoteObject> remote = data.ReadRemoteObject();
    const sptr<IBluetoothBleAdvertiseCallback> callBack = OHOS::iface_cast<IBluetoothBleAdvertiseCallback>(remote);
    DeregisterBleAdvertiserCallback(callBack);
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::StartAdvertisingInner(MessageParcel &data, MessageParcel &reply)
{
    std::shared_ptr<BluetoothBleAdvertiserSettings> settings(data.ReadParcelable<BluetoothBleAdvertiserSettings>());
    if (settings == nullptr) {
        HILOGW("[StartAdvertisingInner] fail: read settings failed");
        return TRANSACTION_ERR;
    }

    std::shared_ptr<BluetoothBleAdvertiserData> advData(data.ReadParcelable<BluetoothBleAdvertiserData>());
    if (advData == nullptr) {
        HILOGW("[StartAdvertisingInner] fail: read advData failed");
        return TRANSACTION_ERR;
    }
    std::shared_ptr<BluetoothBleAdvertiserData> scanResponse(data.ReadParcelable<BluetoothBleAdvertiserData>());
    if (scanResponse == nullptr) {
        HILOGW("[StartAdvertisingInner] fail: read scanResponse failed");
        return TRANSACTION_ERR;
    }

    int32_t advHandle = data.ReadInt32();
    uint16_t duration = data.ReadUint16();
    bool isRawData = data.ReadBool();
    int32_t ret = StartAdvertising(*settings, *advData, *scanResponse, advHandle, duration, isRawData);
    if (!reply.WriteInt32(ret)) {
        HILOGE("reply writing failed.");
        return ERR_INVALID_VALUE;
    }
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::EnableAdvertisingInner(MessageParcel &data, MessageParcel &reply)
{
    uint8_t advHandle = data.ReadUint8();
    uint16_t duration = data.ReadUint16();
    int32_t ret = EnableAdvertising(advHandle, duration);
    if (!reply.WriteInt32(ret)) {
        HILOGE("reply writing failed.");
        return ERR_INVALID_VALUE;
    }
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::DisableAdvertisingInner(MessageParcel &data, MessageParcel &reply)
{
    uint8_t advHandle = data.ReadUint8();
    int32_t ret = DisableAdvertising(advHandle);
    if (!reply.WriteInt32(ret)) {
        HILOGE("reply writing failed.");
        return ERR_INVALID_VALUE;
    }
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::StopAdvertisingInner(MessageParcel &data, MessageParcel &reply)
{
    int32_t advHandle = data.ReadInt32();
    int32_t ret = StopAdvertising(advHandle);
    if (!reply.WriteInt32(ret)) {
        HILOGE("reply writing failed.");
        return ERR_INVALID_VALUE;
    }
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::CloseInner(MessageParcel &data, MessageParcel &reply)
{
    int32_t advHandle = data.ReadInt32();
    Close(advHandle);
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::GetAdvertiserHandleInner(MessageParcel &data, MessageParcel &reply)
{
    sptr<IRemoteObject> remote = data.ReadRemoteObject();
    const sptr<IBluetoothBleAdvertiseCallback> callBack = OHOS::iface_cast<IBluetoothBleAdvertiseCallback>(remote);
    int advHandle = bluetooth::BLE_INVALID_ADVERTISING_HANDLE;
    int result = GetAdvertiserHandle(advHandle, callBack);
    bool resultRet = reply.WriteInt32(result);
    bool advHandleRet = reply.WriteInt32(advHandle);
    if (!(resultRet && advHandleRet)) {
        HILOGE("GetAdvertiserHandleInner: reply writing failed in: %{public}s.", __func__);
        return TRANSACTION_ERR;
    }
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::SetAdvertisingDataInner(MessageParcel &data, MessageParcel &reply)
{
    return NO_ERROR;
}

ErrCode BluetoothBleAdvertiserStub::ChangeAdvertisingParamsInner(MessageParcel &data, MessageParcel &reply)
{
    int advHandle = data.ReadUint8();
    std::shared_ptr<BluetoothBleAdvertiserSettings> settings(data.ReadParcelable<BluetoothBleAdvertiserSettings>());
    if (settings == nullptr) {
        HILOGE("Read settings failed.");
        return TRANSACTION_ERR;
    }
    ChangeAdvertisingParams(advHandle, *settings);
    return NO_ERROR;
}
}  // namespace Bluetooth
}  // namespace OHOS
