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

#include "bluetooth_ble_advertise_callback_proxy.h"
#include "bluetooth_log.h"

namespace OHOS {
namespace Bluetooth {
BluetoothBleAdvertiseCallbackProxy::BluetoothBleAdvertiseCallbackProxy(const sptr<IRemoteObject> &impl)
    : IRemoteProxy<IBluetoothBleAdvertiseCallback>(impl)
{}

BluetoothBleAdvertiseCallbackProxy::~BluetoothBleAdvertiseCallbackProxy()
{}

void BluetoothBleAdvertiseCallbackProxy::OnStartResultEvent(int32_t result, int32_t advHandle, int32_t opcode)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothBleAdvertiseCallbackProxy::GetDescriptor())) {
        HILOGE("[OnStartResultEvent] fail: write interface token failed.");
        return;
    }

    if (!data.WriteInt32(result)) {
        HILOGE("[OnStartResultEvent] fail: write result failed");
        return;
    }

    if (!data.WriteInt32(advHandle)) {
        HILOGE("[OnStartResultEvent] fail: write advHandle failed");
        return;
    }

    if (!data.WriteInt32(opcode)) {
        HILOGE("[OnStartResultEvent] fail: write opcode failed");
        return;
    }

    MessageParcel reply;
    MessageOption option = {MessageOption::TF_ASYNC};
    int error = InnerTransact(
        BluetoothBleAdvertiseCallbackInterfaceCode::BT_BLE_ADVERTISE_CALLBACK_START_RESULT_EVENT, option, data, reply);
    if (error != NO_ERROR) {
        HILOGE("failed, error: %{public}d", error);
        return;
    }
}

void BluetoothBleAdvertiseCallbackProxy::OnEnableResultEvent(int32_t result, int32_t advHandle)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothBleAdvertiseCallbackProxy::GetDescriptor())) {
        HILOGE("[OnEnableResultEvent] fail: write interface token failed.");
        return;
    }

    if (!data.WriteInt32(result)) {
        HILOGE("[OnEnableResultEvent] fail: write result failed");
        return;
    }

    if (!data.WriteInt32(advHandle)) {
        HILOGE("[OnEnableResultEvent] fail: write advHandle failed");
        return;
    }

    MessageParcel reply;
    MessageOption option = {MessageOption::TF_ASYNC};
    int error = InnerTransact(
        BluetoothBleAdvertiseCallbackInterfaceCode::BT_BLE_ADVERTISE_CALLBACK_ENABLE_RESULT_EVENT,
        option, data, reply);
    if (error != NO_ERROR) {
        HILOGE("failed, error: %{public}d", error);
        return;
    }
}

void BluetoothBleAdvertiseCallbackProxy::OnDisableResultEvent(int32_t result, int32_t advHandle)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothBleAdvertiseCallbackProxy::GetDescriptor())) {
        HILOGE("[OnDisableResultEvent] fail: write interface token failed.");
        return;
    }

    if (!data.WriteInt32(result)) {
        HILOGE("[OnDisableResultEvent] fail: write result failed");
        return;
    }

    if (!data.WriteInt32(advHandle)) {
        HILOGE("[OnDisableResultEvent] fail: write advHandle failed");
        return;
    }

    MessageParcel reply;
    MessageOption option = {MessageOption::TF_ASYNC};
    int error = InnerTransact(
        BluetoothBleAdvertiseCallbackInterfaceCode::BT_BLE_ADVERTISE_CALLBACK_DISABLE_RESULT_EVENT,
        option, data, reply);
    if (error != NO_ERROR) {
        HILOGE("failed, error: %{public}d", error);
        return;
    }
}

