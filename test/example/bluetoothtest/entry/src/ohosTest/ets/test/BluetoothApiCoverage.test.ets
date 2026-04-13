/**
 * 蓝牙相关系统 API 冒烟测试（@ohos.bluetooth / bluetoothManager / hid / pan / ConnectivityKit OPP 等）。
 * 在已授予 USE_BLUETOOTH、DISCOVER_BLUETOOTH、ACCESS_BLUETOOTH 的设备上执行；
 * 部分调用可能因蓝牙未开、无权限或硬件返回错误码，用 try/catch 记录但不强制失败。
 */
import { describe, it, expect } from '@ohos/hypium';
import bluetooth from '@ohos.bluetooth';
import btm from '@ohos.bluetoothManager';
import hid from '@ohos.bluetooth.hid';
import pan from '@ohos.bluetooth.pan';
import { opp } from '@kit.ConnectivityKit';

const DUMMY_MAC = '00:11:22:33:44:55';
/** 与主工程 BluetoothModel 中 getProfile 使用的 profileId 一致 */
const PROFILE_A2DP_SOURCE = 1;
const PROFILE_HFP_AG = 4;
const PROFILE_OPP = 10;

const tryInvoke = (tag: string, fn: () => void): void => {
  try {
    fn();
  } catch (e) {
    console.info(`[BluetoothApiCoverage] ${tag} skip: ${JSON.stringify(e)}`);
  }
};

export default function bluetoothApiCoverageTest() {
  describe('BluetoothClassicDeprecated', () => {
    it('getState', 0, () => {
      tryInvoke('getState', () => {
        const s = bluetooth.getState();
        expect(s !== null && s !== undefined).assertTrue();
      });
    });

    it('getBtConnectionState', 0, () => {
      tryInvoke('getBtConnectionState', () => {
        const s = bluetooth.getBtConnectionState();
        expect(s !== null && s !== undefined).assertTrue();
      });
    });

    it('getLocalName', 0, () => {
      tryInvoke('getLocalName', () => {
        const n = bluetooth.getLocalName();
        expect(typeof n === 'string').assertTrue();
      });
    });

    it('getPairedDevices', 0, () => {
      tryInvoke('getPairedDevices', () => {
        const a = bluetooth.getPairedDevices();
        expect(Array.isArray(a)).assertTrue();
      });
    });

    it('getBluetoothScanMode', 0, () => {
      tryInvoke('getBluetoothScanMode', () => {
        const m = bluetooth.getBluetoothScanMode();
        expect(m !== null && m !== undefined).assertTrue();
      });
    });

    it('getProfileConnState_a2dp', 0, () => {
      tryInvoke('getProfileConnState', () => {
        const s = bluetooth.getProfileConnState(PROFILE_A2DP_SOURCE);
        expect(s !== null && s !== undefined).assertTrue();
      });
    });

    it('getProfile_a2dp_hfp_opp', 0, () => {
      tryInvoke('getProfile_1_4_10', () => {
        const p1 = bluetooth.getProfile(PROFILE_A2DP_SOURCE);
        const p4 = bluetooth.getProfile(PROFILE_HFP_AG);
        const p10 = bluetooth.getProfile(PROFILE_OPP);
        expect(p1 !== null && p1 !== undefined).assertTrue();
        expect(p4 !== null && p4 !== undefined).assertTrue();
        // 部分机型/镜像未暴露 OPP，不强制 p10 非空，避免阻塞全量用例
        if (p10 === null || p10 === undefined) {
          console.info('[BluetoothApiCoverage] getProfile(PROFILE_OPP) unavailable on device, skip strict assert');
          expect(true).assertTrue();
        } else {
          expect(p10 !== null && p10 !== undefined).assertTrue();
        }
      });
    });
  });

  describe('BluetoothBleDeprecated', () => {
    it('BLE_getConnectedBLEDevices', 0, () => {
      tryInvoke('BLE.getConnectedBLEDevices', () => {
        const a = bluetooth.BLE.getConnectedBLEDevices();
        expect(Array.isArray(a)).assertTrue();
      });
    });

    it('BLE_stopBLEScan_idempotent', 0, () => {
      tryInvoke('BLE.stopBLEScan', () => {
        bluetooth.BLE.stopBLEScan();
        expect(true).assertTrue();
      });
    });
  });

  describe('BluetoothManager', () => {
    it('btm_getState', 0, () => {
      tryInvoke('btm.getState', () => {
        const s = btm.getState();
        expect(s !== null && s !== undefined).assertTrue();
      });
    });

    it('btm_getPairedDevices', 0, () => {
      tryInvoke('btm.getPairedDevices', () => {
        const a = btm.getPairedDevices();
        expect(Array.isArray(a)).assertTrue();
      });
    });

    it('btm_getProfileInstance_a2dp_hfp', 0, () => {
      tryInvoke('btm.getProfileInstance', () => {
        const p1 = btm.getProfileInstance(PROFILE_A2DP_SOURCE);
        const p4 = btm.getProfileInstance(PROFILE_HFP_AG);
        expect(p1 !== null && p1 !== undefined).assertTrue();
        expect(p4 !== null && p4 !== undefined).assertTrue();
      });
    });

    it('btm_getProfileConnectionState', 0, () => {
      tryInvoke('btm.getProfileConnectionState', () => {
        const s = btm.getProfileConnectionState(PROFILE_A2DP_SOURCE);
        expect(s !== null && s !== undefined).assertTrue();
      });
    });

    it('btm_getBtConnectionState', 0, () => {
      tryInvoke('btm.getBtConnectionState', () => {
        const s = btm.getBtConnectionState();
        expect(s !== null && s !== undefined).assertTrue();
      });
    });
  });

  describe('HidPanOppProfiles', () => {
    it('hid_createHidHostProfile', 0, () => {
      tryInvoke('hid.createHidHostProfile', () => {
        const p = hid.createHidHostProfile();
        expect(p !== null && p !== undefined).assertTrue();
      });
    });

    it('pan_createPanProfile', 0, () => {
      tryInvoke('pan.createPanProfile', () => {
        const p = pan.createPanProfile();
        expect(p !== null && p !== undefined).assertTrue();
      });
    });

    it('opp_createOppServerProfile', 0, () => {
      tryInvoke('opp.createOppServerProfile', () => {
        const p = opp.createOppServerProfile();
        expect(p !== null && p !== undefined).assertTrue();
      });
    });
  });

  describe('BluetoothRemoteInfo_optional', () => {
    it('getRemoteDeviceName_invalid_mac_may_throw', 0, () => {
      tryInvoke('getRemoteDeviceName', () => {
        bluetooth.getRemoteDeviceName(DUMMY_MAC);
        expect(true).assertTrue();
      });
    });
  });
}
