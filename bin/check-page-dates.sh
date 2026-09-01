#!/usr/bin/env bash
# Flags pages whose hardcoded `last_updated:` is older than their last real
# content commit — i.e. the page changed but the stamp in the footer didn't.
#
# The stamp is hardcoded on purpose (see _includes/footer.liquid). This script
# is the safety net: run it after editing pages, and bump any date it reports.
#
#   bin/check-page-dates.sh
#
# Exits 1 if anything is stale, so it can gate a commit if you ever want that.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

stale=0
for f in _pages/*.md; do
  declared=$(sed -n 's/^last_updated: *//p' "$f" | head -1 | tr -d '"'"'"' ')
  [ -z "$declared" ] && continue
  actual=$(git log -1 --format=%cs -- "$f")
  [ -z "$actual" ] && continue
  if [[ "$actual" > "$declared" ]]; then
    printf '  STALE  %-24s says %s, last changed %s\n' "$(basename "$f")" "$declared" "$actual"
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
