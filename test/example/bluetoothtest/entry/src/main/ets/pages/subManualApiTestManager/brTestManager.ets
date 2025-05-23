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

import { myParams } from '../../Utils/common'
import { PageTitle } from '../../Component/pageTitle';
import { TestImageDisplay } from '../../Component/testImageDisplay';
import { ContentTable } from '../../Component/contentTable';
import BluetoothModelManager from '../../MainAbility/model/BluetoothModelManager';
import router from '@ohos.router';
import { BluetoothDevice } from '../../MainAbility/model/BluetoothModel';
import BluetoothDeviceController from '../../MainAbility/controller/BluetoothDeviceController';
import ConfigData from '../../Utils/ConfigData';
import LogUtil from '../../Utils/LogUtil';
import { initBRManagerApiData } from '../../MainAbility/model/testDataModelsManager'
import { TestData } from '../../MainAbility/model/testData'

/**
 * BrManager Test Page Of Bluetooth test
 */

@Entry
@Component
struct brTestManager {
  private TAG_PAGE = ConfigData.TAG + 'Paired_Device ';
  private testItem: TestData = (router.getParams() as myParams).testItem;
  @State btEnable: boolean = false;
  @StorageLink('setLocalNameRet') setLocalNameRet: boolean = false;
  @StorageLink('setScanModeRet') setScanModeRet: boolean = false;
  @State deviceId: string = '';
  @State currentClick: number = - 1;
  @StorageLink('pairedDeviceInfo') pairingDevice: BluetoothDevice = new BluetoothDevice;
  @StorageLink('pairedDeviceId') pairedDeviceId: string = '';
  @StorageLink('btDeviceController') controller: BluetoothDeviceController = new BluetoothDeviceController;
  @StorageLink('pairedMac') pairedMac: string = "6c:96:d7:3d:87:6f";
  @State pairPinCode: string = '';
  @State btOnState: string = 'on:stateChange';
  @State btPinRequired: string = 'on:pinRequired';
  @State btBondStateChange: string = 'on:bondStateChange';
  @State isStateChangeClick: boolean = false;
  @State isPinRequiredClick: boolean = false;
  @State isBondStateChangeClick: boolean = false;
  pairDialog: CustomDialogController = new CustomDialogController({
    builder : PairDialog({
      deviceName : this.pairingDevice.deviceName ,
      pinCode : this.pairPinCode ,
      action : (accept: boolean) => {
        console.log("PairDialog start -------")
        this.confirmPairing(accept);
        console.log("PairDialog end -------")
      }
    }) ,
    alignment : DialogAlignment.Bottom ,
    autoCancel : true
  });

  aboutToAppear() {
    this.btEnable = BluetoothModelManager.isStateOn();
    this.controller.subscribePinRequired((deviceId , pinCode) => {
      this.pairPinCode = pinCode
      this.pairingDevice.deviceId = deviceId;
      this.pairingDevice.deviceName = deviceId;
      this.pairDialog.open();
    })
    AppStorage.setOrCreate('bluetoothIsOn' , this.btEnable);
    AppStorage.setOrCreate('pairedMac' , this.pairedMac);
  }

  init() {
    console.log("init-----------")
  }

  build() {
    Column() {
      Stack({ alignContent : Alignment.TopStart }) {
        TestImageDisplay({ testItem : this.testItem })
        PageTitle({ testItem : this.testItem })
      }

      Stack().height("0.5vp").backgroundColor("#000000");
      Column() {
        Text("目标设备MAC：")
          .fontSize("20vp")
          .height(50)
          .width('100%')
          .padding({ top : 10 , left : 10 })
        TextInput({ text : this.pairedMac , placeholder : "请输入即将连接的设备MAC" })
          .height(50)
          .borderStyle(BorderStyle.Dashed)
          .backgroundColor($r("app.color.white"))
          .onChange((str) => {
            this.deviceId = str;
          })
          .width('96%')
          .padding({ top : 10 , left : 10 })
      }
      .align(Alignment.TopStart)
      ContentTable({ apiItems : initBRManagerApiData() })
    }
    .alignItems(HorizontalAlign.Center)
    .backgroundColor($r("app.color.lead"))
    .height("100%")
  }

  /**
   * Pair device
   * @param device
   */
  pairDevice(deviceId: string) {
    this.controller.pair(deviceId , (pinCode: string) => {
      LogUtil.info(this.TAG_PAGE + 'pairDevice success callback : pinCode = ' + pinCode);
      // show pair pin dialog
      this.pairPinCode = pinCode
      this.pairingDevice.deviceId = deviceId;
      this.pairingDevice.deviceName = deviceId;
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
    console.log("confirmPairing start -----------")
    LogUtil.info(this.TAG_PAGE + 'confirmPairing : pairingDevice + ' + JSON.stringify(this.pairingDevice));
    console.log("confirmPairing  -----------")
    this.controller.confirmPairing(this.pairingDevice.deviceId , accept);
    console.log("confirmPairing end -----------")
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
            console.log("onClick start --------------")
            this.action(true);
            console.log("onClick end --------------")
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

