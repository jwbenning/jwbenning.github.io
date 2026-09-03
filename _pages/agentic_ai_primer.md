---
layout: page
permalink: /teaching/agentic-ai/primer/
title: what is an agent?
description: A primer for BIOEE 7600-103 — no background assumed
nav: false
icon: ai-eeb.png
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
  .pr-more{border:1px solid var(--global-divider-color);border-radius:10px;background:var(--global-card-bg-color);margin:1rem 0 0;overflow:hidden}
  .pr-more[open]{box-shadow:0 3px 14px rgba(20,30,40,.06)}
  .pr-more > summary{list-style:none;cursor:pointer;padding:.7rem 1rem;font-weight:700;font-size:.92rem;user-select:none}
  .pr-more > summary::-webkit-details-marker{display:none}
  .pr-more > summary::before{content:"▸ ";color:var(--global-theme-color)}
  .pr-more[open] > summary::before{content:"▾ "}
  .pr-more > summary:hover{color:var(--global-theme-color)}
  .pr-more .inner{padding:.2rem 1rem 1rem;border-top:1px solid var(--global-divider-color)}
  .pr-more .inner p{margin:.75rem 0 0;line-height:1.6}
  .pr-more .inner pre{margin:.55rem 0 0;padding:.6rem .8rem;border-radius:8px;background:var(--global-bg-color);border:1px solid var(--global-divider-color);overflow-x:auto;font-size:.85rem}
  .pr-more table{width:100%;border-collapse:collapse;margin:.8rem 0 0;font-size:.9rem}
  .pr-more th,.pr-more td{text-align:left;padding:.35rem .5rem;border-bottom:1px solid var(--global-divider-color)}
  .pr-more th{font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;color:var(--global-text-color-light)}
</style>

<a class="pr-back" href="{{ '/teaching/agentic-ai/' | relative_url }}">← back to the course page</a>

<p class="pr-lede">Ten minutes on what an agent is, what it does while you are not watching, and the
words you will hear all term. Read it if you have never used one, or have used one without
being sure what made it an agent. No computer science needed.</p>

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

That one change is where both the usefulness and the risk come from: the model is no
longer describing the world, it is acting in it.

## Four rungs

The word "AI" now covers systems that differ enormously in what they can do to your data.
Think of them as four rungs on a ladder. The same task runs through all four.

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
    looks wrong; only checking the database shows that it is.</span>
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
    stretch of unsupervised action is what makes it an agent.</p>
    <span class="ex"><b>Our task</b>"Get the occurrence records for this species, clean
    them, and fit a species distribution model." It pulls the records, drops the ones at
    (0, 0) and in the ocean, throws out everything georeferenced only to a county
    centroid without telling you, picks a climate dataset you have not heard of, fits it on defaults,
    and hands you a map. You are not consulted at any point. Two of those choices were
    routine. Two it made on your behalf. Which two, and how would you know?</span>
  </li>
</ul>

<div class="pr-note">
<b>So which rung am I on?</b> Today's assistants slide between rungs two and four inside the
same chat window. A plain reply is rung two. The moment one searches the web, runs code, or
reaches a connected database it is on rung three — and when it does that over and over,
deciding each time what to try next, it is on rung four whatever the interface calls itself.
The test: did it go and get something, and did what came back change what it did next?
</div>

<details class="pr-more">
<summary>Run the herbarium test yourself</summary>
<div class="inner">

<p>Ten minutes, and worth it: reading that a model fabricates is different from watching
one do it to a species you know.</p>

<p><b>1. Ask a model with no tools.</b> Turn search off, then paste:</p>
<pre>List herbarium specimens of Clarkia xantiana subsp. parviflora
collected before 1980. For each, give the collector, collection
number, collection date, locality, and the herbarium where it is
deposited.</pre>

<p><b>2. Note what it gets right</b>, which is what makes the output dangerous. Every run
we did opened by saying it had no live database access, which is true and was stated
unprompted. The collectors it named are real botanists who really did collect this species.
The herbaria are real. The localities are in the right part of Kern County. One run even
warned us that AI models invent herbarium records, then produced a list.</p>

<p><b>3. Now check the identifiers.</b> Every specimen record has a collection number, and
those are checkable. Ours:</p>

<table>
<tr><th>It claimed</th><th>Collector real?</th><th>Number in GBIF</th><th>That collector's real dates</th></tr>
<tr><td>Abrams 5361, 1915</td><td>yes, 4 specimens</td><td><b>absent</b></td><td>1900, 1908</td></tr>
<tr><td>Howell 5021, 1930</td><td>yes, 17</td><td><b>absent</b></td><td>1958–1971</td></tr>
<tr><td>Munz 13345, 1934</td><td>yes, 3</td><td><b>absent</b></td><td>1923</td></tr>
<tr><td>Lewis 412, 1947</td><td>yes, 53</td><td><b>absent</b></td><td>1946–1956</td></tr>
</table>

