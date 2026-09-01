---
layout: page
permalink: /teaching/agentic-ai/primer/
title: what is an agent?
description: A primer for BIOEE 7600-103 — no background assumed
nav: false
---

<style>
  .pr-lede{font-size:1.05rem;line-height:1.7;border-left:4px solid var(--global-theme-color);padding:.1rem 0 .1rem 1.1rem;margin:0 0 2rem}
  .pr-rungs{list-style:none;padding:0;margin:1.4rem 0 0;counter-reset:rung}
  .pr-rung{position:relative;border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1rem 1.2rem 1.05rem 3.4rem;margin:0 0 .7rem}
  .pr-rung::before{counter-increment:rung;content:counter(rung);position:absolute;left:1.1rem;top:1rem;width:1.6rem;height:1.6rem;border-radius:50%;background:var(--global-theme-color);color:#fff;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center}
  .pr-rung h3{margin:0 0 .3rem;font-size:1.05rem;line-height:1.3}
  .pr-rung p{margin:.45rem 0 0;line-height:1.6}
  .pr-rung .ex{display:block;margin-top:.6rem;padding:.6rem .8rem;border-radius:8px;background:var(--global-bg-color);border:1px solid var(--global-divider-color);font-size:.92rem;line-height:1.55}
  .pr-rung .ex b{color:var(--global-theme-color);font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:.2rem}
  .pr-fig{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1.3rem;margin:1.6rem 0;overflow-x:auto}
  .pr-fig svg{display:block;margin:0 auto;max-width:100%;height:auto}
  .pr-cap{color:var(--global-text-color-light);font-size:.87rem;line-height:1.55;margin:.9rem 0 0}
  .pr-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin:1.4rem 0 0}
  .pr-card{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1rem 1.2rem}
  .pr-card h3{margin:0 0 .5rem;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light)}
  .pr-card.good h3{color:var(--global-theme-color)}
  .pr-card ul{margin:0;padding-left:1.1rem}
  .pr-card li{margin:.35rem 0;line-height:1.55}
  .pr-vocab{margin:1.2rem 0 0}
  .pr-vocab dt{font-weight:700;margin:1rem 0 .1rem;line-height:1.4}
  .pr-vocab dt:first-of-type{margin-top:0}
  .pr-vocab dd{margin:0;line-height:1.6;color:var(--global-text-color)}
  .pr-vocab .alt{color:var(--global-text-color-light);font-weight:400;font-size:.9rem}
  .pr-grp{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-theme-color);margin:2rem 0 .8rem;padding-bottom:.35rem;border-bottom:1px solid var(--global-divider-color)}
  .pr-grp:first-of-type{margin-top:1.2rem}
  .pr-note{border:1px solid var(--global-divider-color);border-left:4px solid var(--global-theme-color);border-radius:10px;background:var(--global-card-bg-color);padding:.9rem 1.1rem;margin:1.6rem 0;line-height:1.6}
  .post h2{margin-top:2.8rem}
  .pr-back{display:inline-block;font-size:.9rem;margin-bottom:1.4rem}
</style>

<a class="pr-back" href="{{ '/teaching/agentic-ai/' | relative_url }}">← back to the course page</a>

<p class="pr-lede">This is the ten-minute version of everything the seminar assumes. If you have never
used an AI agent, or have used one without being sure what made it an agent, start here.
No computer-science background is needed and none is assumed.</p>

<p class="pr-cap" style="margin:-1rem 0 2rem">Written by Claude, checked and edited by us.
We ask you to say what a tool did for you, so: it drafted this page, we cut it down, and the
herbarium test below we ran ourselves.</p>

## The short version

A **large language model** predicts text. That is the whole of what it does. Give it some
words and it produces the words that plausibly follow, one piece at a time, based on
patterns in an enormous amount of training text.

An **agent** is that same model placed in a loop, handed a set of tools it can actually
operate — a shell, a web browser, a Python interpreter, your file system — and given a goal
rather than a question. It decides what to do, does it, looks at the result, and decides
what to do next, repeating until it thinks it is finished or you stop it.

