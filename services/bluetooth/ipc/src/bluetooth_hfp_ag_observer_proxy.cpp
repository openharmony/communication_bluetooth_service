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


#include "bluetooth_hfp_ag_observer_proxy.h"
#include "bluetooth_log.h"

namespace OHOS {
namespace Bluetooth {
void BluetoothHfpAgObserverProxy::OnConnectionStateChanged(const BluetoothRawAddress &device, int state, int cause)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothHfpAgObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHfpAgObserverProxy::OnConnectionStateChanged WriteInterfaceToken error");
        return;
    }
    if (!data.WriteParcelable(&device)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnConnectionStateChanged write device error");
        return;
    }
    if (!data.WriteInt32(state)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnConnectionStateChanged write state error");
        return;
    }
    if (!data.WriteInt32(cause)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnConnectionStateChanged write cause error");
        return;
    }
    MessageParcel reply;
    MessageOption option {
        MessageOption::TF_ASYNC
    };
    int error = Remote()->SendRequest(
        BluetoothHfpAgObserverInterfaceCode::BT_HFP_AG_OBSERVER_CONNECTION_STATE_CHANGED, data, reply, option);
    if (error != NO_ERROR) {
        HILOGE("BluetoothHfpAgObserverProxy::OnConnectionStateChanged done fail, error: %{public}d", error);
        return;
    }
}

void BluetoothHfpAgObserverProxy::OnScoStateChanged(const BluetoothRawAddress &device, int state, int reason)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothHfpAgObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHfpAgObserverProxy::OnScoStateChanged WriteInterfaceToken error");
        return;
    }
    if (!data.WriteParcelable(&device)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnScoStateChanged WriteParcelable error");
        return;
    }
    if (!data.WriteInt32(state)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnScoStateChanged WriteInt32 error");
        return;
    }
    if (!data.WriteInt32(reason)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnScoStateChanged WriteInt32 error");
        return;
    }
    MessageParcel reply;
    MessageOption option {
        MessageOption::TF_ASYNC
    };
    int error = Remote()->SendRequest(
        BluetoothHfpAgObserverInterfaceCode::BT_HFP_AG_OBSERVER_SCO_STATE_CHANGED, data, reply, option);
    if (error != NO_ERROR) {
        HILOGE("BluetoothHfpAgObserverProxy::OnScoStateChanged done fail, error: %{public}d", error);
        return;
    }
}

void BluetoothHfpAgObserverProxy::OnActiveDeviceChanged(const BluetoothRawAddress &device)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothHfpAgObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHfpAgObserverProxy::OnActiveDeviceChanged WriteInterfaceToken error");
        return;
    }
    if (!data.WriteParcelable(&device)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnActiveDeviceChanged WriteParcelable error");
        return;
    }
    MessageParcel reply;
    MessageOption option {
        MessageOption::TF_ASYNC
    };
    int error = Remote()->SendRequest(
        BluetoothHfpAgObserverInterfaceCode::BT_HFP_AG_OBSERVER_ACTIVE_DEVICE_CHANGED, data, reply, option);
    if (error != NO_ERROR) {
        HILOGE("BluetoothHfpAgObserverProxy::OnActiveDeviceChanged done fail, error: %{public}d", error);
        return;
    }
}

void BluetoothHfpAgObserverProxy::OnHfEnhancedDriverSafetyChanged(const BluetoothRawAddress &device, int indValue)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothHfpAgObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfEnhancedDriverSafetyChanged WriteInterfaceToken error");
        return;
    }
    if (!data.WriteParcelable(&device)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfEnhancedDriverSafetyChanged WriteParcelable error");
        return;
    }
    if (!data.WriteInt32(indValue)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfEnhancedDriverSafetyChanged WriteInt32 error");
        return;
    }
    MessageParcel reply;
    MessageOption option {
        MessageOption::TF_ASYNC
    };
    int error = Remote()->SendRequest(
        BluetoothHfpAgObserverInterfaceCode::BT_HFP_AG_OBSERVER_HF_ENHANCED_DRIVER_SAFETY_CHANGED, data, reply, option);
    if (error != NO_ERROR) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfEnhancedDriverSafetyChanged done fail, error: %{public}d", error);
        return;
    }    
}

void BluetoothHfpAgObserverProxy::OnHfpStackChanged(const BluetoothRawAddress &device, int action)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothHfpAgObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfpStackChanged WriteInterfaceToken error");
        return;
    }
    if (!data.WriteParcelable(&device)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfpStackChanged WriteParcelable error");
        return;
    }
    if (!data.WriteInt32(action)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfpStackChanged WriteInt32 error");
        return;
    }
    MessageParcel reply;
    MessageOption option {
        MessageOption::TF_ASYNC
    };
    int error = Remote()->SendRequest(
        BluetoothHfpAgObserverInterfaceCode::BT_HFP_AG_OBSERVER_HFP_STACK_CHANGED, data, reply, option);
    if (error != NO_ERROR) {
        HILOGE("BluetoothHfpAgObserverProxy::OnHfpStackChanged done fail, error: %{public}d", error);
        return;
    } 
}

void BluetoothHfpAgObserverProxy::OnVirtualDeviceChanged(int32_t action, std::string address)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothHfpAgObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHfpAgObserverProxy::OnVirtualDeviceChanged WriteInterfaceToken error");
        return;
    }
    if (!data.WriteInt32(action)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnVirtualDeviceChanged WriteInt32 error");
        return;
    }
    if (!data.WriteString(address)) {
        HILOGE("BluetoothHfpAgObserverProxy::OnVirtualDeviceChanged WriteString error");
        return;
    }
    MessageParcel reply;
    MessageOption option {
        MessageOption::TF_ASYNC
    };
    int error = Remote()->SendRequest(
        BluetoothHfpAgObserverInterfaceCode::BT_HFP_AG_OBSERVER_VIRTUALDEVICE_CHANGED, data, reply, option);
    if (error != NO_ERROR) {
        HILOGE("BluetoothHfpAgObserverProxy::OnVirtualDeviceChanged done fail, error: %{public}d", error);
        return;
    }
}
}  // namespace Bluetooth
}  // namespace OHOS
