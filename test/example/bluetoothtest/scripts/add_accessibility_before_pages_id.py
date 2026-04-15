#!/usr/bin/env python3
"""在 .id('pages_...') 行前插入 .accessibilityLevel('yes')，便于 UiTest Driver 枚举（上一行尚未有时才插入）。"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "entry" / "src" / "main" / "ets" / "pages"

ID_LINE = re.compile(r"^(\s*)\.id\('pages_")


def patch_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    changed = False
    for line in lines:
        m = ID_LINE.match(line)
        if m:
            prev = out[-1] if out else ""
            if "accessibilityLevel('yes')" not in prev and "accessibilityLevel(\"yes\")" not in prev:
                indent = m.group(1)
                out.append(f"{indent}.accessibilityLevel('yes')\n")
                changed = True
        out.append(line)
    if changed:
        path.write_text("".join(out), encoding="utf-8")
    return changed


def main() -> int:
    n = 0
    for p in sorted(ROOT.rglob("*.ets")):
        if patch_file(p):
            print("patched", p.relative_to(ROOT))
            n += 1
    print("files", n)
    return 0


if __name__ == "__main__":
    sys.exit(main())
