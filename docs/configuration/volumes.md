# Volumes

Grimoire needs two volume mounts:

```yaml
volumes:
  # Your library — read-only is safe and recommended
  - /path/to/your/library:/library:ro

  # Persistent data (database, thumbnails, page cache)
  - /path/to/grimoire/data:/data
```

## Library volume

Mount your TTRPG library folder here. Grimoire never modifies your files, so `:ro` (read-only) is recommended.

The path inside the container defaults to `/library`. If you change it, also set `LIBRARY_PATH` to match:

```yaml
environment:
  - LIBRARY_PATH=/my/custom/path
volumes:
  - /host/library:/my/custom/path:ro
```

To use Filebrowser Quantum or Calibre alongside Grimoire to manage files, those services mount the same host folder with **read-write** access while Grimoire stays read-only. See [File Management](/deployment/file-management).

## Data volume

Grimoire stores all persistent data here:

- `grimoire.db` — SQLite database (users, metadata, bookmarks, campaigns)
- `grimoire.fts.db` — full-text search index
- `thumbnails/` — generated book cover thumbnails
- `page_cache/` — rendered PDF page images (when Valkey is not used)

**Back this directory up** to preserve your metadata, user accounts, and bookmarks.

The path inside the container defaults to `/data`. If you change it, also set `DATA_PATH`:

```yaml
environment:
  - DATA_PATH=/my/custom/data
volumes:
  - /host/data:/my/custom/data
```
