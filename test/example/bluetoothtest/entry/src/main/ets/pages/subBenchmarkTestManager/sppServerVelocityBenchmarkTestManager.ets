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
import * as SppServerManagerInterface from '../../MainAbility/model/sppServerManagerInterface'
import bluetoothManager from '@ohos.bluetoothManager';
import { testSetBluetoothScanModeManager , testSetLocalNameManager } from '../../MainAbility/model/brManagerInterface'
import promptAction from '@ohos.promptAction';
import { myParams } from '../../Utils/common'

/**
 *  Bluetooth SppServer Velocity Benchmark Test Page Of Bluetooth test
 */

@Entry
@Component
struct SppServerVelocityBenchmarkTestManager {
  private testItem: TestData = (router.getParams() as myParams).testItem
  @State changeIndex: number = - 1
  @StorageLink("sppServerVelocityBenchmarkTestMessage") sppServerVelocityBenchmarkTestMessage: string = ""
  private uuid: string = "00001101-0000-1000-8000-00805f9b34fb";
  @StorageLink('dataServerReadMessage') dataServerReadMessage: string = "00";
  @State writeServerData: string = '1';

  aboutToAppear() {
    AppStorage.setOrCreate('serverV_Cycle_index' , '1');
    AppStorage.setOrCreate('inputUuid' , this.uuid);
    AppStorage.setOrCreate("writeServerData" , this.writeServerData);
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
            Text("性能测试:")
              .fontSize("17vp")
              .margin({ top : "5vp" , bottom : "5vp" , left : "20vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
            Text("Spp的性能测试是测试Spp两端收发信息的速率和带宽性能")
              .fontSize("17vp")
              .margin({ left : "15vp" })
              .backgroundColor($r("app.color.spring"))
            Stack().height("1vp").backgroundColor("#000000")

            Row() {
              Text("serverV_Cycle_index:").fontSize(17).width(180).padding({ left : "15vp" })
              Column() {
                Select([
                  { value : "100" },
                  { value : "1000" },
                  { value : "10000" }
                ])
                  .borderRadius(10)
                  .backgroundColor($r("app.color.white"))
                  .selected(0)
                  .value("循环次数")
                  .font({ size : 17 })
                  .margin({ right : 160 })
                  .selectedOptionFont({ size : 17 })
                  .optionFont({ size : 15 })
                  .height(36)
                  .width("80%")
                  .onSelect((index: number) => {
                    console.log("index Select:" + index)
                    AppStorage.setOrCreate('serverV_Cycle_index' , index);
                  })
              }
              .width("90%")
            }
            .padding(3)
            .justifyContent(FlexAlign.Start)
            .alignItems(VerticalAlign.Center)

            Row() {
              Text("写入目标设备数据：").fontSize(17).width(160)
              TextInput({ text : this.writeServerData , placeholder : "请输入写入的数据" })
                .fontSize("14vp")
                .backgroundColor($r("app.color.white"))
                .onChange((str) => {
                  this.writeServerData = str;
                  AppStorage.setOrCreate("writeServerData" , str);
                })
                .width("50%")
                .borderRadius(10)
                .height(32)
            }
            .padding(2)
            .justifyContent(FlexAlign.Start)
            .alignItems(VerticalAlign.Center)

            Scroll() {
              Column() {
                Text("读取的数据为：")
                  .fontSize("17vp")
                  .margin({ left : "10vp" })
                  .textAlign(TextAlign.Start)
                  .width("100%")
                Scroll() {
                  List() {
                    ListItem() {
                      Text(this.dataServerReadMessage)
                        .align(Alignment.TopStart)
                        .fontSize("14vp")
                        .width("90%")
                        .height(180)
                        .borderRadius(10)
                        .backgroundColor($r("app.color.white"))
                    }
                  }
                  .height("95%")
                  .width("90%")
                  .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
                }
                .scrollBarWidth(10)
                .scrollBar(BarState.On)
              }
              .width("100%")
              .height(180)
            }
            .scrollBarWidth(10)
            .scrollBar(BarState.On)
          }
          .width("100%")
          .height(360)
          .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.Auto)

        Stack().height("1vp").backgroundColor("#000000")

        Scroll() {
          Column() {
            Text("日志:")
              .fontSize("17vp")
              .margin({ top : "5vp" , bottom : "5vp" , left : "10vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
              .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
            List() {
              ListItem() {
                Text(this.sppServerVelocityBenchmarkTestMessage)
                  .fontSize("17vp")
                  .margin({ top : "5vp" , left : "10vp" , right : "10vp" })
                  .textAlign(TextAlign.Start)
                  .width("90%")
              }
            }
            .height("90%")
            .width("90%")
            .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
          }
          .width("100%")
          .height(150)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.On)

      }
      .width("100%")
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))

