/**
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

import btmProfileModel from './btmProfileModel'
import promptAction from '@ohos.promptAction';
import btm from '@ohos.bluetoothManager'

/**
 * Profile A2DP Manager Test Page Of Bluetooth test
 */

export function testProfileConnectManager() {
  try {
    let message = "ProfileConnect test"
    let textMessage = ""
    let btConnectionState = AppStorage.get("btConnectionState") !
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: number = AppStorage.get("profileType") !
    if ( btConnectionState == 1 || btConnectionState == 2 ) {
      promptAction.showToast({ message : btConnectionState == 1 ? "该设备正在连接中" : "该设备已连接" });
      return message;
    }
    const p = btmProfileModel.getProfile(profileType);
    if ( !p ) {
      promptAction.showToast({ message : "profile 未初始化" });
      return message;
    }
    if ( profileType === btmProfileModel.PROFILE_HID_HOST || profileType === btmProfileModel.PROFILE_PAN_NETWORK ) {
      promptAction.showToast({ message : "HID/PAN 在 Manager API 中无 connect，请在系统蓝牙中连接" });
      return message;
    }
    if ( profileType === btmProfileModel.PROFILE_A2DP_SOURCE ) {
      (p as btm.A2dpSourceProfile).connect(deviceId);
    } else if ( profileType === btmProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY ) {
      (p as btm.HandsFreeAudioGatewayProfile).connect(deviceId);
    }
    btConnectionState = 1;
    textMessage = "connect ret："
    message = "connect ret：";
    AppStorage.setOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileConnectManager. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileConnectManager. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileDisConnectManager() {
  try {
    let message = "profileDisConnect test"
    let textMessage = ""
    let btConnectionState = AppStorage.get("btConnectionState") !
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: number = AppStorage.get("profileType") !
    if ( btConnectionState == 0 || btConnectionState == 3 ) {
      promptAction.showToast({ message : btConnectionState == 0 ? "该设备已断开" : "该设备正在断开连接" });
      return message;
    }
    const p = btmProfileModel.getProfile(profileType);
    if ( !p ) {
      promptAction.showToast({ message : "profile 未初始化" });
      return message;
    }
    if ( profileType === btmProfileModel.PROFILE_HID_HOST || profileType === btmProfileModel.PROFILE_PAN_NETWORK ) {
      promptAction.showToast({ message : "HID/PAN 在 Manager API 中无 disconnect，请在系统蓝牙中断开" });
      return message;
    }
    if ( profileType === btmProfileModel.PROFILE_A2DP_SOURCE ) {
      (p as btm.A2dpSourceProfile).disconnect(deviceId);
    } else if ( profileType === btmProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY ) {
      (p as btm.HandsFreeAudioGatewayProfile).disconnect(deviceId);
    }
    btConnectionState = 3;
    textMessage = "disconnect ret：";
    AppStorage.setOrCreate("textMessage" , textMessage)
    message = "disconnect ret：";
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileDisConnectManager. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileDisConnectManager. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileGetPlayingStateManager() {
  try {
    let message = "profileGetPlayingState test"
    let textMessage = ""
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: string = AppStorage.get("profileType") !
    promptAction.showToast({ message : profileType })
    console.log("profileType:" + profileType)
    let profile: btm.A2dpSourceProfile
    profile = btmProfileModel.getProfile(parseInt(profileType)) as btm.A2dpSourceProfile
    let ret = - 1
    if ( profile ) {
      ret = profile.getPlayingState(deviceId);
    }
    textMessage = "getPlayingState ret: " + ret;
    message = "getPlayingState ret: " + ret;
    AppStorage.setOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileGetPlayingStateManager. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileGetPlayingStateManager. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileGetConnectionDevicesManager() {
  try {
    let message = "profileGetConnectionDevices test"
    let textMessage = ""
    let profileType: number = AppStorage.get("profileType") !
    let prof = btmProfileModel.getProfile(profileType);
    if ( !prof ) {
      promptAction.showToast({ message : "profile 未初始化" });
      return message;
    }
    let msgArray: Array<string> = (prof as btm.BaseProfile).getConnectionDevices();
    textMessage = "getConnectionDevices ret: " + JSON.stringify(msgArray);
    message = "getConnectionDevices ret: " + JSON.stringify(msgArray);
    AppStorage.setOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileGetConnectionDevicesManager. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileGetConnectionDevicesManager. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileGetDeviceStateManager() {
  try {
    let message = "ProfileGetDeviceState test"
    let textMessage = ""
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: number = AppStorage.get("profileType") !
    let prof = btmProfileModel.getProfile(profileType);
    if ( !prof ) {
      promptAction.showToast({ message : "profile 未初始化" });
      return message;
    }
    let st = (prof as btm.BaseProfile).getDeviceState(deviceId);
    textMessage = "getDeviceState ret: " + st;
    message = "getDeviceState ret: " + st;
    AppStorage.setOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileGetDeviceStateManager. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileGetDeviceStateManager. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}


