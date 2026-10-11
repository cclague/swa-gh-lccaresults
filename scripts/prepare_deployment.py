"""Stage tracked website files without the duplicate dist tree or repo metadata."""
from pathlib import Path
import os
import shutil
import subprocess

root = Path(__file__).resolve().parents[1]
season = os.environ["CURRENT_SEASON"]
if len(season) != 4 or not season.isdigit():
    raise SystemExit("CURRENT_SEASON must be a four-digit season start year.")
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
    # Race pages, standings and exports use the season's start year.
    season_part = path.parts[1] if path.parts[0] in {"lcca", "League"} and len(path.parts) > 1 else path.parts[0]
    if len(season_part) == 4 and season_part.isdigit() and season_part != season:
        continue
    if path.name == ".DS_Store" or path.name.startswith("README"):
        continue
    source = root / path
    target = output / path
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, target)
    total += source.stat().st_size
    count += 1
archive = output / "lcca_index.html"
old_size = archive.stat().st_size
archive.write_text(f'''<!doctype html><html lang="en"><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Previous seasons — London and South East Cyclo-Cross League</title>
<body><h1>Previous seasons</h1>
<p>This website publishes results for the {season}/{str(int(season)+1)[-2:]} season.</p>
<p>Previous seasons are preserved in the <a href="https://github.com/cclague/swa-gh-lccaresults/tree/main/lcca">results archive on GitHub</a>.</p>
<p><a href="/">Return to current season</a></p></body></html>''')
total += archive.stat().st_size - old_size
limit = 262_144_000
print(f"Deployment: {count} files, {total:,} bytes; {limit - total:,} bytes headroom")
if total >= limit:
    raise SystemExit("Deployment exceeds the free-plan 250 MiB limit.")
