# Posting to the updates feed

The feed at `/updates/` (and the most recent few on the front page) is one
reverse-chronological stream mixing short text announcements with photos. Every
item is one small markdown file in `_updates/`. The `date:` in the front matter
is what orders the feed.

## A text announcement

`_updates/2026-08-19_joanie-arrives.md`:

```markdown
---
layout: post
date: 2026-08-19 09:00:00-0400
inline: true
related_posts: false
---

**Joanie Cha** joins the lab as a PhD student this fall! :tada:
```

`inline: true` means it renders in the feed itself. Without it, the feed shows a
link to a standalone page instead — use that for something long enough to want
its own page.

Markdown works in the body, including links and `:emoji:` shortcodes.

## A photo

Put the image in `assets/img/photos/`, then add `image:` pointing at it. The body
text becomes the caption, and is optional.

`_updates/2026-08-19_gentian-dawn.md`:

```markdown
---
layout: post
date: 2026-08-19 08:00:00-0400
inline: true
related_posts: false
image: assets/img/photos/2026-08-19_gentian-dawn.jpg
alt: Gentianopsis crinita flower at sunrise
---

*Gentianopsis crinita* at first light, Ithaca NY.
```

`alt:` is the description for screen readers and for when the image fails to
load. It is not displayed; write the caption in the body.

## Several photos in one post

Use `images:` with a list instead of `image:`. They render side by side and wrap.

```yaml
images:
  - assets/img/photos/2026-08-19_field-a.jpg
  - assets/img/photos/2026-08-19_field-b.jpg
```

## Conventions

- Name both the markdown file and the image `YYYY-MM-DD_short-slug`, so the
  folder listing sorts the same way the feed does.
- Commit full-resolution images. The build generates 480/800/1400px WebP
  versions, so there is no need to downscale by hand.
- `.jpg`, `.jpeg`, and `.png` are supported.
- To pull an item without deleting it, add `published: false` to its front
  matter.

## How many show on the front page

`_pages/about.md` front matter, `updates.limit` (currently 5). Blank shows the
whole feed.
