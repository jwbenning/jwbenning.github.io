# Fill in these four lines, then paste everything into Claude Code

TOPIC: [e.g. "adaptation at geographic range edges"]
SCOPE: [what is in and out: taxa, systems, scales, kinds of study]
CUTOFF DATE: [if you will compare against a published review: the date just before it came out, as YYYY-MM-DD. Otherwise "none". Do not name the review here.]
FULL TEXT VIA CHROME: [yes / no]

---

You are writing a critical review of the literature on the TOPIC above, of the kind published in
*Annual Review of Ecology, Evolution, and Systematics* or *Trends in Ecology & Evolution*. It is
for a researcher who knows the field and wants synthesis and judgement, not a list of papers.

## Rules

- **Cutoff.** If a CUTOFF DATE is given, use only work published on or before it. Do not read or
  cite anything later, including later reviews of this topic, even if a search turns them up.
- **Every reference must be real.** Cite only papers you found through a search in this session,
  each with a DOI. Never cite from memory.
- **Say what you read.** Each paper is marked as *full text* or *abstract only*, and the review's
  claims about a paper must not go beyond what you read of it.
- Work in the current folder. Do not read files outside it.

## Budget

This run should fit comfortably inside a standard usage allowance. Stay within these caps:
at most 5 search subagents, each reading at most 20 abstracts, about 25 papers kept for the
evidence table, and (if Chrome is on) at most 10 papers read in full through the browser.

## Steps

### 1. Plan (you, the main agent)
Split the TOPIC into up to 5 sub-questions that together cover it. Write them to `methods_log.md` with
one line on why this split. Choose the split by the mechanisms or hypotheses the field argues
about, not by taxon.

### 2. Search (one subagent per sub-question, in parallel, on Sonnet)
Launch one subagent per sub-question using the Agent tool with `model: "sonnet"`. Each one:
- Searches **OpenAlex** (`https://api.openalex.org/works?search=...&per-page=50`), adding
  `&filter=to_publication_date:CUTOFF` if there is a cutoff. Abstracts come back as
  `abstract_inverted_index`, which it must rebuild into text. It may also follow references and
  citations of key papers through OpenAlex. OpenAlex sometimes refuses searches or returns 503
  under heavy load: retry a few times with a pause, and if it keeps failing, search Crossref
  instead (`https://api.crossref.org/works?query=...&rows=50`, adding
  `&filter=until-pub-date:CUTOFF`) and fetch abstracts from OpenAlex by DOI or from Semantic
  Scholar. If the environment variable `OPENALEX_API_KEY` is set, add `&api_key=` with it.
- Screens titles and abstracts against the SCOPE, reading at most 20 abstracts, and keeps its
  share of the ~25 papers, favouring primary studies with strong designs, key theory, and prior
  syntheses.
- For each kept paper, fills one row: `doi, year, authors, title, sub_question, system,
  study_type (theory / observational / experiment / genomic / synthesis), design, main_result,
  evidence_strength (strong / moderate / weak, with one reason), read_as (abstract / full text)`.
- If OpenAlex lists an open-access copy (`best_oa_location`), reads that full text and marks the
  row *full text*. If the copy will not load as readable text, the row stays *abstract only*.
- Returns its rows, its search strings, and counts screened and kept.

Wait until all subagents have returned before going on.

### 3. Full text via Chrome (only if FULL TEXT VIA CHROME is yes; you, the main agent)
Pick the ≤10 kept papers most important to the argument that are still *abstract only*. For each,
open `https://login.proxy.library.cornell.edu/login?url=https://doi.org/<DOI>` in Chrome and read
the methods, results and discussion. Update its row. If you hit a login page, stop and ask me to
log in; never type a password. If a publisher blocks the page or a PDF won't render as text, note
it and move on.

### 4. Evidence table and first draft (you, on Opus)
Merge the rows into `evidence_table.csv`. Then write the draft as `review.md` (your working copy),
about 3,000 words:

1. **Introduction:** why the question matters and how the review is organised.
2. **What the evidence shows**, one section per sub-question. Weigh evidence by design and
   strength, not by number of papers. Say where findings rest on weak designs or on abstracts only.
3. **Where the field disagrees.** Name the real disagreements, who holds which position, and why
   the evidence so far has not settled them. Do not invent balance where there is consensus.
4. **What would settle it:** for each disagreement, the specific study or analysis that would.
5. **Ways forward:** concrete, not "more research is needed".
6. **Limits of this review:** how many papers were read in full vs. abstract only, and what that
   means for the conclusions.

At the top, one line: date, model, cutoff, papers screened / kept / read in full.

### 5. Critic (1 subagent, on Opus)
Give a fresh subagent (Agent tool, `model: "opus"`) `review.md` and `evidence_table.csv` only. Its job: act as a demanding
editor at *Annual Reviews*. It lists the five most serious problems: claims the table does not
support, missing counter-evidence, false balance, vague future directions, and any section that
summarises papers instead of synthesising them. Revise the review once in response. Record what
you changed and what you declined to change, with reasons, in `methods_log.md`.

### 6. Check every reference
Write a short script that looks up each DOI at Crossref (`https://api.crossref.org/works/<DOI>`)
and confirms the title and year match. Remove from the review anything that fails or falls after
the cutoff, and list the removals in `methods_log.md`. Save the cleaned list as
`references.csv`.

### 7. Publish it
Make the final review a readable page: light background, clear headings, each reference linked to
its DOI, and each paper marked *full text* or *abstract only*. Keep the wording of the review
unchanged. Save it as `review_original.html`, a copy that stays as it is if the review is revised
later. Then publish the same page as an Artifact, private to me, and give me the link. If you
cannot publish Artifacts in this session, tell me; the file is the review.

### 8. Finish
`methods_log.md` should end with: sub-questions, search strings, counts (screened, kept, full
text, removed at checking), and the critic's points. Then tell me in three lines what you are
least confident about.
