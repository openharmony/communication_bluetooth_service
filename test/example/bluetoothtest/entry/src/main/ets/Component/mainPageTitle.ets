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

import screenshot from '@ohos.screenshot'
import image from '@ohos.multimedia.image'
import MediaUtils from '../MainAbility/model/MediaUtils'
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
  getScreen = (isFullScreen: boolean) => {
    let screenshotOptions: screenshot.ScreenshotOptions = {
      screenRect : { left : 0 , top : 0 , width : 400 , height : 400 } ,
      imageSize : { width : 400 , height : 400 } ,
      rotation : 0 ,
      displayId : 0
    }
    if ( isFullScreen ) {
      screenshotOptions = {
        rotation : 0
      }
    }
    try {
      screenshot.save(screenshotOptions , (err , data: image.PixelMap) => {
        if ( err ) {
          Logger.info(TAG , `Failed to save the screenshot. Error:${ JSON.stringify(err) }`)
        }
        Logger.info(TAG , 'save callback')
        MediaUtils.savePicture(data , getContext(this))
      })
    } catch( err ) {
      Logger.error(`save failed, code is ${ err.code }, message is ${ err.message }`)
    }
  }

  @Builder
  CustomBtn(text: Resource , isFullScreen: boolean) {
    Button() {
      Image($r('app.media.screenShot'))
        .height(50)
        .width(50)
    }
    .key(isFullScreen + 'FullScreenShot')
    .type(ButtonType.Normal)
    .backgroundColor($r("app.color.blue"))
    .height("100%")
    .width("100%")
    //    .size({ width: 55, height: 55 })
    .margin({ left : 6 , right : 6 , top : 3 })
    .onClick(() => {
      console.log('[Screenshot] onClick,screenshot')
      this.getScreen(isFullScreen)
    })
  }

  build() {
    Flex({ alignItems : ItemAlign.Start }) {
      Text('蓝牙调试助手')
        .fontSize(26)
        .margin({ left : 15 })
        .padding({ top : 28 })

      Scroll() {
        Column() {
          this.CustomBtn($r('app.string.btn_fullscreen') , true)
        }
        .width("100%")
        .height("100%")
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
    .height(80)
    .backgroundColor($r("app.color.blue"))
    .padding({ left : 20 })
  }
}