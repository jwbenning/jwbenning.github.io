---
layout: page
permalink: /agentic/memory/
title: project memory
description: the files that make an agent remember a project between sessions
nav: false
wiki_slug: memory
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

A session ends and its context goes with it. Not the files the agent wrote, but which copy of the
data is canonical, what you already tried and why it failed, which half of the work a collaborator
owns. Write that down once, in files the agent reads automatically. An agent missing it does not
stop and ask — it proceeds on a reasonable guess, which is how an analysis gets run on the
superseded file.

## The four files

| File               | Holds                                                | Changes       | Read                          |
| ------------------ | ---------------------------------------------------- | ------------- | ----------------------------- |
| `CLAUDE.md`        | System, data, people, conventions, settled decisions | Rarely        | Automatically, every session  |
| `PROJECT_INDEX.md` | Overview, dated status, key links, decision log      | Monthly       | When asked, or when orienting |
| `TODO.md`          | Live kanban by workstream                            | Constantly    | When planning work            |
| `handoff.md`       | What the last session did, what is still open        | Every session | At startup, via a hook        |

The split is by how fast each kind of information changes, so the file loaded every session is
also the one that almost never needs editing.

## CLAUDE.md

Claude Code reads `CLAUDE.md` from the folder you start it in, before you type anything. A global
file at `~/.claude/CLAUDE.md` applies everywhere and a project one applies in that project; they
stack.

```markdown
## Project

- **Code:** cx-demo
- **Question:** does seed-bank depth explain the range-edge population's
  failure to track the climate shift?

## Where things live

- **Data:** `Data/derived/census_2019_2026.csv` is canonical. `Data/raw/` is
  never edited. The 2021 coordinates are known bad; use the 2022 resurvey.
- **Code:** `~/repos/cx-demo`

## How this project works

- Sample IDs are `SITE_YEAR_PLANT`, zero-padded to three digits.
- Fitness is always lifetime, via an aster model, never a single stage.

## Decisions that are settled

- **2026-04-12 —** Dropped the 2018 cohort. The census protocol changed
  mid-season and survival is not comparable. Do not re-add it for sample size.
```

What belongs in it: facts that stay true, such as the system, where the data is, which copy is
canonical, and who owns which piece. Conventions a newcomer would get wrong. Settled decisions,
each with the date and the reason. That last section does the most work, because adding the 2018
cohort back _would_ improve the sample size and nothing in the data says not to.

Keep it under two pages.

## The other three

**`PROJECT_INDEX.md`** is the overview, a dated status line, and a decision log. Date the status
every time you touch it; an undated status reads as current forever. Each decision log entry is
date, decision, reason — append a new line rather than editing the old one, because a year later
the reason is the only part that matters.

**`TODO.md`** is a kanban, one heading per workstream, each with **In progress / Next / Blocked /
Done**. `Blocked` names who or what the item is waiting on and since when. Move finished items to
`Done` rather than deleting them.

**`handoff.md`** holds the session topic, what was decided, open follow-ups written as specific
next actions rather than areas, and what did not work, so it does not get retried.

## Scaffold a project

Ask for it in your own words. The agent has the templates and will write the files:

```
Scaffold a project here for the Clarkia demography work, code cx-demo.
```

There is also a script, for when you want the same result without a conversation about it:

```bash
./bin/new-project.sh ~/projects/2026_MyProject \
  --name "Clarkia demography" --code cx-demo
```

Either way you get `PROJECT_INDEX.md`, `TODO.md` and `handoff.md` from the templates, and
anything already there is left alone. You write `CLAUDE.md` yourself, which is where most of
the value is.

## Where the folders go

The agent works on whatever folder you point it at, so the arrangement is yours. Mine, for
reference: everything lives in Google Drive, one folder per project, with code in a separate
tree of git repos.

```
My Drive/Work/
├── Projects/
│   ├── InProgress/
│   │   ├── 2026_CxSpaceTime/     ← one folder per project
│   │   │   ├── CLAUDE.md
│   │   │   ├── PROJECT_INDEX.md
│   │   │   ├── TODO.md
│   │   │   ├── handoff.md
│   │   │   ├── Data/  analysis/  Manuscript/  Meetings/
│   │   │   └── cx-spacetime Notebook.gdoc
│   │   └── 2026_Gentian/
│   └── Exploratory/             ← not started, or may never start
├── Lab Management/              ← protocols and equipment docs, shared across projects
└── Teaching/

~/GitHubRepos/
└── cx-spacetime/                ← the code, a git repo, symlinked to the CLAUDE.md above
```

Two things about this are load-bearing rather than taste. The **year prefix** keeps the folder
list in a useful order and makes a project name unambiguous when you fuzzy-match it from the
launcher. And **anything reusable across projects lives outside them**, so there is one copy of
a protocol rather than one per project that used it.

## Make the handoff automatic

Writing the handoff at the end of a long session is the thing you will not do. Two hooks — shell
commands the harness runs at defined moments, with whatever they print becoming part of the
session's context — remove the need to remember.

`session-start-handoff.sh` finds the project by walking up to the nearest `CLAUDE.md`, then pastes
`handoff.md` into the new session with its age in days, so a stale one is visible instead of being
read as current.

`capture-session.sh` saves a condensed transcript to `~/.claude-assistant/session-records/`,
outside the project, because a transcript is near-verbatim and a project folder can be shared.

```bash
git clone https://github.com/benning-lab/agentic-starter.git
cd agentic-starter
./install.sh
```

The installer merges this block into `~/.claude/settings.json`, substituting the repo path for
`__REPO__`:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup",
        "hooks": [{ "type": "command", "command": "__REPO__/hooks/session-start-handoff.sh" }]
      }
    ],
    "Stop": [
      {
        "hooks": [{ "type": "command", "command": "__REPO__/hooks/capture-session.sh" }]
      }
    ]
  }
}
```

Restart any session that is already running, since hooks are read at session start.

The writing half is a slash command, `/done`, that I run when a session is finished: it writes
`handoff.md` and appends a dated entry to a running `session-log.md`.

## If the code and the data live in different places

Keep one canonical copy and symlink from the other. From inside the code repo:

```bash
ln -sfn "../../projects/2026_CxDemo/CLAUDE.md" CLAUDE.md
ln -sfn "../../projects/2026_CxDemo/TODO.md" TODO.md
```

Relative paths, so they resolve on any machine, and commit them. Two real copies means one of them
is wrong and you will not know which.

**Next:** [Reports]({{ '/agentic/reports/' | relative_url }}) — how to get output you can actually read.

{% include agentic_byline.liquid %}
