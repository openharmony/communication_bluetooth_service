UiTest sources (@ohos.UiTest) live under entry ohosTest:
  entry/src/ohosTest/ets/uitest/
Hypium entry is entry/src/ohosTest/ets/apitest/List.test.ets (see entry/src/ohosTest/ets/uitest/DEPLOY.txt).

This directory keeps copies of generated files and main_page_control_manifest.json for regeneration:
  python3 scripts/inject_main_page_control_ids.py
  python3 scripts/gen_main_page_control_ui_tests.py
Then sync outputs into entry/src/ohosTest/ets/uitest/ (or adjust generator OUT_DIR).

Previously these files were kept here because compiling all ohosTest sources pulled UiTest into the
same test HAP as API-only Hypium; the uitest module avoids that split.
