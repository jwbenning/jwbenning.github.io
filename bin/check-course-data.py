#!/usr/bin/env python3
"""Validate _data/agentic_ai.yml before it can break the site.

The course page reads everything from that one file, so a typo there is the most
likely way the page breaks. A YAML error makes the Jekyll build fail, the deploy
fails, and the live site silently keeps serving the previous version -- which is
worse than a loud failure, because nobody notices for days.

Run locally before pushing:   python3 bin/check-course-data.py
CI runs it on every push and pull request that touches the file.
"""
import sys, pathlib, datetime

try:
    import yaml
except ImportError:
    sys.exit("Needs pyyaml:  pip install pyyaml")

DATA = pathlib.Path(__file__).resolve().parent.parent / "_data" / "agentic_ai.yml"
TAGS = {"foundations", "application", "evaluation", "ethics", "security",
        "reproducibility", "policy", "debate", "EEB"}

errors, warnings = [], []

def err(msg):  errors.append(msg)
def warn(msg): warnings.append(msg)

try:
    d = yaml.safe_load(DATA.read_text())
except yaml.YAMLError as e:
    sys.exit(f"FAIL  {DATA.name} is not valid YAML.\n\n{e}\n\n"
             "Most common causes: a colon inside an unquoted value, or an\n"
             "indentation change. Wrap the value in double quotes.")

if not isinstance(d, dict):
    sys.exit(f"FAIL  {DATA.name} did not parse to a mapping.")

sched = d.get("schedule") or []
links = d.get("links") or []
anns  = d.get("announcements") or []

cw = d.get("current_week")
if not isinstance(cw, int):
    err("current_week must be a whole number (0 before term starts)")
elif cw and not any(w.get("week") == cw for w in sched):
    err(f"current_week is {cw}, but no week {cw} exists in schedule")

seen = set()
for w in sched:
    n = w.get("week")
    if n is None:
        err("a schedule entry has no `week:` number"); continue
    if n in seen:
        err(f"week {n} appears more than once")
    seen.add(n)
    for field in ("part", "theme", "framing"):
        if not w.get(field):
            err(f"week {n} is missing `{field}:`")
    if w.get("date"):
        dt = w["date"]
        if not isinstance(dt, datetime.date):
            err(f"week {n}: date must be plain YYYY-MM-DD, not quoted")
        elif dt.weekday() != 4:
            warn(f"week {n}: {dt} is a {dt:%A}; the seminar meets on Fridays")

def check_reading(r, where):
    for field in ("title", "url", "tags"):
        if not r.get(field):
            err(f"{where}: reading '{str(r.get('title'))[:40]}' is missing `{field}:`")
    for t in r.get("tags") or []:
        if t not in TAGS:
            err(f"{where}: unknown tag '{t}'. Use one of: {', '.join(sorted(TAGS))}")
    u = r.get("url") or ""
    if u and not (u.startswith("http") or u.startswith("/")):
        err(f"{where}: url '{u}' should start with https:// or /")
    if "optional" in r and not isinstance(r["optional"], bool):
        err(f"{where}: `optional:` must be true or false, unquoted")

for w in sched:
    for r in w.get("readings") or []:
        check_reading(r, f"week {w.get('week')}")
for l in links:
    check_reading(l, "reading room")
    if not l.get("date"):
        warn(f"reading room: '{str(l.get('title'))[:40]}' has no `date:`")

for i, a in enumerate(anns, 1):
    where = f"announcement {i}"
    dt = a.get("date")
    if dt is None:
        err(f"{where}: missing `date:`")
    elif not isinstance(dt, datetime.date):
        err(f"{where}: date must be plain YYYY-MM-DD, not quoted")
    if not a.get("body"):
        err(f"{where}: missing `body:` (the text students read)")
    for field in a:
        if field not in {"date", "title", "body"}:
            warn(f"{where}: unknown field `{field}:` -- it will not render")

urls = [r.get("url") for w in sched for r in (w.get("readings") or [])] + \
       [l.get("url") for l in links]
for u in {u for u in urls if u and urls.count(u) > 1}:
    warn(f"{u} appears twice. A reading belongs either to a week or to the "
         "reading room, not both.")

for w in warnings: print(f"warn  {w}")
if errors:
    print()
    for e in errors: print(f"FAIL  {e}")
    print(f"\n{len(errors)} problem(s). The site will not rebuild until these are fixed.")
    sys.exit(1)
print(f"\nok    {len(sched)} weeks, "
      f"{sum(len(w.get('readings') or []) for w in sched)} assigned readings, "
      f"{len(links)} in the reading room, "
      f"{len(anns)} announcement(s).")
