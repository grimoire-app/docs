# Search

Grimoire indexes every page of every PDF using SQLite FTS5 for fast full-text search across your entire library.

## What gets indexed

- **Books** — every page, indexed at scan time. The search index is stored in the data volume.
- **Maps** — matched by filename, folder path, and tag
- **Tokens** — matched by filename, folder path, and tag

## Search behaviour

- Minimum query length: **2 characters**
- Results include a snippet showing the matching text in context
- Results can be scoped to a single book or game system
- Maps and tokens are only returned in global (unscoped) searches

## Indexing

On first startup, Grimoire scans and indexes every PDF page. For large collections this can take several minutes. The index is stored in the data volume and subsequent startups are fast.

Progress is shown in **Settings → Maintenance**. You can also cancel a running index job from there.

## API

See the [API reference](/api#search) for the search endpoint parameters and response format.
