---
layout: page
permalink: /agentic/skills/
title: teaching it your domain
description: grounding an agent in your field's actual sources, and why prompting is not enough
nav: false
wiki_slug: skills
last_updated: 2026-09-12
---

{% assign w = site.data.agentic_wiki %}
{% include agentic_wiki.liquid %}

<p class="wk-tldr">For a niche technical domain, the model's knowledge is either out of date or
written for a different reader, and no amount of prompting fixes either. A skill is a folder of
your field's actual sources that the agent loads on demand. I have built three; this is the recipe
and the parts that are not obvious.</p>

## What a skill is

A folder with a `SKILL.md` and whatever reference files it needs, in `~/.claude/skills/<name>/`.

```
~/.claude/skills/slim/
├── SKILL.md          what to do, and when. loaded on demand.
├── references/       the corpus. grepped, not read wholesale.
├── scripts/          things the skill runs, including its verifier
└── examples/         worked cases, with their saved output
```

Only the description line is always in context. The body and the references load when the work
calls for it, so a five-megabyte corpus costs nothing until the moment it is needed. That is the
difference from a slash command, which is a flat file loaded whole, and it is why anything needing
a large reference corpus should be a skill.

## When it is worth the effort

Narrow. Write one when the model's knowledge of your domain is wrong in one of two specific ways.

**It is stale.** Simulation frameworks, analysis packages and APIs move faster than training data.
The model writes code that looks idiomatic and uses a property renamed two major versions ago.
Prompting cannot fix this, because the model does not know what it does not know. A version-pinned
local corpus can.

**It is in the wrong register.** Some documentation is complete, correct, and written for a
different reader. Statistical methods literature is the clear case: for the life-history models I
use, every answer is in the author's technical reports, in exponential-family language a field
biologist cannot map onto a census sheet. Here the corpus is the easy part and the **translation
layer** is the product.

Do not build one because a topic is important. Build one when you can name the specific failure you
are fixing. Each of mine took a solid day or more.

## The three I have built

**Simulation** (forward population genetics). A version-pinned manual, 204 official example
recipes, the complete 857-entry function signature index extracted from the tool's own help
database, plus design patterns pulled from methods sections of papers I already had. Built because
essentially all such code in training data predates two renaming releases.

**Life-history statistics.** The method author's complete written record — twelve technical
reports, a book, seven package vignettes, 176,000 words, and 634 of his own runnable code chunks —
plus the full package API and a seven-file layer restating it in terms of census sheets, blocks, and
cross types. Built because the register was the barrier, not the content.

**Expert review.** Six reviewer lenses, each built from that person's actual published writing, 89
papers plus a set of blog archives. Reviews a proposal or manuscript through whichever lenses the
work's exposure actually calls for. Discussed at the end of this page, because the design lesson is
different from the other two.

## The recipe

**1. Pick the corpus and pin the version.** Manual, API reference, official examples, the papers
that set the conventions in your subfield. Record which version, because a corpus whose version you
cannot state is one you cannot trust later.

**2. Prefer source over rendered output.** If a LaTeX, Markdown or HTML original exists anywhere,
build from that. Details below, because this is where I lost the most time.

**3. Build an API index, separately from the prose.** Prose tells you how to think; signatures tell
you what exists. Keeping them apart lets the skill answer "is this function real" without reading a
chapter. Where the tool can emit its own function list, use that rather than scraping the manual —
for one skill that produced a complete 857-signature index in a form no amount of PDF parsing would
have matched.

**4. Write the translation layer, if register is the barrier.** Short documents restating the
domain's concepts in the vocabulary of the person who will use it. This cannot be generated from the
corpus, because it is exactly what the corpus is missing.

**5. Write a verifier, and make the skill run it.** The step people skip, and the one that separates
a skill that works from a skill that sounds right.

**6. Write down the traps.** One file of specific, reproducible failures: what looks right, what
actually happens, how to tell. This is where the skill accumulates value after you build it.

## Extraction: source beats rendered output

Two silent failures, both of which I hit, and both of which produce a corpus that reads fine and is
useless.

**Ligature loss.** Every `pdftotext` mode I tried drops fi/fl ligatures from a manual's body font.
`fitness` becomes ` tness`, `specified` becomes `speci ed`, `first()` becomes ` rst()`. The mangled
words are exactly the ones you would search the corpus for. On one 500-page manual, PyMuPDF gave
1446 correct instances of "fitness" and zero mangled, where `pdftotext` mangled about 70%.

So the rule became "use PyMuPDF, never pdftotext" — and then the next skill broke it. Those
technical reports are old Type 1 LaTeX with no usable character map, so _every_ extractor drops
ligatures, PyMuPDF included: one report came out with 17 mangled instances and zero intact. The fix
was to build from the `.Rnw` and `.tex` sources the author ships on GitHub, which also yielded 634
runnable code chunks as a side effect. The modern vignettes in the same project extract cleanly, so
the build script asserts this per file rather than assuming either way.

