# Fill in these three lines, then paste everything into Claude Code

STARTING POINT: [one of: "my week 4 folder" (open Claude Code in that folder) / "new topic: ..." (an empty folder; a quick search builds a small evidence base first)]
PROGRAM: [e.g. "NSF DEB core, standard grant"]
MY IDEA: [a sentence or two on what you would want to test, or "propose it from the review"]

---

You are drafting the one-page Project Summary of a research proposal, grounded in the literature
evidence in this folder. It is a starting point for me to edit, not a submission.

## Rules

- **Prior work comes only from `evidence_table.csv`.** Every claim about what is known must trace
  to a row in that table. No new references, no citing from memory.
- **Mark what only I can supply** as `[YOU: what is needed]`.
- Do not edit `review.md`, `evidence_table.csv` or `references.csv`. Work only in the current folder.

## Budget

No literature search unless STARTING POINT is "new topic". One critic subagent. The Summary is at
most one page (about 4,600 characters, NSF's limit).

## Steps

### 0. Evidence base (only if STARTING POINT is "new topic")
Launch one subagent (Agent tool, `model: "sonnet"`) that searches OpenAlex
(`https://api.openalex.org/works?search=...`, rebuilding abstracts from `abstract_inverted_index`;
fall back to Crossref if OpenAlex fails), screens at most 30 abstracts, keeps about 12 papers, and
writes `evidence_table.csv` with columns `doi, year, authors, title, system, study_type, design,
main_result, evidence_strength, read_as`. Check every DOI at Crossref and drop failures.

### 1. Plan (you)
Read `evidence_table.csv` (and `review.md` if present). Choose the question and two aims that
follow from a real disagreement or gap in the table and fit MY IDEA. Write them to
`proposal_log.md` with the table rows each aim rests on.

### 2. Draft (you, on Opus)
Write `summary.md` under NSF's three headings: **Overview** (question, two aims, approach),
**Intellectual Merit**, **Broader Impacts**.

### 3. Claims ledger
Write `claims_ledger.csv`, one row per sentence that makes a claim: `claim, type (prior work / gap /
hypothesis / approach / feasibility / impact), source (a DOI from the table, "assumption", or
"YOU")`.

### 4. Panelist (1 subagent, on Opus)
Give a fresh subagent (`model: "opus"`) only `summary.md` and `evidence_table.csv`. It reviews the
Summary as an NSF DEB panelist would: a rating (Excellent to Poor), strengths and weaknesses for
Intellectual Merit and Broader Impacts, and a check of three claims about prior work against their
table rows. Save as `panel_review.md`. Revise once, and log what you changed and declined in
`proposal_log.md`.

### 5. Publish it
Make the final Summary a readable page (light background, DOIs linked, `[YOU: ...]` highlighted),
save it as `summary_original.html`, and publish the same page as an Artifact, private to me. Give
me the link. If you cannot publish Artifacts in this session, say so.

### 6. Finish
Tell me the panelist's rating, the ledger counts by source, and in three lines what you are least
confident about.
