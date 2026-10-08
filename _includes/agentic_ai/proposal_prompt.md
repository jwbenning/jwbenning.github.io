# Fill in these four lines, then paste everything into Claude Code

MY REVIEW: [drag last week's review file into this window here, ideally review_original.html; or write "none"]
STARTING POINT: [one of: "my review" / "new topic: ..." (a quick search builds a small evidence base first)]
PROGRAM: [e.g. "NSF DEB core, standard grant"]
MY IDEA: [a sentence or two on what you would want to test, or "propose it from the review"]

---

You are drafting the one-page Project Summary of a research proposal, grounded in the literature
review I attached. It is a starting point for me to edit, not a submission.

## Rules

- **Prior work comes only from my review.** Every claim about what is known must trace to a
  reference cited in the review, or to a row of `evidence_table.csv` if you build one in step 0.
  No new references, no citing from memory, no adding DOIs the review does not give.
- **Mark what only I can supply** as `[YOU: what is needed]`.
- Copy my review into the current folder as `review_input` (keep its file extension) and do not
  edit it. Work only in the current folder.

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
Read my review. Write `review_refs.csv` listing every reference it cites (`ref_id, authors, year,
title, doi`), copying the DOI only where the review gives one. Choose the question and two aims
that follow from a real disagreement or gap in the review and fit MY IDEA. Write them to
`proposal_log.md` with the references and review sections each aim rests on.

### 2. Draft (you, on Opus)
Write `summary.md` under NSF's three headings: **Overview** (question, two aims, approach),
**Intellectual Merit**, **Broader Impacts**.

### 3. Claims ledger
Write `claims_ledger.csv`, one row per sentence that makes a claim: `claim, type (prior work / gap /
hypothesis / approach / feasibility / impact), source (a ref_id from review_refs.csv, "assumption",
or "YOU")`.

### 4. Panelist (1 subagent, on Opus)
Give a fresh subagent (`model: "opus"`) only `summary.md` and my review. It reviews the Summary as
an NSF DEB panelist would: a rating (Excellent to Poor), strengths and weaknesses for Intellectual
Merit and Broader Impacts, and a check of three claims about prior work against what the review
actually says. Save as `panel_review.md`. Revise once, and log what you changed and declined in
`proposal_log.md`.

### 5. Publish it
Make the final Summary a readable page (light background, DOIs linked, `[YOU: ...]` highlighted),
save it as `summary_original.html`, and publish the same page as an Artifact, private to me. Give
me the link. If you cannot publish Artifacts in this session, say so.

### 6. Finish
Tell me the panelist's rating, the ledger counts by source, and in three lines what you are least
confident about.
