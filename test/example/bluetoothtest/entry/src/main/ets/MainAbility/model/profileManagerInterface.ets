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

import router from '@ohos.router';
import promptAction from '@ohos.promptAction'

const PAGE_URI_GET_A2DP_SOURCE_PROFILE_MANAGER = 'pages/subProfileTestManager/a2dpSourceProfileTestManager';
const PAGE_URI_GET_HANDS_FREE_AUDIO_GATEWAY_PROFILE_MANAGER = 'pages/subProfileTestManager/handsFreeAudioGatewayProfileTestManager';
const PAGE_URI_GET_HID_HOST_PROFILE_MANAGER = 'pages/subProfileTestManager/hidHostProfileTestManager';
const PAGE_URI_GET_Pan_NETWORK_PROFILE_MANAGER = 'pages/subProfileTestManager/panNetworkProfileTestManager';


export function testA2dpSourceProfileManager(): string {
  router.pushUrl({ url : PAGE_URI_GET_A2DP_SOURCE_PROFILE_MANAGER })
  let message = "跳转成功"
  promptAction.showToast({ message : message })
  return message
}

export function testHandsFreeAudioGatewayProfileManager(): string {
  router.pushUrl({ url : PAGE_URI_GET_HANDS_FREE_AUDIO_GATEWAY_PROFILE_MANAGER })
  let message = "跳转成功"
  promptAction.showToast({ message : message })
  return message
}

export function testHidHostProfileManager(): string {
  router.pushUrl({ url : PAGE_URI_GET_HID_HOST_PROFILE_MANAGER })
  let message = "跳转成功"
  promptAction.showToast({ message : message })
  return message
}

export function testPanNetworkProfileManager(): string {
  router.pushUrl({ url : PAGE_URI_GET_Pan_NETWORK_PROFILE_MANAGER })
  let message = "跳转成功"
  promptAction.showToast({ message : message })
  return message
}
