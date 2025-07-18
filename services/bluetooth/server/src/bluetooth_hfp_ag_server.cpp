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
#include <list>

#include "bluetooth_def.h"
#include "bluetooth_errorcode.h"
#include "bluetooth_hfp_ag_server.h"
#include "bluetooth_hitrace.h"
#include "bluetooth_log.h"
#include "bluetooth_utils_server.h"
#include "hisysevent.h"
#include "interface_profile_hfp_ag.h"
#include "interface_profile_manager.h"
#include "interface_profile.h"
#include "interface_adapter_manager.h"
#include "remote_observer_list.h"
#include "permission_utils.h"


namespace OHOS {
namespace Bluetooth {
using namespace OHOS::bluetooth;

class HfpAgServerObserver : public HfpAgServiceObserver {
public:
    HfpAgServerObserver() = default;
    ~HfpAgServerObserver() override = default;

    void OnConnectionStateChanged(const RawAddress& device, int state) override
    {
        HILOGI("device:%{public}s, state:%{public}d", GET_ENCRYPT_ADDR(device), state);
        if (state == static_cast<int>(BTConnectState::CONNECTED) ||
            state == static_cast<int>(BTConnectState::DISCONNECTED)) {
            HiSysEventWrite(OHOS::HiviewDFX::HiSysEvent::Domain::BT_SERVICE, "HFP_CONNECTED_STATE",
                OHOS::HiviewDFX::HiSysEvent::EventType::STATISTIC, "STATE", state);
        }
        observers_->ForEach([device, state](IBluetoothHfpAgObserver* observer) {
            observer->OnConnectionStateChanged(device, state,
                static_cast<uint32_t>(ConnChangeCause::CONNECT_CHANGE_COMMON_CAUSE));
        });
    }

    void OnScoStateChanged(const RawAddress& device, int state, int reason) override
    {
        HILOGI("device:%{public}s, state:%{public}d, reason:%{public}d", GET_ENCRYPT_ADDR(device), state, reason);
        observers_->ForEach([device, state, reason](IBluetoothHfpAgObserver* observer) {
            observer->OnScoStateChanged(device, state, reason);
        });
    }

    void OnActiveDeviceChanged(const RawAddress& device) override
    {
        HILOGI("device:%{public}s", GET_ENCRYPT_ADDR(device));
        observers_->ForEach([device](IBluetoothHfpAgObserver* observer) {
            observer->OnActiveDeviceChanged(device);
        });
    }

    void OnHfEnhancedDriverSafetyChanged(const RawAddress& device, int indValue) override
    {
        HILOGI("device:%{public}s, indValue:%{public}d", GET_ENCRYPT_ADDR(device), indValue);
        observers_->ForEach([device, indValue](IBluetoothHfpAgObserver* observer) {
            observer->OnHfEnhancedDriverSafetyChanged(device, indValue);
        });
    }

    void OnHfpStackChanged(const RawAddress &device, int action) override
    {
        HILOGI("addr: %{public}s, action: %{public}d", GET_ENCRYPT_ADDR(device), action);
    }

    void SetObserver(RemoteObserverList<IBluetoothHfpAgObserver>* observers)
    {
        observers_ = observers;
    }

private:
    RemoteObserverList<IBluetoothHfpAgObserver>* observers_;
    BLUETOOTH_DISALLOW_COPY_AND_ASSIGN(HfpAgServerObserver);
};

struct BluetoothHfpAgServer::impl {
    RemoteObserverList<IBluetoothHfpAgObserver> observers_;
    std::unique_ptr<HfpAgServerObserver> observerImp_{std::make_unique<HfpAgServerObserver>()};
    IProfileHfpAg* HfpAgService_ = nullptr;