void BluetoothBleAdvertiseCallbackProxy::OnStopResultEvent(int32_t result, int32_t advHandle)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothBleAdvertiseCallbackProxy::GetDescriptor())) {
        HILOGE("[OnStopResultEvent] fail: write interface token failed.");
        return;
    }

    if (!data.WriteInt32(result)) {
        HILOGE("[OnStopResultEvent] fail: write result failed");
        return;
    }

    if (!data.WriteInt32(advHandle)) {
        HILOGE("[OnStopResultEvent] fail: write advHandle failed");
        return;
    }

    MessageParcel reply;
    MessageOption option = {MessageOption::TF_ASYNC};
    int error = InnerTransact(
        BluetoothBleAdvertiseCallbackInterfaceCode::BT_BLE_ADVERTISE_CALLBACK_STOP_RESULT_EVENT,
        option, data, reply);
    if (error != NO_ERROR) {
        HILOGE("failed, error: %{public}d", error);
        return;
    }
}

void BluetoothBleAdvertiseCallbackProxy::OnAutoStopAdvEvent(int32_t advHandle)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothBleAdvertiseCallbackProxy::GetDescriptor())) {
        HILOGE("[OnAutoStopAdvEvent] fail: write interface token failed.");
        return;
    }

    if (!data.WriteInt32(advHandle)) {
        HILOGE("[OnAutoStopAdvEvent] fail: write result failed");
        return;
    }

    MessageParcel reply;
    MessageOption option = {MessageOption::TF_ASYNC};
    int error = InnerTransact(
        BluetoothBleAdvertiseCallbackInterfaceCode::BT_BLE_ADVERTISE_CALLBACK_AUTO_STOP_EVENT, option, data, reply);
    if (error != NO_ERROR) {
        HILOGE("BleCentralManagerCallBackProxy::OnScanCallback done fail, error: %{public}d", error);
        return;
    }
}

void BluetoothBleAdvertiseCallbackProxy::OnSetAdvDataEvent(int32_t result, int32_t advHandle)
{
    return;
}

void BluetoothBleAdvertiseCallbackProxy::OnChangeAdvResultEvent(int32_t result, int32_t advHandle)
{
    MessageParcel data;
    if (!data.WriteInterfaceToken(BluetoothBleAdvertiseCallbackProxy::GetDescriptor())) {
        HILOGE("[OnChangeAdvResultEvent] fail: write interface token failed.");
        return;
    }

    if (!data.WriteInt32(result)) {
        HILOGE("[OnChangeAdvResultEvent] fail: write result failed");
        return;
    }

    if (!data.WriteInt32(advHandle)) {
        HILOGE("[OnChangeAdvResultEvent] fail: write advHandle failed");
        return;
    }

    MessageParcel reply;
    MessageOption option = {MessageOption::TF_ASYNC};
    int error = InnerTransact(
        BluetoothBleAdvertiseCallbackInterfaceCode::BT_BLE_ADVERTISE_CALLBACK_CHANGE_ADV_RESULT, option, data, reply);
    if (error != NO_ERROR) {
        HILOGE("BleCentralManagerCallBackProxy::OnChangeAdvResultEvent done fail, error: %{public}d", error);
        return;
    }
}

ErrCode BluetoothBleAdvertiseCallbackProxy::InnerTransact(
    uint32_t code, MessageOption &flags, MessageParcel &data, MessageParcel &reply)
{
    auto remote = Remote();
    if (remote == nullptr) {
        HILOGW("[InnerTransact] fail: get Remote fail code %{public}d", code);
        return OBJECT_NULL;
    }
    int err = remote->SendRequest(code, data, reply, flags);
    switch (err) {
        case NO_ERROR: {
            return NO_ERROR;
        }
        case DEAD_OBJECT: {
            HILOGW("[InnerTransact] fail: ipcErr=%{public}d code %{public}d", err, code);
            return DEAD_OBJECT;
        }
        default: {
            HILOGW("[InnerTransact] fail: ipcErr=%{public}d code %{public}d", err, code);
            return TRANSACTION_ERR;
        }
    }
}
}  // namespace Bluetooth
}  // namespace OHOS
