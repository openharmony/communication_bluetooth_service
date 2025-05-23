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

import { myParams } from '../../../Utils/common'
import ConfigData from '../../../Utils/ConfigData';
import LogUtil from '../../../Utils/LogUtil';
import bluetooth from '@ohos.bluetooth';
import BluetoothModel , { BluetoothDevice } from '../../../MainAbility/model/BluetoothModel';
import BluetoothDeviceController from '../../../MainAbility/controller/BluetoothDeviceController';
import { PageTitle } from '../../../Component/pageTitle';
import { ContentTable } from '../../../Component/contentTable';
import { initSppClientApiData } from '../../../MainAbility/model/testDataModels'
import { TestImageDisplay } from '../../../Component/testImageDisplay';
import router from '@ohos.router';
import { TestData } from '../../../MainAbility/model/testData'

let MODEL = "bluetoothModel:"

/**
 * SPPClient Test Page Of Bluetooth test
 */

@Entry
@Component
struct SppClient {
  @State message: string = "";
  @StorageLink('dataReadMessage') dataReadMessage: string = "";
  @State btConnectionState: number = 0;
  @State profileType: number = 0;
  @State connectionStateInfo: string = "";
  private uuid: string = "00001101-0000-1000-8000-00805f9b34fb";
  private clientNumber: number = - 1;
  @State deviceId: string = "08:FB:EA:1B:3C:63"; //08:FB:EA:1B:3C:63
  @State writeClientData: string = '11';
  private TAG_PAGE = ConfigData.TAG + 'Paired_Device ';
  @StorageLink('bluetoothIsOn') btEnable: boolean = false;
  @State currentClick: number = - 1;
  @StorageLink('pairedDeviceInfo') pairingDevice: BluetoothDevice = new BluetoothDevice;
  @StorageLink('btDeviceController') controller: BluetoothDeviceController = new BluetoothDeviceController;
  @State pairPinCode: string = '';
  private testItem: TestData = (router.getParams() as myParams).testItem;
  pairDialog: CustomDialogController = new CustomDialogController({
    builder : PairDialog({
      deviceName : this.pairingDevice.deviceName ,
      pinCode : this.pairPinCode ,
      action : (accept: boolean) => {
        this.confirmPairing(accept);
      }
    }) ,
    alignment : DialogAlignment.Bottom ,
    autoCancel : true
  });

  aboutToAppear() {
    this.btEnable = BluetoothModel.isStateOn();
    AppStorage.setOrCreate('bluetoothIsOn' , this.btEnable);
    AppStorage.setOrCreate('inputDeviceId' , this.deviceId);
    AppStorage.setOrCreate('inputUuid' , this.uuid);
    AppStorage.setOrCreate("writeClientData" , this.writeClientData);
  }

