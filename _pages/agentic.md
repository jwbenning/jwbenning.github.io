---
layout: page
permalink: /agentic/
title: agentic ai
description: how we actually use coding agents day to day, and the files to copy
nav: true
nav_order: 6
last_updated: 2026-09-17
---

{% include agentic_wiki.liquid %}

A coding agent will do an hour of real work and remember none of it: close the session and
everything it knew about the project goes with it. This is how we run our work through one anyway
— the plain text files that carry context across, what the agent reads when a session opens, what
it writes when one ends, and the rules we give it.
It is for students in our seminar on [agentic AI in
EEB]({{ '/teaching/agentic-ai/' | relative_url }}), people in the lab, and anyone who wants the
parts that transfer — and every file described here is in a companion repo you can clone.

{% assign w = site.data.agentic_wiki %}

<div class="wk-cards">
{% for p in w.pages %}
  <div class="wk-card">
    <div class="t"><a href="{{ '/agentic/' | append: p.slug | append: '/' | relative_url }}">{{ p.title }}</a></div>
    <p>{{ p.blurb }}</p>
  </div>
{% endfor %}
</div>

<div class="wk-note" markdown="1">
<span class="lbl">the files</span>

Every file these guides describe is in one companion repo,
[benning-lab/agentic-starter](https://github.com/benning-lab/agentic-starter) — the templates, the
hooks, the launcher and the terminal config. You do not need to know git to use it: the green
**Code** button on that page has a **Download ZIP** option, which gets you the same files.

Unpack it somewhere it can stay. The hooks run from that folder in place, so moving or deleting it
later switches them off. Then:

```bash
cd agentic-starter
./install.sh --check      # prints what it would do, changes nothing
./install.sh              # do it
```

On a default run it makes a few empty folders and writes one file, `~/.claude/settings.json` — and
only if you do not already have one. If you do, it changes nothing and prints the block for you to
paste in yourself. The full walkthrough is on
[getting set up]({{ '/agentic/setup/' | relative_url }}).

</div>

## Still to write

The four pages above are the basics. The rest of what we run is not documented yet, and it comes
in four kinds, which is worth knowing because they behave differently:

|                       | What it is                                               | When it runs                                       |
| --------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| **Command**           | A procedure written once in markdown, invoked as `/name` | When you type it                                   |
| **Skill**             | A folder carrying a reference corpus, loaded on demand   | When the work calls for it                         |
| **Hook**              | A script the harness runs, not the model                 | At a defined moment, automatically                 |
| **Scheduled routine** | A prompt that runs in the cloud on a cron                | On a schedule, with none of your machines involved |

Only the hooks are covered so far, on [project memory]({{ '/agentic/memory/' | relative_url }}).
What is queued:

**Commands.** _Inbox triage_ — reads a file of standing rules and then files, labels and summarises
the inbox against what actually matters this week, rather than against generic importance.
_Library search_ — searches my own reference library before the web, so the answer comes from the
paper on the shelf instead of an inference about it.

**Skills.** _slim_ — forward population-genetic simulation, grounded in a version-pinned manual,
204 official recipes and the complete 857-entry API index. _aster_ — life-history and fitness
models, built from the method author's entire written record plus a layer restating it in the
vocabulary of a census sheet. _panel_ — review through six reviewer lenses built from their
published work, producing separate memos that are allowed to disagree with each other.

**Scheduled routines.** _Weekly lint_ — runs Sunday evening with no machine of mine switched on,
reads the whole control plane (global config, goals, every active project's context and to-do
list) and drafts one advisory email flagging contradictions, stale facts, deadline drift and work
that has gone quiet. It is read-only; the draft is its only write.

## Credit

I started building my Claude Code workflow from
**[Chris Blattman](https://claudeblattman.com/)**'s guide — he is a political economist at UChicago
Harris who published his own setup in the open. A lot of what is here began there and was adapted
rather than invented: the context file as the centre of the setup, procedures written down once as
reusable commands, and publishing the actual files so someone can copy a working thing instead of
assembling one. His site is worth a look.

Worth reading alongside this: **[mycelium](https://github.com/arjunrajlaboratory/mycelium)**, from
the Arjun Raj lab.

## Corrections

If something here is wrong or out of date, tell me.

{% include agentic_byline.liquid %}
