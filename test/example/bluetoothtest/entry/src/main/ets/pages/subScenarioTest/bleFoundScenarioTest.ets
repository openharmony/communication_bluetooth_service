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
import { PageTitle } from '../../Component/pageTitle';
import { TestImageDisplay } from '../../Component/testImageDisplay';
import { TestData } from '../../MainAbility/model/testData'
import { ScenarioContentTable } from '../../Component/scenarioContentTable'
import { BleFoundScenarioTestCase , initBleFoundScenarioData } from '../../MainAbility/model/scenarioTestDataModel'
import * as BLEInterface from '../../MainAbility/model/bleInterface'
import * as BrInterface from '../../MainAbility/model/brInterface'
import { BTAutoArrayItem , myParams } from '../../Utils/common'

/**
 * BLE found Scenario Test Page Of Bluetooth test
 */

@Entry
@Component
struct BleFoundScenarioTest {
  private testItem: TestData = (router.getParams() as myParams).testItem
  @State changeIndex: number = - 1
  @StorageLink("bleFoundScenarioMessage") bleFoundScenarioMessage: string = ""

  aboutToAppear() {
    AppStorage.setOrCreate('txtScanFilterDeviceId' , "08:FB:EA:1B:3C:63"); // 6c:96:d7:3d:87:6f
    AppStorage.setOrCreate('txtScanFilterName' , "dudu-tiger");
    AppStorage.setOrCreate('txtScanFilterServiceUuid' , "0000180A-0000-1000-8000-00805f9b34fb");
    AppStorage.setOrCreate('txtScanOptions_interval' , "0");
    AppStorage.setOrCreate('txtScanOptionsDutyMode' , '0');
    AppStorage.setOrCreate('txtScanOptionsMatchMode' , '0');
    AppStorage.setOrCreate('cbxBleScanFilter' , true);
    AppStorage.setOrCreate('cbxBleScanOptions' , true);
  }

  build() {
    Column() {
      Stack({ alignContent : Alignment.TopStart }) {
        TestImageDisplay({ testItem : this.testItem })
        PageTitle({ testItem : this.testItem })
      }

      Stack().height("1vp").backgroundColor("#000000");
      Column() {
        Scroll() {
          Column() {
            Text("场景流程验证:")
              .fontSize("17vp")
              .margin({ top : "10vp" , bottom : "10vp" , left : "20vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
            ScenarioContentTable({
              scenarioItems : initBleFoundScenarioData() ,
              changeIndex : this.changeIndex
            })
          }
          .width("100%")
          .height(280)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.Auto)

        Stack().height("1vp").backgroundColor("#000000");

        Scroll() {
          Column() {
            Text("流程日志:")
              .fontSize("17vp")
              .margin({ top : "8vp" , bottom : "8vp" , left : "20vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
            List() {
              ListItem() {
                Text(this.bleFoundScenarioMessage)
                  .fontSize("17vp")
                  .margin({ top : "5vp" , left : "30vp" , right : "10vp" })
                  .textAlign(TextAlign.Start)
                  .width("90%")
              }
            }
            .height("80%")
            .width("90%")
            .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
          }
          .width("100%")
          .height(260)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.On)
      }
      .height(500)
      .width("100%")
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))


      Stack().height("1vp").backgroundColor("#000000");
      Column() {
        Flex({ alignItems : ItemAlign.Center , justifyContent : FlexAlign.SpaceBetween }) {
          Button({ type : ButtonType.Normal , stateEffect : true }) {
            Text('场景测试开始').fontSize("24vp").fontColor(0xffffff).margin({ left : 5 , right : 5 })
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(100)
          .height(66)
          .margin({ top : "15vp" , left : "20vp" })
          .align(Alignment.Start)
          .onClick(async(event: ClickEvent) => {
            this.forLoop()
          })

          Button({ type : ButtonType.Normal , stateEffect : true }) {
            Row() {
              Text('场景测试结束').fontSize("24vp").fontColor(0xffffff).margin({ left : 5 , right : 5 })
            }.alignItems(VerticalAlign.Top)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(100)
          .height(66)
          .margin({ top : "15vp" , left : "10vp" , right : "10vp" })
          .align(Alignment.Start)
          .onClick(async(event: ClickEvent) => {
            let bleFoundScenarioMessage = ""
            // 停止BLE扫描
            bleFoundScenarioMessage += BLEInterface.testStopBLEScan() + "\n"
            console.log("testStopBLEScan success")
            //            self.changeIndex = arr[6]
            await sleep(1)
            // 关闭注册BLE查找状态变化
            bleFoundScenarioMessage += BLEInterface.testOnBLEDeviceFind() + "\n"
            console.log("testOffBLEDeviceFind success")
            await sleep(1)
            //关闭注册状态变化
            bleFoundScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOffStateChange success")
            await sleep(1)
            //关蓝牙
            bleFoundScenarioMessage += BrInterface.testDisableBluetooth() + "\n"
            console.log("testDisableBluetooth success")
            //            self.changeIndex = arr[7]
            await sleep(1)
            AppStorage.setOrCreate("bleFoundScenarioMessage" , bleFoundScenarioMessage)
          })

          Button({ type : ButtonType.Normal , stateEffect : true }) {
            Row() {
              Text('清空日志').fontSize("24vp").fontColor(0xffffff).margin({ left : 5 , right : 5 })
            }.alignItems(VerticalAlign.Top)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.moon"))
          .width(80)
          .height(66)
          .margin({ top : "15vp" , right : "20vp" })
          .align(Alignment.Start)
          .onClick(async(event: ClickEvent) => {
            let bleFoundScenarioMessage = ""
            AppStorage.setOrCreate("bleFoundScenarioMessage" , bleFoundScenarioMessage)
          })
        }
        .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
        .width("100%")
      }
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
      .width("100%")
      .height("100%");
    }
  }

  //循环调用
  async forLoop() {
    let bleFoundScenarioMessage = ""
    //拼装数组
    let bleScenarioArray: Array<BTAutoArrayItem> = [
      { name : "testSetLocalName" , para : [ "DaYuBlue" ] },
      { name : "testSetBluetoothScanMode" , para : [ 4, 0 ] }
    ]
    let interfaces = BleFoundScenarioTestCase.map(i => {
      let item = bleScenarioArray.find(itm => itm.name === i.api.name);
      let para = item ? item.para : []; // 确保 para 总是一个数组
      return { name : i.api.name , para } as BTAutoArrayItem;
    });

    for ( let m = 0 ; m < interfaces.length ; m ++ ) {
      // 检查 BleFoundScenarioTestCase 中对应的 api 是否是一个函数
      if ( typeof BleFoundScenarioTestCase[ m ].api === "function" ) {
        // 使用 TypeScript 的类型断言确保 para 是一个数组
        bleFoundScenarioMessage += BleFoundScenarioTestCase[ m ].api(... interfaces[ m ].para) + "\n";
      } else {
        console.error(`在 BrAutoTestCase 中找不到方法: ${ BleFoundScenarioTestCase[ m ] }`);
      }
      this.changeIndex = m
      await sleep(1)
      AppStorage.setOrCreate("bleFoundScenarioMessage" , bleFoundScenarioMessage)
    }
  }
}

async function sleep(time: number): Promise<void> {
  return new Promise<void>((resolve , reject) => {
    setTimeout(() => {
      resolve();
    } , time * 1000);
  });
}