  build() {
    Row() {
      Column() {
        Column() {
          Stack({ alignContent : Alignment.TopStart }) {
            TestImageDisplay({ testItem : this.testItem })
            PageTitle({ testItem : this.testItem })
          }

          Stack().height("0.5vp").backgroundColor("#000000");
          Row() {
            Text("目标设备MAC：").fontSize(17).width(70);
            TextInput({ text : this.deviceId , placeholder : "请输入mac地址" })
              .fontSize("15vp")
              .onChange((str) => {
                this.deviceId = str;
                AppStorage.setOrCreate('inputDeviceId' , str)
              })
              .width("80%")
              .borderRadius(1)
          }
          .backgroundColor($r("app.color.moon"))
          .padding(5)
          .justifyContent(FlexAlign.Start)
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("目标设备UUID：").fontSize(17).width(70);
            TextInput({ text : this.uuid , placeholder : "请输入uuid" })
              .fontSize("15vp")
              .onChange((str) => {
                this.uuid = str;
                AppStorage.setOrCreate('inputUuid' , str)
              })
              .width("80%")
              .borderRadius(1)
          }
          .backgroundColor($r("app.color.spring"))
          .padding(5)
          .justifyContent(FlexAlign.Start)
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("写入目标设备数据：").fontSize(17).width(95);
            TextInput({ text : this.writeClientData , placeholder : "请输入写入的数据" })
              .fontSize("15vp")
              .onChange((str) => {
                this.writeClientData = str;
                AppStorage.setOrCreate("writeClientData" , str);
              })
              .width("80%")
              .borderRadius(1)
          }
          .backgroundColor($r("app.color.moon"))
          .padding(5)
          .justifyContent(FlexAlign.Start)
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("读取的数据为：").fontSize("17vp")
            Text(this.dataReadMessage)
              .fontSize("15vp")
              .width("80%")
              .borderRadius(1)
          }
          .padding(5)
          .justifyContent(FlexAlign.Start)
          .alignItems(VerticalAlign.Center)

          Column() {
            Text("接口调用结果： " + this.message).fontSize("17vp")
              .padding(10)
              .textAlign(TextAlign.Center)
          }
          .backgroundColor($r("app.color.moon"))
          .visibility(Visibility.Visible);
          Column() {
            Scroll() {
              ContentTable({ apiItems : initSppClientApiData() }) //子层调用
            }
            .width(ConfigData.WH_100_100)
            .align(Alignment.TopStart)
            .layoutWeight(1)
            .margin({ top : $r('sys.float.ohos_id_card_margin_middle') })
            .height("100%")
          }
          .height("75%")
        }
      }
      .width('100%')
    }
    .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
    .height('100%')
    .alignItems(VerticalAlign.Top)
  }

  sppClientClose() {
    LogUtil.info(MODEL + 'sppCloseClientSocket clientNumber: ' + JSON.stringify(this.clientNumber))
    bluetooth.sppCloseClientSocket(this.clientNumber);
    this.message = '关闭成功 clientNumber' + this.clientNumber;
  }

  /**
   * 获取的clientNumber用作客户端后续读/写操作socket的id
   * @param number
   */
  acceptClientSocket(number: number) {
    console.log('spp clientSocket socketID: ' + number);
    // 获取的clientNumber用作服务端后续读/写操作socket的id。
    this.clientNumber = number;
  }

  dataRead(dataBuffer: ArrayBuffer) {
    const data = new Uint8Array(dataBuffer);
    console.log('spp bluetooth read is: ' + data);
    if ( data != null ) {
      this.dataReadMessage = "读取成功" + JSON.stringify(data);
    } else {
      this.dataReadMessage = "读取失败";
    }
  }

  /**
   * 字符串转arrayBuffer
   * @param {*} str 需要转换的字符串
   * @returns 返回 arrayBuffer
   */
  strToArrayBuffer(str: string) {
    let array = new Uint8Array(str.length);
    for ( let i = 0 ; i < str.length ; i ++ ) {
      array[ i ] = str.charCodeAt(i);
    }
    return array.buffer
  }

  /**
   * Pair device
   * @param device
   */
  pairDevice(deviceId: string) {
    this.controller.pair(this.deviceId , (pinCode: string) => {
      LogUtil.info(this.TAG_PAGE + 'pairDevice success callback : pinCode = ' + pinCode);
      // show pair pin dialog
      this.pairPinCode = pinCode
      this.pairingDevice.deviceId = this.deviceId;
      this.pairingDevice.deviceName = this.deviceId;
      this.pairDialog.open();
    } , () => {
      LogUtil.info(this.TAG_PAGE + 'pairDevice error callback');
      this.showPairFailedDialog()
    })
  }

  /**
   * Confirm pairing
   */
  confirmPairing(accept: boolean) {
    LogUtil.info(this.TAG_PAGE + 'confirmPairing : pairingDevice + ' + JSON.stringify(this.pairingDevice));
    this.controller.confirmPairing(this.pairingDevice.deviceId , accept);
  }

  /**
   * Show pair failed dialog
   */
  showPairFailedDialog() {
    this.showPairingFailedDialog()
  }

  /**
   * Show connect Failed Dialog
   */
  private showConnectFailedDialog() {
    showDialog(
      $r("app.string.bluetooth_connect_failed") ,
      $r("app.string.bluetooth_connect_failed_msg") ,
      $r("app.string.bluetooth_know_button")
    );
  }

  /**
   * Show pairing failed title Dialog
   */
  private showPairingFailedDialog() {
    showDialog(
      $r("app.string.pairing_failed_title") ,
      $r("app.string.pairing_failed_message") ,
      $r("app.string.bluetooth_know_button")
    );
  }
}

