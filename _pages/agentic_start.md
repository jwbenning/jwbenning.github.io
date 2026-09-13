---
layout: page
permalink: /agentic/start/
title: your first hour
description: install a coding agent, point it at real files, and watch what it does
nav: false
wiki_slug: start
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

<p class="wk-tldr">A coding agent is not a chat window. It reads and writes files on your
computer, runs code, and checks the result before it answers you. This page gets you to that
point in about an hour, on your own data, with nothing to configure.</p>

## Install it

Two ways to run [Claude Code](https://code.claude.com/docs/). Pick one; they are the same tool.

**The app.** Download from [claude.com/download](https://claude.com/download) and run the
installer, then click the **Code** tab. On Windows you also need
[Git for Windows](https://git-scm.com/downloads/win) first, or it cannot open a local folder;
Macs already have Git. On Linux the desktop app is in beta, so follow
[these steps](https://code.claude.com/docs/en/desktop-linux) instead.

**The terminal.** If you already use a terminal for R or bash, use this:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

On Windows PowerShell, `irm https://claude.ai/install.ps1 | iex`. Then `claude --version` should
print a version number, and `claude doctor` says why if it does not.

One gotcha worth knowing in advance: the installer puts the binary in `~/.local/bin`, which is
not on your `PATH` on a fresh machine. If `which claude` comes back empty immediately after a
successful install, add `export PATH="$HOME/.local/bin:$PATH"` to your `~/.zshrc` and open a new
tab. This is not a broken install and it catches people every time.

Claude Code is not in the free plan, so it will ask you to sign in and a free account will not
work. That is expected.

## Point it at a real folder

Not a toy example. Make a folder, put one of your own CSVs in it, and start the agent there.

```bash
mkdir ~/agent-test && cd ~/agent-test
cp ~/somewhere/your-data.csv .
claude
```

In the app, open that folder instead. **Where you start it matters more than it looks**: the
agent's view of the world is the folder you open, and it reads a `CLAUDE.md` in that folder
automatically if one exists. That is the whole basis of
[the four files]({{ '/agentic/context/' | relative_url }}).

Then ask for something specific:

```
Describe this file: how many rows and columns, what each column appears to
contain, and anything that looks wrong or inconsistent.
```

## Watch what it does before it answers

This is the part worth paying attention to, and the reason to do it on your own data rather than
read about it. It will read the file, probably write a few lines of code, run them, look at the
output, and only then reply. If the code errors it will read the error and try again.

That loop — act, observe, revise — is what "agentic" means. A chat window predicts an answer
about your file. This runs code against your file and reports what came back. The difference
shows up immediately on messy data: it will find the stray text in a numeric column because it
tried to compute a mean and the computation failed.

Now read its answer critically. On a file you know well, you will usually find one thing it got
wrong or overstated. Find that thing. It calibrates everything else you do with it.

## It asks permission, and you should keep it that way

Before it edits a file or runs a command, it asks. You can approve once, approve that kind of
action for the session, or decline. Declining is normal and useful: it adjusts rather than
repeating the same call.

There are looser permission modes, and they are genuinely convenient once you know what you are
doing. Do not start there. The value of the prompts in the first week is that they show you what
it was about to do, which is how you learn where its judgment is good and where it is not.

<div class="wk-warn">
  <span class="lbl">before you point it at real work</span>
  <p><strong>Work in a git repository, or on a copy.</strong> An agent that can edit files can
  overwrite them. Git makes that recoverable and it is the single cheapest precaution available.
  If the folder is not under version control, duplicate it first.</p>
  <p><strong>Decide what you will not paste.</strong> Unpublished data, anything with a person's
  name in it, a manuscript you are reviewing, a collaborator's data you were trusted with. Check
  whether your plan trains on your inputs, and turn that off. Cornell's
  <a href="https://it.cornell.edu/ai-strategy/ai-guidelines">AI guidelines</a> are a reasonable
  starting point.</p>
</div>

## A second task, on something that matters

The first task shows you the loop. The second should be a thing you actually needed done. Good
candidates, roughly in order of how reliably they work:

- **Explain code you did not write.** Point it at an inherited script and ask what it does and
  what assumptions it makes. Low risk, immediately useful, and it is good at this.
- **Write a plot from a description.** Faster than remembering ggplot's syntax, and the result is
  checkable by looking at it.
- **Find the inconsistency.** Two files that should agree, a sample sheet and a data directory,
  a metadata table and a set of filenames. Ask which entries do not match. This is tedious,
  mechanical, and exactly where it earns its place.
- **Reorganise something.** Rename 200 files to a consistent scheme, restructure a messy
  directory. Do this one in a git repo.

What I would not start with: anything where you cannot tell whether the answer is right. That is
not a rule about difficulty, it is a rule about checkability, and it is the whole subject of
[how to work with it]({{ '/agentic/norms/' | relative_url }}).

## Where to go next

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/context/' | relative_url }}">The four files</a></strong> — the
  agent forgets everything when the session ends. This is the fix, and it is the highest-value
  hour you will spend on setup.
  <br><br>
  <strong><a href="{{ '/agentic/norms/' | relative_url }}">How to work with it</a></strong> —
  read this before you use any output in something that matters.
</div>
