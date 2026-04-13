/**
 * 主模块页面路由注册完整性：与 main_pages.json / BluetoothtestPageRoutes 对齐。
 * 说明：本套件不拉起 UI，仅校验路由表；真机全页面 UI 遍历需单独 UiTest/专项。
 */
import { describe, it, expect } from '@ohos/hypium';
import {
  BLUETOOTHTEST_ENTRY_PAGE_COUNT,
  BLUETOOTHTEST_ENTRY_PAGE_ROUTES
} from './BluetoothtestPageRoutes';

export default function pageRoutesTest() {
  describe('BluetoothtestPageRoutes', () => {
    it('route_count_matches_main_pages', 0, () => {
      expect(BLUETOOTHTEST_ENTRY_PAGE_ROUTES.length).assertEqual(BLUETOOTHTEST_ENTRY_PAGE_COUNT);
    });

    it('each_route_starts_with_pages_prefix', 0, () => {
      for (let i = 0; i < BLUETOOTHTEST_ENTRY_PAGE_ROUTES.length; i++) {
        const r = BLUETOOTHTEST_ENTRY_PAGE_ROUTES[i];
        expect(r.indexOf('pages/') === 0).assertTrue();
      }
    });

    it('no_duplicate_routes', 0, () => {
      for (let i = 0; i < BLUETOOTHTEST_ENTRY_PAGE_ROUTES.length; i++) {
        for (let j = i + 1; j < BLUETOOTHTEST_ENTRY_PAGE_ROUTES.length; j++) {
          expect(BLUETOOTHTEST_ENTRY_PAGE_ROUTES[i] === BLUETOOTHTEST_ENTRY_PAGE_ROUTES[j]).assertFalse();
        }
      }
    });

    it('homePage_is_first', 0, () => {
      expect(BLUETOOTHTEST_ENTRY_PAGE_ROUTES[0]).assertEqual('pages/homePage');
    });
  });
}