Everything interesting and everything alarming follows from that one change: the model
stopped producing sentences about the world and started taking actions in it.

## Four rungs

The word "AI" now covers systems that differ enormously in what they can do to your data.
It helps to see them as a ladder. The same task runs through all four.

**These are rungs of capability, not brands.** One product can sit on several of them
depending on what is switched on, and the box you type into looks identical either way. The
useful habit is asking which rung you are on right now, not which company made the tool.

<ul class="pr-rungs">
  <li class="pr-rung">
    <h3>A language model</h3>
    <p>Text in, text out. No memory between uses, no access to anything, no way to check
    what it said. It is not looking anything up. It is producing what sounds right.</p>
    <span class="ex"><b>Our task</b>We asked one for herbarium records of <em>Clarkia
    xantiana</em> subsp. <em>parviflora</em> collected before 1980. It said it had no live
    access to any database, then listed specimens anyway — Abrams 5361, Howell 5021, Munz
    13345, Lewis 412 — with dates, localities and herbaria. Every collector is real. Not one
    of those collection numbers appears among the 452 herbarium specimens of this species in
    GBIF, and the real dates for those collectors miss the claimed ones by decades. Asked
    again, it named a different botanist as the original collector. Nothing in the output
    looks wrong. Only the database says so.</span>
  </li>
  <li class="pr-rung">
    <h3>A chatbot</h3>
    <p>The same model wrapped in a conversation, so it remembers what you said earlier in
    the session and has been trained to be helpful and to follow instructions. With no tools
    switched on it still has no access to anything outside itself: it cannot look anything
    up, and it cannot check its own claims.</p>
    <span class="ex"><b>Our task</b>You can now refine across turns — "only Californian
    records," "only after 1980." The answers get more responsive to you. They are not any
    more likely to be true.</span>
  </li>
  <li class="pr-rung">
    <h3>A model with tools</h3>
    <p>Now it can call things: search the web, run a snippet of code, query a database.
    Crucially, it can bring real results back into its own context and use them. This is
    the rung where output can start being checkable, because there is now something outside
    the model that produced it.</p>
    <span class="ex"><b>Our task</b>It queries GBIF and returns records that do exist,
    because it fetched them, and you can click through and check. What it <em>says about</em>
    them is still its own summary. And you are still driving: one request, one answer.</span>
  </li>
  <li class="pr-rung">
    <h3>An agent</h3>
    <p>You give it a goal instead of an instruction, and it plans its own route. It chooses
    which tools to use and in what order, runs them, reads what came back, notices problems,
    and tries again. It may take fifty actions before it says anything to you. That
    stretch of unsupervised action is the thing that makes it an agent.</p>
    <span class="ex"><b>Our task</b>"Get the occurrence records for this species, clean
    them, and fit a species distribution model." It pulls the records, drops the ones at
    (0, 0) and in the ocean, quietly throws out everything georeferenced only to a county
    centroid, picks a climate dataset you have not heard of, fits the model on its defaults,
    and hands you a map. Twenty minutes, no input from you. Two of those choices were
    routine. Two it made on your behalf. Which two, and how would you know?</span>
  </li>
</ul>

<div class="pr-note">
<b>So which rung am I on?</b> Today's assistants slide between rungs two and four inside the
same chat window. A plain reply is rung two. The moment one searches the web, runs code, or
reaches a connected database it is on rung three — and when it does that over and over,
deciding each time what to try next, it is on rung four whatever the interface calls itself.
The tell: did it go and get something, and did what came back change what it did next?
</div>

## The loop

Every agent, whatever it is called and whoever built it, is running the same cycle.