The general rule: **check for a source form before extracting any PDF**, and verify the extraction
rather than trusting the tool. `build-corpus.py` in the [starter repo]({{ w.repo }}) does the
extraction and runs the ligature check; `--help-source` explains the rest.

**De-TeXing that destroys meaning.** Two real bugs caught during one build. Stripping `\mid` turned
`E(w | z)`, a conditional expectation, into `E(w z)`, a product. And a naive `\to` → `->` string
replacement rewrote `\theta` as `->heta`, deleting the single most important symbol in the corpus.
Every control-word substitution needs a non-letter boundary, and the specific ones — Greek,
relations, fractions — must be mapped before any generic strip.

## Verification is not syntax checking

Three bars, and stopping at the first is the most common mistake.

**Parsing is not running.** The simulation framework's own syntax checker passes code using names
from a previous major version: one property parsed clean and failed only on execution. Two other
errors found while building that skill were also runtime-only. So the check script runs a short
smoke run as a mandatory second stage, and the rule in `SKILL.md` is that a model which has not been
executed is not finished.

**Running is not converging.** For statistical fitting the bar is different, because running is not
the question. A fit can converge to garbage and report nothing. One inverted its information matrix
without complaint at a reciprocal condition number of 3e-13 and produced meaningless standard
errors. `solve()` succeeding is not reassurance. That skill's verifier checks graph consistency,
node ordering, directions of recession, matrix conditioning, and empty terminal cells — the things
that actually indicate health.

**And the tool can lie.** Building the statistics skill turned up a bug that had already affected my
own analyses: a prediction function silently ignores its `newdata` argument, because the fitted
object's class dispatches to a method with no such parameter and `...` swallows it. Twenty-seven
rows requested, 5130 returned, no error, no warning.

Two things made that entry durable rather than a note. It ships with a **script that reproduces it**,
and that script is written to **fail loudly if a future release fixes the bug**, so the trap file
cannot go stale and start lying in the other direction.

Ask what **wrong but silent** looks like in your domain, and make the verifier test for that.

## Expert-lens skills: a panel, never a blend

The third skill started as a request for one reviewer combining the best of several people I respect.
That would have been a mistake, and noticing why is the useful part.

Merging experts produces a generic wise skeptic. That is already what you get by asking for
criticism, so the skill would add nothing. The value is that independent lenses attack **different
axes and disagree with each other**, which means the output has to be separate signed memos plus a
synthesis that _preserves_ the conflict rather than resolving it. On the first real run, the single
most useful output was an unresolved disagreement between two lenses about a scope decision I had
already made. The review's job there was to name the cost, not relitigate the decision.

Four rules that came out of building it:

- **A lens must own an axis no other lens owns**, and this is a real filter. I rejected one proposed
  by name, despite being a good fit on paper, because his distinct methodological presence is thin
  and his main relevant tool is co-authored with someone already in the set. A near-duplicate lens is
  worse than none: two memos agreeing tells you nothing, and it destroys the signal that agreement
  between genuinely independent lenses is meaningful.
- **Never run all of them.** Select by the work's actual exposure. If an exposed axis has no owner,
  saying so is itself a finding, and a gap surfaced by a real review is much better evidence for
  adding a lens than reasoning about coverage in the abstract. That is how the sixth lens got added.
- **Require citation from the corpus.** A memo citing nothing was written from vibes. This is the
  only real defence, because the failure mode here is not staleness but a plausible generic skeptic
  wearing a name tag. It works: the first run's top finding came from reading a stated assumption
  verbatim out of one paper — a closed population with discrete, non-overlapping generations — and
  noticing that my study system violates it via its seed bank, in the direction that manufactures
  the very signal the method reads as selection.
- **Fetch both halves of a published exchange.** One critique I included reads as a rout on its own;
  the reply rebutted half of it outright and conceded the rest. A lens that has only read the attack
  manufactures severity.

And never attribute the output to the real person. These are simulations built from public writing.
"The Coop lens", not "Graham Coop says your Aim 2 is underpowered" — the moment a line gets pasted
into a collaborator thread, that distinction is all that stands between you and attributing an
opinion to someone who never held it.

## Starting one

`skills/` in the [starter repo]({{ w.repo }}) has a `SKILL.md` template and the corpus builder. The
template's structure is the part to copy: a table of what is in the skill **with a column for when
to read each thing**, because without that the model either reads everything or nothing.

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/tools/' | relative_url }}">Connecting your real tools</a></strong> —
  files, email, calendar, Slack, the browser.
</div>
