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

#ifndef OHOS_BLUETOOTH_STANDARD_HOST_STUB_H
#define OHOS_BLUETOOTH_STANDARD_HOST_STUB_H

#include <map>

#include "i_bluetooth_host.h"
#include "iremote_stub.h"

namespace OHOS {
namespace Bluetooth {
class BluetoothHostStub : public IRemoteStub<IBluetoothHost> {
public:
    BluetoothHostStub();
    virtual ~BluetoothHostStub();

    virtual int OnRemoteRequest(
        uint32_t code, MessageParcel &data, MessageParcel &reply, MessageOption &option) override;

private:
    ErrCode RegisterObserverInner(MessageParcel &data, MessageParcel &reply);
    ErrCode DeregisterObserverInner(MessageParcel &data, MessageParcel &reply);
    ErrCode EnableBtInner(MessageParcel &data, MessageParcel &reply);
    int32_t DisableBtInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SatelliteControlInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetProfileInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetBleRemoteInner(MessageParcel &data, MessageParcel &reply);
    int32_t BluetoothFactoryResetInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetBtStateInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetLocalAddressInner(MessageParcel &data, MessageParcel &reply);
    int32_t DisableBleInner(MessageParcel &data, MessageParcel &reply);
    int32_t EnableBleInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetProfileListInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetMaxNumConnectedAudioDevicesInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetBtConnectionStateInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetBtProfileConnStateInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetLocalDeviceClassInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetLocalDeviceClassInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetLocalNameInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetLocalNameInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetBtScanModeInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetBtScanModeInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetBondableModeInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetBondableModeInner(MessageParcel &data, MessageParcel &reply);
    int32_t StartBtDiscoveryInner(MessageParcel &data, MessageParcel &reply);
    int32_t CancelBtDiscoveryInner(MessageParcel &data, MessageParcel &reply);
    ErrCode IsBtDiscoveringInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetBtDiscoveryEndMillisInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetPairedDevicesInner(MessageParcel &data, MessageParcel &reply);
    int32_t RemovePairInner(MessageParcel &data, MessageParcel &reply);
    ErrCode RemoveAllPairsInner(MessageParcel &data, MessageParcel &reply);
    ErrCode RegisterRemoteDeviceObserverInner(MessageParcel &data, MessageParcel &reply);
    ErrCode DeregisterRemoteDeviceObserverInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetBleMaxAdvertisingDataLengthInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetDeviceTypeInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetPhonebookPermissionInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetPhonebookPermissionInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetMessagePermissionInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetMessagePermissionInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetPowerModeInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetDeviceNameInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetDeviceAliasInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetDeviceAliasInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetRemoteDeviceBatteryInfoInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetPairStateInner(MessageParcel &data, MessageParcel &reply);
    int32_t StartPairInner(MessageParcel &data, MessageParcel &reply);
    ErrCode CancelPairingInner(MessageParcel &data, MessageParcel &reply);
    ErrCode IsBondedFromLocalInner(MessageParcel &data, MessageParcel &reply);
    ErrCode IsAclConnectedInner(MessageParcel &data, MessageParcel &reply);
    ErrCode IsAclEncryptedInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetDeviceClassInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetDevicePinInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetDevicePairingConfirmationInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SetDevicePasskeyInner(MessageParcel &data, MessageParcel &reply);
    ErrCode PairRequestReplyInner(MessageParcel &data, MessageParcel &reply);
    ErrCode ReadRemoteRssiValueInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetLocalSupportedUuidsInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetDeviceUuidsInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetLocalProfileUuidsInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetFastScanInner(MessageParcel &data, MessageParcel &reply);
    ErrCode RegisterBleAdapterObserverInner(MessageParcel &data, MessageParcel &reply);
    ErrCode DeregisterBleAdapterObserverInner(MessageParcel &data, MessageParcel &reply);
    ErrCode RegisterBlePeripheralCallbackInner(MessageParcel &data, MessageParcel &reply);
    ErrCode DeregisterBlePeripheralCallbackInner(MessageParcel &data, MessageParcel &reply);
    ErrCode GetRandomAddressInner(MessageParcel &data, MessageParcel &reply);
    ErrCode SyncRandomAddressInner(MessageParcel &data, MessageParcel &reply);
    ErrCode StartCrediblePairInner(MessageParcel &data, MessageParcel &reply);
    int32_t ConnectAllowedProfilesInner(MessageParcel &data, MessageParcel &reply);
    int32_t DisconnectAllowedProfilesInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetDeviceCustomTypeInner(MessageParcel &data, MessageParcel &reply);
    int32_t RegisterBtResourceManagerObserverInner(MessageParcel &data, MessageParcel &reply);
    int32_t DeregisterBtResourceManagerObserverInner(MessageParcel &data, MessageParcel &reply);
    int32_t UpdateVirtualDeviceInner(MessageParcel &data, MessageParcel &reply);
    int32_t IsSupportVirtualAutoConnectInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetVirtualAutoConnectTypeInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetFastScanLevelInner(MessageParcel &data, MessageParcel &reply);
    int32_t EnableBluetoothToRestrictModeInner(MessageParcel &data, MessageParcel &reply);
    int32_t ControlDeviceActionInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetLastConnectionTimeInner(MessageParcel &data, MessageParcel &reply);
    int32_t UpdateCloudBluetoothDevInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetCloudBondStateInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetDeviceTransportInner(MessageParcel &data, MessageParcel &reply);
    int32_t UpdateRefusePolicyInner(MessageParcel &data, MessageParcel &reply);
    int32_t ProcessRandomDeviceIdCommandInner(MessageParcel &data, MessageParcel &reply);
    int32_t GetCarKeyDfxDataInner(MessageParcel &data, MessageParcel &reply);
    int32_t SetCarKeyCardDataInner(MessageParcel &data, MessageParcel &reply);
    int32_t NotifyDialogResultInner(MessageParcel &data, MessageParcel &reply);
    static const std::map<uint32_t, std::function<ErrCode(BluetoothHostStub *, MessageParcel &, MessageParcel &)>>
        memberFuncMap_;

    DISALLOW_COPY_AND_MOVE(BluetoothHostStub);
};
}  // namespace Bluetooth
}  // namespace OHOS
#endif  // OHOS_BLUETOOTH_STANDARD_HOST_STUB_H