<div class="pr-fig">
<svg viewBox="0 0 620 330" role="img" aria-label="The agent loop. Your goal enters at plan; plan leads to act, act to observe, observe to judge; judge either returns to plan or exits with a result.">
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <g fill="none" stroke="currentColor" stroke-width="1.7" opacity=".7" marker-end="url(#ar)">
    <path d="M 104 95 H 194"/>
    <path d="M 302 95 H 394"/>
    <path d="M 450 145 V 179"/>
    <path d="M 398 235 H 306"/>
    <path d="M 250 185 V 151"/>
    <path d="M 198 235 H 110"/>
  </g>

  <g fill="none" stroke="currentColor" stroke-width="1.6" opacity=".5">
    <rect x="8" y="76" width="92" height="38" rx="8"/>
    <rect x="8" y="216" width="92" height="38" rx="8"/>
  </g>
  <g font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">
    <text x="54" y="100">your goal</text>
    <text x="54" y="240">a result</text>
  </g>

  <g fill="var(--global-card-bg-color)" stroke="var(--global-theme-color)" stroke-width="1.8">
    <circle cx="250" cy="95" r="48"/><circle cx="450" cy="95" r="48"/>
    <circle cx="450" cy="235" r="48"/><circle cx="250" cy="235" r="48"/>
  </g>
  <g text-anchor="middle" fill="currentColor">
    <g font-size="15" font-weight="700">
      <text x="250" y="93">plan</text><text x="450" y="93">act</text>
      <text x="450" y="233">observe</text><text x="250" y="233">judge</text>
    </g>
    <g font-size="11" opacity=".72">
      <text x="250" y="111">what next?</text><text x="450" y="111">run the tool</text>
      <text x="450" y="251">read output</text><text x="250" y="251">good enough?</text>
    </g>
  </g>

  <g font-size="10.5" font-weight="700" fill="currentColor" opacity=".72">
    <text x="240" y="171" text-anchor="end">not yet</text>
    <text x="154" y="228" text-anchor="middle">done</text>
  </g>
</svg>
</div>

<p class="pr-cap"><b>Plan</b> — decide the next step toward the goal. <b>Act</b> — call a tool:
run code, query an API, edit a file. <b>Observe</b> — read what came back, including errors.
<b>Judge</b> — decide whether that worked and whether the goal is met. If not, loop.
The number of times round this loop before it reports back to you is the amount of autonomy
you have granted it.</p>

The interesting failures live in **judge**. Judging whether a result is scientifically acceptable is the step that requires knowing what
a right answer would look like, and it is the step agents are worst at. When there is a
clear pass/fail criterion — the tests pass, the file parses — agents iterate well. When the
criterion is "does this look reasonable," they will often decide that it does.

## Reading and writing

The loop tells you how an agent works. It does not tell you what it can do to you. For that,
ask a second question: **what is this thing allowed to change?**

Some agents only read. They search, fetch pages, query databases, run an analysis on a copy.
An assistant looping over web searches is doing entirely genuine agentic work and cannot
alter anything you own. That is not the same as harmless: anything an agent reads, and any
page it fetches, is a route by which your own data can leave. Others write. They edit your files, run shell commands, modify
databases, send mail, commit to your repository.

That distinction cuts across products rather than along them, and it is the axis that
actually governs risk. Two agents can run the identical loop the identical number of times:
the read-only one wastes your afternoon and may mislead you, the read-write one leaves your
data in a state you did not choose and may not notice. A difference in kind, not degree.

So the loop is not the dangerous part. **The loop combined with write access is.** Before
letting any agent near real work, know which of the two you have — and if it can write, know
exactly what it is allowed to write to.

## What they are good and bad at

