/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace bluetoothManager
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 9
 * @deprecated since 10
 */
declare namespace bluetoothManager {
    /**
     * Obtains the Bluetooth status of a device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { BluetoothState } Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},
     * {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON}, {@link BluetoothState#STATE_TURNING_OFF},
     * {@link BluetoothState#STATE_BLE_TURNING_ON}, {@link BluetoothState#STATE_BLE_ON},
     * or {@link BluetoothState#STATE_BLE_TURNING_OFF}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access#getState
     */
    /**
     * Obtains the Bluetooth status of a device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { BluetoothState } Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},
     * {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON}, {@link BluetoothState#STATE_TURNING_OFF},
     * {@link BluetoothState#STATE_BLE_TURNING_ON}, {@link BluetoothState#STATE_BLE_ON},
     * or {@link BluetoothState#STATE_BLE_TURNING_OFF}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access#getState
     */
    function getState(): BluetoothState;
    /**
     * Get the local device connection state to any profile of any remote device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { ProfileConnectionState } One of {@link ProfileConnectionState#STATE_DISCONNECTED},
     * {@link ProfileConnectionState#STATE_CONNECTING}, {@link ProfileConnectionState#STATE_CONNECTED},
     * {@link ProfileConnectionState#STATE_DISCONNECTING}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getProfileConnectionState
     */
    /**
     * Get the local device connection state to any profile of any remote device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { ProfileConnectionState } One of {@link ProfileConnectionState#STATE_DISCONNECTED},
     * {@link ProfileConnectionState#STATE_CONNECTING}, {@link ProfileConnectionState#STATE_CONNECTED},
     * {@link ProfileConnectionState#STATE_DISCONNECTING}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getProfileConnectionState
     */
    function getBtConnectionState(): ProfileConnectionState;
    /**
     * Starts pairing with a remote Bluetooth device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } deviceId - The address of the remote device to pair.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#pairDevice
     */
    /**
     * Starts pairing with a remote Bluetooth device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - The address of the remote device to pair.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#pairDevice
     */
    function pairDevice(deviceId: string): void;
    /**
     * Remove a paired remote device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } deviceId - The address of the remote device to be removed.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#cancelPairedDevice
     */
    /**
     * Remove a paired remote device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - The address of the remote device to be removed.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#cancelPairedDevice
     */
    function cancelPairedDevice(deviceId: string): void;
    /**
     * Obtains the name of a peer Bluetooth device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } deviceId - The address of the remote device.
     * @returns { string } Returns the device name in character string format.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getRemoteDeviceName
     */
    /**
     * Obtains the name of a peer Bluetooth device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - The address of the remote device.
     * @returns { string } Returns the device name in character string format.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getRemoteDeviceName
     */
    function getRemoteDeviceName(deviceId: string): string;
    /**
     * Obtains the class of a peer Bluetooth device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } deviceId - The address of the remote device.
     * @returns { DeviceClass } The class of the remote device, {@link DeviceClass}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getRemoteDeviceClass
     */
    /**
     * Obtains the class of a peer Bluetooth device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - The address of the remote device.
     * @returns { DeviceClass } The class of the remote device, {@link DeviceClass}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getRemoteDeviceClass
     */
    function getRemoteDeviceClass(deviceId: string): DeviceClass;
    /**
     * Enables Bluetooth on a device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access#enableBluetooth
     */
    /**
     * Enables Bluetooth on a device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access#enableBluetooth
     */
    function enableBluetooth(): void;
    /**
     * Disables Bluetooth on a device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access#disableBluetooth
     */
    /**
     * Disables Bluetooth on a device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access#disableBluetooth
     */
    function disableBluetooth(): void;
    /**
     * Obtains the Bluetooth local name of a device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { string } Returns the name the device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getLocalName
     */
    /**
     * Obtains the Bluetooth local name of a device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { string } Returns the name the device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getLocalName
     */
    function getLocalName(): string;
    /**
     * Obtains the list of Bluetooth devices that have been paired with the current device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { Array<string> } Returns a list of paired Bluetooth devices's address.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getPairedDevices
     */
    /**
     * Obtains the list of Bluetooth devices that have been paired with the current device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Array<string> } Returns a list of paired Bluetooth devices's address.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getPairedDevices
     */
    function getPairedDevices(): Array<string>;
    /**
     * Obtains the connection state of profile.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { ProfileId } profileId - The profile id.
     * @returns { ProfileConnectionState } Returns the connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getProfileConnectionState
     */
    /**
     * Obtains the connection state of profile.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ProfileId } profileId - The profile id.
     * @returns { ProfileConnectionState } Returns the connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getProfileConnectionState
     */
    function getProfileConnectionState(profileId: ProfileId): ProfileConnectionState;
    /**
     * Sets the confirmation of pairing with a certain device.
     *
     * @permission ohos.permission.MANAGE_BLUETOOTH
     * @param { string } device - The address of the remote device.
     * @param { boolean } accept - Indicates whether to accept the pairing request, {@code true} indicates accept or {@code false} otherwise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#setDevicePairingConfirmation
     */
    /**
     * Sets the confirmation of pairing with a certain device.
     * The permission required by this interface is changed from MANAGE_BLUETOOTH to ACCESS_BLUETOOTH and MANAGE_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } device - The address of the remote device.
     * @param { boolean } accept - Indicates whether to accept the pairing request, {@code true} indicates accept or {@code false} otherwise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#setDevicePairingConfirmation
     */
    function setDevicePairingConfirmation(device: string, accept: boolean): void;
    /**
     * Sets the Bluetooth friendly name of a device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } name - Indicates a valid Bluetooth name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#setLocalName
     */
    /**
     * Sets the Bluetooth friendly name of a device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } name - Indicates a valid Bluetooth name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#setLocalName
     */
    function setLocalName(name: string): void;
    /**
     * Sets the Bluetooth scan mode for a device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { ScanMode } mode - Indicates the Bluetooth scan mode to set, {@link ScanMode}.
     * @param { number } duration - Indicates the duration in seconds, in which the host is discoverable.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#setBluetoothScanMode
     */
    /**
     * Sets the Bluetooth scan mode for a device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ScanMode } mode - Indicates the Bluetooth scan mode to set, {@link ScanMode}.
     * @param { number } duration - Indicates the duration in seconds, in which the host is discoverable.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#setBluetoothScanMode
     */
    function setBluetoothScanMode(mode: ScanMode, duration: number): void;
    /**
     * Obtains the Bluetooth scanning mode of a device.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { ScanMode } Returns the Bluetooth scanning mode, {@link ScanMode}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getBluetoothScanMode
     */
    /**
     * Obtains the Bluetooth scanning mode of a device.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { ScanMode } Returns the Bluetooth scanning mode, {@link ScanMode}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#getBluetoothScanMode
     */
    function getBluetoothScanMode(): ScanMode;
    /**
     * Starts scanning Bluetooth devices.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.LOCATION
     *     and ohos.permission.APPROXIMATELY_LOCATION
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#startBluetoothDiscovery
     */
    /**
     * Starts scanning Bluetooth devices.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH and LOCATION and APPROXIMATELY_LOCATION to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#startBluetoothDiscovery
     */
    function startBluetoothDiscovery(): void;
    /**
     * Stops Bluetooth device scanning.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#stopBluetoothDiscovery
     */
    /**
     * Stops Bluetooth device scanning.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection#stopBluetoothDiscovery
     */
    function stopBluetoothDiscovery(): void;
    /**
     * Subscribe the event reported when a remote Bluetooth device is discovered.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'bluetoothDeviceFind' } type - Type of the discovering event to listen for.
     * @param { Callback<Array<string>> } callback - Callback used to listen for the discovering event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.on#event:bluetoothDeviceFind
     */
    /**
     * Subscribe the event reported when a remote Bluetooth device is discovered.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'bluetoothDeviceFind' } type - Type of the discovering event to listen for.
     * @param { Callback<Array<string>> } callback - Callback used to listen for the discovering event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.on#event:bluetoothDeviceFind
     */
    function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void;
    /**
     * Unsubscribe the event reported when a remote Bluetooth device is discovered.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'bluetoothDeviceFind' } type - Type of the discovering event to listen for.
     * @param { Callback<Array<string>> } callback - Callback used to listen for the discovering event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.off#event:bluetoothDeviceFind
     */
    /**
     * Unsubscribe the event reported when a remote Bluetooth device is discovered.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'bluetoothDeviceFind' } type - Type of the discovering event to listen for.
     * @param { Callback<Array<string>> } callback - Callback used to listen for the discovering event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.off#event:bluetoothDeviceFind
     */
    function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void;
    /**
     * Subscribe the event reported when a remote Bluetooth device is bonded.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'bondStateChange' } type - Type of the bond state event to listen for.
     * @param { Callback<BondStateParam> } callback - Callback used to listen for the bond state event, {@link BondStateParam}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.on#event:bondStateChange
     */
    /**
     * Subscribe the event reported when a remote Bluetooth device is bonded.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'bondStateChange' } type - Type of the bond state event to listen for.
     * @param { Callback<BondStateParam> } callback - Callback used to listen for the bond state event, {@link BondStateParam}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.on#event:bondStateChange
     */
    function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void;
    /**
     * Unsubscribe the event reported when a remote Bluetooth device is bonded.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'bondStateChange' } type - Type of the bond state event to listen for.
     * @param { Callback<BondStateParam> } callback - Callback used to listen for the bond state event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.off#event:bondStateChange
     */
    /**
     * Unsubscribe the event reported when a remote Bluetooth device is bonded.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'bondStateChange' } type - Type of the bond state event to listen for.
     * @param { Callback<BondStateParam> } callback - Callback used to listen for the bond state event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.off#event:bondStateChange
     */
    function off(type: 'bondStateChange', callback?: Callback<BondStateParam>): void;
    /**
     * Subscribe the event of a pairing request from a remote Bluetooth device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { 'pinRequired' } type - Type of the pairing request event to listen for.
     * @param { Callback<PinRequiredParam> } callback - Callback used to listen for the pairing request event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.on#event:pinRequired
     */
    /**
     * Subscribe the event of a pairing request from a remote Bluetooth device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'pinRequired' } type - Type of the pairing request event to listen for.
     * @param { Callback<PinRequiredParam> } callback - Callback used to listen for the pairing request event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.on#event:pinRequired
     */
    function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void;
    /**
     * Unsubscribe the event of a pairing request from a remote Bluetooth device.
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { 'pinRequired' } type - Type of the pairing request event to listen for.
     * @param { Callback<PinRequiredParam> } callback - Callback used to listen for the pairing request event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.off#event:pinRequired
     */
    /**
     * Unsubscribe the event of a pairing request from a remote Bluetooth device.
     * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'pinRequired' } type - Type of the pairing request event to listen for.
     * @param { Callback<PinRequiredParam> } callback - Callback used to listen for the pairing request event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.connection/connection.off#event:pinRequired
     */
    function off(type: 'pinRequired', callback?: Callback<PinRequiredParam>): void;
    /**
     * Subscribe the event reported when the Bluetooth state changes.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
     * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access.on#event:stateChange
     */
    /**
     * Subscribe the event reported when the Bluetooth state changes.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
     * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access.on#event:stateChange
     */
    function on(type: 'stateChange', callback: Callback<BluetoothState>): void;
    /**
     * Unsubscribe the event reported when the Bluetooth state changes.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
     * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access.off#event:stateChange
     */
    /**
     * Unsubscribe the event reported when the Bluetooth state changes.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
     * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.access/access.off#event:stateChange
     */
    function off(type: 'stateChange', callback?: Callback<BluetoothState>): void;
    /**
     * Creates a Bluetooth server listening socket.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } name - Indicates the service name.
     * @param { SppOption } option - Indicates the listen parameters {@link SppOption}.
     * @param { AsyncCallback<number> } callback - Callback used to return a server socket ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppListen
     */
    /**
     * Creates a Bluetooth server listening socket.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } name - Indicates the service name.
     * @param { SppOption } option - Indicates the listen parameters {@link SppOption}.
     * @param { AsyncCallback<number> } callback - Callback used to return a server socket ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppListen
     */
    function sppListen(name: string, option: SppOption, callback: AsyncCallback<number>): void;
    /**
     * Waits for a remote device to connect.
     *
     * @param { number } serverSocket - Indicates the server socket ID, returned by {@link sppListen}.
     * @param { AsyncCallback<number> } callback - Callback used to return a client socket ID.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppAccept
     */
    function sppAccept(serverSocket: number, callback: AsyncCallback<number>): void;
    /**
     * Connects to a remote device over the socket.
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } device - The address of the remote device to connect.
     * @param { SppOption } option - Indicates the connect parameters {@link SppOption}.
     * @param { AsyncCallback<number> } callback - Callback used to return a client socket ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppConnect
     */
    /**
     * Connects to a remote device over the socket.
     * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } device - The address of the remote device to connect.
     * @param { SppOption } option - Indicates the connect parameters {@link SppOption}.
     * @param { AsyncCallback<number> } callback - Callback used to return a client socket ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppConnect
     */
    function sppConnect(device: string, option: SppOption, callback: AsyncCallback<number>): void;
    /**
     * Disables an spp server socket and releases related resources.
     *
     * @param { number } socket - Indicates the server socket ID, returned by {@link sppListen}.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppCloseServerSocket
     */
    function sppCloseServerSocket(socket: number): void;
    /**
     * Disables an spp client socket and releases related resources.
     *
     * @param { number } socket - Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppCloseClientSocket
     */
    function sppCloseClientSocket(socket: number): void;
    /**
     * Write data through the socket.
     *
     * @param { number } clientSocket - Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}.
     * @param { ArrayBuffer } data - Indicates the data to write.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2901054 - IO error.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket#sppWrite
     */
    function sppWrite(clientSocket: number, data: ArrayBuffer): void;
    /**
     * Subscribe the event reported when data is read from the socket.
     *
     * @param { 'sppRead' } type - Type of the spp read event to listen for.
     * @param { number } clientSocket - Client socket ID, which is obtained by sppAccept or sppConnect.
     * @param { Callback<ArrayBuffer> } callback - Callback used to listen for the spp read event.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2901054 - IO error.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket.on#event:sppRead
     */
    function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void;
    /**
     * Unsubscribe the event reported when data is read from the socket.
     *
     * @param { 'sppRead' } type - Type of the spp read event to listen for.
     * @param { number } clientSocket - Client socket ID, which is obtained by sppAccept or sppConnect.
     * @param { Callback<ArrayBuffer> } callback - Callback used to listen for the spp read event.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.socket/socket.off#event:sppRead
     */
    function off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void;
    /**
     * Obtains the instance of profile.
     *
     * @param { ProfileId } profileId - The profile id..
     * @returns { A2dpSourceProfile | HandsFreeAudioGatewayProfile | HidHostProfile | PanProfile } Returns the instance of profile.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     */
    function getProfileInstance(profileId: ProfileId): A2dpSourceProfile | HandsFreeAudioGatewayProfile | HidHostProfile | PanProfile;
    /**
     * Base interface of profile.
     *
     * @typedef BaseProfile
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.baseProfile/baseProfile.BaseProfile
     */
    interface BaseProfile {
        /**
         * Obtains the connected devices list of profile.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @returns { Array<string> } Returns the address of connected devices list.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.baseProfile/baseProfile#getConnectedDevices
         */
        /**
         * Obtains the connected devices list of profile.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Array<string> } Returns the address of connected devices list.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.baseProfile/baseProfile#getConnectedDevices
         */
        getConnectionDevices(): Array<string>;
        /**
         * Obtains the profile state of device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { string } device - The address of bluetooth device.
         * @returns { ProfileConnectionState } Returns {@link ProfileConnectionState} of device.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.baseProfile/baseProfile#getConnectionState
         */
        /**
         * Obtains the profile state of device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of bluetooth device.
         * @returns { ProfileConnectionState } Returns {@link ProfileConnectionState} of device.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.baseProfile/baseProfile#getConnectionState
         */
        getDeviceState(device: string): ProfileConnectionState;
    }
    /**
     * Manager a2dp source profile.
     *
     * @typedef A2dpSourceProfile
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile
     */
    interface A2dpSourceProfile extends BaseProfile {
        /**
         * Connect to device with a2dp.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { string } device - The address of the remote device to connect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile#connect
         */
        /**
         * Connect to device with a2dp.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of the remote device to connect.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile#connect
         */
        connect(device: string): void;
        /**
         * Disconnect to device with a2dp.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile#disconnect
         */
        /**
         * Disconnect to device with a2dp.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile#disconnect
         */
        disconnect(device: string): void;
        /**
         * Subscribe the event reported when the profile connection state changes .
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile.on#event:connectionStateChange
         */
        /**
         * Subscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile.on#event:connectionStateChange
         */
        on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;
        /**
         * Unsubscribe the event reported when the profile connection state changes .
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile.off#event:connectionStateChange
         */
        /**
         * Unsubscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile.off#event:connectionStateChange
         */
        off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;
        /**
         * Obtains the playing state of device.
         *
         * @param { string } device - The address of the remote device.
         * @returns { PlayingState } Returns {@link PlayingState} of the remote device.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile#getPlayingState
         */
        /**
         * Obtains the playing state of device.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of the remote device.
         * @returns { PlayingState } Returns {@link PlayingState} of the remote device.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.a2dp/a2dp.A2dpSourceProfile#getPlayingState
         */
        getPlayingState(device: string): PlayingState;
    }
    /**
     * Manager handsfree AG profile.
     *
     * @typedef HandsFreeAudioGatewayProfile
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile
     */
    interface HandsFreeAudioGatewayProfile extends BaseProfile {
        /**
         * Connect to device with hfp.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { string } device - The address of the remote device to connect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile#connect
         */
        /**
         * Connect to device with hfp.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of the remote device to connect.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile#connect
         */
        connect(device: string): void;
        /**
         * Disconnect to device with hfp.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile#disconnect
         */
        /**
         * Disconnect to device with hfp.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile#disconnect
         */
        disconnect(device: string): void;
        /**
         * Subscribe the event reported when the profile connection state changes .
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile.on#event:connectionStateChange
         */
        /**
         * Subscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile.on#event:connectionStateChange
         */
        on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;
        /**
         * Unsubscribe the event reported when the profile connection state changes .
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile.off#event:connectionStateChange
         */
        /**
         * Unsubscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile.off#event:connectionStateChange
         */
        off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;
    }
    /**
     * Manager hid host profile.
     *
     * @typedef HidHostProfile
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.hid/hid.HidHostProfile
     */
    interface HidHostProfile extends BaseProfile {
        /**
         * Connect to device with hid host.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { string } device - The address of the remote device to connect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile#connect
         */
        /**
         * Connect to device with hid host.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH and MANAGE_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
         * @param { string } device - The address of the remote device to connect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile#connect
         */
        connect(device: string): void;
        /**
         * Disconnect to device with hid host.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile#disconnect
         */
        /**
         * Disconnect to device with hid host.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH and MANAGE_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile#disconnect
         */
        disconnect(device: string): void;
        /**
         * Subscribe the event reported when the profile connection state changes .
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile.on#event:connectionStateChange
         */
        /**
         * Subscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile.on#event:connectionStateChange
         */
        on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;
        /**
         * Unsubscribe the event reported when the profile connection state changes.
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for.
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile.off#event:connectionStateChange
         */
        /**
         * Unsubscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for.
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.hid/hid.HidHostProfile.off#event:connectionStateChange
         */
        off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;
    }
    /**
     * Manager pan profile.
     *
     * @typedef PanProfile
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.pan/pan.PanProfile
     */
    interface PanProfile extends BaseProfile {
        /**
         * Disconnect to device with pan.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile#disconnect
         */
        /**
         * Disconnect to device with pan.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } device - The address of the remote device to disconnect.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile#disconnect
         */
        disconnect(device: string): void;
        /**
         * Subscribe the event reported when the profile connection state changes .
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile.on#event:connectionStateChange
         */
        /**
         * Subscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for .
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile.on#event:connectionStateChange
         */
        on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;
        /**
         * Unsubscribe the event reported when the profile connection state changes.
         *
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for.
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile.off#event:connectionStateChange
         */
        /**
         * Unsubscribe the event reported when the profile connection state changes.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for.
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile.off#event:connectionStateChange
         */
        off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;
        /**
         * Enable bluetooth tethering.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { boolean } enable - Specifies whether to enable tethering. The value {@code true} indicates
         * that tethering is enabled, and the value {@code false} indicates that tethering is disabled.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile#setTethering
         */
        /**
         * Enable bluetooth tethering.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH and MANAGE_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
         * @param { boolean } enable - Specifies whether to enable tethering. The value {@code true} indicates
         * that tethering is enabled, and the value {@code false} indicates that tethering is disabled.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900004 - Profile not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile#setTethering
         */
        setTethering(enable: boolean): void;
        /**
         * Obtains the tethering enable or disable.
         *
         * @returns { boolean } Returns the value {@code true} is tethering is on, returns {@code false} otherwise.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile#isTetheringOn
         */
        /**
         * Obtains the tethering enable or disable.
         * The permission required by this interface is changed to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { boolean } Returns the value {@code true} is tethering is on, returns {@code false} otherwise.
         * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @systemapi Hide this for inner system use.
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.pan/pan.PanProfile#isTetheringOn
         */
        isTetheringOn(): boolean;
    }
    /**
     * Provides methods to operate or manage Bluetooth.
     *
     * @namespace BLE
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble
     */
    namespace BLE {
        /**
         * create a JavaScript Gatt server instance.
         *
         * @returns { GattServer } Returns a JavaScript Gatt server instance {@code GattServer}.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#createGattServer
         */
        function createGattServer(): GattServer;
        /**
         * create a JavaScript Gatt client device instance.
         *
         * @param { string } deviceId - The address of the remote device.
         * @returns { GattClientDevice } Returns a JavaScript Gatt client device instance {@code GattClientDevice}.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#createGattClientDevice
         */
        function createGattClientDevice(deviceId: string): GattClientDevice;
        /**
         * Obtains the list of devices in the connected status.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @returns { Array<string> } Returns the list of device address.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#getConnectedBLEDevices
         */
        /**
         * Obtains the list of devices in the connected status.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#getConnectedBLEDevices
         */
        function getConnectedBLEDevices(): Array<string>;
        /**
         * Starts scanning for specified BLE devices with filters.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH and ohos.permission.LOCATION
         *     and ohos.permission.APPROXIMATELY_LOCATION
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#startBLEScan
         */
        /**
         * Starts scanning for specified BLE devices with filters.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH and MANAGE_BLUETOOTH and LOCATION to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#startBLEScan
         */
        function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void;
        /**
         * Stops BLE scanning.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#stopBLEScan
         */
        /**
         * Stops BLE scanning.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#stopBLEScan
         */
        function stopBLEScan(): void;
        /**
         * Subscribe BLE scan result.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
         * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.on#event:BLEDeviceFind
         */
        /**
         * Subscribe BLE scan result.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.on#event:BLEDeviceFind
         */
        function on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>): void;
        /**
         * Unsubscribe BLE scan result.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
         * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.off#event:BLEDeviceFind
         */
        /**
         * Unsubscribe BLE scan result.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.off#event:BLEDeviceFind
         */
        function off(type: 'BLEDeviceFind', callback?: Callback<Array<ScanResult>>): void;
    }
    /**
     * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
     *
     * @typedef GattServer
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.GattServer
     */
    interface GattServer {
        /**
         * Starts BLE advertising.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
         * If you need to use the default value, set this parameter to {@code null}.
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#startAdvertising
         */
        /**
         * Starts BLE advertising.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
         * If you need to use the default value, set this parameter to {@code null}.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#startAdvertising
         */
        startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void;
        /**
         * Stops BLE advertising.
         *
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#stopAdvertising
         */
        /**
         * Stops BLE advertising.
         * The permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble#stopAdvertising
         */
        stopAdvertising(): void;
        /**
         * Adds a specified service to be hosted.
         * <p>The added service and its characteristics are provided by the local device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { GattService } service - Indicates the service to add.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#addService
         */
        /**
         * Adds a specified service to be hosted.
         * <p>The added service and its characteristics are provided by the local device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#addService
         */
        addService(service: GattService): void;
        /**
         * Removes a specified service from the list of GATT services provided by this device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#removeService
         */
        /**
         * Removes a specified service from the list of GATT services provided by this device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#removeService
         */
        removeService(serviceUuid: string): void;
        /**
         * Closes this {@code GattServer} object and unregisters its callbacks.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#close
         */
        /**
         * Closes this {@code GattServer} object and unregisters its callbacks.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#close
         */
        close(): void;
        /**
         * Sends a notification of a change in a specified local characteristic.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { string } deviceId - Indicates the address of the BLE peripheral device to receive the notification.
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#notifyCharacteristicChanged
         */
        /**
         * Sends a notification of a change in a specified local characteristic.
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates the address of the BLE peripheral device to receive the notification.
         * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#notifyCharacteristicChanged
         */
        notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): void;
        /**
         * Sends a response to a specified read or write request to a given BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#sendResponse
         */
        /**
         * Sends a response to a specified read or write request to a given BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer#sendResponse
         */
        sendResponse(serverResponse: ServerResponse): void;
        /**
         * Subscribe characteristic read event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:characteristicRead
         */
        /**
         * Subscribe characteristic read event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:characteristicRead
         */
        on(type: 'characteristicRead', callback: Callback<CharacteristicReadRequest>): void;
        /**
         * Unsubscribe characteristic read event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
         * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:characteristicRead
         */
        /**
         * Unsubscribe characteristic read event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:characteristicRead
         */
        off(type: 'characteristicRead', callback?: Callback<CharacteristicReadRequest>): void;
        /**
         * Subscribe characteristic write event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:characteristicWrite
         */
        /**
         * Subscribe characteristic write event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:characteristicWrite
         */
        on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteRequest>): void;
        /**
         * Unsubscribe characteristic write event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
         * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:characteristicWrite
         */
        /**
         * Unsubscribe characteristic write event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:characteristicWrite
         */
        off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteRequest>): void;
        /**
         * Subscribe descriptor read event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:descriptorRead
         */
        /**
         * Subscribe descriptor read event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:descriptorRead
         */
        on(type: 'descriptorRead', callback: Callback<DescriptorReadRequest>): void;
        /**
         * Unsubscribe descriptor read event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
         * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:descriptorRead
         */
        /**
         * Unsubscribe descriptor read event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:descriptorRead
         */
        off(type: 'descriptorRead', callback?: Callback<DescriptorReadRequest>): void;
        /**
         * Subscribe descriptor write event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:descriptorWrite
         */
        /**
         * Subscribe descriptor write event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:descriptorWrite
         */
        on(type: 'descriptorWrite', callback: Callback<DescriptorWriteRequest>): void;
        /**
         * Unsubscribe descriptor write event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
         * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:descriptorWrite
         */
        /**
         * Unsubscribe descriptor write event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:descriptorWrite
         */
        off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteRequest>): void;
        /**
         * Subscribe server connection state changed event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'connectStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:connectionStateChange
         */
        /**
         * Subscribe server connection state changed event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.on#event:connectionStateChange
         */
        on(type: 'connectStateChange', callback: Callback<BLEConnectChangedState>): void;
        /**
         * Unsubscribe server connection state changed event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'connectStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:connectionStateChange
         */
        /**
         * Unsubscribe server connection state changed event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattServer.off#event:connectionStateChange
         */
        off(type: 'connectStateChange', callback?: Callback<BLEConnectChangedState>): void;
    }
    /**
     * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
     *
     * @typedef GattClientDevice
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.GattClientDevice
     */
    interface GattClientDevice {
        /**
         * Connects to a BLE peripheral device.
         * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#connect
         */
        /**
         * Connects to a BLE peripheral device.
         * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#connect
         */
        connect(): void;
        /**
         * Disconnects from or stops an ongoing connection to a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#disconnect
         */
        /**
         * Disconnects from or stops an ongoing connection to a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#disconnect
         */
        disconnect(): void;
        /**
         * Disables a BLE peripheral device.
         * <p> This method unregisters the device and clears the registered callbacks and handles.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#close
         */
        /**
         * Disables a BLE peripheral device.
         * <p> This method unregisters the device and clears the registered callbacks and handles.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth disabled.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#close
         */
        close(): void;
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getDeviceName
         */
        /**
         * Obtains the name of BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getDeviceName
         */
        getDeviceName(callback: AsyncCallback<string>): void;
        /**
         * Obtains the name of BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @returns { Promise<string> } Returns a string representation of the name if obtained;
         * returns {@code null} if the name fails to be obtained or the name does not exist.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getDeviceName
         */
        /**
         * Obtains the name of BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Promise<string> } Returns a string representation of the name if obtained;
         * returns {@code null} if the name fails to be obtained or the name does not exist.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getDeviceName
         */
        getDeviceName(): Promise<string>;
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getServices
         */
        /**
         * Starts discovering services.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getServices
         */
        getServices(callback: AsyncCallback<Array<GattService>>): void;
        /**
         * Starts discovering services.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getServices
         */
        /**
         * Starts discovering services.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getServices
         */
        getServices(): Promise<Array<GattService>>;
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readCharacteristicValue
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readCharacteristicValue
         */
        readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;
        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readCharacteristicValue
         */
        /**
         * Reads the characteristic of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readCharacteristicValue
         */
        readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>;
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readDescriptorValue
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readDescriptorValue
         */
        readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void;
        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
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
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readDescriptorValue
         */
        /**
         * Reads the descriptor of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#readDescriptorValue
         */
        readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>;
        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#writeCharacteristicValue
         */
        /**
         * Writes the characteristic of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#writeCharacteristicValue
         */
        writeCharacteristicValue(characteristic: BLECharacteristic): void;
        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#writeDescriptorValue
         */
        /**
         * Writes the descriptor of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2901001 - Write forbidden.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#writeDescriptorValue
         */
        writeDescriptorValue(descriptor: BLEDescriptor): void;
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getRssiValue
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getRssiValue
         */
        getRssiValue(callback: AsyncCallback<number>): void;
        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @returns { Promise<number> } Returns the RSSI value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getRssiValue
         */
        /**
         * Get the RSSI value of this BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
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
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#getRssiValue
         */
        getRssiValue(): Promise<number>;
        /**
         * Set the mtu size of a BLE peripheral device.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { number } mtu - The maximum transmission unit.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#setBLEMtuSize
         */
        /**
         * Set the mtu size of a BLE peripheral device.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { number } mtu - The maximum transmission unit.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#setBLEMtuSize
         */
        setBLEMtuSize(mtu: number): void;
        /**
         * Enables or disables notification of a characteristic when value changed.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { BLECharacteristic } characteristic - BLE characteristic to listen for.
         * @param { boolean } enable - Specifies whether to enable notification of the characteristic. The value {@code true} indicates
         * that notification is enabled, and the value {@code false} indicates that notification is disabled.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#setCharacteristicChangeNotification
         */
        /**
         * Enables or disables notification of a characteristic when value changed.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { BLECharacteristic } characteristic - BLE characteristic to listen for.
         * @param { boolean } enable - Specifies whether to enable notification of the characteristic. The value {@code true} indicates
         * that notification is enabled, and the value {@code false} indicates that notification is disabled.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice#setCharacteristicChangeNotification
         */
        setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): void;
        /**
         * Subscribe characteristic value changed event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.on#event:BLECharacteristicChange
         */
        /**
         * Subscribe characteristic value changed event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.on#event:BLECharacteristicChange
         */
        on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void;
        /**
         * Unsubscribe characteristic value changed event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.off#event:BLECharacteristicChange
         */
        /**
         * Unsubscribe characteristic value changed event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
         * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.off#event:BLECharacteristicChange
         */
        off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void;
        /**
         * Subscribe client connection state changed event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.on#event:BLEConnectionStateChange
         */
        /**
         * Subscribe client connection state changed event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.on#event:BLEConnectionStateChange
         */
        on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectChangedState>): void;
        /**
         * Unsubscribe client connection state changed event.
         *
         * @permission ohos.permission.USE_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.off#event:BLEConnectionStateChange
         */
        /**
         * Unsubscribe client connection state changed event.
         * The permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
         * @param { Callback<BLEConnectChangedState> } callback - Callback used to listen for the connection state changed event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattClientDevice.off#event:BLEConnectionStateChange
         */
        off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectChangedState>): void;
    }
    /**
     * Describes the Gatt service.
     *
     * @typedef GattService
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.GattService
     */
    interface GattService {
        /**
         * The UUID of a GattService instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattService#serviceUuid
         */
        serviceUuid: string;
        /**
         * Indicates whether the GattService instance is primary or secondary.
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattService#isPrimary
         */
        isPrimary: boolean;
        /**
         * The {@link BLECharacteristic} list belongs to this GattService instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattService#characteristics
         */
        characteristics: Array<BLECharacteristic>;
        /**
         * The list of GATT services contained in the service
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.GattService#includeServices
         */
        includeServices?: Array<GattService>;
    }
    /**
     * Describes the Gatt characteristic.
     *
     * @typedef BLECharacteristic
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.BLECharacteristic
     */
    interface BLECharacteristic {
        /**
         * The UUID of the {@link GattService} instance to which the characteristic belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLECharacteristic#serviceUuid
         */
        serviceUuid: string;
        /**
         * The UUID of a BLECharacteristic instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLECharacteristic#characteristicUuid
         */
        characteristicUuid: string;
        /**
         * The value of a BLECharacteristic instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLECharacteristic#characteristicValue
         */
        characteristicValue: ArrayBuffer;
        /**
         * The list of {@link BLEDescriptor} contained in the characteristic
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLECharacteristic#descriptors
         */
        descriptors: Array<BLEDescriptor>;
    }
    /**
     * Describes the Gatt descriptor.
     *
     * @typedef BLEDescriptor
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.BLEDescriptor
     */
    interface BLEDescriptor {
        /**
         * The UUID of the {@link GattService} instance to which the descriptor belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLEDescriptor#serviceUuid
         */
        serviceUuid: string;
        /**
         * The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLEDescriptor#characteristicUuid
         */
        characteristicUuid: string;
        /**
         * The UUID of the BLEDescriptor instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLEDescriptor#descriptorUuid
         */
        descriptorUuid: string;
        /**
         * The value of the BLEDescriptor instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.BLEDescriptor#descriptorValue
         */
        descriptorValue: ArrayBuffer;
    }
    /**
     * Describes the value of the indication or notification sent by the Gatt server.
     *
     * @typedef NotifyCharacteristic
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.NotifyCharacteristic
     */
    interface NotifyCharacteristic {
        /**
         * The UUID of the {@link GattService} instance to which the characteristic belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.NotifyCharacteristic#serviceUuid
         */
        serviceUuid: string;
        /**
         * The UUID of a NotifyCharacteristic instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.NotifyCharacteristic#characteristicUuid
         */
        characteristicUuid: string;
        /**
         * The value of a NotifyCharacteristic instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.NotifyCharacteristic#characteristicValue
         */
        characteristicValue: ArrayBuffer;
        /**
         * Specifies whether to request confirmation from the BLE peripheral device (indication) or
         * send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.NotifyCharacteristic#confirm
         */
        confirm: boolean;
    }
    /**
     * Describes the parameters of the Gatt client's characteristic read request.
     *
     * @typedef CharacteristicReadRequest
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.CharacteristicReadRequest
     */
    interface CharacteristicReadRequest {
        /**
         * Indicates the address of the client that initiates the read request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicReadRequest#deviceId
         */
        deviceId: string;
        /**
         * The Id of the read request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicReadRequest#transId
         */
        transId: number;
        /**
         * Indicates the byte offset of the start position for reading characteristic value
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicReadRequest#offset
         */
        offset: number;
        /**
         * The UUID of a CharacteristicReadRequest instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicReadRequest#characteristicUuid
         */
        characteristicUuid: string;
        /**
         * The UUID of the service to which the characteristic belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicReadRequest#serviceUuid
         */
        serviceUuid: string;
    }
    /**
     * Describes the parameters of the of the Gatt client's characteristic write request.
     *
     * @typedef CharacteristicWriteRequest
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest
     */
    interface CharacteristicWriteRequest {
        /**
         * Indicates the address of the client that initiates the write request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#deviceId
         */
        deviceId: string;
        /**
         * The Id of the write request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#transId
         */
        transId: number;
        /**
         * Indicates the byte offset of the start position for writing characteristic value
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#offset
         */
        offset: number;
        /**
         * Whether this request should be pending for later operation
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#isPrepared
         */
        isPrep: boolean;
        /**
         * Whether the remote client need a response
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#needRsp
         */
        needRsp: boolean;
        /**
         * Indicates the value to be written
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#value
         */
        value: ArrayBuffer;
        /**
         * The UUID of a CharacteristicWriteRequest instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#characteristicUuid
         */
        characteristicUuid: string;
        /**
         * The UUID of the service to which the characteristic belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.CharacteristicWriteRequest#serviceUuid
         */
        serviceUuid: string;
    }
    /**
     * Describes the parameters of the Gatt client's descriptor read request.
     *
     * @typedef DescriptorReadRequest
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest
     */
    interface DescriptorReadRequest {
        /**
         * Indicates the address of the client that initiates the read request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest#deviceId
         */
        deviceId: string;
        /**
         * The Id of the read request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest#transId
         */
        transId: number;
        /**
         * Indicates the byte offset of the start position for reading characteristic value
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest#offset
         */
        offset: number;
        /**
         * The UUID of a DescriptorReadRequest instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest#descriptorUuid
         */
        descriptorUuid: string;
        /**
         * The UUID of the characteristic to which the descriptor belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest#characteristicUuid
         */
        characteristicUuid: string;
        /**
         * The UUID of the service to which the descriptor belongs
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorReadRequest#serviceUuid
         */
        serviceUuid: string;
    }
    /**
     * Describes the parameters of the Gatt client's characteristic write request.
     *
     * @typedef DescriptorWriteRequest
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 9
     * @deprecated since 10
     * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest
     */
    interface DescriptorWriteRequest {
        /**
         * Indicates the address of the client that initiates the write request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest#deviceId
         */
        deviceId: string;
        /**
         * The Id of the write request
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest#transId
         */
        transId: number;
        /**
         * Indicates the byte offset of the start position for writing characteristic value
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest#offset
         */
        offset: number;
        /**
         * Whether this request should be pending for later operation
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest#isPrepared
         */
        isPrep: boolean;
        /**
         * Whether the remote client need a response
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest#needRsp
         */
        needRsp: boolean;
        /**
         * Indicates the value to be written
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.bluetooth.ble/ble.DescriptorWriteRequest#value
         */
        value: ArrayBuffer;
        /**
         * The UUID of a DescriptorWriteRequest instance
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 9
         * @deprecated since 10
