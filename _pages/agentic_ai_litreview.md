---
layout: page
permalink: /teaching/agentic-ai/lit-review/
title: an agent writes a review
description: Optional Week 4 exercise for BIOEE 7600-103
nav: false
icon: ai-eeb.png
---

<style>
  .pr-lede{font-size:1.05rem;line-height:1.7;border-left:4px solid var(--global-theme-color);padding:.1rem 0 .1rem 1.1rem;margin:0 0 2rem}
  .pr-cap{color:var(--global-text-color-light);font-size:.87rem;line-height:1.55;margin:.9rem 0 0}
  .pr-note{border:1px solid var(--global-divider-color);border-left:4px solid var(--global-theme-color);border-radius:10px;background:var(--global-card-bg-color);padding:.9rem 1.1rem;margin:1.6rem 0;line-height:1.6}
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

<p class="pr-lede"><b>Optional.</b> Give Claude Code one prompt about a topic you know well. It
searches the literature and writes a critical review, <i>Annual Reviews</i> style, with every
reference checked. You judge it against what you know. Bring what you found on Friday 2 October.</p>

## How

1. **Pick a topic you know well, and what to compare against:** a published review you trust, or
   your own knowledge. For a review, set the cutoff date to just before it came out, and **do not
   name it in the prompt**, since the model may have read it.
2. **Make an empty folder and open Claude Code there,** set to Opus 5.5 (`/model` to check).
3. **Paste the prompt below with its four lines filled in.** Here are the four lines John used for
   the run we will discuss on Friday:

   ```text
   TOPIC: adaptation at geographic range edges
   SCOPE: plants and animals; theory and empirical work on whether and how populations adapt at geographic range edges. Out: purely ecological explanations of range limits, and species distribution modelling.
   CUTOFF DATE: 2020-08-31
   FULL TEXT VIA CHROME: no
   ```

4. **When it finishes, it gives you a link to your review as an Artifact,** a page on claude.ai
   that only you can see.
5. **(Optional) Mark it up.** Select a claim you disagree with, leave a comment, and choose **Send
   to Claude**. Claude replies and revises the page. Does it defend the claim, fix it, or give way?
   Your untouched first version stays in the folder as `review_original.html`, and the Artifact
   keeps every version (under **Share**).

By default it reads abstracts, plus the full text of open-access papers. From an abstract it cannot
see methods or effect sizes, so it is weakest at judging evidence. The review says how many papers
it read in full. See the "read full text" block below for instructions on how to let Claude read
paywalled papers.

<details class="lr-more" markdown="1">
<summary>The prompt</summary>

```markdown
{% include agentic_ai/lit_review_prompt.md %}
```

</details>

<details class="lr-more" markdown="1">
<summary>Optional: read full text through the library</summary>

Set `FULL TEXT VIA CHROME: yes`, then:

1. Install [Claude in Chrome](https://support.claude.com/en/articles/12012173-claude-in-chrome)
   and sign in with your Claude account.
2. In Chrome, log in to the library proxy by opening any paper through it, e.g.
   `https://login.proxy.library.cornell.edu/login?url=https://doi.org/10.1086/703187`.
3. Start Claude Code with `claude --chrome`.

It reads up to 10 key papers this way. It is slow, uses more of your allowance, and some publishers
block it. It never types a password; a login page stops it and it asks you. Outside Cornell, put
your own library's proxy in the prompt.

</details>

<details class="lr-more" markdown="1">
<summary>Usage limits, and running it overnight</summary>

If you hit your limit partway, Claude Code says when it resets; then type `continue`. The allowance
resets every five hours, so a run started at the end of the day uses allowance you would not
otherwise use. For an unattended run: stay for the first few minutes and choose "don't ask again"
when it asks permission for its searches and scripts, keep the computer plugged in and awake, and
log in to the library proxy first if Chrome is on.

</details>

## For Friday

Nothing to hand in. Bring your laptop with the review, and think about:

1. **What did it miss?** The paper you would cite first? A line of work?
2. **Do the references say what the review says they say?** Check two or three.
3. **Are its disagreements real,** or balance it made up?
4. **Does it judge evidence, or count it?**
5. **Would it be useful to you?** Think about what may be lost with this approach, as well.
