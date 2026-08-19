# Photos for the updates feed

Image files for photo posts live here. The post itself is a small markdown file
in `_updates/` — that's what puts the photo in the feed and gives it a date and
a caption.

## Posting a photo

1. Drop the image in this folder, named `YYYY-MM-DD_short-slug.jpg`.
2. Add a file in `_updates/` with the same base name, e.g.
   `_updates/2026-08-19_gentian-dawn.md`:

```
---
layout: post
date: 2026-08-19 08:00:00-0400
inline: true
image: assets/img/photos/2026-08-19_gentian-dawn.jpg
alt: Gentianopsis crinita flower at sunrise
---

*Gentianopsis crinita* at first light, Ithaca NY.
```

The body text is the caption. Leave it empty for an uncaptioned photo.

## Several photos in one post

Use `images:` instead of `image:` and they render side by side:

```
images:
  - assets/img/photos/2026-08-19_field-a.jpg
  - assets/img/photos/2026-08-19_field-b.jpg
```

## Formats and size

`.jpg`, `.jpeg`, `.png`. Jekyll generates 480/800/1400px WebP versions at build
time, so commit the full-resolution file and let the build downscale it.
