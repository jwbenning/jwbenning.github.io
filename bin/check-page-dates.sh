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

# Date of the newest commit that changed something OTHER than the page's own
# `last_updated:` line. Without this, the commit that bumps a stamp counts as a
# content change, so every page would report stale again immediately — the
# check would never come back clean.
substantive_date() {
  local f="$1" sha d
  while read -r sha d; do
    if git show --format= --unified=0 "$sha" -- "$f" \
         | grep -E '^[+-]' \
         | grep -vE '^(\+\+\+|---)' \
         | grep -vE '^[+-]last_updated:' \
         | grep -q .; then
      printf '%s' "$d"
      return
    fi
  done < <(git log --format='%H %cs' -- "$f")
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
    d=$(git log -1 --format=%cs -- "$extra")
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
