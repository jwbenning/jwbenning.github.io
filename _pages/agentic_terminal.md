---
layout: page
permalink: /agentic/terminal/
title: the terminal setup
description: ghostty, tmux, and a launcher that keeps one live session per project
nav: false
wiki_slug: terminal
last_updated: 2026-09-12
---

{% assign w = site.data.agentic_wiki %}
{% include agentic_wiki.liquid %}

<p class="wk-tldr">Optional, and the thing that changed my daily use most. The goal is one live
session per project, all of them persisting, reachable by typing a fuzzy fragment of the project
name. Configs and the launcher are in the <a href="{{ w.repo }}">starter repo</a>.</p>

If you are happy in the desktop app, you can skip this entirely. Nothing else on this site depends
on it.

## Why tmux, specifically

I work on six or eight projects in a given week and want to leave a session open in each: a
sequencing analysis mid-run, a manuscript revision, a grant. Two things get in the way of that.

The first is that a terminal application owns its sessions. Close the window and they end.

The second is specific and was the actual trigger: with the desktop app, switching away from a
window would sometimes terminate the local session running in it. Work in progress ended because I
changed windows.

[tmux](https://github.com/tmux/tmux) solves both, because tmux owns the terminal rather than the
window you are looking at. Sessions survive closing the terminal, switching applications, and
ending an SSH connection. You reattach and everything is where you left it.

```bash
brew install tmux
```

## Ghostty

[Ghostty](https://ghostty.org) is the terminal I run tmux inside. Fast, native on macOS, and it
renders the wide diffs and tables an agent produces without fighting you.

```bash
brew install --cask ghostty
```

The config in `dotfiles/ghostty.config` sets a Nerd Font, a dark theme, generous line spacing for
long reading sessions, `copy-on-select`, and a 140x40 default window so tables are not wrapped. Two
settings there are load-bearing rather than taste: `macos-option-as-alt = true`, without which the
tmux Alt+arrow pane navigation does nothing, and a roomy default window, because narrow terminals
make agent output much harder to audit.

<div class="wk-warn">
  <span class="lbl">gotcha</span>
  <p>Ghostty does not allow trailing <code>#&nbsp;comments</code> on a value line. They get parsed
  into the value, and the setting silently becomes something you did not intend. Keep comments on
  their own lines.</p>
</div>

## tmux config worth having

The full file is in the repo; the parts that matter day to day:

- **`mouse on`** — clickable window tabs, scroll, drag-to-resize panes. With the matching
  `copy-pipe-and-cancel "pbcopy"` bindings, drag-select copies straight to the system clipboard.
- **Alt+arrow** to move between panes, **Shift+arrow** between windows, with no prefix key. Prefix
  chords are the main reason people bounce off tmux.
- **`history-limit 100000`** — agent sessions produce a lot of scrollback and you will want to
  search back through it.
- **`base-index 1`** and `renumber-windows on`, so window numbers match the keyboard and stay
  gapless as you close things.
- **Truecolor passthrough**, or the agent's syntax highlighting and diffs come out wrong.

One rough edge to know about rather than chase: clicking into the input to move the cursor depends
on the application enabling mouse reporting, and inside tmux that can fail on one machine while
working on another with the same config. I spent real time on this and the conclusion is that it is
not a tmux setting. Turning `mouse off` does not fix it and costs you the clickable tabs. It is not
worth the hours I gave it.

## The launcher

`cc` is a shell function: fuzzy-match a project folder by name, open a tmux window there, start the
agent in it. If a window for that project already exists, switch to it rather than making a second
one.

```bash
# in ~/.zshrc
export CC_PROJECT_ROOTS="$HOME/projects:$HOME/work/active"
source /path/to/agentic-starter/dotfiles/shell-cc.zsh
```

```bash
cc spacetime      # matches 2026_CxSpaceTime, opens a window there, starts the agent
cc               # attach to the session, wherever you left it
ccr spacetime    # same, but `claude --resume` to pick up a past session
```

Matching ignores case and punctuation and skips a leading `YYYY_`, so `cc spacetime`,
`cc CxSpaceTime` and `cc 2026_cx-spacetime` all land in the same place. With several substring
matches, an exact name wins; otherwise it lists the candidates and opens nothing, rather than
guessing.

Three things about this are worth copying even if you write your own. **Starting the agent in the
project directory** is what makes `CLAUDE.md` and the handoff hook work, so the launcher is doing
context loading, not just saving keystrokes. **One window per project** keeps the window list a
map of what you are working on. And **refusing to guess on ambiguity** matters more than it sounds:
a fuzzy matcher that silently picks one of two plausible folders will eventually run something in
the wrong project.

<div class="wk-warn">
  <span class="lbl">the gotcha that cost me an afternoon</span>
  <p>A tmux server lives for weeks. Shells inside it hold the function definitions they had when
  they started, so editing the launcher does not reach them. The symptom is specific and
  misleading: a new feature works in a fresh terminal window, then fails on every subsequent call,
  because the first call attached you into the old tmux session where the stale function lives.</p>
  <p>I went looking for a bug in the matcher. There was none. The fix is for the function to
  re-source its own file at the top of every call, guarded against recursion, so long-lived shells
  heal themselves. If you split a shell helper across machines, build this in from the start.</p>
</div>

## Getting a second machine going

The ordered version lives on [many machines, one
setup]({{ '/agentic/machines/' | relative_url }}). The one thing that always bites: the desktop app
ships its own bundled agent binary that is not on your `PATH`, so `which claude` returns nothing
and tmux windows open but cannot start anything. Install the standalone CLI, then add
`~/.local/bin` to `PATH`, then confirm `which claude` prints a path before doing anything else.

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/skills/' | relative_url }}">Teaching it your domain</a></strong> —
  the part that makes it useful on a niche technical problem rather than a generic one.
</div>

<p class="wk-byline">Drafted by Claude from my own configuration and notes, lightly edited by me. Measurements, failures and decisions reported here are mine. <a href="{{ '/agentic/' | relative_url }}#corrections">Corrections welcome.</a></p>