    class HfpAgSystemObserver : public ISystemStateObserver {
    public:
        explicit HfpAgSystemObserver(BluetoothHfpAgServer::impl* pimpl) : pimpl_(pimpl) {};
        void OnSystemStateChange(const BTSystemState state) override
        {
            HILOGD("state:%{public}d", state);
            IProfileManager* serviceMgr = IProfileManager::GetInstance();
            switch (state) {
            case BTSystemState::ON:
                if (serviceMgr != nullptr) {
                    pimpl_->HfpAgService_ = (IProfileHfpAg*)serviceMgr->GetProfileService(PROFILE_NAME_HFP_AG);
                    if (pimpl_->HfpAgService_ != nullptr) {
                        pimpl_->HfpAgService_->RegisterObserver(*pimpl_->observerImp_);
                    }
                }
                break;
            case BTSystemState::OFF:
                if (serviceMgr != nullptr) {
                    pimpl_->HfpAgService_ = (IProfileHfpAg*)serviceMgr->GetProfileService(PROFILE_NAME_HFP_AG);
                    if (pimpl_->HfpAgService_ != nullptr) {
                        pimpl_->HfpAgService_->DeregisterObserver(*pimpl_->observerImp_);
                    }
                }
                pimpl_->HfpAgService_ = nullptr;
                break;
            default:
                break;
            }
        };

    private:
        BluetoothHfpAgServer::impl* pimpl_;
    };

    std::unique_ptr<HfpAgSystemObserver> HfpAgSystemObserver_;
};


BluetoothHfpAgServer::BluetoothHfpAgServer()
{
    HILOGD("Enter!");
    pimpl = std::make_unique<impl>();
    pimpl->observerImp_->SetObserver(&(pimpl->observers_));
    pimpl->HfpAgSystemObserver_ = std::make_unique<impl::HfpAgSystemObserver>(pimpl.get());
    IAdapterManager::GetInstance()->RegisterSystemStateObserver(*(pimpl->HfpAgSystemObserver_));

    IProfileManager* serviceMgr = IProfileManager::GetInstance();
    if (serviceMgr != nullptr) {
        pimpl->HfpAgService_ = (IProfileHfpAg*)serviceMgr->GetProfileService(PROFILE_NAME_HFP_AG);
        if (pimpl->HfpAgService_ != nullptr) {
            pimpl->HfpAgService_->RegisterObserver(*pimpl->observerImp_);
        }
    }
}

BluetoothHfpAgServer::~BluetoothHfpAgServer()
{
    HILOGD("Enter!");
    IAdapterManager::GetInstance()->DeregisterSystemStateObserver(*(pimpl->HfpAgSystemObserver_));
    if (pimpl->HfpAgService_ != nullptr) {
        pimpl->HfpAgService_->DeregisterObserver(*pimpl->observerImp_);
    }
}

int32_t BluetoothHfpAgServer::GetConnectDevices(std::vector<BluetoothRawAddress> &devices)
{
    HILOGI("Enter!");
    if (PermissionUtils::VerifyUseBluetoothPermission() == PERMISSION_DENIED) {
        HILOGE("GetConnectDevices() false, check permission failed");
        return BT_ERR_PERMISSION_FAILED;
    }
    std::list<RawAddress> deviceList;
    if (pimpl->HfpAgService_  != nullptr) {
        deviceList = pimpl->HfpAgService_->GetConnectDevices();
    } else {
        return BT_ERR_INTERNAL_ERROR;
    }
    for (RawAddress device : deviceList) {
        devices.push_back(BluetoothRawAddress(device));
    }
    return NO_ERROR;
}

int BluetoothHfpAgServer::GetDevicesByStates(const std::vector<int> &states, std::vector<BluetoothRawAddress> &devices)
{
    std::vector<int> tmpStates;
    for (int32_t state : states) {
        HILOGI("state = %{public}d", state);
        tmpStates.push_back((int)state);
    }
    std::vector<RawAddress> rawDevices;
    if (pimpl->HfpAgService_ != nullptr) {
        rawDevices = pimpl->HfpAgService_->GetDevicesByStates(tmpStates);
    } else {
        return BT_ERR_INTERNAL_ERROR;
    }
    for (RawAddress device : rawDevices) {
        devices.push_back(BluetoothRawAddress(device));
    }
    return NO_ERROR;
}

int32_t BluetoothHfpAgServer::GetDeviceState(const BluetoothRawAddress &device, int32_t &state)
{
    if (PermissionUtils::VerifyUseBluetoothPermission() == PERMISSION_DENIED) {
        HILOGE("GetDeviceState() false, check permission failed");
        return BT_ERR_PERMISSION_FAILED;
    }
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_) {
        state = pimpl->HfpAgService_->GetDeviceState(addr);
        HILOGI("state:%{public}d", state);
    } else {
        return BT_ERR_INTERNAL_ERROR;
    }
    return NO_ERROR;
}

int32_t BluetoothHfpAgServer::Connect(const BluetoothRawAddress &device)
{
    HILOGI("target device:%{public}s()", GET_ENCRYPT_ADDR(device));
    if (!PermissionUtils::CheckSystemHapApp()) {
        HILOGE("check system api failed.");
        return BT_ERR_SYSTEM_PERMISSION_FAILED;
    }
    if (PermissionUtils::VerifyDiscoverBluetoothPermission() == PERMISSION_DENIED) {
        HILOGE("Connect error, check permission failed");
        return BT_ERR_PERMISSION_FAILED;
    }
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ != nullptr) {
        OHOS::Bluetooth::BluetoothHiTrace::BluetoothStartAsyncTrace("HFP_AG_CONNECT", 1);
        int32_t result = pimpl->HfpAgService_->Connect(addr);
        OHOS::Bluetooth::BluetoothHiTrace::BluetoothFinishAsyncTrace("HFP_AG_CONNECT", 1);
        return result;
    }
    return BT_ERR_INTERNAL_ERROR;
}

