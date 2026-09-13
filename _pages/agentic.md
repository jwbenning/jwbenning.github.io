---
layout: page
permalink: /agentic/
title: agentic ai
description: how I actually use coding agents for research, and the files to copy
nav: true
nav_order: 6
last_updated: 2026-09-12
---

{% assign w = site.data.agentic_wiki %}
{% include agentic_wiki.liquid %}

<p class="wk-tldr">I run most of my research and lab administration through a coding agent, and
the setup that makes that work is mostly a handful of plain text files. These pages are what
those files are, why each one is shaped the way it is, and which parts went wrong first. The
files themselves are in a <a href="{{ w.repo }}">companion repo</a> you can clone.</p>

This exists because I learned my own setup from someone else's public notes, and copying a
working setup is much faster than assembling one. It is written for researchers: graduate
students in my seminar on [agentic AI in EEB]({{ '/teaching/agentic-ai/' | relative_url }}),
people in my lab, and anyone else who wants the parts that transfer.

## What this is not

It is not an argument that you should use these tools, or a claim that the output is reliable.
The models are confidently wrong on a regular basis, and most of the engineering below exists
to make that wrongness visible rather than to prevent it. Where I think something does not work
I have tried to say so, including [the things I would not hand to an agent]({{ '/agentic/norms/' | relative_url }}#what-it-is-bad-at).

It is also not a tutorial on a particular product. I use [Claude
Code](https://code.claude.com/docs/), so the specifics are Claude Code's, but the four files,
the session-handoff idea, the verification discipline and the domain-grounding recipe are not
tied to it.

## The short version

If you read one page, read [the four files]({{ '/agentic/context/' | relative_url }}). Nearly
everything else is an optimisation on top of it.

1. **An agent starts each session knowing nothing.** Write the project down once, in files it
   reads automatically, split by how fast each kind of information changes.
2. **Make the handoff between sessions automatic**, because anything you have to remember to do
   at the end of a long session does not happen.
3. **Verification is the whole job.** Code that parses is not code that runs; a model fit that
   converges is not a model fit that means anything. Decide what "wrong but silent" looks like
   in your domain and test for that.
4. **Ground it in your own sources.** For a niche technical domain, the model's recall is stale
   or written for a different reader, and a local corpus beats any amount of prompting.

## The guides

{% for g in w.groups %}

<div class="wk-group-h">{{ g.title }}</div>
<div class="wk-cards">
{% for p in g.pages %}
  <div class="wk-card">
    <div class="t"><a href="{{ '/agentic/' | append: p.slug | append: '/' | relative_url }}">{{ p.title }}</a></div>
    <p>{{ p.blurb }}</p>
  </div>
{% endfor %}
</div>
{% endfor %}

## The files

<div class="wk-note">
  <span class="lbl">companion repo</span>
  <p><a href="{{ w.repo }}">github.com/benning-lab/agentic-starter</a> — the project templates,
  the session hooks, the terminal config and launcher, and a PDF corpus builder for grounding a
  skill. MIT licensed. It installs by symlink, so updating is <code>git pull</code>, and it
  refuses to overwrite anything you already have.</p>
</div>

Clone it and read `CONVENTIONS.md`, or start from
[your first hour]({{ '/agentic/start/' | relative_url }}) if you have not run a coding agent
before.

## Corrections

If something here is wrong, out of date, or does not work on your machine, tell me. Model
behaviour changes fast enough that any specific claim on these pages has a shelf life, and I
would rather hear about it than leave it standing. Students in the seminar: `#setup-help` on the
course Slack.
