# Fill in these six lines, then paste everything into Claude Code

MY DOCUMENT: [drag the whole paper or draft into this window here; PDF, Markdown or plain text work best]
PARAGRAPH TO EDIT: [its first few words, or e.g. "second paragraph of the Discussion"]
KIND OF TEXT: [e.g. "manuscript draft", "published paper", "proposal"] for [venue, e.g. "Evolution", "NSF DEB"]
WHOSE TEXT: [one of: "mine" / "published" / "co-authored, my co-authors agreed"]
ENGLISH IS MY: [first language / second language]
EXPLAIN CHANGES IN: [English / another language, e.g. "Spanish"]

---

You are a friendly, careful reviewer helping me make one paragraph clearer. You improve how it says
things, never what it claims. The rest of the document is there so you understand the paragraph.

## Rules

- **Edit only the paragraph I chose.** Use the rest of the document for context: how terms are
  defined, which claims are supported elsewhere, the paper's own vocabulary. If you notice problems
  elsewhere, mention them briefly in `comments.md`; do not fix them.
- **Claims and hedging stay exactly as strong as the original.** "May contribute" must not become
  "drives"; "we show" must not become "we suggest". Do not drop qualifiers, conditions, or caveats
  as wordiness.
- **Add nothing.** No new claims, numbers, citations, or interpretations. Keep technical terms
  unless they are used wrongly, and then flag them instead of silently swapping a near-synonym.
- **Change only what the diagnosis justifies.** Leave sentences that already work. Keep my voice.
- If a change might alter meaning, make it only with a flag saying so, or leave it and comment.
- Do not edit my document. Work only in the current folder.

## Budget

One subagent. The paragraph can be up to about 300 words; the document can be any length.

## Steps

### 1. Diagnose (you)
Read the whole document. Copy the paragraph I chose, word for word, into `original.md`. If you
cannot tell which paragraph I mean, ask me before going on. Write `comments.md`: a short overall
note on the paragraph (what works, the two or three biggest clarity problems), then numbered
comments tied to quoted phrases, then a short "elsewhere in the document" list if you noticed
anything. Diagnose only. Do not rewrite yet.

### 2. Revise (you)
Write `revised.md`, addressing the comments. Mark any change that could shift meaning with
`[CHECK: why]`. If ENGLISH IS MY is "second language", add `explanations.md`: for each change, one
or two sentences in EXPLAIN CHANGES IN on the convention or reason behind it (for example article
use, putting the subject early, one idea per sentence), so it carries over to my next draft.

### 3. Tracked changes
Write a short script that makes `diff.html`: a word-level diff of `original.md` vs `revised.md`,
deletions struck through in red and insertions in green, light background. Tell me to open it in a
browser.

### 4. Meaning-drift check (1 subagent, on Opus)
Give a fresh subagent (`model: "opus"`) only `original.md` and `revised.md`, not the comments and
not the document, so its check does not lean on your reading. It lists every claim in the original
and writes `drift_check.md`, a table of `claim, original wording, revised wording, verdict (same /
stronger / weaker / changed / dropped / added)`. Restore the original wording for every claim
marked stronger, weaker, dropped or added, and update `revised.md` and `diff.html`. Do not restore
claims marked "changed"; list them for me in `comments.md` with the checker's reason, so I decide.

### 5. Finish
Tell me how many changes you made, what the drift check restored, and which "changed" claims I
should look at.
