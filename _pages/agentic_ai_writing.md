---
layout: page
permalink: /teaching/agentic-ai/writing/
title: an agent drafts a proposal
description: Optional Week 5 exercise for BIOEE 7600-103
nav: false
icon: ai-eeb.png
---

<style>
  .pr-lede{font-size:1.05rem;line-height:1.7;border-left:4px solid var(--global-theme-color);padding:.1rem 0 .1rem 1.1rem;margin:0 0 2rem}
  .pr-back{display:inline-block;font-size:.9rem;margin-bottom:1.4rem}
  .post h2{margin-top:2.6rem}
  .post ol li,.post ul li{margin:.35rem 0;line-height:1.6}
  .lr-more{border:1px solid var(--global-divider-color);border-radius:10px;background:var(--global-card-bg-color);margin:.7rem 0}
  .lr-more > summary{cursor:pointer;padding:.65rem 1rem;font-weight:700;font-size:.95rem}
  .lr-more > summary:hover{color:var(--global-theme-color)}
  .lr-more[open] > summary{border-bottom:1px solid var(--global-divider-color)}
  .lr-more > *:not(summary){margin-left:1rem;margin-right:1rem}
  .lr-more > :last-child{margin-bottom:1rem}
</style>

<a class="pr-back" href="{{ '/teaching/agentic-ai/' | relative_url }}">← back to the course page</a>

<p class="pr-lede"><b>Optional.</b> Last week Claude Code wrote a review of a topic you know.
This week it turns that review into the one-page Project Summary of a research proposal. You judge
whether you could defend every sentence in it. Bring what you found on Friday 9 October, or run it
in class; it takes about 10 minutes.</p>

## How

1. **Open Claude Code in your Week 4 folder** (the one with `review.md` and `evidence_table.csv`),
   set to Opus 5.5 (`/model` to check). No Week 4 folder? Use an empty folder and choose
   `new topic` below; it does a quick search first.
2. **Paste the prompt below with its three lines filled in.**
3. **When it finishes, it gives you a link to the Summary as an Artifact,** a page on claude.ai only
   you can see. The folder also holds `claims_ledger.csv`, which says where each claim came from,
   and `panel_review.md`, an AI panelist's review.

<details class="lr-more" markdown="1">
<summary>The prompt</summary>

```markdown
{% include agentic_ai/proposal_prompt.md %}
```

</details>

<details class="lr-more" markdown="1">
<summary>Also optional: a friendly reviewer for your own writing (about 5 minutes)</summary>

Paste an abstract or a paragraph at the bottom of this prompt. Claude comments on it the way a
helpful reviewer would, then revises it for clarity, without changing what it claims. You get
tracked changes as `diff.html`, and a second check that compares the claims in the two versions.
If English is your second language, it can explain each change, in English or another language.

Only paste text you are free to share: your own, published text, or co-authored work your
co-authors have agreed to. Never paste a manuscript or proposal you are reviewing.

```markdown
{% include agentic_ai/friendly_reviewer_prompt.md %}
```

</details>

## For Friday

Nothing to hand in. Bring your laptop with the Summary, and look for:

1. **One sentence you could not defend in front of a panel.**
2. **One thing it wrote better than you would have.**
3. **One line in the claims ledger you disagree with.**
