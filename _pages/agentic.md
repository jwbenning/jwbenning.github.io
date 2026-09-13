---
layout: page
permalink: /agentic/
title: agentic ai
description: how I actually use coding agents for research, and the files to copy
nav: true
nav_order: 6
last_updated: 2026-09-12
---

{% include agentic_wiki.liquid %}

This is how I run research through a coding agent, and the plain text files that make it work:
what the agent reads when a session opens, what it writes when one ends, and the rules I give it.
It is for researchers — students in my seminar on [agentic AI in
EEB]({{ '/teaching/agentic-ai/' | relative_url }}), people in my lab, anyone who wants the parts
that transfer — and every file described here is in a companion repo you can clone.

Not covered yet: skills, connected tools like email and calendar, and the assistant workflows
those make possible.

{% assign w = site.data.agentic_wiki %}

<div class="wk-cards">
{% for p in w.pages %}
  <div class="wk-card">
    <div class="t"><a href="{{ '/agentic/' | append: p.slug | append: '/' | relative_url }}">{{ p.title }}</a></div>
    <p>{{ p.blurb }}</p>
  </div>
{% endfor %}
</div>

<div class="wk-note" markdown="1">
<span class="lbl">the files</span>

The templates, hooks, launcher and terminal config are in
[github.com/benning-lab/agentic-starter](https://github.com/benning-lab/agentic-starter), which
installs by symlink into `~/.claude/` and never overwrites anything you already have.

```bash
git clone https://github.com/benning-lab/agentic-starter.git
cd agentic-starter
./install.sh --check
```

</div>

## Corrections

If something here is wrong or out of date, tell me; seminar students, use `#setup-help` on the
course Slack.

{% include agentic_byline.liquid %}