/**
 * Pair dialog
 */
@CustomDialog
struct PairDialog {
  private deviceName: string = 'defaultDeviceName';
  private pinCode: string = 'defaultPinCode';
  dialogController: CustomDialogController;
  action!: (accept: boolean) => void;

  aboutToAppear(): void {
    LogUtil.log(ConfigData.TAG + `bluetooth PairDialog aboutToAppear pinCode = ${ this.pinCode }`)
  }

  build() {
    Column() {
      Text($r('app.string.bluetooth_pairing_request'))
        .fontSize($r('app.float.font_22'))
        .height($r('app.float.wh_value_60'))
        .width(ConfigData.WH_100_100)
        .padding({
          left : $r('app.float.distance_24') ,
          top : $r('app.float.distance_14') ,
          bottom : $r('app.float.distance_14')
        })
      Column() {
        if ( this.pinCode ) {
          Text($r('app.string.bluetooth_pairing_intelligent_device_hit' , this.deviceName , this.deviceName))
            .fontSize($r('app.float.font_16'))
            .width(ConfigData.WH_100_100)
            .margin({
              top : $r('app.float.distance_14') ,
              bottom : $r('app.float.distance_14')
            })

          Text(`${ this.pinCode }`)
            .fontSize($r('app.float.pinCode_font_size'))
            .fontWeight(FontWeight.Bolder)
            .width(ConfigData.WH_100_100)
            .textAlign(TextAlign.Center)
            .margin({
              top : $r('app.float.item_common_horizontal_margin') ,
              bottom : $r('app.float.item_common_horizontal_margin')
            })

        } else {
          Text($r('app.string.bluetooth_pairing_media_device_hit'))
            .fontSize($r('app.float.font_16'))
            .width(ConfigData.WH_100_100)
            .margin({
              bottom : $r('app.float.switch_summary_margin')
            })

          Text(this.deviceName)
            .fontSize($r('app.float.font_16'))
            .width(ConfigData.WH_100_100)
            .fontWeight(FontWeight.Bold)
        }

        // button
        Flex({ justifyContent : FlexAlign.Center , alignItems : ItemAlign.Center }) {

          Button() {
            Text($r('app.string.cancel'))
              .fontSize($r('app.float.font_16'))
              .fontColor(Color.Blue)
          }
          .backgroundColor($r("app.color.white_bg_color"))
          .width($r("app.float.wh_value_160"))
          .height($r("app.float.wh_value_40"))
          .flexGrow(1)
          .onClick(() => {
            this.dialogController.close();
            this.action(false);
          })

          Divider()
            .height($r("app.float.wh_value_24"))
            .strokeWidth(0.5)
            .vertical(true)
            .color(($r("app.color.color_E3E3E3_grey")))

          Button() {
            Text($r('app.string.bluetooth_pair_button'))
              .fontSize($r('app.float.font_16'))
              .fontColor(Color.Blue)
          }
          .backgroundColor($r("app.color.white_bg_color"))
          .width($r("app.float.wh_value_160"))
          .height($r("app.float.wh_value_40"))
          .flexGrow(1)
          .onClick(() => {
            this.dialogController.close();
            this.action(true);
          })
        }
        .width(ConfigData.WH_100_100)
        .height($r('app.float.wh_value_60'));
      }
      .width(ConfigData.WH_100_100)
      .padding({
        left : $r('app.float.distance_24') ,
        right : $r('app.float.distance_24')
      })
    }
    .padding({
      left : $r('app.float.distance_24') ,
      right : $r('app.float.distance_24')
    })
    .width(ConfigData.WH_100_100);
  }
}
/**
 * Pair mode prompt
 * @param dialogTitle Dialog title
 * @param dialogMessage Dialog message
 * @param buttonValue Dialog buttonValue
 */
function showDialog(dialogTitle: string | Resource , dialogMessage: string | Resource , buttonValue: string | Resource) {
  AlertDialog.show({
    title : dialogTitle ,
    message : dialogMessage ,
    confirm : {
      value : buttonValue ,
      action : () => {
        LogUtil.info('Button-clicking callback')
      }
    } ,
    cancel : () => {
      LogUtil.info('Closed callbacks')
    } ,
    alignment : DialogAlignment.Bottom
  })
}


