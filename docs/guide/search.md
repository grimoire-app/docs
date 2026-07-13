# Search

Grimoire indexes every page of every PDF using SQLite FTS5 for fast full-text search across your entire library.

## What gets indexed

- **Books** — every page, indexed at scan time. The search index is stored in the data volume.
- **Maps** — matched by filename, folder path, and tag
- **Tokens** — matched by filename, folder path, and tag
- **Audio** — matched by filename, folder path, and tag

## Search behaviour

- Minimum query length: **2 characters**
- Results include a snippet showing the matching text in context
- Results can be scoped to a single book or game system
- Maps, tokens, and audio are only returned in global (unscoped) searches

## Image-only PDFs (OCR)

Scanned books with no embedded text layer show an **Image Only** badge and can't be searched from their text layer alone. The default image bundles the Tesseract OCR engine, so on first scan these are run through OCR and their recognised text is added to the index — such books then show an **OCR** badge. See [Performance → OCR](/configuration/performance#ocr) to configure or disable it.

## Indexing

On first startup, Grimoire scans and indexes every PDF page. For large collections this can take several minutes. The index is stored in the data volume and subsequent startups are fast.

Progress is shown in **Settings → Maintenance**. You can also cancel a running index job from there.

## API

See the [API reference](/api#search) for the search endpoint parameters and response format.
