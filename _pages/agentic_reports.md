---
layout: page
permalink: /agentic/reports/
title: reports
description: ask for one self-contained html file instead of terminal output
nav: false
wiki_slug: reports
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

An agent finishes an hour of analysis and writes a long summary into the terminal, where it scrolls
away, is not searchable next month, and cannot be sent to a collaborator. Ask for a file instead.

## The ask

```
Write this up as a single self-contained HTML file. No external dependencies —
everything inline. High information density, scannable, so I can find the one
number I need. Light theme.
```

**Single file.** It opens anywhere, with no build step and no server, and you can email it.

**No external dependencies.** Anything loaded from a CDN is a page that breaks later.

**Dense and scannable.** Tables, a summary at the top, headings you can jump between, rather than a
blog post.

**Light theme, stated explicitly.** My terminal is dark; that is my environment, not a spec for the
files I produce. Left unstated, the agent infers a theme and gets it wrong half the time.

## Two rules about the content

**Present the current state, not the process.** The report should read as a clean synthesis:
findings as they stand, ranked by confidence, with honest caveats. Not a narrative of what was tried
and abandoned. Iterating on the same file across several turns is fine; letting the file accumulate
a changelog of its own dead ends is not.

**Name the evidence.** Every number should name the script and the saved output that produced it,
both committed in the project folder. You will be asked about one of these numbers long after you
have forgotten how you got it, and then the provenance is checkable without re-running anything.

## When not HTML

A document someone will **edit and share** should be a Google Doc, built from markdown so headings
and tables render as real formatting instead of arriving as plain text. Project scaffolding stays
markdown, because the agent reads it as much as I do. A finalised, uneditable artifact is a PDF. The
decision is about what happens to the thing next.

## Put it in CLAUDE.md

```
When I ask for a report, produce a single self-contained HTML file: no external
dependencies, dense and scannable, light theme.
```

One line in the project's `CLAUDE.md` and I stop retyping the prompt. More of these on
[rules worth copying]({{ '/agentic/rules/' | relative_url }}).

**Next:** [Rules worth copying]({{ '/agentic/rules/' | relative_url }}).

{% include agentic_byline.liquid %}
