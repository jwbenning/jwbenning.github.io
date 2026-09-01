---
layout: page
permalink: /teaching/agentic-ai/
last_updated: 2026-09-01
title: agentic AI in EEB
description: BIOEE 7600-103 · Fall 2026 · a graduate seminar at Cornell
nav: false
---

{% assign c = site.data.agentic_ai %}

<style>
  .ai-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:.9rem 1.4rem;border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1.1rem 1.3rem;margin:0 0 1.4rem}
  .ai-meta dt{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light);margin:0}
  .ai-meta dd{margin:.15rem 0 0;font-size:.95rem;line-height:1.4}
  .ai-banner{border:1px solid var(--global-theme-color);border-left:4px solid var(--global-theme-color);border-radius:10px;padding:.85rem 1.1rem;margin:0 0 1.6rem;line-height:1.6;background:var(--global-card-bg-color)}
  .ai-live{display:inline-block;font-size:.66rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--global-text-color-light);border:1px solid var(--global-divider-color);border-radius:999px;padding:.14rem .6rem;margin-bottom:1rem}
  .ai-live .dot{display:inline-block;width:.42rem;height:.42rem;border-radius:50%;background:var(--global-theme-color);margin-right:.35rem;vertical-align:.04em}
  .ai-now{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1.1rem 1.3rem;margin:0 0 2rem}
  .ai-now h3{margin:.1rem 0 .5rem;font-size:1.1rem}
  .ai-now .wk{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-theme-color)}
  .ai-weeks{display:flex;flex-direction:column;gap:.55rem;margin:1rem 0 0}
  .ai-wk{border:1px solid var(--global-divider-color);border-radius:10px;background:var(--global-card-bg-color);overflow:hidden}
  .ai-wk[open]{box-shadow:0 3px 14px rgba(20,30,40,.06)}
  .ai-wk.is-now{border-color:var(--global-theme-color)}
  .ai-wk > summary{list-style:none;cursor:pointer;display:flex;gap:.85rem;align-items:baseline;padding:.72rem 1rem;user-select:none}
  .ai-wk > summary::-webkit-details-marker{display:none}
  .ai-wk .num{flex:none;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--global-text-color-light);min-width:4.6rem}
  .ai-wk.is-now .num{color:var(--global-theme-color)}
  .ai-wk .th{flex:1;font-weight:600;line-height:1.35}
  .ai-wk > summary:hover .th{color:var(--global-theme-color)}
  .ai-wk .body{padding:.2rem 1rem 1rem;border-top:1px solid var(--global-divider-color)}
  .ai-wk .body p{margin:.75rem 0 0;line-height:1.6}
  .ai-lbl{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light)}
  .ai-feed{list-style:none;padding:0;margin:1rem 0 0}
  .ai-feed li{padding:.75rem 0;border-bottom:1px solid var(--global-divider-color);line-height:1.5}
  .ai-feed li:first-child{padding-top:0}
  .ai-feed .src{color:var(--global-text-color-light);font-size:.85rem}
  .fnote{display:block;color:var(--global-text-color-light);font-size:.88rem;margin:.3rem 0 0;padding-left:.7rem;border-left:2px solid var(--global-divider-color)}
  li > .fnote{margin:.3rem 0 .55rem}
  .post h2{margin-top:2.6rem}
  .tag{display:inline-block;font-size:.62rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border:1px solid var(--global-divider-color);border-radius:999px;padding:.06rem .45rem;color:var(--global-text-color-light);margin-left:.35rem;vertical-align:.1em}
  .tag.is-assigned{border-color:var(--global-theme-color);color:var(--global-theme-color);font-weight:700}
  .tag.is-week{font-weight:700}
  .setup{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1.1rem 1.3rem;margin:1.2rem 0 0}
  .setup h3{margin:0 0 .35rem;font-size:1rem}
  .setup p{margin:.5rem 0 0;line-height:1.6}
  .setup pre{margin:.55rem 0 0;padding:.6rem .8rem;border-radius:8px;background:var(--global-bg-color);border:1px solid var(--global-divider-color);overflow-x:auto}
  .setup code{font-size:.86rem}
  .setup .why{color:var(--global-text-color-light);font-size:.9rem}
  .ai-filters{display:flex;flex-wrap:wrap;gap:.4rem;margin:1.1rem 0 .3rem}
  .ai-f{font:inherit;font-size:.72rem;font-weight:600;letter-spacing:.03em;cursor:pointer;border:1px solid var(--global-divider-color);background:var(--global-card-bg-color);color:var(--global-text-color-light);border-radius:999px;padding:.2rem .7rem}
  .ai-f:hover{border-color:var(--global-theme-color);color:var(--global-theme-color)}
  .ai-f.is-on{background:var(--global-theme-color);border-color:var(--global-theme-color);color:#fff}
  .ai-feed li[hidden]{display:none}
  .ai-empty{color:var(--global-text-color-light);padding:.9rem 0}
</style>

<span class="ai-live"><span class="dot"></span>Live page — updated through the semester</span>

<dl class="ai-meta">
  <div><dt>Course</dt><dd>BIOEE 7600-103</dd></div>
  <div><dt>Meets</dt><dd>Fridays, 12:20–1:10 pm</dd></div>
  <div><dt>Room</dt><dd>Comstock B104</dd></div>
  <div><dt>Credits</dt><dd>1 credit, S/U</dd></div>
  <div><dt>Instructors</dt><dd><a href="{{ '/people/' | relative_url }}">John Benning</a> · <a href="https://xiangtaoxu.eeb.cornell.edu/">Xiangtao Xu</a></dd></div>
  <div><dt>Enrollment</dt><dd>Capped at 20, by instructor consent; graduate students and above</dd></div>
</dl>

{% if c.announcement %}

<div class="ai-banner">{{ c.announcement }}</div>
{% endif %}

An **agent** is a large language model given tools, memory, and permission to plan and act
over many steps — cleaning datasets, running analyses, writing and executing code, querying
databases, monitoring the literature, drafting the outputs. That autonomy is what makes
agents useful, and what raises the stakes when they go wrong.

This seminar is a hands-on and deliberately skeptical tour of what agents can and can't be
trusted to do across the research lifecycle. After a week defining what "agentic" actually
means, most of each session is a live demo: we give an agent a real EEB task and then audit
the process and the result, hunting for what it got wrong or quietly hid. We close by
drafting an EEB community guideline for responsible use.

No computer-science background is assumed. A little R or Python helps you follow the coding
demos but isn't required. **Bring a laptop.**

**Start with [what is an agent?]({{ '/teaching/agentic-ai/primer/' | relative_url }})** —
a ten-minute primer written for this seminar, covering the vocabulary and the core ideas
with no background assumed. It is the first of the Week 1 readings; read it before the rest.

{% assign now = c.schedule | where: "week", c.current_week | first %}
{% if now %}

## This week

<div class="ai-now">
  <div class="wk">Week {{ now.week }}{% if now.date %} · {{ now.date | date: "%B %-d" }}{% endif %}</div>
  <h3>{{ now.theme }}</h3>
  {% if now.framing %}<p><span class="ai-lbl">Framing</span><br>{{ now.framing }}</p>{% endif %}
  {% assign now_req = now.readings | where_exp: "r", "r.optional != true" %}
  {% assign now_opt = now.readings | where_exp: "r", "r.optional == true" %}
  {% if now_req.size > 0 %}
    <p><span class="ai-lbl">Read before class</span></p>
    <ul>
      {% for r in now_req %}
        <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
      {% endfor %}
    </ul>
  {% endif %}
  {% if now_opt.size > 0 %}
    <p><span class="ai-lbl">Optional, and worth it</span></p>
    <ul>
      {% for r in now_opt %}
        <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
      {% endfor %}
    </ul>
  {% endif %}
  {% if now.assignment %}<p><span class="ai-lbl">Bring with you</span><br>{{ now.assignment }}</p>{% endif %}
</div>
{% endif %}

## Getting set up

**Do this before Friday.** It takes about ten minutes and needs no account.

We use [Claude Code](https://code.claude.com/docs/), an agent that reads and writes files on
your own machine. That read-write part is the whole reason we use it rather than a chat
window, and it is what we spend the term auditing. Two ways to run it — pick one.

<div class="setup">
  <h3>The app</h3>
  <p class="why">A normal application window, no terminal involved. Start here unless you
  already work in a terminal every day.</p>
  <p>Download for macOS, Windows or Linux from
  <a href="https://claude.com/download">claude.com/download</a>, then open it. There is a
  <a href="https://code.claude.com/docs/en/desktop-quickstart">two-minute walkthrough</a> if
  you want one.</p>
</div>

<div class="setup">
  <h3>The terminal</h3>
  <p class="why">Same tool, more control. If you already use a terminal for R or bash, use
  this.</p>
  <p>macOS, Linux, or Windows WSL:</p>
  <pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
  <p>Windows PowerShell:</p>
  <pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>
  <p>Then run <code>claude</code> in any folder. Check it worked with
  <code>claude --version</code>, which should print a version number; if something is wrong,
  <code>claude doctor</code> says what. Never used a terminal? Read the
  <a href="https://code.claude.com/docs/en/terminal-guide">terminal guide</a> first, or just
  use the app.</p>
</div>

You need macOS 13 or later, Windows 10 or later, or Ubuntu 20.04 or later, and 4 GB of RAM.
If your machine is older than that, tell us and we will pair you with someone.

**Do not pay for anything.** Claude Code is not included in the free plan, so it will ask you
to sign in and you will not have an account that works. That is expected. We are covering
access for everyone in the seminar — install now, and wait for an email from us before
signing in.

**If it will not install,** come ten minutes early on Friday and we will sort it in the
room. Bring the error message. Do not skip the session over a broken install — watching
someone else's screen for one week costs you nothing.

## Schedule

Nine themed weeks. Dates firm up as the term does; expand a week for its framing question,
readings, and demo.

<div class="ai-weeks">
{% for w in c.schedule %}
  <details class="ai-wk{% if w.week == c.current_week %} is-now{% endif %}"{% if w.week == c.current_week %} open{% endif %}>
    <summary>
      <span class="num">Week {{ w.week }}</span>
      <span class="th">{{ w.theme }}</span>
    </summary>
    <div class="body">
      <p><span class="ai-lbl">{{ w.part }}{% if w.date %} · {{ w.date | date: "%B %-d, %Y" }}{% else %} · date TBD{% endif %}</span></p>
      {% if w.framing %}<p>{{ w.framing }}</p>{% endif %}
      {% if w.demo %}<p><span class="ai-lbl">Demo</span><br>{{ w.demo }}</p>{% endif %}
      {% assign w_req = w.readings | where_exp: "r", "r.optional != true" %}
      {% assign w_opt = w.readings | where_exp: "r", "r.optional == true" %}
      {% if w_req.size > 0 %}
        <p><span class="ai-lbl">Read before class</span></p>
        <ul>
          {% for r in w_req %}
            <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
          {% endfor %}
        </ul>
      {% endif %}
      {% if w_opt.size > 0 %}
        <p><span class="ai-lbl">Optional</span></p>
        <ul>
          {% for r in w_opt %}
            <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
          {% endfor %}
        </ul>
      {% endif %}
      {% if w.assignment %}<p><span class="ai-lbl">Bring with you</span><br>{{ w.assignment }}</p>{% endif %}
    </div>
  </details>
{% endfor %}
</div>

## Using AI in this course

We practice what we study, so use these tools throughout. A few things worth holding onto.

- **Decide whether your data trains the model.** Most tools let you turn this off, and the
  setting is rarely where you would look. Ask either of us if you want a hand finding it.
- **Think before you paste.** Unpublished data, anything with a person's name in it, a
  manuscript you are reviewing, a collaborator's data you were trusted with — none of that
  belongs in a tool whose terms let it keep or train on what you send. Cornell's
  [AI guidelines](https://it.cornell.edu/ai-strategy/ai-guidelines) are the floor. The
  people whose data it is usually expect more.
- **Calibrate your bullshit meter.** These models are confidently wrong on a regular basis,
  and the confidence does not fall when the accuracy does. That is the hard part.
- **Say what you used.** Name the tool and what it did. Not for policing — a room that says
  it out loud gets better at this faster than one that doesn't.
- **You own the output.** Every citation, every number, every claim. Something else produced
  it; you are answerable for it.

Because agents act, one rule of our own: **gate every irreversible action — delete,
overwrite, submit, send — behind human confirmation.**

## 📚 Reading room

Everything worth reading, added as we find it. Anything tied to a session carries its week
and whether it is required; the rest is here because it is good. Filter by topic.

{% assign alltags = "" | split: "" %}
{% for w in c.schedule %}{% for r in w.readings %}{% if r.tags %}{% assign alltags = alltags | concat: r.tags %}{% endif %}{% endfor %}{% endfor %}
{% for l in c.links %}{% if l.tags %}{% assign alltags = alltags | concat: l.tags %}{% endif %}{% endfor %}
{% assign alltags = alltags | uniq | sort_natural %}

<div class="ai-filters" id="aiFilters">
  <button type="button" class="ai-f is-on" data-f="all">all</button>
  <button type="button" class="ai-f" data-f="assigned">assigned</button>
  {% for t in alltags %}<button type="button" class="ai-f" data-f="{{ t }}">{{ t }}</button>{% endfor %}
</div>

<ul class="ai-feed" id="aiFeed">
{% for w in c.schedule %}{% for r in w.readings %}
  <li data-tags="{% unless r.optional %}assigned {% endunless %}{{ r.tags | join: ' ' }}">
    <a href="{{ r.url }}">{{ r.title }}</a>{% if r.optional %}<span class="tag is-week">week {{ w.week }} · optional</span>{% else %}<span class="tag is-assigned">week {{ w.week }} · required</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    {% if r.source %}<br><span class="src">{{ r.source }}</span>{% endif %}
    {% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}
  </li>
{% endfor %}{% endfor %}
{% for l in c.links %}
  <li data-tags="{{ l.tags | join: ' ' }}">
    <a href="{{ l.url }}">{{ l.title }}</a>{% for t in l.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    {% if l.source %}<br><span class="src">{{ l.source }}</span>{% endif %}
    {% if l.note %}<span class="fnote">{{ l.note }}</span>{% endif %}
  </li>
{% endfor %}
</ul>

<p class="ai-empty" id="aiEmpty" hidden>Nothing tagged that yet.</p>

<script>
  (function () {
    var box = document.getElementById("aiFilters");
    if (!box) return;
    var items = Array.prototype.slice.call(document.querySelectorAll("#aiFeed > li"));
    var empty = document.getElementById("aiEmpty");
    box.addEventListener("click", function (e) {
      var btn = e.target.closest(".ai-f");
      if (!btn) return;
      var f = btn.dataset.f;
      var shown = 0;
      Array.prototype.forEach.call(box.children, function (b) {
        b.classList.toggle("is-on", b === btn);
      });
      items.forEach(function (li) {
        var on = f === "all" || (" " + li.dataset.tags + " ").indexOf(" " + f + " ") > -1;
        li.hidden = !on;
        if (on) shown++;
      });
      empty.hidden = shown > 0;
    });
  })();
</script>

