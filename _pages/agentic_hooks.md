---
layout: page
permalink: /agentic/hooks/
title: making it automatic
description: session hooks that carry context from one session to the next
nav: false
wiki_slug: hooks
last_updated: 2026-09-12
---

{% assign w = site.data.agentic_wiki %}
{% include agentic_wiki.liquid %}

<p class="wk-tldr">Writing a handoff note at the end of a long session is exactly the thing you
will not do. Two small scripts remove the need to remember: one writes the record at the end, one
pastes it back in at the start. They are in the <a href="{{ w.repo }}">starter repo</a> and take a
minute to install.</p>

## What a hook is

Claude Code can run a shell command at defined moments, and whatever that command prints to
standard output becomes part of the session's context. `SessionStart` fires when a session opens;
`Stop` fires at the end of a turn. The harness runs them, not the model, which is the important
property: a hook happens whether or not anyone remembers it, and the model cannot decide to skip
it.

That makes hooks the right tool for anything that must be reliable rather than smart.

## The two that matter

**`session-start-handoff.sh`** walks up from your working directory to the nearest `CLAUDE.md`,
resolves symlinks to find the canonical project folder, and prints `handoff.md` with its age in
days. So a new session opens already knowing what the last one did.

**`capture-session.sh`** writes a condensed transcript at the end of the session: the real
dialogue plus one line per tool call, with thinking blocks and tool output dropped. A handoff is a
summary written at the end, when you are tired. The transcript is what actually happened, and the
two answer different questions.

```bash
git clone https://github.com/benning-lab/agentic-starter.git
cd agentic-starter
./install.sh --check   # prints what it would do, changes nothing
./install.sh
```

If you already have a `~/.claude/settings.json`, the installer will not touch it; it prints the
`hooks` block to merge in yourself.

## Four details that decide whether you keep them

**Print the age.** The handoff says how many days old it is. A stale handoff that announces itself
is useful context; a stale handoff presented as current is actively misleading, and the agent will
act on it.

**Be silent when there is nothing to say.** No project, no handoff, no output. A hook that prints
a banner on every session start is a hook you will disable within a week, and then you lose the
useful case along with the noise.

**Walk up, and resolve symlinks.** You will not always start the agent at the project root, and
the canonical `CLAUDE.md` may be a symlink from a code repo into a data folder. Both hooks find
the real project folder either way, so a session started in `Analysis/scripts/` gets the same
context as one started at the top.

**Never let a hook block the turn.** The capture hook backgrounds its work and exits immediately.
A hook that takes two seconds is a hook you feel on every single turn.

## Where transcripts go, and why not in the project folder

The capture hook writes to `~/.claude-assistant/session-records/<project>/`, deliberately outside
the project.

A transcript is near-verbatim. It holds your half-formed reasoning, the dead ends, what you said
about a result before you were sure, and what you said about a person. Cloud-drive permissions
inherit downward and **cannot be subtracted**: share a folder and everything beneath it at every
depth is shared, with no exclude mechanism. A leading dot does not help either, since `.claude/`
is hidden in Finder but an ordinary visible folder in the Drive web UI.

The property being relied on is **never shared**, not "not in a cloud drive". If your
`~/.claude-assistant/` is itself synced between your own machines, the records travel with you and
are still safe, as long as that folder is never shared with anyone.

`handoff.md` stays the artifact meant to be read by other people. The transcript is raw material.

## The other half: a command that writes the handoff

The hooks handle reading. For writing, I use a slash command, `/done`, that I run when a session
is finished. It walks up to find the project, writes `handoff.md`, and appends a dated entry to a
running `session-log.md`.

A command rather than a hook, because it is a judgment call: it has to decide what mattered, and
it should not fire on every turn. The cost is that I have to remember to run it, which is why the
_reading_ half is a hook. Getting one of the two automatic is enough, because a missing handoff is
visible the moment the next session starts empty.

What a good handoff holds, in the order I find useful: the session topic in a paragraph; decisions
made and why; open follow-ups as actual next actions rather than areas; and context for the next
session, especially things that did not work, so they do not get retried.

## Gotchas

**Hook commands are absolute paths.** `settings.json` holds a literal path to the script, which is
why the installer substitutes the repo location rather than shipping a relative path. Move the repo
and the hooks stop firing silently.

**A hook that needs a tool permission can fail invisibly.** If a hook or command performs an action
that your permission settings do not allow, the action fails and the session continues as though it
worked. I lost a doc-refresh step this way: three tool permissions were missing, the writes were
blocked, and the only symptom was a snapshot that had quietly stopped updating. If an automated step
stops having an effect, check permissions before debugging logic.

**Editing your own permission list is itself restricted.** In looser permission modes, the agent
cannot grant itself new permissions, which is correct behaviour and surprising the first time. Make
permission edits in a normal session, or edit the settings file by hand.

**Restart after installing.** Hooks are read at session start.

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/terminal/' | relative_url }}">The terminal setup</a></strong> —
  one live session per project, all of them persisting.
  <br><br>
  <strong><a href="{{ '/agentic/skills/' | relative_url }}">Teaching it your domain</a></strong> —
  for when the model's knowledge of your field is stale or unusable.
</div>

<p class="wk-byline">Drafted by Claude from my own configuration and notes, lightly edited by me. Measurements, failures and decisions reported here are mine. <a href="{{ '/agentic/' | relative_url }}#corrections">Corrections welcome.</a></p>
