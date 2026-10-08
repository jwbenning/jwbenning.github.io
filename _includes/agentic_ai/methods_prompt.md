# Fill in these four lines, then copy your files into an empty folder and paste everything into Claude Code

ARTIFACTS: [file or folder names in this folder, e.g. "analysis.R and data/plants.csv", "fig2.png", "scripts/"]
WRITE: [one of: "methods paragraph" / "figure legend and one results sentence" / "both"]
WHAT I CAN TELL YOU: [facts not in the files: organism, sites, dates, sample sizes, sequencing platform. Or "nothing; ask me".]
RUN THE CODE: [yes / no. Yes only if it runs in under 2 minutes with the data present.]

---

You are drafting methods or figure text for a paper, using only what the files in this folder
show. A reviewer will check every statement against the code.

## Rules

- **Describe only what the artifacts show.** Every statement must be supported by a line of code,
  a data column, a saved output, or a visible feature of a figure, or else by WHAT I CAN TELL YOU.
- **Do not infer biology from names.** A column called `site` tells you there is a site variable,
  not where the sites are. Dates, locations, taxa, sample sizes and methods of collection come from
  me or are marked `[YOU: ...]`.
- **Defaults are statements too.** If the analysis relies on a function default (contrasts,
  optimizer, link function, number of iterations, distance metric), say which default it is and
  flag that the methods should state it.
- **No unverified numbers.** Software versions come from querying what is installed, not from
  memory. Statistics in a results sentence come only from output you produced or a saved output
  file, never read by eye off a figure unless labelled "approximate, read from figure".
- Do not modify the artifacts. Work only in the current folder.

## Budget

Read at most about 2,000 lines of code. One verification subagent. Run the code only if RUN THE
CODE is yes, and stop it if it takes more than 2 minutes.

## Steps

### 1. Inventory (you)
List each artifact and what it is. Trace the analysis: inputs, transformations, filters, models,
outputs. Note any random step and whether a seed is set. If RUN THE CODE is yes, run it and save the
console output to `run_output.txt`. Record installed versions of R or Python and of the packages
the code calls.

### 2. Ask before writing
List the facts the text needs that neither the files nor WHAT I CAN TELL YOU supply. Ask me all of
them at once, in one numbered list, and wait for my answers. Anything I skip becomes a
`[YOU: ...]` marker.

### 3. Draft (you, on Opus)
Write `draft.md` with the requested text in the register of an ecology journal, followed by
"Things you should state that the code leaves implicit" (defaults, seeds, exclusions).

### 4. Verify (1 subagent, on Opus)
Give a fresh subagent (`model: "opus"`) only `draft.md`, the artifacts, `run_output.txt` if it
exists, and my answers from step 2. It splits the draft into individual statements and writes
`methods_ledger.csv`: `statement, support (file:line, column name, output file, figure panel, or
"author"), status (supported / default, not stated / author-supplied / unsupported)`. Fix or remove
every unsupported statement, once, and log the changes in `draft_log.md`.

### 5. Finish
Tell me the count of statements by status, and in three lines what a reviewer is most likely to
challenge.
