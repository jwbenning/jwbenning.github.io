---
layout: page
permalink: /agentic/tools/
title: connecting your real tools
description: giving an agent access to email, calendar, files, slack and the browser
nav: false
wiki_slug: tools
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

<p class="wk-tldr">An agent that can read your files is useful. One that can also read your inbox,
your calendar, your shared documents and your lab Slack is a different tool, and a larger
liability. This is what I connected, what it made possible, and what it costs.</p>

## What MCP is

The Model Context Protocol is a standard way to hand an agent a set of tools. A **server** exposes
operations — search email, read a spreadsheet, list calendar events — and the agent calls them like
any other tool, asking permission first.

In practice, connecting one means running a small local process, authorising it against your
account, and registering it with the agent. The setup is the friction; after that it is ordinary.

## What I have connected

**Google Workspace**, self-hosted, OAuth against my own account. Gmail, Drive, Docs, Sheets,
Calendar, Tasks. This is the one that changed the most, because most of the administrative half of
running a lab lives there.

**Slack**, read-mostly, specific channels. Project channels are where decisions actually get made,
so they are the record of what happened between meetings.

**The browser**, through a Chrome extension that drives my existing session. The important property
is that it uses the session I am already signed in to, so anything I can see in a browser it can
read. For me the main use is journal articles through my university's proxy.

## What it actually unlocks

Specific things I do that were not possible before:

- **Inbox triage against my own priorities**, not generic importance. It reads a config file that
  says which senders and subjects matter for which project and what the standing rules are, then
  files, labels and summarises. This is the single biggest time saver.
- **Cross-referencing sources.** A grant deadline mentioned in an email, a decision made in Slack,
  and a task list that does not know about either. Reconciling those three by hand is tedious and
  mechanical, which is exactly the shape of work to hand over.
- **Meeting preparation from the actual record.** Before a project meeting, pull the relevant Slack
  thread, the last meeting's notes, the current kanban, and any email since, and produce a brief.
- **Drafting into the right place.** A summary becomes a Google Doc in the project folder, styled,
  rather than text in a terminal I then retype.
- **Reading a paper I have access to** rather than inferring its methods from an abstract. With a
  library of my own PDFs and a catalog to search, the default became "check what I already have
  before searching the web", which is how you get the actual vendor named in a methods section
  instead of a plausible guess.

## What it costs

Being honest about this, because the setup guides generally are not.

**The setup is the hard part.** OAuth against your own Workspace account means credentials, scopes,
consent screens, and a token that expires. Budget an afternoon, not ten minutes, and expect to
re-authorise occasionally.

**Two accounts are worse than one.** I ran a personal and an institutional account in parallel for
months and spent a real amount of time on authentication failures from that alone. Forwarding the
institutional mail into one account, labelled, and configuring send-as so replies still come from the
right address, removed an entire class of problem. If you can collapse to one account, do.

**Servers that can find but not fetch.** A recurring gap: the server tells you an attachment exists
and gives you its ID, and has no operation to download the bytes. Same for Slack files. The fix in
both cases was a twenty-line script reusing the server's own stored credential. Worth knowing in
advance so you recognise the shape of the problem rather than assuming you have misconfigured
something.

**Permission sprawl.** Every convenience granted to avoid a prompt widens what can happen without
you looking. Mine had accumulated 46 allowlisted tools and zero deny rules before I audited it,
which is not a defensible place to be. Audit the list on purpose, and set explicit denials for the
destructive operations.

**Silent failure when a permission is missing.** An automated step whose tool call is blocked does
not error, it just has no effect. I lost a document refresh this way for weeks; the only symptom was
a snapshot that had stopped updating.

## Boundaries I set, and why

These are rules in my configuration, not good intentions.

**Channels, never direct messages.** Anything that scans Slack reads only named channels. DMs are
private, including mine. Channel content is shared by design; a DM is not, and an agent summarising
one has made a disclosure decision that was not its to make.

**Drafting is free, sending is not.** It may compose and stage email freely, and a staged draft is
the expected end state of an email task. Sending requires me to confirm twice for that specific
batch. This is deliberately more friction than necessary, because an email is the one action on the
list that cannot be walked back.

**Sharing requires an explicit yes, every time.** Granting anyone access to a document is its own
action requiring its own approval, and suppressing the notification email does not make it not
sharing. This rule exists because a new document got auto-shared with two colleagues once, which
was harmless and exactly the kind of thing that is not always harmless.

**Never store or type credentials.** The browser integration rides a session I have already signed
in to. If the session has expired, the right outcome is for it to tell me, not to attempt a login.

**No circumvention.** For paywalled papers it uses my institution's licensed proxy. Pirate mirrors
are not a fallback.

## A note on blast radius

A coding agent with file access can damage a folder. An agent with your email, your drive and your
calendar connected can damage your professional relationships, and a mistake there does not roll
back with `git checkout`.

Two things follow. First, irreversible and outward-facing actions are a different category and
should be gated differently from file edits, regardless of how much you trust the output. Second,
this is worth auditing deliberately rather than reactively: if something can write to the files that
configure your agent, it can change what your agent is allowed to do, and that is a larger problem
than whatever prompted you to check.

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/assistant/' | relative_url }}">A research assistant</a></strong> —
  the daily workflows these connections make possible.
</div>

<p class="wk-byline">Drafted by Claude from my own configuration and notes, lightly edited by me. Measurements, failures and decisions reported here are mine. <a href="{{ '/agentic/' | relative_url }}#corrections">Corrections welcome.</a></p>
