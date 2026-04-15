/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
/**
 * @file
 * @kit ConnectivityKit
 */
import type { AsyncCallback, Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';
import type common from './@ohos.bluetooth.common';
/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace ble
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10
 */
/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace ble
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @atomicservice
 * @since 12
 */
/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace ble
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare namespace ble {
    /**
     * Indicate the profile connection state.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicate the profile connection state.
     *
     * @typedef { constant.ProfileConnectionState } ProfileConnectionState
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicate the profile connection state.
     *
     * @typedef { constant.ProfileConnectionState } ProfileConnectionState
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    type ProfileConnectionState = constant.ProfileConnectionState;
    /**
     * Bluetooth device address.
     *
     * @typedef { common.BluetoothAddress } BluetoothAddress
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23
     */
    type BluetoothAddress = common.BluetoothAddress;
    /**
     * create a Gatt server instance.
     *
     * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * create a Gatt server instance.
     *
     * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * create a Gatt server instance.
     *
     * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function createGattServer(): GattServer;
    /**
     * create a Gatt client device instance.
     *
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * create a Gatt client device instance.
     *
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * create a Gatt client device instance.
     *
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function createGattClientDevice(deviceId: string): GattClientDevice;
    /**
     * Create a ble scanner instance. Each ble scanner instance can be independently started or stopped.
     *
     * @returns { BleScanner } Returns the promise object.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    function createBleScanner(): BleScanner;
    /**
     * Obtains the list of devices in the connected status.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Array<string> } Returns the list of device address.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Obtains the list of devices in the connected status.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Array<string> } Returns the list of device address.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    function getConnectedBLEDevices(): Array<string>;
    /**
     * Obtains the list of devices in the connected status.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BleProfile } profile - The profile in the BLE protocol.
     *     It is used to obtain the connected devices corresponding to the profile.
     * @returns { Array<string> } Returns the list of device address.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21
     */
    function getConnectedBLEDevices(profile: BleProfile): Array<string>;
    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
     * If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
     * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
     * If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
     * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
     * If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
     * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void;
    /**
     * Stops BLE scanning.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Stops BLE scanning.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Stops BLE scanning.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function stopBLEScan(): void;
    /**
     * Starts BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
     * @param { AdvertiseData } advData - Indicates the advertising data.
     * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Starts BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
     * @param { AdvertiseData } advData - Indicates the advertising data.
     * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Starts BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
     * @param { AdvertiseData } advData - Indicates the advertising data.
     * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Starts BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
     * @param { AdvertiseData } advData - Indicates the advertising data.
     * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    /**
     * Starts BLE advertising.
     * - If only {@link AdvertiseData#includeDeviceName} is set to true,
     *   the local name will be carried in the broadcast packet.
     * - If only {@link AdvertiseData#advertiseName} is set,
     *   its value will be used as a custom name and carried in the broadcast packet.
     * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
     *   the {@link AdvertiseData#advertiseName} property will take effect.
     * - To set {@link AdvertiseData#advertiseName},
     *   ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)
     * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
     * @param { AdvertiseData } advData - Indicates the advertising data.
     * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 23
     */
    function startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void;
    /**
     * Stops BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Stops BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Stops BLE advertising.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function stopAdvertising(): void;
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
     * @param { AsyncCallback<number> } callback - the callback of advertise ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
     * @param { AsyncCallback<number> } callback - the callback of advertise ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
     * @param { AsyncCallback<number> } callback - the callback of advertise ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 20
     */
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     * - If only {@link AdvertiseData#includeDeviceName} is set to true,
     *   the local name will be carried in the broadcast packet.
     * - If only {@link AdvertiseData#advertiseName} is set,
     *   its value will be used as a custom name and carried in the broadcast packet.
     * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
     *   the {@link AdvertiseData#advertiseName} property will take effect.
     * - To set {@link AdvertiseData#advertiseName},
     *   ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)
     * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
     * @param { AsyncCallback<number> } callback - the callback of advertise ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 23
     */
    function startAdvertising(advertisingParams: AdvertisingParams, callback: AsyncCallback<number>): void;
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
     * @returns { Promise<number> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
     * @returns { Promise<number> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
     * @returns { Promise<number> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 20
     */
    /**
     * Starts BLE advertising.
     * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
     * using the API {@link enableAdvertising} or {@link disableAdvertising}.
     * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
     * - If only {@link AdvertiseData#includeDeviceName} is set to true,
     *   the local name will be carried in the broadcast packet.
     * - If only {@link AdvertiseData#advertiseName} is set,
     *   its value will be used as a custom name and carried in the broadcast packet.
     * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
     *   the {@link AdvertiseData#advertiseName} property will take effect.
     * - To set {@link AdvertiseData#advertiseName},
     *   ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)
     * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
     * @returns { Promise<number> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 23
     */
    function startAdvertising(advertisingParams: AdvertisingParams): Promise<number>;
    /**
     * Enable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Enable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902055 - Invalid advertising id.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20
     */
    function enableAdvertising(advertisingEnableParams: AdvertisingEnableParams, callback: AsyncCallback<void>): void;
    /**
     * Enable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Enable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902055 - Invalid advertising id.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20
     */
    function enableAdvertising(advertisingEnableParams: AdvertisingEnableParams): Promise<void>;
    /**
     * Disable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Disable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902055 - Invalid advertising id.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20
     */
    function disableAdvertising(advertisingDisableParams: AdvertisingDisableParams, callback: AsyncCallback<void>): void;
    /**
     * Disable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Disable the advertising with a specific ID temporarily.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902055 - Invalid advertising id.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20
     */
    function disableAdvertising(advertisingDisableParams: AdvertisingDisableParams): Promise<void>;
    /**
     * Stops BLE advertising.
     * Completely stop the advertising corresponding to the ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } advertisingId - Indicates the ID for this BLE advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Stops BLE advertising.
     * Completely stop the advertising corresponding to the ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } advertisingId - Indicates the ID for this BLE advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    /**
     * Stops BLE advertising.
     * Completely stop the advertising corresponding to the ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } advertisingId - Indicates the ID for this BLE advertising.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902055 - Invalid advertising id.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 20
     */
    function stopAdvertising(advertisingId: number, callback: AsyncCallback<void>): void;
    /**
     * Stops BLE advertising.
     * Completely stop the advertising corresponding to the ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } advertisingId - Indicates the ID for this BLE advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Stops BLE advertising.
     * Completely stop the advertising corresponding to the ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } advertisingId - Indicates the ID for this BLE advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    /**
     * Stops BLE advertising.
     * Completely stop the advertising corresponding to the ID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } advertisingId - Indicates the ID for this BLE advertising.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902055 - Invalid advertising id.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 20
     */
    function stopAdvertising(advertisingId: number): Promise<void>;
    /**
     * Subscribing to advertising state change event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
     * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Subscribing to advertising state change event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
     * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    function on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>): void;
    /**
     * Unsubscribe from advertising state change event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
     * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Unsubscribe from advertising state change event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
     * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13
     */
    function off(type: 'advertisingStateChange', callback?: Callback<AdvertisingStateChangeInfo>): void;
    /**
     * Subscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>): void;
    /**
     * Unsubscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    function off(type: 'BLEDeviceFind', callback?: Callback<Array<ScanResult>>): void;
    /**
     * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
     *
     * @typedef GattServer
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
     *
     * @typedef GattServer
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
     *
     * @typedef GattServer
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    interface GattServer {
        /**
         * Adds a specified service to be hosted.
         * <p>The added service and its characteristics are provided by the local device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { GattService } service - Indicates the service to add.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Adds a specified service to be hosted.
         * <p>The added service and its characteristics are provided by the local device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { GattService } service - Indicates the service to add.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Adds a specified service to be hosted.
         * <p>The added service and its characteristics are provided by the local device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { GattService } service - Indicates the service to add.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        addService(service: GattService): void;
        /**
         * Removes a specified service from the list of GATT services provided by this device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } serviceUuid - Indicates the UUID of the service to remove.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Removes a specified service from the list of GATT services provided by this device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } serviceUuid - Indicates the UUID of the service to remove.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Removes a specified service from the list of GATT services provided by this device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } serviceUuid - Indicates the UUID of the service to remove.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        removeService(serviceUuid: string): void;
        /**
         * Obtain a specific GATT service by using a UUID.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } serviceUuid - Indicates the UUID of the service.
         * @returns { GattService } The GATT service has been obtained.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901008 - Gatt service is not found.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        getService(serviceUuid: string): GattService;
        /**
         * Obtain the list of GATT services registered by the application.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { GattService[] } The list of GATT service has been obtained.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        getServices(): GattService[];
        /**
         * Closes this {@code GattServer} object and unregisters its callbacks.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Closes this {@code GattServer} object and unregisters its callbacks.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Closes this {@code GattServer} object and unregisters its callbacks.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        close(): void;
        /**
         * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic, callback: AsyncCallback<void>): void;
        /**
         * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): Promise<void>;
        /**
         * Sends a response to a specified read or write request to a given BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Sends a response to a specified read or write request to a given BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Sends a response to a specified read or write request to a given BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        sendResponse(serverResponse: ServerResponse): void;
        /**
         * Get the connection state of a specific device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @returns { ProfileConnectionState } Connection state.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        getConnectedState(deviceId: string): ProfileConnectionState;
        /**
         * Read the phy associated with the connection.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @returns { Promise<PhyValue> } Promise used to return the phy value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        readPhy(deviceId: string): Promise<PhyValue>;
        /**
         * Set the preferred phy associated with the connection.
         * Whether the phy value will be changed depends on the strategy of the Bluetooth chip.
         * A successful call to this interface does not guarantee that the chip's phy value has been successfully set.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @param { PhyValue } phyValue - Indicates the phy to set.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        setPhy(deviceId: string, phyValue: PhyValue): Promise<void>;
        /**
         * Removes all services from the list of GATT services offered by this device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @atomicservice
         * @since 26.0.0
         */
        removeAllServices(): void;
        /**
         * Subscribe characteristic read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe characteristic read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe characteristic read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'characteristicRead', callback: Callback<CharacteristicReadRequest>): void;
        /**
         * Unsubscribe characteristic read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe characteristic read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe characteristic read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'characteristicRead', callback?: Callback<CharacteristicReadRequest>): void;
        /**
         * Subscribe characteristic write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe characteristic write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe characteristic write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteRequest>): void;
        /**
         * Unsubscribe characteristic write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe characteristic write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe characteristic write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteRequest>): void;
        /**
         * Subscribe descriptor read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe descriptor read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe descriptor read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'descriptorRead', callback: Callback<DescriptorReadRequest>): void;
        /**
         * Unsubscribe descriptor read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe descriptor read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe descriptor read event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'descriptorRead', callback?: Callback<DescriptorReadRequest>): void;
        /**
         * Subscribe descriptor write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe descriptor write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe descriptor write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'descriptorWrite', callback: Callback<DescriptorWriteRequest>): void;
        /**
         * Unsubscribe descriptor write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe descriptor write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe descriptor write event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteRequest>): void;
        /**
         * Subscribe server connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe server connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe server connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'connectionStateChange', callback: Callback<BLEConnectionChangeState>): void;
        /**
         * Unsubscribe server connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe server connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe server connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'connectionStateChange', callback?: Callback<BLEConnectionChangeState>): void;
        /**
         * Subscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 13
         */
        on(type: 'BLEMtuChange', callback: Callback<number>): void;
        /**
         * Unsubscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 13
         */
        off(type: 'BLEMtuChange', callback?: Callback<number>): void;
        /**
         * Subscribe phy updated event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { Callback<PhyValue> } callback - Callback used to listen for the phy updated event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        onBlePhyUpdate(callback: Callback<PhyValue>): void;
        /**
         * Unsubscribe phy updated event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { Callback<PhyValue> } [callback] - Callback used to listen for the phy updated event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        offBlePhyUpdate(callback?: Callback<PhyValue>): void;
    }
    /**
     * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
     *
     * @typedef GattClientDevice
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
     *
     * @typedef GattClientDevice
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
     *
     * @typedef GattClientDevice
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    interface GattClientDevice {
        /**
         * Connects to a BLE peripheral device.
         * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Connects to a BLE peripheral device.
         * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Connects to a BLE peripheral device.
         * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        connect(): void;
        /**
         * Disconnects from or stops an ongoing connection to a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Disconnects from or stops an ongoing connection to a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Disconnects from or stops an ongoing connection to a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        disconnect(): void;
        /**
         * Disables a BLE peripheral device.
         * <p> This method unregisters the device and clears the registered callbacks and handles.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Disables a BLE peripheral device.
         * <p> This method unregisters the device and clears the registered callbacks and handles.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Disables a BLE peripheral device.
         * <p> This method unregisters the device and clears the registered callbacks and handles.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        close(): void;
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        getDeviceName(callback: AsyncCallback<string>): void;
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<string> } Returns a string representation of the name if obtained;
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<string> } Returns a string representation of the name if obtained;
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<string> } Returns a string representation of the name if obtained;
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        getDeviceName(): Promise<string>;
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        getServices(callback: AsyncCallback<Array<GattService>>): void;
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        getServices(): Promise<Array<GattService>>;
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
         * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>;
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void;
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
         * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901000 - Read forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>;
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        writeCharacteristicValue(characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void>): void;
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        writeCharacteristicValue(characteristic: BLECharacteristic, writeType: GattWriteType): Promise<void>;
        /**
         * Writes the characteristic of a BLE peripheral device with context.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @param { GattWriteType } writeType - Write type of the characteristic.
         *     The interface currently only supports {@link GattWriteType#WRITE} mode.
         * @returns { Promise<GattRspContext> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi
         * @since 23
         */
        writeCharacteristicValueWithContext(characteristic: BLECharacteristic, writeType: GattWriteType): Promise<GattRspContext>;
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>): void;
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @throws { BusinessError } 2901004 - The connection is congested.
         * @throws { BusinessError } 2901005 - The connection is not encrypted.
         * @throws { BusinessError } 2901006 - The connection is not authenticated.
         * @throws { BusinessError } 2901007 - The connection is not authorized.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        writeDescriptorValue(descriptor: BLEDescriptor): Promise<void>;
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 20
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 22
         */
        getRssiValue(callback: AsyncCallback<number>): void;
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<number> } Returns the RSSI value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<number> } Returns the RSSI value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<number> } Returns the RSSI value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 20
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<number> } Returns the RSSI value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 22
         */
        getRssiValue(): Promise<number>;
        /**
         * Set the mtu size of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { number } mtu - The maximum transmission unit.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Set the mtu size of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { number } mtu - The maximum transmission unit.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Set the mtu size of a BLE peripheral device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { number } mtu - The maximum transmission unit.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        setBLEMtuSize(mtu: number): void;
        /**
         * Enables or disables notification of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that notification is enabled, and the value {@code false} indicates that indication is disabled.
         * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Enables or disables notification of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that notification is enabled, and the value {@code false} indicates that indication is disabled.
         * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Enables or disables notification of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that notification is enabled, and the value {@code false} indicates that indication is disabled.
         * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 20
         */
        setCharacteristicChangeNotification(characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @returns { Promise<void> } Returns the promise object.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @returns { Promise<void> } Returns the promise object.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @returns { Promise<void> } Returns the promise object.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 20
         */
        setCharacteristicChangeNotification(characteristic: BLECharacteristic, enable: boolean): Promise<void>;
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 20
         */
        setCharacteristicChangeIndication(characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @returns { Promise<void> } Returns the promise object.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @returns { Promise<void> } Returns the promise object.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Enables or disables indication of a characteristic when value changed.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
         * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
         * that indication is enabled, and the value {@code false} indicates that indication is disabled.
         * @returns { Promise<void> } Returns the promise object.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 20
         */
        setCharacteristicChangeIndication(characteristic: BLECharacteristic, enable: boolean): Promise<void>;
        /**
         * Get the connection status of a specific device.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { ProfileConnectionState } Connection state.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        getConnectedState(): ProfileConnectionState;
        /**
         * Update the connection parameters of the current GATT link to save power or improve transmission performance.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { ConnectionParam } param - GATT connection parameters.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        updateConnectionParam(param: ConnectionParam): Promise<void>;
        /**
         * Read the phy associated with the connection.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<PhyValue> } Promise used to return the phy value read.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        readPhy(): Promise<PhyValue>;
        /**
         * Set the preferred phy associated with the connection.
         * Whether the phy value will be changed depends on the strategy of the Bluetooth chip.
         * A successful call to this interface does not guarantee that the chip's phy value has been successfully set.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { PhyValue } phyValue - Indicates the phy to set.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2901003 - The connection is not established.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        setPhy(phyValue: PhyValue): Promise<void>;
        /**
         * Subscribe characteristic value changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe characteristic value changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void;
        /**
         * Unsubscribe characteristic value changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe characteristic value changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void;
        /**
         * Subscribe client connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe client connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe client connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>): void;
        /**
         * Unsubscribe client connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe client connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe client connection state changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectionChangeState>): void;
        /**
         * Subscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Subscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Subscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        on(type: 'BLEMtuChange', callback: Callback<number>): void;
        /**
         * Unsubscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        /**
         * Unsubscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @atomicservice
         * @since 12
         */
        /**
         * Unsubscribe mtu changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 13
         */
        off(type: 'BLEMtuChange', callback?: Callback<number>): void;
        /**
         * Subscribe to GATT service changed event. Receiving this event indicates that
         * the peer GATT database has been refreshed, and it is necessary to re-fetch the GATT service list.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'serviceChange' } type - Type of the service changed event to listen for.
         * @param { Callback<void> } callback - Callback used to listen for the service changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        on(type: 'serviceChange', callback: Callback<void>): void;
        /**
         * Unsubscribe to GATT service changed event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'serviceChange' } type - Type of the service changed event to listen for.
         * @param { Callback<void> } [callback] - Callback used to listen for the service changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @since 22
         */
        off(type: 'serviceChange', callback?: Callback<void>): void;
        /**
         * Subscribe phy updated event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { Callback<PhyValue> } callback - Callback used to listen for the phy updated event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        onBlePhyUpdate(callback: Callback<PhyValue>): void;
        /**
         * Unsubscribe phy updated event.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { Callback<PhyValue> } [callback] - Callback used to listen for the phy updated event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @stagemodelonly
         * @since 23
         */
        offBlePhyUpdate(callback?: Callback<PhyValue>): void;
    }
    /**
     * Manages the ble scanner.
     * Before calling a ble scanner method, you must use {@link createBleScanner} to create an BleScanner instance.
     *
     * @typedef BleScanner
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    interface BleScanner {
        /**
         * Starts scanning for specified BLE devices with filters.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
         * If you do not want to use filter, set this parameter to {@code null}.
         * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value,
         * the default value will be used. {@link ScanOptions#interval} set to 0,
         * and {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
         * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
         * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
         * and {@link ScanOptions#reportMode} set to {@link ScanReportMode#NORMAL}.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900009 - Fails to start scan as it is out of hardware resources.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @throws { BusinessError } 2902050 - Failed to start scan as Ble scan is already started by the app.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 15
         */
        startScan(filters: Array<ScanFilter>, options?: ScanOptions): Promise<void>;
        /**
         * Stops BLE scanning.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 15
         */
        stopScan(): Promise<void>;
        /**
         * Subscribe BLE scan result.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
         * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 15
         */
        on(type: 'BLEDeviceFind', callback: Callback<ScanReport>): void;
        /**
         * Unsubscribe BLE scan result.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
         * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @crossplatform
         * @atomicservice
         * @since 15
         */
        off(type: 'BLEDeviceFind', callback?: Callback<ScanReport>): void;
    }
    /**
     * Describes the Gatt service.
     *
     * @typedef GattService
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Describes the Gatt service.
     *
     * @typedef GattService
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Describes the Gatt service.
     *
     * @typedef GattService
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    interface GattService {
        /**
