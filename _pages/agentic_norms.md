---
layout: page
permalink: /agentic/norms/
title: how to work with it
description: the rules that decide whether agent output is trustworthy, and what it is bad at
nav: false
wiki_slug: norms
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

<p class="wk-tldr">Everything else on this site is plumbing. This page is the part that decides
whether the output is worth anything. These are the rules I actually work under, several of them
written down after I got something wrong.</p>

## Confidence does not track accuracy

The central fact about these models is that the output is fluent whether or not it is correct,
and nothing in the writing tells you which you are looking at. This is not a caveat to note and
move past. It is the design constraint for everything you build on top.

Here is a measured example, from a demo I built for my seminar and ran on 2026-09-01. I asked a
current frontier model, with no tools and no search, for herbarium specimens of *Clarkia xantiana*
subsp. *parviflora* collected before 1980: collector, collection number, date, locality,
herbarium. Then I checked every claim against all 452 preserved *Clarkia xantiana* specimens in
GBIF.

Every run opened by stating it had no live database access. Every run then listed specimens
anyway. One run warned that AI models are prone to hallucinating fake herbarium records, and then
produced a list.

| Claimed | Collector real? | Number in GBIF | That collector's real dates |
|---|---|---|---|
| Abrams 5361, 1915 | yes, 4 specimens | **absent** | 1900, 1908 |
| Howell 5021, 1930 | yes, 17 | **absent** | 1958–1971 |
| Munz 13345, 1934 | yes, 3 | **absent** | 1923 |
| Lewis 412, 1947 | yes, 53 | **absent** | 1946–1956 |

Real collectors, real herbaria, real localities, the right genus. Not one collection number that
exists, and dates off by decades. Two runs of the same question also disagreed about who
collected the type specimen, so at least one was wrong without needing GBIF at all.

The important part is not that the output looked fake. **Every element passed a plausibility
check.** A botanist reading that list sees names they know attached to places the plant grows.
Expertise does not catch it and care does not catch it. A database lookup catches it.

So the rule is not "be skeptical", which is advice nobody can act on. The rule is: for any claim
that matters, name the check that would catch it being wrong, and run that check.

(The honest caveat, which I say out loud when I show this: GBIF is not a complete census of the
world's herbarium sheets, so absence is not proof a sheet never existed. Four misses out of four,
plus non-overlapping dates, plus the internal contradiction, is the argument. No single lookup is.)

## Never chase a result

This one predates agents and matters more with them, because the cost of trying another analysis
has gone to nearly zero.

An analysis has many defensible choices: which population counts as core, which cutoff, which
subset, which model. **Every one of those choices has to be justified independently of the result
it produces.** Picking the one that makes the hypothesis win is circular, and the fact that an
agent can try all of them in five minutes makes it much easier to do by accident.

The practical version: if a choice happens to favour the story you wanted, that is a reason for
more scrutiny, not less. Report the sensitivity rather than selecting the favourable option. And
tell the agent this explicitly, in the project's `CLAUDE.md`, because its default is to be helpful
and helpful looks a lot like finding the version that works.

## Showing something is not letting it count

A related failure, and the place where a defensible analysis quietly goes wrong. Weak evidence —
unverified records, low-precision coordinates, a coarse proxy — can be **displayed**. It must not
**drive** a ranking, a score, or a target.

Whenever you build something that scores or ranks, state up front what quality of evidence is
allowed to influence the output, and keep the display layer separate from the scoring layer. If
you do not decide this early, the decision gets made implicitly by whatever was easiest to join.

## "It ran" is not "it is right"

Three distinct bars, and most people stop at the first.

**Parsing is not running.** A syntax checker will pass code that cannot execute. I hit this
building a simulation skill: the framework's own checker accepted a property that had been
renamed in the previous major version. It parsed clean and failed only on execution. Two other
errors found the same way were also runtime-only. Unexecuted output is not finished.

**Running is not converging.** For anything fitted, the result can be garbage with no error
raised. One model fit I checked inverted its information matrix without complaint at a reciprocal
condition number of 3e-13 and produced meaningless standard errors. `solve()` succeeding told me
nothing. Check the thing that actually indicates health: conditioning, separation, empty cells.

**And the tool itself can lie.** A prediction function I relied on silently ignored its `newdata`
argument, because the object's class dispatched to a method with no such parameter and `...`
swallowed it. I asked for 27 rows and got 5130, with no error and no warning. That bug had
already affected real analyses of mine before I found it.

