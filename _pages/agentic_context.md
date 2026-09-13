---
layout: page
permalink: /agentic/context/
title: the four files
description: why a new session knows nothing about your project, and the files that fix it
nav: false
wiki_slug: context
last_updated: 2026-09-12
---

{% assign w = site.data.agentic_wiki %}
{% include agentic_wiki.liquid %}

<p class="wk-tldr">An agent starts every session knowing nothing about your project. You can
re-explain it each time, or write it down once in files it reads automatically. Four files, split
by how fast each kind of information changes. This is the highest-value hour of setup available,
and it is all plain text.</p>

## The problem

Close the session and everything goes. Not the files it wrote, but the context: that the
coordinates in one table are known to be wrong, that you already tried the obvious analysis and
why it failed, that `samples_v3.csv` is the real one, that a collaborator owns one half of the
work. Without that, the first twenty minutes of every session is you retyping what the project is.

Worse, an agent missing that context does not stall. It proceeds on a reasonable guess, which is
how you get an analysis confidently run on the superseded file.

## The four files

| File               | Holds                                                                | Changes       | Read                                          |
| ------------------ | -------------------------------------------------------------------- | ------------- | --------------------------------------------- | ---------------- |
| `CLAUDE.md`        | The system, the data, the people, the conventions, settled decisions | Rarely        | Automatically, every session                  |
| `PROJECT_INDEX.md` | Overview, dated status, key links, decision log                      | Monthly       | When asked, or when orienting                 |
| `TODO.md`          | Live kanban by workstream                                            | Constantly    | When planning work                            |
| `handoff.md`       | What the last session did, what is open                              | Every session | At startup, [via a hook]({{ '/agentic/hooks/' | relative_url }}) |

**The split by rate of change is the whole trick.** One file holding all four kinds of
information goes stale in the parts that move fastest, and once any part of it is wrong you stop
trusting the rest of it. Separating them means the file that is loaded every single session is
also the file that almost never needs editing.

Templates for all four, with comments on what belongs where, are in the
[starter repo]({{ w.repo }}) (`templates/`, and `bin/new-project.sh` to scaffold them).

## CLAUDE.md

Claude Code reads `CLAUDE.md` from the folder you start it in, automatically, before you type
anything. There is a hierarchy: a global one at `~/.claude/CLAUDE.md` applies everywhere, a
project one applies in that project, and one deeper in a subdirectory applies there. They stack.

What belongs in it: **facts that stay true.** The study system. Where the data is and which copy
is canonical. Who owns which piece. The conventions someone new would get wrong. The decisions
you do not want reopened.

```markdown
## Project

- **Code:** cx-demo
- **Question:** does seed-bank depth explain the failure of the range-edge
  population to track the climate shift?

## Where things live

- **Data:** `Data/derived/census_2019_2026.csv` is canonical. `Data/raw/` is
  never edited. The 2021 coordinates are known bad; use the 2022 resurvey.
- **Code:** ~/repos/cx-demo

## How this project works

- Sample IDs are `SITE_YEAR_PLANT`, zero-padded to three digits.
- Fitness is always lifetime, via an aster model, never a single stage.

## Decisions that are settled

- **2026-04-12 —** Dropped the 2018 cohort. Census protocol changed mid-season
  and survival is not comparable. Do not re-add it for sample size.
```

That last section does more work than it looks. Settled decisions are where an agent is most
likely to be helpfully wrong, because adding the 2018 cohort back _would_ improve the sample
size, and nothing in the data says not to.

**Tell it how you want to be worked with, too.** Mine carries instructions that are about
conduct rather than facts: be direct and do not flatter the idea, never pick an analysis choice
because of the result it produces, explain the tradeoffs rather than recommending one path. Those
are not decoration; they change the output, and a global `CLAUDE.md` is the only place they apply
everywhere without being retyped.

### Keep it short

Two pages, roughly. Past that the parts that matter compete with the parts that do not, and you
stop reading it yourself, which means you stop noticing when it goes stale.

My own global file is well over that and it is a real cost, not a humblebrag. It accumulated
because every hard-won lesson felt worth a line. The discipline that actually helps: when adding
something, find the thing it replaces.

## PROJECT_INDEX.md

The page you hand someone who asks what this project is and where it stands. Overview, current
status, key links, decision log.

**Date the status line every time you touch it.** An undated status reads as current forever,
which makes it worse than no status at all.

The decision log is the highest-value section on this page and the easiest to skip. Date,
decision, reason. Append only: supersede an old line with a new one rather than editing it, so
the reasoning chain stays readable. A year later the reason is the only part that matters, and it
is reliably the part nobody wrote down.

## TODO.md

A kanban, one heading per workstream, each with **In progress / Next / Blocked / Done**.

`Blocked` is the section that earns the structure, because an item with a named blocker and a date
is the difference between a project that silently stalls and one you can unstick in a minute.
`Done` earns its place the first time you have to write a progress report.

Move things to Done rather than deleting them.

## handoff.md

What the last session did, what was decided, what is still open, and what the next session needs
to know that is not obvious from the files. Including the things that did not work, so they do
not get retried.

This is the file you will forget to write, which is why
[the next page]({{ '/agentic/hooks/' | relative_url }}) is about making it automatic in both
directions: written at the end of a session without being asked, and injected at the start of the
next one.

## One canonical copy, always

If the project has both a data folder and a code repo, you have two plausible homes for
`CLAUDE.md` and `TODO.md`. Pick one and symlink from the other:

```bash
cd ~/repos/cx-demo
ln -sfn "../../projects/2026_CxDemo/CLAUDE.md" CLAUDE.md
ln -sfn "../../projects/2026_CxDemo/TODO.md" TODO.md
```

Relative paths, so they resolve on any machine, and commit them. Two real copies of a context
file means one of them is wrong and you will not know which. The session hooks resolve symlinks
for this reason, so a repo-side session still finds the canonical project folder.

## When a project has parallel workstreams

Some projects are really three projects. One of mine spans a genome assembly, a population
genomics analysis, and a common garden experiment, with different people, data, and decisions in
each. One `TODO.md` for all three is unusable.

The shape that works: sub-project folders, each with their own `CLAUDE.md`, `TODO.md` and handoff,
with the parent keeping only cross-cutting items and the shared manuscript and meeting folders.
Start the agent inside the sub-project folder and it loads that workstream's context.

One lesson from getting this wrong, worth not repeating. I tracked "the active sub-project" in a
state file so tooling could know which workstream was current. With two or three workstreams
genuinely in flight at once, that pointer thrashed: whichever session ended last overwrote it, and
a later session at the project root then had an arbitrary workstream's handoff injected as if it
were its own. An audit found the pointer naming one of the eight sub-projects that had been worked
in the previous six weeks.

The fix was to notice that two different jobs had been conflated. _Which context do I load_ was
already answered correctly by the working directory, which has always been ground truth. The job
that actually needed state was _what else is in flight_, which is a list, not a pointer. So the
working directory routes, and the state file only reports. **If a piece of state is only consulted
when it disagrees with the directory you are in, it is not routing, it is guessing.**

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/hooks/' | relative_url }}">Making it automatic</a></strong> — two
  small scripts that carry the handoff between sessions so you never have to remember it.
</div>

<p class="wk-byline">Drafted by Claude from my own configuration and notes, lightly edited by me. Measurements, failures and decisions reported here are mine. <a href="{{ '/agentic/' | relative_url }}#corrections">Corrections welcome.</a></p>
