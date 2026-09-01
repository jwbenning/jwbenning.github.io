# Editing the BIOEE 7600-103 course page

For Xiangtao, and for anyone else who ends up maintaining this.

Live pages:

- <https://benninglab.org/teaching/agentic-ai/> — the course page
- <https://benninglab.org/teaching/agentic-ai/primer/> — "what is an agent?", the primer

## The short version

**Almost everything you will want to change lives in one file: `_data/agentic_ai.yml`.**
The page is a template that reads from it. Adding a reading, changing a framing question,
moving the "This week" highlight, updating the banner — all of that is a text edit to that
one file, with no HTML and no Jekyll involved.

You can edit it straight in the GitHub web interface: open the file, click the pencil,
change it, commit. A check runs automatically on your commit or pull request and tells you
if something is wrong. The site rebuilds itself a few minutes after a change lands on
`main`.

## The three files

| File | What it holds | How often you touch it |
| --- | --- | --- |
| `_data/agentic_ai.yml` | Schedule, readings, reading room, banner | Constantly |
| `_pages/agentic_ai.md` | Page prose and layout | Occasionally |
| `_pages/agentic_ai_primer.md` | The whole primer | Occasionally |

## Common edits

**Move the "This week" box.** Change `current_week` to the week number. `0` hides the box.

**Change the banner.** Edit `announcement`. HTML links are allowed. Delete the whole
`announcement:` block to hide the banner.

**Add a reading to a week.** Under that week's `readings:`:

```yaml
      - title: "The title"
        source: Author et al. 2026, Journal
        url: https://doi.org/...
        tags: [evaluation, EEB]
        optional: true
        note: >
          What to do with it, and why it is here. Tell people what to skim —
          this line is the most useful part of the entry.
```

Leave `optional` out to make a reading required. Right now only Week 1 has a required
reading.

**Add something to the reading room.** Same shape, under `links:` at the bottom, newest
first, with a `date:`.

**Tags** must come from this list, or the check fails:
`foundations`, `application`, `evaluation`, `ethics`, `security`, `reproducibility`,
`policy`, `debate`, `EEB`. They drive the filter buttons on the page. Add a new one by
using it — but tell John, since a tag used once is just clutter.

## Two traps

**Colons inside text.** A line like `title: Agents: a primer` breaks YAML. Wrap it in
double quotes: `title: "Agents: a primer"`.

**Long text needs `>`.** Multi-line values use a `>` and an indented block, as in `note:`
above. Keep the indentation consistent.

Both of these are what the check catches.

## Checking before you push

```bash
python3 bin/check-course-data.py
```

It reports unknown tags, missing fields, dates that are not Fridays, a `current_week` with
no matching week, and readings that appear in two places. It runs in CI regardless, so
this is just the faster feedback.

To preview the whole site locally:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/teaching/agentic-ai/>. This is optional; the data check
catches the errors that actually happen.

## Notes

- John also keeps markup Google Docs of the page prose, for editing the writing without
  touching the repo. Ask him for the link if that is easier for a given pass.
- The primer's loop diagram is inline SVG in `_pages/agentic_ai_primer.md`. Say what you
  want changed rather than editing coordinates by hand.
- The `Prettier` check on this repo has been failing repo-wide since before the course
  pages existed. It is unrelated to anything here and does not block the deploy.
