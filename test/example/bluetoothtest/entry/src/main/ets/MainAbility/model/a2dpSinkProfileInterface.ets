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

import bluetooth from '@ohos.bluetooth';
import btProfileModel from './btProfileModel'
import promptAction from '@ohos.promptAction';
import hid from '@ohos.bluetooth.hid';
import pan from '@ohos.bluetooth.pan';


/**
 * Profile A2DP Test Page Of Bluetooth test
 */

function profileConnectByType(profileType: number, deviceId: string): boolean {
  if (profileType === btProfileModel.PROFILE_A2DP_SOURCE) {
    return (btProfileModel.getProfile(profileType) as bluetooth.A2dpSourceProfile).connect(deviceId);
  }
  if (profileType === btProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY) {
    return (btProfileModel.getProfile(profileType) as bluetooth.HandsFreeAudioGatewayProfile).connect(deviceId);
  }
  if (profileType === btProfileModel.PROFILE_HID_HOST || profileType === btProfileModel.PROFILE_PAN_NETWORK) {
    promptAction.showToast({ message: 'HID/PAN Profile 类型声明无 connect，请在系统蓝牙中连接' });
    return false;
  }
  promptAction.showToast({ message: '当前 profile 不支持 connect 或 OPP 未在 API 23 启用' });
  return false;
}

function profileDisconnectByType(profileType: number, deviceId: string): boolean {
  if (profileType === btProfileModel.PROFILE_A2DP_SOURCE) {
    return (btProfileModel.getProfile(profileType) as bluetooth.A2dpSourceProfile).disconnect(deviceId);
  }
  if (profileType === btProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY) {
    return (btProfileModel.getProfile(profileType) as bluetooth.HandsFreeAudioGatewayProfile).disconnect(deviceId);
  }
  if (profileType === btProfileModel.PROFILE_HID_HOST || profileType === btProfileModel.PROFILE_PAN_NETWORK) {
    promptAction.showToast({ message: 'HID/PAN Profile 类型声明无 disconnect，请在系统蓝牙中断开' });
    return false;
  }
  promptAction.showToast({ message: '当前 profile 不支持 disconnect 或 OPP 未在 API 23 启用' });
  return false;
}