int32_t BluetoothHfpAgServer::Disconnect(const BluetoothRawAddress &device)
{
    HILOGI("target device:%{public}s()", GET_ENCRYPT_ADDR(device));
    if (!PermissionUtils::CheckSystemHapApp()) {
        HILOGE("check system api failed.");
        return BT_ERR_SYSTEM_PERMISSION_FAILED;
    }
    if (PermissionUtils::VerifyDiscoverBluetoothPermission() == PERMISSION_DENIED) {
        HILOGE("Disconnect error, check permission failed");
        return BT_ERR_PERMISSION_FAILED;
    }
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ != nullptr) {
        return pimpl->HfpAgService_->Disconnect(addr);
    }
    return BT_ERR_INTERNAL_ERROR;
}

int BluetoothHfpAgServer::GetScoState(const BluetoothRawAddress &device)
{
    HILOGI("Enter!");
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ != nullptr) {
        return pimpl->HfpAgService_->GetScoState(addr);
    }
    return BT_FAILURE;
}

bool BluetoothHfpAgServer::ConnectSco()
{
    HILOGI("Enter!");
    if (PermissionUtils::VerifyDiscoverBluetoothPermission() == PERMISSION_DENIED) {
        HILOGE("error, check permission failed");
        return false;
    }
    if (pimpl->HfpAgService_ != nullptr) {
        return pimpl->HfpAgService_->ConnectSco();
    }
    return false;
}

bool BluetoothHfpAgServer::DisconnectSco()
{
    HILOGI("Enter!");
    if (pimpl->HfpAgService_ != nullptr) {
        return pimpl->HfpAgService_->DisconnectSco();
    }
    return false;
}

void BluetoothHfpAgServer::PhoneStateChanged(BluetoothPhoneState &phoneState)
{
    HILOGI("numActive:%{public}d, numHeld:%{public}d, callState:%{public}d, type:%{public}d",
        phoneState.GetActiveNum(), phoneState.GetHeldNum(), phoneState.GetCallState(), phoneState.GetCallType());
    if (pimpl->HfpAgService_ != nullptr) {
        pimpl->HfpAgService_->PhoneStateChanged(phoneState);
    }
}

void BluetoothHfpAgServer::ClccResponse(int index, int direction, int status, int mode, bool mpty,
    const std::string &number, int type)
{
    HILOGI("index:%{public}d, direction:%{public}d, status:%{public}d, mode:%{public}d, mpty:%{public}d,"
        "number:%{public}s, type:%{public}d", index, direction, status, mode, mpty, number.c_str(), type);
    if (pimpl->HfpAgService_ != nullptr) {
        pimpl->HfpAgService_->ClccResponse(index, direction, status, mode, mpty, number, type);
    }
}

bool BluetoothHfpAgServer::OpenVoiceRecognition(const BluetoothRawAddress &device)
{
    HILOGI("target device:%{public}s()", GET_ENCRYPT_ADDR(device));
    if (PermissionUtils::VerifyDiscoverBluetoothPermission() == PERMISSION_DENIED) {
        HILOGE("error, check permission failed");
        return false;
    }
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ != nullptr) {
        return pimpl->HfpAgService_->OpenVoiceRecognition(addr);
    }
    return false;
}

