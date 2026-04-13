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

import UIAbility from '@ohos.app.ability.UIAbility';
import hilog from '@ohos.hilog';
import window from '@ohos.window';

const DEFAULT_PAGE = 'pages/homePage';
const TEST_PAGE_KEY = 'testTargetPage';

export default class EntryAbility extends UIAbility {
  private windowStageRef: window.WindowStage | null = null;
  private initialPage: string = DEFAULT_PAGE;

  onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    globalThis.context = this.context;
    const p = want?.parameters?.[TEST_PAGE_KEY];
    if (typeof p === 'string' && p.length > 0) {
      this.initialPage = p;
    }
  }

  onNewWant(want, launchParam) {
    const p = want?.parameters?.[TEST_PAGE_KEY];
    if (typeof p !== 'string' || p.length === 0 || !this.windowStageRef) {
      return;
    }
    this.windowStageRef.loadContent(p, (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'loadContent onNewWant failed: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'onNewWant loadContent ok: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  onDestroy() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    this.windowStageRef = windowStage;
    const page = this.initialPage;
    windowStage.loadContent(page, (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s',
        JSON.stringify(data) ?? '');
    });
  }

  onWindowStageDestroy() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    this.windowStageRef = null;
  }

  onForeground() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}