      Column() {
        Flex({ alignItems : ItemAlign.Center , justifyContent : FlexAlign.SpaceBetween }) {
          Button({ type : ButtonType.Normal , stateEffect : true }) {
            Row() {
              Text('速率性能测试').fontSize("24vp").fontColor(0xffffff).margin({ left : 5 , right : 5 })
            }.alignItems(VerticalAlign.Center)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(100)
          .height(66)
          .margin({ top : "15vp" , left : "5vp" , right : "5vp" })
          .align(Alignment.Start)
          .onClick(async(event: ClickEvent) => {
            let sppServerVelocityBenchmarkTestMessage = ""

            let writeServerData = loopWriteDate()
            AppStorage.setOrCreate("writeServerData" , writeServerData)
            await sleep(2)

            sppServerVelocityBenchmarkTestMessage += "sppServerCreateSafe" + testFunc(sppServerCreateSafe)
            AppStorage.setOrCreate("sppServerVelocityBenchmarkTestMessage" , sppServerVelocityBenchmarkTestMessage)
            await sleep(8)

            sppServerVelocityBenchmarkTestMessage += "sppServerAccept" + testFunc(sppServerAccept)
            AppStorage.setOrCreate("sppServerVelocityBenchmarkTestMessage" , sppServerVelocityBenchmarkTestMessage)
            await sleep(5)

          })

          Button({ type : ButtonType.Normal , stateEffect : true }) {
            Row() {
              Text('结束测试').fontSize("24vp").fontColor(0xffffff).margin({ left : 5 , right : 5 })
            }.alignItems(VerticalAlign.Center)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(80)
          .height(66)
          .margin({ top : "15vp" , left : "5vp" , right : "5vp" })
          .align(Alignment.Start)
          .onClick(async(event: ClickEvent) => {
            let sppServerVelocityBenchmarkTestMessage = ""

            sppServerVelocityBenchmarkTestMessage += "testSppServerReadOff 执行：" + testFunc(SppServerManagerInterface.testSppServerReadOffManager) + "\n"
            AppStorage.setOrCreate("sppServerVelocityBenchmarkTestMessage" , sppServerVelocityBenchmarkTestMessage)
            await sleep(1)

            sppServerVelocityBenchmarkTestMessage += "testSppCloseServerSocket 执行：" + testFunc(SppServerManagerInterface.testSppCloseServerSocketManager) + "\n"
            AppStorage.setOrCreate("sppServerVelocityBenchmarkTestMessage" , sppServerVelocityBenchmarkTestMessage)
            await sleep(1)

            sppServerVelocityBenchmarkTestMessage += "sppCloseClientSocket 执行：" + testFunc(SppServerManagerInterface.testSppCloseClientSocketManager) + "\n"
            AppStorage.setOrCreate("sppServerVelocityBenchmarkTestMessage" , sppServerVelocityBenchmarkTestMessage)
            await sleep(1)
          })

          Button({ type : ButtonType.Normal , stateEffect : true }) {
            Row() {
              Image($r('app.media.ic_public_delete_filled')).width(30).height(40).margin({ left : 5 })
            }.alignItems(VerticalAlign.Center)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.moon"))
          .width(50)
          .height(66)
          .margin({ top : "15vp" , right : "40vp" })
          .align(Alignment.Start)
          .onClick(async(event: ClickEvent) => {
            let sppServerVelocityBenchmarkTestMessage = ""
            AppStorage.setOrCreate("sppServerVelocityBenchmarkTestMessage" , sppServerVelocityBenchmarkTestMessage)
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

  dataRead(dataBuffer: ArrayBuffer) {
    const data = new Uint8Array(dataBuffer);
    console.log('spp bluetooth read is: ' + data);
    if ( data != null ) {
      this.dataServerReadMessage = "读取成功" + JSON.stringify(data);
    } else {
      this.dataServerReadMessage = "读取失败";
    }
  }
}

export function testFunc(func: Function) {
  let start = new Date().getTime()
  switch ( func ) {
    case testSetLocalNameManager: {
      func("DaYuBlue")
    }
      break;
    case testSetBluetoothScanModeManager: {
      func(4 , 0)
    }
      break;
    default: {
      func()
    }
      break;
  }

  let end = new Date().getTime()
  console.log("开始:" + Number(start) + "ms")
  console.log("结束:" + Number(end) + "ms")
  console.log("花费:" + Number(end - start) + "ms")
  let message = ""
  message += "花费:" + Number(end - start) + "ms" + "\n"
  message += "开始:" + Number(start) + "ms; " + "结束:" + Number(end) + "ms" + "\n"
  return message
}

async function sleep(time: number): Promise<void> {
  return new Promise<void>((resolve , reject) => {
    setTimeout(() => {
      resolve();
    } , time * 1000);
  });
}

function choose(index: number) {
  let indexNumber: number = 0
  switch ( index ) {
    case 0: {
      indexNumber = 100;
    }
      break;
    case 1: {
      indexNumber = 1000
    }
      break;
    case 2: {
      indexNumber = 10000
    }
      break;
    default: {
      indexNumber = 100
    }
      break;
  }
  return indexNumber
}


let serverNumber: number = - 1;
let clientNumber: number = - 1;

function sppServerCreateSafe(): string {
  let message = "sppServerCreateSafe test"
  console.log('spp server socketId(safe mode) create! ');
  let uuid: string = AppStorage.get('inputUuid') !
  if ( uuid == '' ) {
    message = 'uuid为空';
    promptAction.showToast({ message : message })
    return message
  }
  // 创建蓝牙服务器侦听套接字, 返回服务端ID
  bluetoothManager.sppListen('BluetoothDevice' , {
    uuid : uuid ,
    secure : true ,
    type : 0
  } , (code , serverSocketID) => {
    console.log('bluetooth error code: ' + JSON.stringify(code));
    if ( !code || code.code == 0 ) {
      console.log('spp server: serverSocketID(safe mode) - ' + serverSocketID);
      serverNumber = serverSocketID;
      message = "创建server成功";
      promptAction.showToast({ message : message })
      console.log('testSppServerAccept test')
      console.log('testSppServerAccept serverNumber ' + serverNumber)
    }
  });
  promptAction.showToast({ message : message })
  return message
}


function sppServerAccept(): string {
  let message: string = "testSppServerAccept test"
  let serverReadMessage = ""
  //  serverNumber = AppStorage.get("serverNumber")
  console.log('testSppServerAccept test')
  console.log('testSppServerAccept serverNumber ' + serverNumber)
  let i = 1
  let index: number = AppStorage.get('serverV_Cycle_index') !;
  let indexNumber = choose(index)
  let cycleNumber = indexNumber + 1
  console.log("循环数为:" + indexNumber)

  bluetoothManager.sppAccept(serverNumber , (code , clientSocketID) => {
    if ( !code || code.code == 0 ) {
      console.log('spp server: clientSocketID - ' + clientSocketID);
      console.log('test serverNumber ' + serverNumber);
      clientNumber = clientSocketID;
      AppStorage.setOrCreate("clientNumber" , clientNumber)
      message = "接受客户端成功"
      promptAction.showToast({ message : message })
      bluetoothManager.on('sppRead' , clientNumber , (dataBuffer: ArrayBuffer) => {
        const data = new Uint8Array(dataBuffer);
        console.log('spp bluetooth read is: ' + data);
        if ( data != null ) {
          if ( i < cycleNumber ) {
            serverReadMessage = "第" + i + "次,读取成功！" + "\n" + serverReadMessage
            console.log("第" + i + "次,读取成功：" + JSON.stringify(data));
            AppStorage.setOrCreate("dataServerReadMessage" , serverReadMessage)
            promptAction.showToast({ message : serverReadMessage })
            //          sppServerWrite();
            console.log('sppServerWrite sppWrite clientNumber: ' + clientNumber);
            //            let writeServerData = AppStorage.get("writeServerData") 值为1
            let writeServerData: string = AppStorage.get("writeServerData") !
            let writeArrayBuffer: ArrayBuffer = strToArrayBuffer(writeServerData) as ArrayBuffer;
            console.log('sppServerWrite  writeServerData: ' + writeServerData);
            const sppWriteSuccess = bluetoothManager.sppWrite(clientNumber , writeArrayBuffer);
            console.log("sppServerWrite第" + i + "次写入");
            message = "sppServer第" + i + "次写入"
            promptAction.showToast({ message : message })
          } else {
            promptAction.showToast({ message : "循环次数到咯" })
            sppServerReadOff()
          }
        } else {
          message = "读取失败";
        }
        //        AppStorage.setOrCreate("dataServerReadMessage", message)
        promptAction.showToast({ message : message })
      })
      promptAction.showToast({ message : message })
    } else {
      message = "接受客户端失败";
      console.log("code.code:" + JSON.stringify(code))
      promptAction.showToast({ message : message })
    }
  })
  promptAction.showToast({ message : message })
  return message
}


function sppServerWrite(): string {
  let message = "sppServerWrite test"
  let clientNumber: number = AppStorage.get("clientNumber") !
  console.log('sppServerWrite sppWrite clientNumber: ' + clientNumber);
  let writeServerData: string = AppStorage.get("writeServerData") !
  let writeArrayBuffer: ArrayBuffer = strToArrayBuffer(writeServerData) as ArrayBuffer;
  bluetoothManager.sppWrite(clientNumber , writeArrayBuffer);
  console.log('sppWrite successfully');
  message = "写入成功 ";
  promptAction.showToast({ message : message })
  return message
}

function sppServerReadOff(): string {
  let message = "sppServerReadOff test"
  console.log('sppServerReadOff');
  let clientNumber: number = AppStorage.get("clientNumber") !
  bluetoothManager.off('sppRead' , clientNumber ,
    (dataBuffer: ArrayBuffer) => {
      const data = new Uint8Array(dataBuffer);
      console.log('spp bluetooth read is: ' + data);
      if ( data != null ) {
        message = "读取成功" + JSON.stringify(data);
      } else {
        message = "读取失败";
      }
      AppStorage.setOrCreate("dataServerReadMessage" , message)
      promptAction.showToast({ message : message })
      return message
    }
  );
  promptAction.showToast({ message : message })
  return message
}

function strToArrayBuffer(str: string) {
  let array = new Uint8Array(str.length);
  for ( let i = 0 ; i < str.length ; i ++ ) {
    array[ i ] = str.charCodeAt(i);
  }
  return array.buffer
}

function loopWriteDate() {
  let a = "1";
  for ( let i = 0 ;i < 100 ; i ++ ) {
    a += "1";
  }
  return a
}