bool BluetoothHfpAgServer::CloseVoiceRecognition(const BluetoothRawAddress &device)
{
    HILOGI("target device:%{public}s()", GET_ENCRYPT_ADDR(device));
     RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ != nullptr) {
        return pimpl->HfpAgService_->CloseVoiceRecognition(addr);
    }
    return false;
}

bool BluetoothHfpAgServer::SetActiveDevice(const BluetoothRawAddress &device)
{
    HILOGI("target device:%{public}s()", GET_ENCRYPT_ADDR(device));
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ ) {
        return pimpl->HfpAgService_->SetActiveDevice(addr);
    }
    return false;
}

bool BluetoothHfpAgServer::IntoMock(const BluetoothRawAddress &device, int state) {
    HILOGI("[%{public}s]: %{public}s(): Enter!", __FILE__, __FUNCTION__);
    if (pimpl->HfpAgService_ ) {
        return pimpl->HfpAgService_ ->IntoMock(state);
    }
    return false;
}

bool BluetoothHfpAgServer::SendNoCarrier(const BluetoothRawAddress &device) {
    HILOGD("[%{public}s]: %{public}s(): Enter!", __FILE__, __FUNCTION__);
    RawAddress addr(device.GetAddress());
    if (pimpl->HfpAgService_ ) {
        return pimpl->HfpAgService_ ->SendNoCarrier(addr);
    }
    return false;
}

std::string BluetoothHfpAgServer::GetActiveDevice()
{
    std::string dev = "";
    if (pimpl->HfpAgService_ != nullptr) {
        dev = pimpl->HfpAgService_->GetActiveDevice();
    }
    HILOGI("active dev:%{public}s()", GetEncryptAddr(dev).c_str());
    return dev;
}

int BluetoothHfpAgServer::IsInbandRingingEnabled(bool &isEnabled)
{
    return true;
}

void BluetoothHfpAgServer::CallDetailsChanged(int callId, int callState)
{
    HILOGI("enter");
}

int32_t BluetoothHfpAgServer::IsHfpFeatureSupported(const BluetoothRawAddress &device, bool &isSupported, int type)
{
    return BT_ERR_API_NOT_SUPPORT;
}

void BluetoothHfpAgServer::RegisterObserver(const sptr<IBluetoothHfpAgObserver> &observer)
{
    HILOGD("Enter!");
    if (observer == nullptr) {
        HILOGE("observer is null");
        return ;
    }
    if (pimpl == nullptr) {
        HILOGE("pimpl is null");
        return ;
    }
    auto func = std::bind(&BluetoothHfpAgServer::DeregisterObserver, this, std::placeholders::_1);
    pimpl->observers_.Register(observer, func);
}

void BluetoothHfpAgServer::DeregisterObserver(const sptr<IBluetoothHfpAgObserver> &observer)
{
    HILOGD("Enter!");
    if (observer == nullptr) {
        HILOGE("observer is null");
        return ;
    }
    if (pimpl == nullptr) {
        HILOGE("pimpl is null");
        return ;
    }
    pimpl->observers_.Deregister(observer);
}

int BluetoothHfpAgServer::SetConnectStrategy(const BluetoothRawAddress &device, int strategy)
{
    HILOGI("target device:%{public}s()", GET_ENCRYPT_ADDR(device));
    if (!PermissionUtils::CheckSystemHapApp()) {
        HILOGE("check system api failed.");
        return BT_ERR_SYSTEM_PERMISSION_FAILED;
    }
    return NO_ERROR;
}

int BluetoothHfpAgServer::GetConnectStrategy(const BluetoothRawAddress &device, int &strategy)
{
    return NO_ERROR;
}

int BluetoothHfpAgServer::ConnectSco(uint8_t callType)
{
    return NO_ERROR;
}

int BluetoothHfpAgServer::DisconnectSco(uint8_t callType)
{
    return NO_ERROR;
}

void BluetoothHfpAgServer::EnableBtCallLog(bool state)
{
    HILOGI("enter");
}

void BluetoothHfpAgServer::GetVirtualDeviceList(std::vector<std::string> &devices)
{
    return;
}

void BluetoothHfpAgServer::UpdateVirtualDevice(int32_t action, const std::string &address)
{
    return;
}

int BluetoothHfpAgServer::GetCurrentCallType(int &callType)
{
    return NO_ERROR;
}
}  // namespace Bluetooth
}  // namespace OHOS
