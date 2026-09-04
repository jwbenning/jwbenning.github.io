---
layout: page
permalink: /teaching/agentic-ai/
last_updated: 2026-09-03
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
  h2{scroll-margin-top:7rem}
  .ai-jump{position:sticky;top:56px;z-index:20;display:flex;gap:.3rem;overflow-x:auto;-webkit-overflow-scrolling:touch;padding:.5rem 0;margin:0 0 1.6rem;background:var(--global-bg-color);border-bottom:1px solid var(--global-divider-color)}
  .ai-jump::-webkit-scrollbar{display:none}
  .ai-jump a{flex:0 0 auto;font-size:.72rem;font-weight:600;letter-spacing:.03em;white-space:nowrap;text-decoration:none;border:1px solid var(--global-divider-color);border-radius:999px;padding:.2rem .7rem;color:var(--global-text-color-light);background:var(--global-card-bg-color)}
  .ai-jump a:hover{border-color:var(--global-theme-color);color:var(--global-theme-color)}
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
{% if c.announcements and c.announcements.size > 0 %}<a href="#announcements">Announcements</a>{% endif %}
<a href="#getting-set-up">Getting set up</a>
<a href="#schedule">Schedule</a>
<a href="#using-ai-in-this-course">Using AI here</a>
<a href="#-reading-room">Reading room</a>
</nav>

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

## Getting set up

**Do this before Friday.** About ten minutes. You can install without an account; you sign
in later.

We use [Claude Code](https://code.claude.com/docs/), an agent that reads and writes files on
your own machine. That read-write part is the whole reason we use it rather than a chat
window, and it is what we spend the term auditing. Two ways to run it — pick one.

<div class="setup">
  <h3>The app</h3>
  <p class="why">A normal application window, no terminal involved. Start here unless you
  already work in a terminal every day.</p>
  <p><strong>macOS and Windows:</strong> download from
  <a href="https://claude.com/download">claude.com/download</a> and run the installer. There
  is a separate build for Windows on ARM on that same page.
  <strong>Linux:</strong> the desktop app is still in beta — use
  <a href="https://code.claude.com/docs/en/desktop-linux">these steps</a> instead of the
  download page.</p>
  <p><strong>On Windows you also need <a href="https://git-scm.com/downloads/win">Git for
  Windows</a></strong>, or the app cannot open a local folder. Install it first. Macs
  already have Git.</p>
  <p>Open the app and click the <strong>Code</strong> tab at the top. If it asks you to sign
  in or to upgrade, that is as far as you can get for now; see the note below. There is a
  <a href="https://code.claude.com/docs/en/desktop-quickstart">two-minute walkthrough</a> if
  you want one.</p>
</div>

<div class="setup">
  <h3>The terminal</h3>
  <p class="why">Same tool, more control. If you already use a terminal for R or bash, use
  this.</p>
  <p>macOS, Linux, or Windows WSL:</p>
  <pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
  <p>Windows PowerShell — your prompt starts <code>PS C:\</code>:</p>
  <pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>
  <p>Windows CMD — your prompt starts <code>C:\</code>, with no <code>PS</code>:</p>
  <pre><code>curl -fsSL https://claude.ai/install.cmd -o install.cmd &amp;&amp; install.cmd &amp;&amp; del install.cmd</code></pre>
  <p>Then run <code>claude --version</code>, which should print a version number. If it does
  not, <code>claude doctor</code> says why. On a Mac,
  <code>brew install --cask claude-code</code> works too. Never used a terminal? Read the
  <a href="https://code.claude.com/docs/en/terminal-guide">terminal guide</a> first, or just
  use the app.</p>
</div>

<div class="setup">
  <h3>Then try one thing</h3>
  <p class="why">Not required, and worth the two minutes: it turns the first session from a
  demo you watch into something you have already done.</p>
  <p>Make a folder, drop in any CSV you have lying around, point Claude Code at that folder,
  and ask it:</p>
  <pre><code>Describe this file: how many rows and columns, what each column
appears to contain, and anything that looks wrong or inconsistent.</code></pre>
  <p>Watch what it does <em>before</em> it answers — it will read the file, probably write and
  run a few lines of code, and only then reply. That is the loop the primer describes,
  running on your own data. Bring what it got wrong.</p>
</div>

You need macOS 13 or later, Windows 10 build 1809 or later, or Ubuntu 20.04 / Debian 10 or
later, on an x64 or ARM processor, with 4 GB of RAM. **ChromeOS is not supported.** If you
have a Chromebook, no laptop, or a machine older than that, tell us now and we will pair you
with someone.

**Do not pay for anything.** Claude Code is not included in the free plan, so it will ask you
to sign in and the account you have will not work. That is expected, and it is not a broken
install. We are covering access for everyone in the seminar: an invitation is on its way by
email, and you will need to accept it **with your Cornell address**. Ignore it if you already
pay for Claude.

**If it will not install,** the official
[troubleshooting page](https://code.claude.com/docs/en/troubleshoot-install) matches most
errors to a fix. Failing that, ask in **#setup-help** on the course Slack (the invite is in
our email), or come ten minutes early on Friday with the error message. Do not skip a session
over a broken install; you can share someone's screen for a week.

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

Four rules.

- **Decide whether your data trains the model.** Most tools let you turn this off. Ask us
  if you cannot find the setting.
- **Think before you paste.** Unpublished data, anything with a person's name in it, a
  manuscript you are reviewing, a collaborator's data you were trusted with — none of that
  belongs in a tool whose terms let it keep or train on what you send. Cornell's
  [AI guidelines](https://it.cornell.edu/ai-strategy/ai-guidelines) are helpful here.
- **Calibrate your bullshit meter.** These models are confidently wrong on a regular basis.
  Confidence often does not relate to accuracy.

**Gate every irreversible action — delete, overwrite, submit, send — behind human
confirmation.**

## 📚 Reading room

Reading we add as we find it. Anything tied to a session carries its week and whether it is
required; the rest is here because we found it worth reading. Please suggest additions!
Filter by topic.

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
