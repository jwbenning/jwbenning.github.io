#!/usr/bin/env python3
"""Set current_week in _data/agentic_ai.yml to the week whose Friday falls in the
current Monday-to-Sunday week. Run by .github/workflows/course-week.yml every Monday.
Before term it leaves 0 alone; after the last session it keeps the last week."""
import datetime as dt, re, sys
import yaml

P = "_data/agentic_ai.yml"
today = dt.date.fromisoformat(sys.argv[1]) if len(sys.argv) > 1 else dt.date.today()
monday = today - dt.timedelta(days=today.weekday())
sunday = monday + dt.timedelta(days=6)

d = yaml.safe_load(open(P))
weeks = sorted(d["schedule"], key=lambda w: w["date"])
target = None
for w in weeks:
    if monday <= w["date"] <= sunday:
        target = w["week"]
if target is None:
    past = [w for w in weeks if w["date"] < monday]
    target = past[-1]["week"] if past else d["current_week"]

if target == d["current_week"]:
    print(f"current_week already {target}")
    sys.exit(0)

s = open(P).read()
s, n = re.subn(r"(?m)^current_week: *\d+", f"current_week: {target}", s)
assert n == 1
open(P, "w").write(s)
print(f"current_week {d['current_week']} -> {target}")
