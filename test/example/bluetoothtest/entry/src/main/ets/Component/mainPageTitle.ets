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

import promptAction from '@ohos.promptAction'
import Logger from '../MainAbility/model/Logger'

const TAG = '[Screenshot]'

/**
 * Main-Page Title Component of bluetooth test
 */
@Component
export struct MainPageTitle {
  @State colOpacity: number = 1
  @State count: number = 0
  @State myborderWidth: number = 0
  @State myborderRadius: number = 0
  @State offsetX: number = 0
  @State offsetY: number = 0
  @State myscale: number = 1
  @State angle: number = 0
  getScreen = (_isFullScreen: boolean) => {
    Logger.info(TAG , 'API 23 工程未接入 @ohos.screenshot 截屏保存，请使用更高 API 或系统截屏')
    promptAction.showToast({ message : 'API 23：截屏保存未启用' })
  }

  @Builder
  CustomBtn(text: Resource , isFullScreen: boolean) {
    Button() {
      Image($r('app.media.screenShot'))
        .height('50vp')
        .width('50vp')
    }
    .key(isFullScreen + 'FullScreenShot')
    .type(ButtonType.Normal)
    .backgroundColor($r("app.color.blue"))
    .height('100%')
    .width('100%')
    //    .size({ width: 55, height: 55 })
    .margin({ left : '6vp' , right : '6vp' , top : '3vp' })
    .onClick(() => {
      console.log('[Screenshot] onClick,screenshot')
      this.getScreen(isFullScreen)
    })
  }

  build() {
    Flex({ alignItems : ItemAlign.Start }) {
      Text('蓝牙调试助手')
        .fontSize('26vp')
        .margin({ left : '15vp' })
        .padding({ top : '28vp' })

      Scroll() {
        Column() {
          this.CustomBtn($r('app.string.btn_fullscreen') , true)
        }
        .width('100%')
        .height('100%')
        .borderWidth(this.myborderWidth)
        .borderRadius(this.myborderRadius)
        .borderColor(Color.Green)
        .gesture(
          GestureGroup(GestureMode.Parallel ,
            TapGesture({ count : 2 , fingers : 1 })
              .onAction(() => {
                this.myborderWidth += 1
              }) ,
            LongPressGesture({ fingers : 1 , repeat : true , duration : 1000 })
              .onAction((event: GestureEvent) => {
                this.colOpacity -= 0.1
                if ( event.repeat ) {
                  this.count ++
                }
              })
              .onActionEnd(() => {
                this.colOpacity = 1;
                this.count = 0;
              }) ,
            PanGesture({ fingers : 1 , direction : PanDirection.All , distance : 5.0 })
              .onActionStart(() => {
                console.log('Pan start')
              })
              .onActionUpdate((event: GestureEvent) => {
                this.offsetY = event.offsetY;
                this.offsetX = event.offsetX;
              })
              .onActionEnd(() => {
                console.log('Pan end')
              }) ,
            PinchGesture({ fingers : 2 , distance : 4 })
              .onActionStart(() => {
                console.log('PinchGesture start')
              })
              .onActionUpdate((event: GestureEvent) => {
                this.myscale = event.scale
                this.myborderRadius = 10
              })
              .onActionEnd(() => {
                console.log('PinchGesture end')
                this.getScreen(true);
              }) ,
            RotationGesture({ fingers : 2 , angle : 2 })
              .onActionStart(() => {
                console.log('RotationGesture start')
              })
              .onActionUpdate((event: GestureEvent) => {
                this.angle = event.angle
              })
              .onActionEnd(() => {
                console.log('RotationGesture end')
              })
          )
            .onCancel(() => {
              console.log('Parallel gesture canceled')
            })
        )
      }
      .layoutWeight(1)
    }
    .height('80vp')
    .backgroundColor($r("app.color.blue"))
    .padding({ left : '20vp' })
  }
}