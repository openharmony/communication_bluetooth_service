/**
 * Shared helpers for main-module page control UiTest (Hypium).
 * EntryAbility loads route from want.parameters.testTargetPage (see entry EntryAbility.ts).
 */
import abilityDelegatorRegistry from '@ohos.app.ability.abilityDelegatorRegistry';
import { Want } from '@kit.AbilityKit';
import { Driver, ON } from '@ohos.UiTest';

export const MAIN_BUNDLE: string = 'com.example.myapplicationbt';
export const ENTRY_ABILITY: string = 'EntryAbility';

function delayMs(ms: number): Promise<void> {
  return new Promise<void>((resolve: (v?: void) => void) => {
    setTimeout((): void => {
      resolve();
    }, ms);
  });
}

export async function startMainPage(route: string): Promise<void> {
  const delegator = abilityDelegatorRegistry.getAbilityDelegator();
  const want: Want = {
    bundleName: MAIN_BUNDLE,
    abilityName: ENTRY_ABILITY,
    parameters: {
      testTargetPage: route
    }
  };
  try {
    await delegator.startAbility(want);
  } catch (_e) {
    console.error('[MainPageControlUi] startAbility failed');
  }
  await delayMs(1200);
}

export async function assertControlVisible(controlId: string): Promise<void> {
  const driver = Driver.create();
  const on = ON.id(controlId);
  await driver.assertComponentExist(on);
}
