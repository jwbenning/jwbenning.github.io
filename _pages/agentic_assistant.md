---
layout: page
permalink: /agentic/assistant/
title: a research assistant
description: the daily workflows that become possible once the tools are connected
nav: false
wiki_slug: assistant
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

<p class="wk-tldr">Most of what running a lab costs is not thinking, it is reconciliation: what came
in, what is owed, what changed, what is about to be late. I have roughly twenty-five slash commands
that do the reconciling. This is what they are, which ones actually earn their place, and the rules
that keep them safe.</p>

This is the most idiosyncratic part of my setup and the part to copy least literally. The
transferable content is the shape, not the commands.

## The shape: a command is a written-down procedure

A slash command is a markdown file in `~/.claude/commands/<name>.md` containing instructions. Typing
`/triage-inbox` loads that file and follows it. That is the entire mechanism.

What makes it worth doing is that **a recurring task is a procedure, and a procedure written down
gets better.** The first version of my inbox triage was mediocre. It is now good, not because the
model improved but because every time it did something wrong I edited the file. A prompt retyped
from memory each morning cannot accumulate that.

The corollary: when it makes the same mistake twice, the fix belongs in the file, not in your next
message.

## What I actually run

**Daily.** A `morning` macro that chains three things: triage the inbox, drain my capture notes to
their proper homes, and draft the week's plan if one is due. One invocation, one combined summary at
the end.

**Capture, drained later.** A single Google Doc is the inbox for everything said out loud: phone
dictation, a thought in the field, a line from a meeting. Nothing is filed at capture time, because
filing is friction and friction kills capture. A command reads that doc later and routes each line —
a research idea to the ideas doc, a lab-knowledge item to the lab's shared notes, a family moment to
a personal file, a task to the right task list — then clears what it filed. **Separating capture
from filing is the part that made note-taking stick after years of it not sticking.**

**Weekly.** A plan for the week as an editable document, never written straight to my calendar. A
sweep across projects for things that have gone quiet. A literature digest.

**Per-project, as needed.** A briefing before a meeting, assembled from the Slack thread, the last
meeting's notes, the kanban and recent email. A summary after it. A status update across a project's
files.

**Session bookkeeping.** `/done`, which writes the handoff and appends to the session log. The most
used command I have, by a wide margin.

**Search my own library.** A command over a catalog of my own reference library, so the default for
"what did that paper do" is reading my copy rather than searching the web. This changed my habits
more than I expected.

## What works and what does not

Honest accounting, because a list of commands reads as a claim that they all work.

**Clearly worth it.** Inbox triage. The capture-and-drain loop. Session handoffs. Meeting briefs.
Library search. These run on a schedule or a reflex and I would notice immediately if they stopped.

**Worth it but needs supervision.** Weekly planning produces a good draft and a bad estimate of how
long things take. Project sweeps surface real stalls and also things that are fine. Both are
genuinely useful as a first pass and not as a conclusion.

**Built and barely used.** Several. The pattern is that they automated something I do not actually do
often enough to need automated, which I could not tell in advance. Building the thing and then not
using it is the main cost of this approach, and it is a small cost.

**Does not work without a human.** Anything requiring judgment about a person. Deciding which
prospective student to encourage, how to handle a struggling trainee, whether a collaboration is
worth the overhead. It can assemble the facts. The decision is not delegable and should not feel
like it is.

## Rules live in config files, not in prompts

The single most useful structural decision: standing rules live in files the commands read, not in
the command text or my memory.

Separate files for email policy, calendar policy, task-list routing, recurring events, and triage
configuration. When a rule changes, one file changes and every command that depends on it follows.
Without this, the same rule gets restated in six commands and drifts out of agreement with itself.

Two examples of what lives there. My calendar is on one account only, so the policy file says not to
query the other one: without that rule, commands waste a call and can trigger spurious
re-authentication. And the triage config carries specific negative rules — a bare course number that
is shared across several courses is not this course, a bare sender is not necessarily this project —
each with a note saying not to loosen it. **The negative rules are the ones that took the longest to
learn and would be silently lost in a rewrite**, which is the argument for a file over a prompt.

## Guardrails worth stealing

- **Draft freely, send on a double confirmation.** Staging a draft is the expected end state of an
  email task. Sending requires two explicit yeses for that specific batch, and approval never carries
  to a later one.
- **A scheduled job gets one machine.** Two machines running the same daily job can double-send. Run
  it in one place.
- **A dead draft gets a findable subject.** The agent cannot delete a Gmail draft, so a superseded
  one would sit in my drafts forever. The convention is to retitle it `🗑️ DELETE — <reason>` so I
  clear it in one pass. This is a small thing and a good illustration of the general rule: when a
  tool cannot finish a cleanup, make the leftover **obvious** rather than pretending it is not there.
- **Write email as HTML.** A plain-text draft renders as a wall with dead links. This is the rule I
  have had to re-fix most often, including once by passing the right flag while escaping the tags, so
  the draft displayed its own markup. Both halves have to be right, and the only reliable check is
  reading the staged draft back.

## If you want to start

One command, for the thing you do most often and resent most. Write the procedure as you would
explain it to a new assistant, including the edge cases you would mention out loud. Run it. When it
gets something wrong, edit the file rather than the next message.

That loop is the whole method. Everything above is twenty-five iterations of it.

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/reports/' | relative_url }}">Reports you can read</a></strong> — the
  output format that made all of this legible.
</div>
