---
layout: page
permalink: /teaching/agentic-ai/
last_updated: 2026-09-28
title: agentic AI in EEB
description: BIOEE 7600-103 · Fall 2026 · a graduate seminar at Cornell
nav: false
icon: ai-eeb.png
---

{% assign c = site.data.agentic_ai %}

<style>
  .ai-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:.9rem 1.4rem;border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);padding:1.1rem 1.3rem;margin:0 0 1.4rem}
  .ai-meta dt{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light);margin:0}
  .ai-meta dd{margin:.15rem 0 0;font-size:.95rem;line-height:1.4}
  .ai-banner{border:1px solid var(--global-theme-color);border-left:4px solid var(--global-theme-color);border-radius:10px;padding:.85rem 1.1rem;margin:0 0 1.6rem;line-height:1.6;background:var(--global-card-bg-color)}
  .ai-ann{list-style:none;padding:0;margin:0 0 2rem}
  .ai-ann li{border-left:3px solid var(--global-divider-color);padding:0 0 0 1rem;margin:0 0 1.4rem;line-height:1.6}
  .ai-ann li:first-child{border-left-color:var(--global-theme-color)}
  .ai-ann .when{display:block;font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light)}
  .ai-ann h3{font-size:1rem;margin:.2rem 0 .35rem}
  .ai-ann p{margin:0}
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
  .ai-deck{display:inline-block;font-weight:600;border:1px solid var(--global-divider-color);border-radius:8px;padding:.28rem .7rem;margin:.15rem 0 0;text-decoration:none}
  .ai-deck:hover{border-color:var(--global-theme-color)}
  li > .fnote{margin:.3rem 0 .55rem}
  .post h2{margin-top:2.6rem}
  .tag{display:inline-block;font-size:.62rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border:1px solid var(--global-divider-color);border-radius:999px;padding:.06rem .45rem;color:var(--global-text-color-light);margin-left:.35rem;vertical-align:.1em}
  .tag.is-week{font-weight:700}
  body h2[id]{scroll-margin-top:7rem}
  .ai-jump{position:sticky;top:56px;z-index:20;display:flex;gap:.3rem;overflow-x:auto;-webkit-overflow-scrolling:touch;padding:.5rem 0;margin:0 0 1.6rem;background:var(--global-bg-color);border-bottom:1px solid var(--global-divider-color)}
  .ai-jump::-webkit-scrollbar{display:none}
  .ai-jump a{flex:0 0 auto;font-size:.72rem;font-weight:600;letter-spacing:.03em;white-space:nowrap;text-decoration:none;border:1px solid var(--global-divider-color);border-radius:999px;padding:.2rem .7rem;color:var(--global-text-color-light);background:var(--global-card-bg-color)}
  .ai-jump a:hover{border-color:var(--global-theme-color);color:var(--global-theme-color)}
  .ai-jump a.is-rr{border-color:var(--global-theme-color);color:var(--global-theme-color)}
  .ai-rr{display:block;text-decoration:none!important;border:1px solid var(--global-theme-color);border-left:4px solid var(--global-theme-color);border-radius:10px;padding:.8rem 1.1rem;margin:0 0 1.6rem;background:var(--global-card-bg-color);color:var(--global-text-color)!important;line-height:1.5}
  .ai-rr:hover{background:var(--global-bg-color)}
  .ai-rr .rr-t{display:block;margin:.2rem 0 .3rem}
  .ai-rr .rr-new{display:block;font-size:.85rem;color:var(--global-theme-color)}
  .ai-jump a.is-here{background:var(--global-theme-color);border-color:var(--global-theme-color);color:#fff}
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
  <div><dt>Room</dt><dd>Kennedy Hall 213</dd></div>
  <div><dt>Credits</dt><dd>1 credit, S/U</dd></div>
  <div><dt>Instructors</dt><dd><a href="{{ '/people/' | relative_url }}">John Benning</a> · <a href="https://xiangtaoxu.eeb.cornell.edu/">Xiangtao Xu</a></dd></div>
  <div><dt>Enrollment</dt><dd>Capped at 20, by instructor consent; graduate students and above</dd></div>
</dl>

{% if c.announcement %}

<div class="ai-banner">{{ c.announcement }}</div>
{% endif %}

<nav class="ai-jump" id="aiJump" aria-label="Jump to a section">
{% assign nowwk = c.schedule | where: "week", c.current_week | first %}
{% if nowwk %}<a href="#this-week">This week</a>{% endif %}
<a href="#-reading-room" class="is-rr">📚 Reading room</a>
{% if c.announcements and c.announcements.size > 0 %}<a href="#announcements">Announcements</a>{% endif %}
<a href="#schedule">Schedule</a>
<a href="#getting-set-up">Getting set up</a>
<a href="#using-ai-in-this-course">Using AI here</a>
<a href="{{ '/agentic/' | relative_url }}">Guides ↗</a>
</nav>

{% assign rr_dates = c.links | map: "date" %}
{% for w in c.schedule %}{% if w.readings %}{% assign wd = w.readings | map: "date" %}{% assign rr_dates = rr_dates | concat: wd %}{% endif %}{% endfor %}
{% assign rr_dates = rr_dates | compact | uniq | sort | reverse %}
{% assign rr_new = c.links | where: "date", rr_dates[0] %}
{% for w in c.schedule %}{% if w.readings %}{% assign wn = w.readings | where: "date", rr_dates[0] %}{% assign rr_new = rr_new | concat: wn %}{% endif %}{% endfor %}
<a class="ai-rr" href="#-reading-room">
  <span class="ai-lbl">📚 Reading room</span>
  <span class="rr-t">Pieces to peruse.</span>
  <span class="rr-new">Latest, {{ rr_dates[0] | date: "%B %-d" }}: {% for l in rr_new %}{{ l.title }}{% unless forloop.last %}; {% endunless %}{% endfor %} →</span>
</a>

An **agent** is a large language model given tools, memory, and permission to plan and act
over many steps — cleaning datasets, running analyses, writing and executing code, querying
databases, monitoring the literature, drafting the outputs. That autonomy is what makes
agents useful, and what makes them dangerous.

This seminar is a hands-on and skeptical look at what agents can and can't be trusted to
do across the research lifecycle. After a first week defining what "agentic" means, most of
each session is a live demo: we give an agent a real EEB task, then audit what it did and
what it produced, looking for what it got wrong or left out. We close by drafting an EEB
community guideline for responsible use of agentic AI.

No computer-science background is assumed. A little R or Python helps you follow the coding
demos but isn't required. **Bring a laptop.**

**The slides go up here after each session**, linked from the week below, so anyone who cannot
be in the room can follow the course. They are the decks as shown, with class-specific detail
taken out.

**Start with [what is an agent?]({{ '/teaching/agentic-ai/primer/' | relative_url }})** —
a ten-minute primer written for this seminar, covering the vocabulary and the core ideas
with no background assumed. If you read one thing, read this.

Separately, the [agentic AI guides]({{ '/agentic/' | relative_url }}) are how John sets this up
for his own work — installing it, the files that give it project memory, and the rules worth
copying. Read them if you want to try this on your own work.

{% assign now = c.schedule | where: "week", c.current_week | first %}
{% if now %}

## This week

<div class="ai-now">
  <div class="wk">Week {{ now.week }}{% if now.date %} · {{ now.date | date: "%B %-d" }}{% endif %}</div>
  <h3>{{ now.theme }}</h3>
  {% if now.framing %}<p><span class="ai-lbl">Framing</span><br>{{ now.framing }}</p>{% endif %}
  {% if now.demo %}<p><span class="ai-lbl">In class</span><br>{{ now.demo }}</p>{% endif %}
  {% if now.slides %}<p><span class="ai-lbl">Slides</span><br><a class="ai-deck" href="{{ now.slides.url | relative_url }}" target="_blank" rel="noopener">Week {{ now.week }} deck ↗</a>{% if now.slides.note %}<span class="fnote">{{ now.slides.note }}</span>{% endif %}</p>{% endif %}
  {% if now.readings.size > 0 %}
    <p><span class="ai-lbl">Reading</span></p>
    <ul>
      {% for r in now.readings %}
        <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
      {% endfor %}
    </ul>
  {% endif %}
  {% if now.assignment %}<p><span class="ai-lbl">Bring with you</span><br>{{ now.assignment }}</p>{% endif %}
</div>
{% endif %}

{% if c.announcements and c.announcements.size > 0 %}

## Announcements

Day-to-day chatter lives on the Slack; this is the record, so nothing is lost if you missed it.

<ul class="ai-ann">
{% assign anns = c.announcements | sort: "date" | reverse %}
{% for a in anns %}
  <li>
    <span class="when">{{ a.date | date: "%B %-d, %Y" }}</span>
    {% if a.title %}<h3>{{ a.title }}</h3>{% endif %}
    <p>{{ a.body }}</p>
  </li>
{% endfor %}
</ul>
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
      {% if w.demo %}<p><span class="ai-lbl">In class</span><br>{{ w.demo }}</p>{% endif %}
      {% if w.slides %}<p><span class="ai-lbl">Slides</span><br><a class="ai-deck" href="{{ w.slides.url | relative_url }}" target="_blank" rel="noopener">Week {{ w.week }} deck ↗</a>{% if w.slides.note %}<span class="fnote">{{ w.slides.note }}</span>{% endif %}</p>{% endif %}
      {% if w.readings.size > 0 %}
        <p><span class="ai-lbl">Reading</span></p>
        <ul>
          {% for r in w.readings %}
            <li><a href="{{ r.url }}">{{ r.title }}</a>{% if r.source %} <span class="src">— {{ r.source }}</span>{% endif %}{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}</li>
          {% endfor %}
        </ul>
      {% endif %}
      {% if w.assignment %}<p><span class="ai-lbl">Bring with you</span><br>{{ w.assignment }}</p>{% endif %}
    </div>
  </details>
{% endfor %}
</div>

## Getting set up

Install Claude Code by following [getting set up]({{ '/agentic/setup/' | relative_url }}) in the
guides, and stop after **First run**. The rest of that page is optional terminal setup. The app is
the shorter path if you do not already work in a terminal.

- **Access is covered.** Claude Code is not in the free plan, so sign-in fails on a free account.
  Do not pay for anything: accept the invitation we emailed, using your Cornell address. Ignore it
  if you already pay for Claude. If you joined late and have no invitation, tell us.
- **Requirements:** macOS 13 or later, Windows 10 build 1809 or later, or Ubuntu 20.04 / Debian
  10 or later, on x64 or ARM, with 4 GB of RAM. **ChromeOS is not supported.** If you have a
  Chromebook or no laptop, tell us and we will pair you with someone.
- **If it will not install,** the official
  [troubleshooting page](https://code.claude.com/docs/en/troubleshoot-install) matches most errors
  to a fix. Failing that, ask in **#setup-help** on the course Slack, or come ten minutes early on
  Friday with the error message.

## Using AI in this course

- **Decide whether your data trains the model.** Most tools let you turn this off. Ask us
  if you cannot find the setting.
- **Think before you paste.** Unpublished data, anything with a person's name in it, a
  manuscript you are reviewing, a collaborator's data you were trusted with — none of that
  belongs in a tool whose terms let it keep or train on what you send. Cornell's
  [AI guidelines](https://it.cornell.edu/ai-strategy/ai-guidelines) are helpful here.
- **Calibrate your bullshit meter.** These models are confidently wrong on a regular basis.
  Confidence often does not relate to accuracy.
- **Gate every irreversible action** — delete, overwrite, submit, send — behind human
  confirmation.

## 📚 Reading room

Everything here is optional. It is what we have come across and think is worth knowing
about, newest first, and anything tied to a session carries its week. Please suggest
additions! Filter by topic.

{% assign alltags = "" | split: "" %}
{% for w in c.schedule %}{% for r in w.readings %}{% if r.tags %}{% assign alltags = alltags | concat: r.tags %}{% endif %}{% endfor %}{% endfor %}
{% for l in c.links %}{% if l.tags %}{% assign alltags = alltags | concat: l.tags %}{% endif %}{% endfor %}
{% assign alltags = alltags | uniq | sort_natural %}

<div class="ai-filters" id="aiFilters">
  <button type="button" class="ai-f is-on" data-f="all">all</button>
  <button type="button" class="ai-f" data-f="week">week readings</button>
  {% for t in alltags %}<button type="button" class="ai-f" data-f="{{ t }}">{{ t }}</button>{% endfor %}
</div>

<ul class="ai-feed" id="aiFeed">
{% for d in rr_dates %}
{% for w in c.schedule %}{% for r in w.readings %}{% if r.date == d %}
  <li data-tags="week {{ r.tags | join: ' ' }}">
    <a href="{{ r.url }}">{{ r.title }}</a><span class="tag is-week">week {{ w.week }}</span>{% for t in r.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    <br><span class="src">{% if r.source %}{{ r.source }} · {% endif %}added {{ r.date | date: "%b %-d" }}</span>
    {% if r.note %}<span class="fnote">{{ r.note }}</span>{% endif %}
  </li>
{% endif %}{% endfor %}{% endfor %}
{% for l in c.links %}{% if l.date == d %}
  <li data-tags="{{ l.tags | join: ' ' }}">
    <a href="{{ l.url }}">{{ l.title }}</a>{% for t in l.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    <br><span class="src">{% if l.source %}{{ l.source }} · {% endif %}added {{ l.date | date: "%b %-d" }}</span>
    {% if l.note %}<span class="fnote">{{ l.note }}</span>{% endif %}
  </li>
{% endif %}{% endfor %}
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

<script>
  (function () {
    var bar = document.getElementById("aiJump");
    if (!bar) return;
    var links = Array.prototype.slice.call(bar.querySelectorAll("a"));
    var pairs = [];
    links.forEach(function (a) {
      var el = document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (el) pairs.push({ link: a, el: el });
    });
    if (!pairs.length) return;

    // The last heading that has passed the sticky bar is the one you are in.
    var OFFSET = 120;
    function current() {
      var found = null;
      pairs.forEach(function (p) {
        if (p.el.getBoundingClientRect().top - OFFSET <= 0) found = p;
      });
      return found;
    }

    function mark() {
      var on = current();
      links.forEach(function (a) { a.classList.toggle("is-here", !!on && a === on.link); });
      // keep the active pill in view when the bar itself has scrolled sideways
      if (on && bar.scrollWidth > bar.clientWidth) {
        var l = on.link.offsetLeft, r = l + on.link.offsetWidth;
        if (l < bar.scrollLeft) bar.scrollLeft = l - 12;
        else if (r > bar.scrollLeft + bar.clientWidth) bar.scrollLeft = r - bar.clientWidth + 12;
      }
    }

    var tick = 0;
    function onScroll() {
      if (tick) return;
      tick = requestAnimationFrame(function () { tick = 0; mark(); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    mark();
  })();
</script>