[Horstmann and colleagues](https://arxiv.org/abs/2606.07718) handed coding agents the
stages of a real neuroscience analysis pipeline and scored them against the standards of the
scientists who built it. It is the Week 2 reading, and the two lists below come from it.

<div class="pr-two">
  <div class="pr-card good">
    <h3>Reliably good at</h3>
    <ul>
      <li>Well-specified stages with a checkable criterion</li>
      <li>Writing and debugging code against a test</li>
      <li>Mechanical transformation: reformatting, reshaping, converting</li>
      <li>Reading and extracting from large volumes of text</li>
      <li>Doing all of the above much faster than you</li>
    </ul>
  </div>
  <div class="pr-card">
    <h3>Reliably bad at</h3>
    <ul>
      <li>Deciding whether their own output is scientifically sound</li>
      <li>Sustained visual reasoning — they will plot a result, look at it, and miss an obvious problem</li>
      <li>Stringing many stages together without drift</li>
      <li>Saying "I don't know" instead of producing something</li>
      <li>Knowing when a task needed judgement they do not have</li>
    </ul>
  </div>
</div>

<p class="pr-cap">Two patterns from that study are worth carrying into every session. Stages the
agents solved perfectly in isolation broke once composed into a full pipeline. And when the
authors classified every occasion an agent looked at a plot of its own output, the times it
misread or explained away a real problem outnumbered the times it caught one, on every
task where it looked at a plot at all.</p>

## Why "it acts" changes everything

A chatbot that is wrong produces a wrong sentence, and you are the last line of defence
before it becomes a wrong claim. That is a familiar risk and we already have habits for it.

An agent with write access that is wrong has already run the code, already rewritten the
file, already sent the query. The error is not in a draft you are reviewing; it is in your data directory. Three
consequences follow, and the seminar returns to them all term:

**Errors become silent.** A hallucinated citation is visible if you look. A dropped subset of
rows during a merge is not, and neither is a coordinate system quietly reprojected. The
agent will report success either way, because from inside the loop it succeeded.

**Provenance thins out.** The agent made forty decisions to produce that file, and the file
records none of them. Agent tools do keep a transcript of every action and its output, and
reading that transcript is what this seminar means by an audit. But nothing attaches it to
the result, and nobody reads it unless they decide to.

**Speed removes the pause.** The friction of doing analysis by hand is also the occasion on
which you notice things. Removing the work removes the noticing, unless you deliberately put
the noticing back.

<div class="pr-note">
<b>The one rule this course adds.</b> Everything else about responsible AI use in research
follows the standards you already know: you are accountable for your work regardless of the
tools you used, and you never paste unpublished data or personal information into a free
external tool. Because agents act, we add one more: <b>gate every irreversible action —
delete, overwrite, submit, send — behind human confirmation.</b> An agent should be able to
propose deleting something. It should not be able to delete it.
</div>

<div class="pr-note">
<b>The audit, in four questions.</b> Every demo this term ends the same way. What did it
read? What did it change? What did it decide for us? How would we know if it was wrong?
Treat an agent the way you treat a new field assistant in their first week — quick, capable,
keen to report success — and read the first datasheets in full before you start spot-checking.
</div>

## Vocabulary

Everything below will come up. You do not need to memorise it; skim it now and come back.

<div class="pr-grp">The model itself</div>
<dl class="pr-vocab">
  <dt>Large language model <span class="alt">(LLM)</span></dt>
  <dd>A model trained on very large amounts of text to predict what comes next. Everything
  else here is built on top of one.</dd>
  <dt>Token</dt>
  <dd>The unit a model reads and writes — roughly a short word or word-fragment. Everything
  is counted, priced, and limited in tokens.</dd>
  <dt>Context window</dt>
  <dd>How much the model can hold in mind at once, in tokens. Anything outside it may as
  well not exist. Long agent sessions can fill it, which is when behaviour gets strange.</dd>
  <dt>Prompt</dt>
  <dd>What you send it. <b>System prompt</b> is the standing instruction set the tool's
  builders wrote, which you usually cannot see.</dd>
  <dt>Hallucination</dt>
  <dd>Fluent, confident, false. Not a bug that will be patched — a direct consequence of a
  system that generates plausible continuations rather than retrieving facts.</dd>
  <dt>Nondeterminism</dt>
  <dd>The same prompt can give different answers on different runs. This is why "I ran it
  again and it was fine" is not evidence, and why reproducibility is genuinely hard here.</dd>
  <dt>Reasoning model <span class="alt">/ extended thinking</span></dt>
  <dd>A model that generates a long internal working-out before answering. Better on hard
  problems, slower, more expensive. The visible "thinking" is not a reliable account of what
  actually determined the answer.</dd>
</dl>

<div class="pr-grp">What makes it an agent</div>
<dl class="pr-vocab">
  <dt>Tool <span class="alt">/ tool call / function calling</span></dt>
  <dd>Something outside the model it can invoke — run a shell command, execute Python, fetch
  a URL, query a database. The bridge between generating text and doing things.</dd>
  <dt>Agent</dt>
  <dd>A model given tools and permission to loop: plan, act, observe, judge, repeat, until
  it decides it is done. The autonomy is the definition.</dd>
  <dt>Workflow <span class="alt">(as opposed to an agent)</span></dt>
  <dd>A fixed sequence of steps you wrote, that happens to call a model at points. Far more
  predictable. Most tasks that people build agents for are better served by a workflow, and
  knowing which you need is a real skill.</dd>
  <dt>Autonomy <span class="alt">/ permission gating</span></dt>
  <dd>How many actions it may take before checking with you, and which actions require your
  say-so. The single most important setting in any agent tool.</dd>
  <dt>Read-only <span class="alt">/ read-write</span></dt>
  <dd>Whether an agent's tools can change anything. Searching and fetching are read-only;
  editing files, running shell commands and sending mail are read-write. The best single
  predictor of how much damage one mistake can do.</dd>
  <dt>Memory</dt>
  <dd>What persists after the context window or the session ends — usually notes the agent
  writes to a file and reads back later.</dd>
  <dt>MCP <span class="alt">(Model Context Protocol)</span></dt>
  <dd>A common standard for plugging tools and data sources into an agent, so the same
  connector works across different assistants.</dd>
  <dt>Prompt injection</dt>
  <dd>An agent cannot fully separate the text it reads from the instructions it follows. A
  web page, a README or a data file can carry wording aimed at the agent, and it may act on
  it. This is why an agent that only reads still needs watching.</dd>
  <dt>Subagent <span class="alt">/ multi-agent</span></dt>
  <dd>An agent that spawns other agents to work in parallel and reports back. More
  throughput, and correspondingly more places for an error to hide.</dd>
</dl>

<div class="pr-grp">Making it more reliable</div>
<dl class="pr-vocab">
  <dt>Retrieval-augmented generation <span class="alt">(RAG)</span></dt>
  <dd>Fetch relevant real documents first, then have the model answer using them. Reduces
  fabrication because the answer is anchored to retrieved text — it does not eliminate it.</dd>
  <dt>Fine-tuning</dt>
  <dd>Further training of an existing model on your own specialised data. Expensive, and
  usually not the answer; a better prompt or retrieval normally is.</dd>
  <dt>Human in the loop</dt>
  <dd>A person deliberately placed at a checkpoint to review or approve before the process
  continues. Only meaningful if the person has enough information to actually judge.</dd>
  <dt>Benchmark <span class="alt">/ eval</span></dt>
  <dd>A standard task set used to score models. Treat published scores the way you would
  treat a p-value from an analysis you did not see: informative, and not the same as the
  thing you care about.</dd>
  <dt>Out-of-distribution</dt>
  <dd>Input unlike anything in training. Model performance falls off, often without any
  corresponding drop in confidence. Your specific study system is more likely to be here
  than you think.</dd>
</dl>

## Before Friday

1. Skim the Week 1 readings on the [course page]({{ '/teaching/agentic-ai/' | relative_url }}).
   The skim instructions are there for a reason; do not read them all in full.
2. Bring a laptop.
3. Bring one question you would genuinely want an agent to answer from your own research —
   something real from your own data or your own literature, not a demo question. We will
   try some of them live, and decide together what is safe to put in before anything runs.

You are not expected to have used any of this before. The point of the seminar is to look
carefully at what these systems actually do, together, with our own work as the test case.

<a class="pr-back" href="{{ '/teaching/agentic-ai/' | relative_url }}">← back to the course page</a>
