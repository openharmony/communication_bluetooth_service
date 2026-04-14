These files import @ohos.UiTest. OpenHarmony compiles all .ets under entry/src/ohosTest/ets/,
so keeping them under ets/test/ links UiTest into the test HAP even when List.test.ets does not
import them — which can cause TestAbility to exit with "App died" on some devices.

Restore: copy *.ets and main_page_control_manifest.json back to
entry/src/ohosTest/ets/test/, re-add imports/calls in List.test.ets, then run
gen_main_page_control_ui_tests.py after inject_main_page_control_ids.py if needed.
