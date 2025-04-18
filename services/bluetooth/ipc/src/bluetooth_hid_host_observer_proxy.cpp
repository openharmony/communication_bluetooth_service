/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
#include "bluetooth_hid_host_observer_proxy.h"
#include "bluetooth_log.h"

namespace OHOS {
namespace Bluetooth {
ErrCode BluetoothHidHostObserverProxy::OnConnectionStateChanged(const BluetoothRawAddress &device, int state, int cause)
{
    MessageParcel data;
    MessageParcel reply;
    MessageOption option(MessageOption::TF_SYNC);
    if (!data.WriteInterfaceToken(BluetoothHidHostObserverProxy::GetDescriptor())) {
        HILOGE("BluetoothHidHostObserverProxy::OnConnectionStateChanged WriteInterfaceToken error");
        return IPC_PROXY_TRANSACTION_ERR;
    }
    data.WriteParcelable(&device);
    data.WriteInt32(state);
    data.WriteInt32(cause);
    int32_t st = Remote()->SendRequest(static_cast<uint32_t>(
        BluetoothHidHostObserverInterfaceCode::COMMAND_ON_CONNECTION_STATE_CHANGED), data, reply, option);
    if (st != ERR_NONE) {
        HILOGW("OnConnectionStateChanged failed, error code is %{public}d", st);
        return st;
    }

    ErrCode ec = reply.ReadInt32();
    if (FAILED(ec)) {
        return ec;
    }

    return ERR_OK;
}
} // Bluetooth
} // OHOS
