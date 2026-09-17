#!/usr/bin/env bash
# Flags pages whose hardcoded `last_updated:` is older than their last real
# content change — i.e. the page changed but the stamp in the footer didn't.
#
# The stamp is hardcoded on purpose (see _includes/footer.liquid and the
# project CLAUDE.md). This script is the safety net: run it after editing
# pages, and bump any date it reports.
#
#   bin/check-page-dates.sh
#
# Exits 1 if anything is stale, so it can gate a commit if you ever want that.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

# Pages whose visible content comes from somewhere other than their own file.
# Without this, a page rendered from a data file looks "current" forever
# because its own .md never changes.
#   <page file>|<extra path> <extra path> ...
DEPS=(
  "_pages/agentic_ai.md|_data/agentic_ai.yml"
  "_pages/agentic.md|_includes/agentic_wiki.liquid _data/agentic_wiki.yml"
  "_pages/agentic_setup.md|_includes/agentic_wiki.liquid _data/agentic_wiki.yml"
  "_pages/agentic_memory.md|_includes/agentic_wiki.liquid _data/agentic_wiki.yml"
  "_pages/agentic_output.md|_includes/agentic_wiki.liquid _data/agentic_wiki.yml"
  "_pages/agentic_rules.md|_includes/agentic_wiki.liquid _data/agentic_wiki.yml"
  "_pages/publications.md|_bibliography/papers.bib"
  "_pages/updates.md|_updates"
  "_pages/profiles.md|_pages/about_benning.md _pages/about_ore.md _pages/about_cha.md _pages/about_mancino.md _pages/about_delardi.md _pages/about_poplyk.md _pages/about_kim.md _pages/about_moshkovich.md _pages/about_you.md _pages/about_landis.md _pages/about_siegmund.md _pages/about_cohen.md"
)

extra_paths_for() {
  local page="$1" entry
  for entry in "${DEPS[@]}"; do
    if [ "${entry%%|*}" = "$page" ]; then
      printf '%s' "${entry#*|}"
      return
    fi
  done
}

# Drop the stamp line, then reduce the text to what a reader would actually see:
# unescape markdown punctuation, drop emphasis markers, collapse whitespace.
#
# This exists because a formatter rewrites the source without changing the page.
# Prettier escapes a literal * as \*, and rewrites *italic* as _italic_. Both render
# identically, so neither can be allowed to count as a content change. The cost is
# that a change ONLY to emphasis is not detected, which is the right trade.
norm_filter() {
  grep -v '^last_updated:' |
    sed 's/\\\([][*_`#+.!-]\)/\1/g' |
    tr -d '*_' |
    tr -s '[:space:]' ' '
}

# Normalized content of a path at a revision: whitespace collapsed and the
# `last_updated:` stamp dropped. Handles a directory (a page can render from one,
# e.g. _updates) by concatenating every file under it.
norm_at() {
  local rev="$1" path="$2" type
  git cat-file -e "$rev:$path" 2>/dev/null || return 0
  type=$(git cat-file -t "$rev:$path" 2>/dev/null)
  if [ "$type" = "tree" ]; then
    git ls-tree -r --name-only "$rev" -- "$path" 2>/dev/null | while read -r fp; do
      git show "$rev:$fp" 2>/dev/null
    done | norm_filter
  else
    git show "$rev:$path" 2>/dev/null | norm_filter
  fi
}

# Date of the newest commit that made a real content change to a path.
#
# Two kinds of commit are deliberately not content changes:
#   - one that only bumps a page's own `last_updated:` line, otherwise bumping a stamp
#     would itself register as a change and the check could never come back clean;
#   - one that only reformats. A Prettier run reflows paragraphs, which is a large diff
#     and no change at all to what the page says.
#
# Both fall out of comparing normalized content against the commit's first parent.
substantive_date() {
  local p="$1" sha d
  while read -r sha d; do
    if [ "$(norm_at "$sha^" "$p")" != "$(norm_at "$sha" "$p")" ]; then
      printf '%s' "$d"
      return
    fi
  done < <(git log --format='%H %cs' -- "$p")
}

stale=0
for f in _pages/*.md; do
  declared=$(sed -n 's/^last_updated: *//p' "$f" | head -1 | tr -d '"'"'"' ')
  [ -z "$declared" ] && continue

  # newest commit date across the page and anything it renders from
  actual=$(substantive_date "$f")
  source_of="$(basename "$f")"
  for extra in $(extra_paths_for "$f"); do
    [ -e "$extra" ] || continue
    d=$(substantive_date "$extra")
    if [ -n "$d" ] && [[ "$d" > "$actual" ]]; then
      actual="$d"
      source_of="$extra"
    fi
  done
  [ -z "$actual" ] && continue

  if [[ "$actual" > "$declared" ]]; then
    printf '  STALE  %-22s says %s, but %s changed %s\n' \
      "$(basename "$f")" "$declared" "$source_of" "$actual"
    stale=1
  fi
done

if [ "$stale" -eq 0 ]; then
  echo "All page dates current."
else
  echo
  echo "Bump the last_updated: line in each file above, then commit."
fi
exit "$stale"
