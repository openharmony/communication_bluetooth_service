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

import { myParams , PairDevices } from '../../Utils/common'
import router from '@ohos.router';
import { PageTitle } from '../../Component/pageTitle';
import { TestImageDisplay } from '../../Component/testImageDisplay';
import { TestData } from '../../MainAbility/model/testData'
import bluetooth from '@ohos.bluetooth';
import promptAction from '@ohos.promptAction';

/**
 * OppRecv Scenario Test — API 23 不包含完整 OPP Kit，本页为占位说明。
 */

@Entry
@Component
struct OppRecvScenarioTest {
  private testItem: TestData = (router.getParams() as myParams).testItem
  @State changeIndex: number = - 1;
  @StorageLink("oppRecvScenarioMessage") oppRecvScenarioMessage: string = ""
  @State showProgress: boolean = false;
  @State curProgress: number = 0;
  @State serverMac: string = "00:00:00:00:00:00";
  private pairedDevices: PairDevices[] = [];

  aboutToAppear() {
    testLog("OPP 接收：API 23 工程未启用 ConnectivityKit OPP，请使用更高 API 完整工程");
    this.getPairDevice();
  }

  getPairDevice() {
    let macs = bluetooth.getPairedDevices();
    console.log("OppRecv getPairDevice macs: " + JSON.stringify(macs));
    for ( let i = 0 ; i < macs.length ; i ++ ) {
      let name = bluetooth.getRemoteDeviceName(macs[ i ]);
      console.log("OppRecv getPairDevice name: " + JSON.stringify(name));
      this.pairedDevices.push({ id : macs[ i ] , name : name });
    }
    console.log("OppRecv getPairDevice pairedDevices: " + JSON.stringify(this.pairedDevices));
  }

  build() {
    Column() {
      Stack({ alignContent : Alignment.TopStart }) {
        TestImageDisplay({ testItem : this.testItem })
        PageTitle({ testItem : this.testItem })
      }

      Stack().height('1vp').backgroundColor($r('app.color.black'));
      Column() {
        Scroll() {
          Column() {
            Text("API 23：OPP 接收未启用（需更高 API）")
              .fontSize('18vp')
              .fontWeight(FontWeight.Bold)
              .margin({ top : '10vp' , left : '20vp' })
            Text("已配对设备列表：(点击选择设备)")
              .fontSize('20vp')
              .fontWeight(FontWeight.Bold)
              .margin({ top : '5vp' })
            Scroll() {
              List({ space : '5vp' }) {
                ForEach(this.pairedDevices , (item: PairDevices) => {
                  ListItem() {
                    Text(item.name)
                      .fontSize('25vp')
                      .width('80%')
                      .margin({ left : '10%' })
                      .backgroundColor(this.serverMac === item.id ? $r("app.color.moon") : $r("app.color.white"))
                      .border({
                        radius : 5
                      })
                  }
                  .onClick(() => {
                    this.serverMac = item.id;
                  })
                })
              }
            }
            .height('70%')
            .width('80%')
          }
          .height('40%')
          .width('100%')

        }
        .scrollBarWidth('10vp')
        .scrollBar(BarState.On)

        Stack().height('1vp').backgroundColor($r('app.color.black'));

        Column() {
          Text("已选择的设备的蓝牙mac地址：")
            .fontSize('18vp')
            .fontWeight(FontWeight.Bold)
            .margin({ top : '3vp' })
          Text(this.serverMac)
            .fontSize('25vp')
            .width('70%')
            .borderRadius('5vp')
            .backgroundColor($r("app.color.moon"))
        }.height('20%')

        Scroll() {
          Column() {
            Text("流程日志:")
              .fontSize('18vp')
              .margin({ top : '8vp' , bottom : '8vp' , left : '20vp' })
              .textAlign(TextAlign.Start)
              .width('100%')
            List() {
              ListItem() {
                Text(this.oppRecvScenarioMessage)
                  .fontSize('18vp')
                  .margin({ top : '5vp' , left : '30vp' , right : '10vp' })
                  .textAlign(TextAlign.Start)
                  .width('90%')
              }
            }
            .height('80%')
            .width('90%')
            .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
          }
          .width('100%')
          .height('30%')
        }
        .scrollBarWidth('10vp')
        .scrollBar(BarState.On)
      }
      .height('66%')
      .width('100%')
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))

      Stack().height('1vp').backgroundColor($r('app.color.black'));

      Column() {
        Flex({ alignItems : ItemAlign.Center , justifyContent : FlexAlign.SpaceBetween }) {
          Column() {
            Button('opp开启接收文件（占位）')
              .fontSize('20vp')
              .borderRadius('8vp')
              .backgroundColor($r("app.color.blue"))
              .width('200vp')
              .height('60vp')
              .margin({ top : '15vp' })
              .align(Alignment.Center)
              .alignSelf(ItemAlign.Center)
              .onClick(() => {
                this.oppRecvScenarioMessage = "API 23：未提供 receiveIncomingFile / setIncomingFileConfirmation\n";
                testLog(this.oppRecvScenarioMessage);
                promptAction.showToast({ message : 'API 23：OPP 未启用' });
              })
              .width('60%')
          }
          .width('100%')
          .align(Alignment.Center)
          .alignItems(HorizontalAlign.Center)
          .backgroundColor($r("sys.color.ohos_id_color_sub_background"))

          if ( this.showProgress ) {
            Row({ space : '5vp' }) {
              Progress({ value : this.curProgress , total : 100 , type : ProgressType.Linear })
                .style({ strokeWidth : '10vp' })

              Text(this.curProgress + "%")
                .fontSize('30vp')
            }
          }
        }
        .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
        .width('100%')
      }
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
      .width('100%')
      .height('100%');
    }
  }
}

export function testLog(logStr: string) {
  promptAction.showToast({ message : logStr })
  console.log(logStr)
}
