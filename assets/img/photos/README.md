# Photo gallery

Drop image files in this folder and they appear automatically — on the
[photos page](/photos/) (all of them) and on the front page (the most recent few).
No config edit needed.

## Naming

Name files `YYYY-MM-DD_short-slug.jpg`, e.g. `2026-08-19_gentian-dawn.jpg`.

The date prefix is what sorts the gallery newest-first, so it matters. The slug
becomes the image's alt text, so keep it descriptive.

## Captions (optional)

To put a caption under a photo, add an entry to `_data/photos.yml` keyed on the
filename. Photos without an entry simply render uncaptioned.

## Formats and size

`.jpg`, `.jpeg`, and `.png`. Jekyll generates 480/800/1400px WebP versions at
build time, so upload the full-resolution file and let the build downscale it.
