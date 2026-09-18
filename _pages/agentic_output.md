---
layout: page
permalink: /agentic/output/
title: output
description: reports, artifacts and docs, and picking by how you plan to revise
nav: false
wiki_slug: output
last_updated: 2026-09-18
---

{% include agentic_wiki.liquid %}

An agent finishes an hour of work and writes a long summary into the terminal, where it scrolls
away, is not searchable next month, and cannot be sent to anyone. Ask for a file instead — and
pick the kind of file by **how you intend to revise it**, because that is what decides whether
you can do anything with it afterwards.

|                    | Use when                                                                   | You revise by                                                       |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Published page** | You want to read it away from your desk, or mark it up over several passes | Commenting on the page; the agent reads the threads and edits       |
| **HTML file**      | It has to be self-contained, durable, or sent to someone                   | Telling Claude what to change, since you cannot mark it up directly |
| **Google Doc**     | Other people are in the revision loop                                      | Suggestions and comments, from everyone                             |

## A published page

This is where most of John's reports end up now. The agent writes the file, publishes it, and hands
back a URL — private by default, readable on a phone, with comment threads on the page. Claude
Code calls these artifacts.

The part that makes it a loop rather than a delivery: **you comment, and the agent reads the
comments and makes the change.** Not a copy-paste of feedback into a new prompt; it sees what
text you selected and what you said about it. Two or three passes in an evening is normal.

The file in the project folder is still the real one. Publishing sends a copy up to read and
mark up, and the agent republishes it after each round of edits; what stays with the project is
the file on disk.

## An HTML file

When it has to stand alone — emailed, archived, opened in five years with no build step:

```
Write this up as a single self-contained HTML file. No external dependencies —
everything inline. High information density, scannable, so I can find the one
number I need. Dark text on a white background.
```

**Single file.** It opens anywhere, and you can email it.

**No external dependencies.** Anything loaded from a CDN is a page that breaks later.

**Dense and scannable.** Tables, a summary at the top, headings you can jump between, rather than
a blog post.

**Dark text on a white background, said explicitly.** Your terminal is probably dark; that is
your environment, not a spec for the files you produce. Left unstated, the agent picks, and it
will often hand back a dark page, or one that flips with whatever theme the reader's computer is
set to. Anything that gets printed, projected or forwarded should look the same for everyone.

## A Google Doc

When the revision loop runs through other people. Have it **authored as markdown and imported**,
not typed in as plain text, or you get an unstyled wall where the headings and tables should be.

Docs give you three separate channels, and the agent has to read all three:

- **Suggestions** — tracked changes, from anyone with access.
- **Comments** — anchored questions and notes.
- **Replies on comments** — where the generalisable instruction usually ends up. A reply saying
  "do this everywhere, not just here" turns one edit into a rule, and it is the channel most
  likely to be missed.

One trap worth knowing, because it fails silently: **the ordinary ways of reading a Doc show you
the comments and drop the tracked-change suggestions entirely.** A document full of someone's
suggested edits reads as clean. Getting them requires exporting to `.docx` and reading the
tracked changes out of that.

So ask for all three by name:

```
Read the feedback on this doc through all three channels: comments, replies
on comments, and tracked-change suggestions. Export it to .docx and read the
suggestions out of that, because reading the doc directly drops them.
```

And put it in CLAUDE.md so you only say it once:

```
Before treating a Google Doc as read, pull all three channels: comments,
replies on comments, and tracked-change suggestions. Suggestions require
exporting the doc to .docx and reading the tracked changes out of it; the
ordinary readers drop them silently. Never report on a marked-up doc having
read only one or two.
```

## Two rules about the content

**Present the current state, not the process.** It should read as a clean synthesis: findings as
they stand, ranked by confidence, with honest caveats. Not a narrative of what was tried and
abandoned (Claude loves to do version control in prose). Iterating on one file across several turns is fine; letting the file accumulate a
changelog of its own dead ends is not.

**Name the evidence.** Every number should name the script and the saved output that produced it,
both committed in the project folder. You will be asked about one of these numbers long after you
have forgotten how you got it.

## Put it in CLAUDE.md

```
When I ask for a report, pick the form by how I will revise it. Something I
will mark up over several passes: publish it as a page and give me the link.
Something that has to stand alone or be sent on: a single self-contained HTML
file, no external dependencies, dense and scannable, dark text on a white
background. Something other people will edit with me: a Google Doc, authored
as markdown and imported.
```

One block and you stop specifying it every time. More of these on
[rules worth copying]({{ '/agentic/rules/' | relative_url }}).

**Next:** [Rules worth copying]({{ '/agentic/rules/' | relative_url }}).

{% include agentic_byline.liquid %}
