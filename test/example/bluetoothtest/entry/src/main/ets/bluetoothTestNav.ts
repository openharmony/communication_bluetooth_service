/**
 * UiTest / Hypium 通过 EntryAbility want.parameters.testTargetPage 导航时，
 * 跳过首页权限弹窗，避免遮挡控件；普通启动仍走正常授权流程。
 */
let skipBluetoothPermissionRequest: boolean = false;

export function setSkipBluetoothPermissionForAutomatedTest(value: boolean): void {
  skipBluetoothPermissionRequest = value;
}

export function shouldSkipBluetoothPermissionRequest(): boolean {
  return skipBluetoothPermissionRequest;
}