export function testProfileConnect() {
  try {
    let message = "ProfileConnect test"
    let textMessage = ""
    let btConnectionState: number = AppStorage.get("btConnectionState") !
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: number = AppStorage.get("profileType") !
    if ( btConnectionState == 1 || btConnectionState == 2 ) {
      promptAction.showToast({ message : btConnectionState == 1 ? "该设备正在连接中" : "该设备已连接" });
      return message;
    }
    let ret: boolean = profileConnectByType(profileType, deviceId);
    if ( ret ) {
      btConnectionState = 1;
    }
    textMessage = "connect ret：" + ret;
    message = "connect ret：" + ret;
    AppStorage.SetOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileConnect. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileConnect. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileDisConnect() {
  try {
    let message = "profileDisConnect test"
    let textMessage = ""
    let btConnectionState: number = AppStorage.get("btConnectionState") !
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: number = AppStorage.get("profileType") !
    if ( btConnectionState == 0 || btConnectionState == 3 ) {
      promptAction.showToast({ message : btConnectionState == 0 ? "该设备已断开" : "该设备正在断开连接" });
      return message;
    }
    let ret: boolean = profileDisconnectByType(profileType, deviceId);
    if ( ret ) {
      btConnectionState = 3;
    }
    textMessage = "disconnect ret：" + ret;
    AppStorage.SetOrCreate("textMessage" , textMessage)
    message = "disconnect ret：" + ret;
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileDisConnect. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileDisConnect. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileGetPlayingState() {
  try {
    let message = "profileGetPlayingState test"
    let textMessage = ""
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: string = AppStorage.get("profileType") !
    promptAction.showToast({ message : profileType.toString() })
    console.log("profileType:" + profileType)
    let profile: bluetooth.A2dpSourceProfile
    profile = btProfileModel.getProfile(parseInt(profileType)) as bluetooth.A2dpSourceProfile
    let ret = - 1
    if ( profile ) {
      ret = profile.getPlayingState(deviceId);
    }
    textMessage = "getPlayingState ret: " + ret;
    message = "getPlayingState ret: " + ret;
    AppStorage.SetOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileGetPlayingState. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileGetPlayingState. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

function getConnectionDevicesByType(profileType: number): Array<string> {
  const p = btProfileModel.getProfile(profileType);
  if ( !p ) {
    return [];
  }
  if ( profileType === btProfileModel.PROFILE_A2DP_SOURCE ) {
    return (p as bluetooth.A2dpSourceProfile).getConnectionDevices();
  }
  if ( profileType === btProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY ) {
    return (p as bluetooth.HandsFreeAudioGatewayProfile).getConnectionDevices();
  }
  if ( profileType === btProfileModel.PROFILE_HID_HOST ) {
    return (p as hid.HidHostProfile).getConnectedDevices();
  }
  if ( profileType === btProfileModel.PROFILE_PAN_NETWORK ) {
    return (p as pan.PanProfile).getConnectedDevices();
  }
  return [];
}

function getDeviceStateByType(profileType: number, deviceId: string): number {
  const p = btProfileModel.getProfile(profileType);
  if ( !p ) {
    return - 1;
  }
  if ( profileType === btProfileModel.PROFILE_A2DP_SOURCE ) {
    return (p as bluetooth.A2dpSourceProfile).getDeviceState(deviceId);
  }
  if ( profileType === btProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY ) {
    return (p as bluetooth.HandsFreeAudioGatewayProfile).getDeviceState(deviceId);
  }
  if ( profileType === btProfileModel.PROFILE_HID_HOST ) {
    return (p as hid.HidHostProfile).getConnectionState(deviceId) as number;
  }
  if ( profileType === btProfileModel.PROFILE_PAN_NETWORK ) {
    return (p as pan.PanProfile).getConnectionState(deviceId) as number;
  }
  return - 1;
}

export function testProfileGetConnectionDevices() {
  try {
    let message = "profileGetConnectionDevices test"
    let textMessage = ""
    let profileType: number = AppStorage.get("profileType") !
    let ret: Array<string> = getConnectionDevicesByType(profileType);
    textMessage = "getConnectionDevices ret: " + JSON.stringify(ret);
    message = "getConnectionDevices ret: " + JSON.stringify(ret);
    AppStorage.SetOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileGetConnectionDevices. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileGetConnectionDevices. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

export function testProfileGetDeviceState() {
  try {
    let message = "ProfileGetDeviceState test"
    let textMessage = ""
    let deviceId: string = AppStorage.get("deviceId") !
    let profileType: number = AppStorage.get("profileType") !
    let ret: number = getDeviceStateByType(profileType, deviceId);
    textMessage = "getDeviceState ret: " + ret;
    message = "getDeviceState ret: " + ret;
    AppStorage.SetOrCreate("textMessage" , textMessage)
    promptAction.showToast({ message : message });
    return message
  } catch( e ) {
    console.log(`Failed to testProfileGetDeviceState. message: ${ e.message }, code: ${ e.code }`)
    let message = `Failed to testProfileGetDeviceState. message: ${ e.message }, code: ${ e.code }`
    promptAction.showToast({ message : message })
    return message
  }
}

let transferStateChange = false

export function testOnTransferStateChange() {
  promptAction.showToast({ message: 'API 23 不包含 OPP 传输事件 API，请使用 API 16+ 完整工程' });
  return 'OPP N/A on API 23';
}

let receiveIncomingFile = false

export function testOnReceiveIncomingFile() {
  promptAction.showToast({ message: 'API 23 不包含 OPP 接收事件 API，请使用 API 16+ 完整工程' });
  return 'OPP N/A on API 23';
}

export function testSendFile(serverMac: string , fileName: string , fileType: string) {
  promptAction.showToast({ message: 'API 23 不包含 OPP sendFile，请使用 API 16+ 完整工程' });
  return 'OPP N/A on API 23';
}

export function testSetIncomingFileConfirmation() {
  promptAction.showToast({ message: 'API 23 不包含 OPP setIncomingFileConfirmation' });
  return 'OPP N/A on API 23';
}

export function testGetCurrentTransferInformation() {
  promptAction.showToast({ message: 'API 23 不包含 getCurrentTransferInformation' });
  return 'OPP N/A on API 23';
}

export function testCancelTransfer() {
  promptAction.showToast({ message: 'API 23 不包含 cancelTransfer' });
  return 'OPP N/A on API 23';
}
