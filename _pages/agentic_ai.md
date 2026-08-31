---
layout: page
permalink: /teaching/agentic-ai/
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
  .ai-foot{color:var(--global-text-color-light);font-size:.85rem;margin-top:2.4rem;padding-top:1rem;border-top:1px solid var(--global-divider-color)}
</style>

<span class="ai-live"><span class="dot"></span>Live page — updated through the semester</span>

<dl class="ai-meta">
  <div><dt>Course</dt><dd>BIOEE 7600-103</dd></div>
  <div><dt>Meets</dt><dd>Fridays, 12:20–1:10 pm</dd></div>
  <div><dt>Room</dt><dd>Comstock B104</dd></div>
  <div><dt>Credits</dt><dd>1 credit, S/U</dd></div>
  <div><dt>Instructors</dt><dd><a href="{{ '/people/' | relative_url }}">John Benning</a> · Xiangtao Xu</dd></div>
  <div><dt>Enrollment</dt><dd>Capped at 20, by instructor consent</dd></div>
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

{% assign now = c.schedule | where: "week", c.current_week | first %}
{% if now %}

## This week

<div class="ai-now">
  <div class="wk">Week {{ now.week }}{% if now.date %} · {{ now.date | date: "%B %-d" }}{% endif %}</div>
  <h3>{{ now.theme }}</h3>
  {% if now.framing %}<p><span class="ai-lbl">Framing</span><br>{{ now.framing }}</p>{% endif %}
  {% if now.readings %}
    <p><span class="ai-lbl">Read before class</span></p>
    <ul>
      {% for r in now.readings %}
        <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% if r.tag %}<span class="tag">{{ r.tag }}</span>{% endif %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
      {% endfor %}
    </ul>
  {% endif %}
  {% if now.assignment %}<p><span class="ai-lbl">Bring with you</span><br>{{ now.assignment }}</p>{% endif %}
</div>
{% endif %}

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
      {% if w.readings %}
        <p><span class="ai-lbl">Readings</span></p>
        <ul>
          {% for r in w.readings %}
            <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% if r.tag %}<span class="tag">{{ r.tag }}</span>{% endif %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
          {% endfor %}
        </ul>
      {% endif %}
      {% if w.assignment %}<p><span class="ai-lbl">Bring with you</span><br>{{ w.assignment }}</p>{% endif %}
    </div>
  </details>
{% endfor %}
</div>

## Reading room

Things worth reading, added as we find them. Newest first — not all of it is assigned.

<ul class="ai-feed">
{% for l in c.links %}
  <li>
    <a href="{{ l.url }}">{{ l.title }}</a>{% if l.tag %}<span class="tag">{{ l.tag }}</span>{% endif %}
    {% if l.source %}<br><span class="src">{{ l.source }}</span>{% endif %}
    {% if l.note %}<span class="fnote">{{ l.note }}</span>{% endif %}
  </li>
{% endfor %}
</ul>

## How each session works

A discussion seminar built around live demos, not a lecture course. Roughly: five minutes on
the framing question, fifteen on the reading, thirty-five on a live agent demo and the audit
that follows it, five to wrap up.

**Audit of the Week.** In rotation, each of us brings one real case of an agent doing
something wrong in our own subfield — a bad clean, a spurious result, a fabricated
reference, a silent overwrite. Two minutes, then on with the demo. Skepticism as muscle
memory. The cases we accumulate become raw material for the guideline we draft in Week 9.

## Using AI in this course

We practice what we study. **You are encouraged to use agentic tools throughout**, and
expected to be transparent: name the tool and version, and say what it did. You remain fully
accountable for accuracy, including every citation and every number an agent produced. That
is [Cornell's guiding principle](https://it.cornell.edu/ai-strategy/ai-guidelines) — you are
accountable for your work regardless of the tools you use — along with Cornell's data rule:
**never paste unpublished data, personal information, reviewer identities, or institutional
data into free, non-Cornell AI tools.**

Because agents _act_, we add one rule of our own: **gate every irreversible action — delete,
overwrite, submit, send — behind human confirmation.**

## Getting a seat

Enrollment is capped at 20 and by instructor consent; undergraduates are not eligible.
Email [Xiangtao](mailto:xx286@cornell.edu) or [John](mailto:jbenning@cornell.edu) and we
will add you. Postdocs and faculty are welcome to join the discussion without registering.

<p class="ai-foot">Page last updated {{ site.time | date: "%B %-d, %Y" }}.</p>