<p>We swept all 452 preserved specimens of <em>Clarkia xantiana</em> in GBIF. No collection
number matched, and the dates miss by decades. You can repeat the sweep from any browser:</p>
<pre>https://api.gbif.org/v1/occurrence/search?scientificName=Clarkia%20xantiana&amp;basisOfRecord=PRESERVED_SPECIMEN&amp;limit=300</pre>

<p><b>4. Ask it twice more.</b> Ours named Alice Eastwood as the original collector on one
run and T. S. Brandegee on another. That contradiction proves one answer is wrong without
consulting any database, and you can run the same check on any claim.</p>

<p><b>5. Then turn search on and ask again.</b> Same question, one rung up. Watch what
changes, and watch what does not.</p>

<p>So: real names, real institutions, real region, invented identifiers. Nothing in the
output looks wrong, and knowing the system does not help. Only the lookup catches it.</p>

</div>
</details>

## The loop

Every agent, whatever it is called and whoever built it, is running the same cycle. The
pattern was named by [Yao et al. (2022)](https://arxiv.org/abs/2210.03629), who showed that
making a model reason and act in turn, rather than only reason, beat both on its own.

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

Most failures happen at **judge**. Deciding whether a result is scientifically acceptable
requires knowing what a right answer would look like, and it is the step agents are worst
at. Given a clear pass/fail criterion — the tests pass, the file parses — agents iterate
well. Given "does this look reasonable," they will usually decide that it does.

## Reading and writing

The loop tells you how an agent works. It does not tell you what it can do to you. For that,
ask a second question: **what is this thing allowed to change?**

Some agents only read. They search, fetch pages, query databases, run an analysis on a copy.
An assistant looping over web searches is doing real agentic work and cannot alter anything
you own. That does not make it harmless: anything an agent reads, and any page it fetches,
is a route by which your own data can leave. Others write. They edit your files, run shell
commands, modify databases, send mail, commit to your repository.

That distinction cuts across products rather than along them, and it is what governs risk.
Two agents can run the identical loop the identical number of times: the read-only one
wastes your afternoon and may mislead you, the read-write one leaves your data in a state
you did not choose.

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
rows during a merge is not, and neither is a reprojected coordinate system. The
agent will report success either way, because from inside the loop it succeeded.

**Provenance thins out.** The agent made forty decisions to produce that file, and the file
records none of them. Agent tools do keep a transcript of every action and its output, and
reading that transcript is what this seminar means by an audit. But nothing attaches it to
the result, and nobody reads it unless they decide to.

**Speed removes the pause.** The friction of doing analysis by hand is also when you notice
things. Remove the work and you remove the noticing, unless you put it back deliberately.

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

## Who makes these

<details class="pr-more">
<summary>The main tools, as of September 2026</summary>
<div class="inner">

<p>A snapshot that will date fast. What lasts is the two questions to ask of anything new:
<b>which rung is it on</b>, and <b>can it write</b>.</p>

<p><b>Chat assistants.</b> ChatGPT, Claude, Gemini. Rung two on their own, rung three or
four once search, code execution or connectors are switched on. They act on their own
servers, not your machine, so they cannot alter your files.</p>

<p><b>Terminal and desktop coding agents.</b> Claude Code, OpenAI Codex, Gemini CLI. Rung
four, and read-write on your actual machine — they edit files and run commands. This is the
category we use in class, and the category the seminar's warnings are really about.</p>

<p><b>Editor-integrated agents.</b> Cursor, GitHub Copilot, Windsurf, Cline. Rung four,
read-write, scoped to the project you have open.</p>

<p><b>Open source.</b> Aider, OpenHands, SWE-agent. Same shape, run against a model of your
choosing, which matters if you need to know where your data goes.</p>

<p><b>Science-specific.</b> Elicit and Consensus for literature search and screening; a
growing set of research agents from groups like FutureHouse. Mostly read-only, mostly
retrieval — closer to a very good search tool than to an agent that acts.</p>

<p>Published benchmark rankings among these change monthly and are usually reported by
whoever comes out ahead. Treat them the way you would treat any effect size from a study you
did not read.</p>

</div>
</details>

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
  <dd>The same prompt gives different answers on different runs. Two consequences. A second
  run that comes out clean does not tell you the first was a fluke, so re-running is not a
  check. And nobody else can reproduce your output exactly, including you next week — which
  is why an agent's result needs its transcript attached to mean anything.</dd>
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
  it decides it is done. The autonomy is what makes it an agent.</dd>
  <dt>Workflow <span class="alt">(as opposed to an agent)</span></dt>
  <dd>A fixed sequence of steps you wrote, that calls a model at points. Far more
  predictable. Most tasks people build agents for are better served by a workflow, and
  knowing which one you need is a skill.</dd>
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
  it. Demonstrated across real deployed systems by
  <a href="https://arxiv.org/abs/2302.12173">Greshake et al. (2023)</a>. This is why an
  agent that only reads still needs watching.</dd>
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

<a class="pr-back" href="{{ '/teaching/agentic-ai/' | relative_url }}">← back to the course page</a>