The generalisation: ask what **wrong but silent** looks like in your domain, and test for that
specifically. It is almost never the thing an error message would have told you.

## Run it before you claim it

Do not assert what a model or a tool "will do" when running it is possible.

I adopted this after writing a teaching example that asserted a bare model would confidently
fabricate herbarium records. Testing it four days before class showed the behaviour had shifted:
current models hedge about database access first, *then* fabricate. The tested version is better
material than the guess, and it is my own data rather than a claim from a paper.

Model behaviour has a shelf life measured in months. Anything on this page that depends on it
should be re-checked before it is repeated, including the numbers above.

## Evidence goes in the project, the moment it is produced

If a script or a run is the basis for a claim in a report, a memo, or an email, it belongs in the
project folder. Not in a temp directory, not in the session's scratch space.

This has cost me real work. A verification script that confirmed a bug lived in a scratch
directory; the next day it was gone while the report citing its numbers remained, and the numbers
had to be re-derived from scratch to find out whether the report was even right. It mostly was.
One claim turned out to be overstated, and that only surfaced on the re-run.

The test: if someone asks next month how you know this, what do you open? If the answer is a path
under `/tmp`, it is in the wrong place. The writing half of the same rule: a report asserting a
quantitative result should name the script and the saved output that produced it.

## Gate every irreversible action

Delete, overwrite, send, submit, publish, share. These get human confirmation, every time, and
approval for one does not carry to the next.

My own outbound rules, for calibration: the agent may draft an email freely, and drafting is the
expected end state. Sending requires me to confirm twice, for that specific batch. Granting
anyone access to a file requires me to say so explicitly, every time, and "no notification email
will be sent" does not make it not sharing. These are stricter than they need to be for most
people. The principle underneath is not: an action whose blast radius extends past your own
machine is categorically different from one that does not.

## Cross-check with a model from a different lab

For anything important, I get a second read from a model trained by a different company, with a
prompt that says what to attack and what not to relitigate. Two models trained differently fail
differently, which is the only reason this works. Two runs of the same model mostly agree with
each other, including when they are wrong.

This has caught real problems in my own drafts that I did not see and that the first model did not
flag.

## What it is bad at

Not a disclaimer section. These are the specific failure modes I plan around.

**Specifics that look like knowledge.** Citations, accession numbers, vendor names, parameter
values, quotations. The failure mode is fabrication with correct surrounding detail, as above.
Anything of this kind gets checked against the source, and I now search my own reference library
before the web, because reading the actual paper gives ground truth where an inference from a
web summary does not.

**Knowing when to stop.** It will answer a question it should have refused, and fill a gap it
should have flagged. Absence of hedging is not evidence of confidence being warranted.

**Stale API knowledge in fast-moving tools.** Simulation frameworks, analysis packages,
anything versioned. The generated code looks idiomatic and uses names that were removed two
versions ago. This is the specific problem that
[a grounded skill]({{ '/agentic/skills/' | relative_url }}) solves, and prompting does not.

**Quietly doing less than asked.** On a long multi-part task, a part can come back handled in
outline while the summary reads as complete. Ask for the task list and check it against the
output, rather than reading the summary.

**Agreeing with you.** Push back on a conclusion and it will often fold, which means agreement
is weak evidence. I ask for the argument against, separately, and I tell it in `CLAUDE.md` not to
flatter the idea. Neither fully fixes it.

**Math I cannot check.** My formal-math fluency is rusty enough that a derivation can look fine
to me. So derivations get checked numerically — simulate the thing and see whether the formula
predicts it — rather than by reading.

## What I do not hand to it

- **Anything where I cannot tell whether the answer is right** and have no way to check. That is
  a statement about checkability, not difficulty.
- **Final judgment on a scientific claim.** It is good at finding the inconsistency and bad at
  deciding what the inconsistency means.
- **Confidential material belonging to someone else.** A manuscript I am reviewing, a
  collaborator's unpublished data, a student's personal situation.
- **Anything that sends or shares on my behalf** without a specific confirmation first.

<div class="wk-next">
  <span class="lbl">next</span>
  <strong><a href="{{ '/agentic/context/' | relative_url }}">The four files</a></strong> — where
  several of these rules actually live, so they apply without being restated every session.
</div>
