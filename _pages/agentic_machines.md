---
layout: page
permalink: /agentic/machines/
title: many machines, one setup
description: what to sync between computers, what to leave alone, and what must not live in a drive
nav: false
wiki_slug: machines
last_updated: 2026-09-12
---

{% assign w = site.data.agentic_wiki %}
{% include agentic_wiki.liquid %}

<p class="wk-tldr">I work across three Macs and want the same setup on all of them. The rule that
matters: anything that <strong>executes</strong> belongs in git, and anything that is a
<strong>document</strong> can live in a cloud drive. Mixing those two is a security problem, not a
tidiness problem.</p>

If you use one computer, skip this page. It buys nothing and adds moving parts.

## The split

| | Where | Why |
|---|---|---|
| Hooks, settings, skills, commands, shell config | **git** | It executes. You want review, history, and an explicit step before it changes. |
| Projects, notes, manuscripts, handoffs, data | **cloud drive** | Documents. You want them to appear on the other machine without thinking. |
| Model weights, caches, session state, scheduled jobs | **neither** | Large, machine-specific, or per-host by nature. |

## Why executable config belongs in git

This is the part worth being precise about, because the convenient answer is wrong.

Putting your whole agent configuration in a synced drive folder is appealing: edit on one machine,
appear on the others, no commands to remember. The cost is that **the drive folder becomes a
code-execution surface.** Session hooks run automatically, at session start, without being invoked.
The settings file decides what the agent is permitted to do without asking. If those files live in a
synced folder, then write access to that folder is the ability to run code on every machine you own
and to change what your agent is allowed to do, with no review step and no history.

That is a larger-than-expected consequence of a decision that was made for convenience, and the
consequence does not depend on anyone being malicious. It only requires that sync reach something it
should not, which is a much weaker condition.

Git gives you the three properties a drive cannot: an **explicit** update step, a **diff** you can
read before accepting it, and **history** if something changes that you did not change. The cost is
typing `git pull`.

<div class="wk-warn">
  <span class="lbl">the practical rule</span>
  <p>Hooks, settings, skills, commands, dotfiles → a git repo you clone on each machine, installed
  by symlink so updating is <code>git pull</code>. Projects and documents → the drive. If you are
  unsure which side something is on, ask whether anything ever runs it. If yes, git.</p>
  <p>The <a href="{{ w.repo }}">starter repo</a> is set up this way: <code>install.sh</code>
  symlinks from the clone into <code>~/.claude/</code>, so there is exactly one copy of each file
  and it is under version control.</p>
</div>

## One writer per synced file

For the document half, there is a failure mode specific to cloud drives that is worth knowing before
it happens to you.

**A drive resolves concurrent writes by keeping both versions under the same name.** Each machine
then pins to a different underlying object. The file reads correctly on *both* machines while
silently diverging, and neither one can see the other's content. No error, no conflict marker, no
duplicate filename.

This happened to me with a log that two machines appended to on different days. It forked, and each
machine saw a plausible, incomplete version of its own history.

Two consequences:

**Give each machine its own file** when several machines must record to one place. A suffix per
host, and read them together, rather than sharing one append-only file.

**Detecting a fork is cheap**, and worth doing the moment a synced file looks stale on one machine:
count the local files matching that name and compare to the count of objects the drive's own search
returns for it. Equal counts are healthy. More objects than files means a fork, and the extras are
orphans that nothing will ever show you.

And do not run the agent on the same project from two machines at once. That is the condition the
whole failure needs.

## What not to sync

**Large model weights.** I run local speech-to-text for meeting recordings; the model file is 1.6 GB.
Syncing that to three machines buys nothing. The recipe travels, the weights do not — re-download per
machine.

**Per-machine session state.** The agent keeps local state keyed to an encoded working-directory
path, and the path differs between machines because the username does. Syncing it would produce
directories that are meaningless on the machine reading them.

**Scheduled jobs.** Launch agents and cron entries are per-host by design, and **a daily job should
run on exactly one machine.** Two machines with the same job configured will both fire. Mine once
had two hosts set to send the same daily digest, and removing a duplicate requires going to the other
machine by hand, because nothing syncs it.

## Setting up a new machine

Ordered, because two of these steps fail confusingly if done out of order.

1. **Install the standalone agent CLI**, not just the desktop app. The app ships its own bundled
   binary that is not on your `PATH`, so `which claude` returns nothing and any launcher silently
   fails to start anything.
2. **Fix `PATH`.** The installer puts the binary in `~/.local/bin` and does not add that to `PATH`.
   Add `export PATH="$HOME/.local/bin:$PATH"` to your shell config, open a new tab, and confirm
   `which claude` prints a path before continuing. This is the step that wastes the most time when
   skipped.
3. **Clone the config repo and run its installer.** Symlinks, not copies.
4. **Install the terminal pieces** if you use them: `brew install tmux`, `brew install --cask
   ghostty`, and source the launcher from your shell config.
5. **Sign in to the drive client** and let the project folders materialise.
6. **Connect any tool integrations**, which means authorising each one on this machine. Per-machine
   by design; tokens do not travel, and should not.
7. **Check one real project end to end**: start a session in it, confirm the handoff appears and the
   project's context file loads.

One known rough edge once you have several machines: a long-lived tmux server holds the shell
functions it started with, so an edit to your launcher does not reach shells inside it. The symptom
and the fix are on [the terminal page]({{ '/agentic/terminal/' | relative_url }}).
