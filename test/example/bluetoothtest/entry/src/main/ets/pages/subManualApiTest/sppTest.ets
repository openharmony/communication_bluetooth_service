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

import ConfigData from '../../Utils/ConfigData';
import router from '@ohos.router';
import { TestData } from '../../MainAbility/model/testData'
import { PageTitle } from '../../Component/pageTitle';
import { TestImageDisplay } from '../../Component/testImageDisplay';
import { initSppApiTestData } from '../../MainAbility/model/testDataModels'
import { TestListItem } from '../../Component/testListItems';
import { myParams } from '../../Utils/common'

/**
 * SPP Test Page Of Bluetooth test
 */

@Entry
@Component
struct SppTest {
  private testItem: TestData = (router.getParams() as myParams).testItem
  private sppApiTestItems: TestData[] = initSppApiTestData();

  build() {
    Column() {
      Stack({ alignContent : Alignment.TopStart }) {
        TestImageDisplay({ testItem : this.testItem })
        PageTitle({ testItem : this.testItem })
      }

      List() {
        ForEach(this.sppApiTestItems , (item: TestData) => {
          ListItem() {
            TestListItem({
              testItem : item
            })
          }
        } , (item: TestData) => item.id)
      }
      .height('93%')
      .backgroundColor($r("app.color.lead"))
    }
    .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
    .width(ConfigData.WH_100_100)
    .height(ConfigData.WH_100_100);
  }
}