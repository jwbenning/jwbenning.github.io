---
layout: page
permalink: /agentic/reports/
title: reports you can read
description: ask for one self-contained HTML file instead of a wall of terminal output
nav: false
wiki_slug: reports
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

<p class="wk-tldr">The output of serious agent work does not belong in terminal scrollback. Ask for
a single self-contained HTML file, dense and scannable, with nothing loaded from the internet. I
have 243 of these and they are the most durable artifact of the whole setup.</p>

## The problem with the default

An agent finishes an hour of analysis and writes you a long markdown summary in the terminal. It is
well organised and it is gone: scrolled past, not searchable next month, impossible to send to a
collaborator, and flattened into plain text when tables and a chart would carry it better.

The fix is a format instruction, and it is close to free.

## The ask

> Write this up as a single self-contained HTML file. No external dependencies — everything
> inline. High information density, scannable, so I can find the one number I need. Light theme.

What each part is doing:

**Single file, self-contained.** It opens anywhere, forever, with no build step and no server. You
can email it. In five years it still renders. Anything loaded from a CDN is a future broken page.

**High density, scannable.** Without this you get a blog post. With it you get tables, a summary
line at the top, and headings you can jump between. The test is whether you can find one specific
number in under ten seconds.

**Light theme, explicitly.** My editor and terminal are dark. That is my environment, not a spec
for the files I produce, and a dark report prints badly and looks wrong next to everything else. An
agent will otherwise infer the theme from context and get it wrong half the time.

## Two rules about the content

**Present the current state, not the process.** A report should read as a clean synthesis: findings
as they now stand, ranked by confidence, with honest caveats. Not a narrative of what was tried and
abandoned, and not a changelog. The history belongs in the session log. Iterating on the same report
file across several turns is fine; letting the report accumulate an archaeology of its own dead ends
is not.

**Name the evidence.** Any quantitative claim should name the script and the saved output that
produced it, both committed in the project folder. Then the provenance is checkable without
re-running anything, which matters because you will be asked about one of these numbers long after
you have forgotten how you got it. I have had to re-derive numbers whose generating script had been
thrown away, and it is a bad hour.

## Finding them again

Once there are more than about thirty, the bottleneck moves from making them to finding them. I
generate an index: one HTML page, newest first, type-to-filter, grouped by project, rebuilt by a
command.

One detail makes the index work across machines: **its links are relative to its own location.** An
index full of absolute `file://` paths breaks the moment the home directory is a different username.
A single synced file with relative links works everywhere unchanged.

<div class="wk-note">
  <span class="lbl">a premise worth checking</span>
  <p>I built the first version of this to solve what I thought was an access problem, and the
  premise was wrong. The files were already materialised locally by the drive client, so opening one
  had always been a single command. The actual problem was never access, only <em>finding</em>.</p>
  <p>The general version: when you are about to build tooling, state the problem in one sentence and
  check that it is true. Mine cost an hour.</p>
</div>

## Getting one onto a phone, and getting comments back

A local HTML file is not readable on a phone and cannot be commented on. For reports I want to read
away from my desk or mark up, I publish the file as a private hosted page, which gives a URL and
comment threads I can act on later. The local file stays canonical; the hosted copy is a viewing and
markup surface, republished after edits.

Two things about this were not obvious:

**Most existing reports need normalising first.** 120 of my 167 recent reports carry a full
`<!doctype><html><head>` skeleton, and the hosting runtime wraps whatever it is given in its own
skeleton. Publishing raw nests one document inside the other and pushes the report's styles into the
body. A small script unwraps it, which is worth writing once rather than hand-editing each time.

**Some reports cannot be published at all, and it is not a fixable problem.** My interactive maps
load a mapping library's stylesheet and fetch map tiles at runtime. The hosting environment's
content policy permits scripts from an approved CDN but not stylesheets from an arbitrary host, and
blocks runtime image fetches outright, so the map would render blank. No CDN substitution fixes
that. Nineteen of mine stay local files permanently, and the normaliser flags them as hard blockers
so I find out before publishing rather than after.

## When not to use HTML

Reports, analyses, diagnostics, anything you will read or hand to someone. Not for everything.

A document someone will **edit** should be a Google Doc, built from markdown so the headings and
tables render as real formatting rather than poured in as plain text. Project scaffolding — the four
files, handoffs — stays markdown, because those are read by the agent as much as by me. A finalised
uneditable artifact is a PDF.

The decision is about who does what with it next, not about which format is nicer.
