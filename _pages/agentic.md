---
layout: page
permalink: /agentic/
title: agentic ai
description: how John has been using agentic ai via Claude Code, and the files to copy
nav: true
nav_order: 6
last_updated: 2026-09-18
---

{% include agentic_wiki.liquid %}

<div class="wk-note" markdown="1">
<span class="lbl">a note from John</span>

I've been experimenting with using Claude Code as a research and executive assistant since around
May 2026. I've found agentic AI to be both exciting and unnerving, full of both promise and peril.
EEB needs to talk frankly about what the scientific enterprise will look like in a world with
highly capable agents, the risks and opportunities of AI, and the guidelines and norms we want to
hold as individuals and as a field. That's why, with [Xiangtao Xu](https://xiangtaoxu.eeb.cornell.edu/),
we're running the [Agentic AI in EEB course]({{ '/teaching/agentic-ai/' | relative_url }}) here at
Cornell, and I encourage you to start similar discussions at your own institution. If all of this
is new, the [ten-minute
primer]({{ '/teaching/agentic-ai/primer/' | relative_url }}) for that course assumes no background.

If you're interested in experimenting with agentic AI, these guides (written by Claude) will tell
you how I set things up and manage projects using Claude Code. This first set focuses on getting
things set up for efficient, multi-project management. Much of that efficiency relies on a good
memory system, so that models do not lose important context between sessions and can be useful
assistants on long-running, multi-faceted projects. We'll go over some tips on generating
human-facing output like reports, and how to iteratively edit documents like these with Claude.
I'll also share some general rules and tricks I've found useful. Moving forward, I'll keep adding
potentially useful information here, so check back every once in a while. Please let me know about
any errors you find.

</div>

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

## Commands, skills, hooks and routines

The four pages above are the basics. The rest of what John runs comes in four kinds, which is worth
knowing because they behave differently:

|                       | What it is                                               | When it runs                                       |
| --------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| **Command**           | A procedure written once in markdown, invoked as `/name` | When you type it                                   |
| **Skill**             | A folder carrying a reference corpus, loaded on demand   | When the work calls for it                         |
| **Hook**              | A script the harness runs, not the model                 | At a defined moment, automatically                 |
| **Scheduled routine** | A prompt that runs in the cloud on a cron                | On a schedule, with none of your machines involved |

The hooks are covered, on [project memory]({{ '/agentic/memory/' | relative_url }}), and so is
one command: `/done`, which writes the handoff at the end of a session.

## Still to write

The rest is not. What is queued:

**Commands.** _Inbox triage_ — reads a file of standing rules and then files, labels and summarises
the inbox against what actually matters this week, rather than against generic importance.
_Library search_ — searches John's own reference library before the web, so the answer comes from the
paper on the shelf instead of an inference about it.

**Skills.** Some examples of the ones John has built: _slim_ — forward population-genetic
simulation, grounded in a version-pinned manual,
204 official recipes and the complete 857-entry API index. _aster_ — life-history and fitness
models, built from the method author's entire written record plus a layer restating it in the
vocabulary of a census sheet. _panel_ — review through six reviewer lenses built from their
published work, producing separate memos that are allowed to disagree with each other.

**Scheduled routines.** _Weekly lint_ — runs Sunday evening with none of John's machines switched on,
reads the whole control plane (global config, goals, every active project's context and to-do
list) and drafts one advisory email flagging contradictions, stale facts, deadline drift and work
that has gone quiet. It is read-only; the draft is its only write.

## Credit

John started building his Claude Code workflow from
**[Chris Blattman](https://claudeblattman.com/)**'s guide. Blattman is a political economist at
UChicago Harris who published his own setup in the open. A lot of what is here began there and was
adapted. His site is worth a look.

Worth reading alongside this: **[mycelium](https://github.com/arjunrajlaboratory/mycelium)**, from
the Arjun Raj lab.

## Corrections

If something here is wrong or out of date, [email John](mailto:jbenning@cornell.edu).

{% include agentic_byline.liquid %}
