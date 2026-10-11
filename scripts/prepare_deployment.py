"""Stage tracked website files without the duplicate dist tree or repo metadata."""
from pathlib import Path
import shutil
import subprocess

root = Path(__file__).resolve().parents[1]
output = root / "_site"
if output.exists():
    shutil.rmtree(output)
output.mkdir()
paths = subprocess.check_output(
    ["git", "ls-files", "-z"], cwd=root
).decode().split("\0")
total = 0
count = 0
for name in paths:
    if not name:
        continue
    path = Path(name)
    if path.parts[0] in {"dist", ".github", "scripts", "_site"}:
        continue
    if path.name == ".DS_Store" or path.name.startswith("README"):
        continue
    source = root / path
    target = output / path
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, target)
    total += source.stat().st_size
    count += 1
limit = 262_144_000
print(f"Deployment: {count} files, {total:,} bytes; {limit - total:,} bytes headroom")
if total >= limit:
    raise SystemExit("Deployment exceeds the free-plan 250 MiB limit.")
