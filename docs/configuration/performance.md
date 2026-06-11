# Performance

## Indexing

On first startup Grimoire scans the library and indexes every PDF page for full-text search. This can take several minutes for large collections. The index is stored in the data volume and subsequent startups are fast.

Use the **Rescan** button in the sidebar to pick up newly added files, or configure a scheduled rescan in **Settings → Maintenance**.

## Page rendering

PDFs are rendered page-by-page server-side as WebP images. Rendered pages are cached aggressively with `Cache-Control: max-age=31536000, immutable`, so repeat visits load instantly.

Rendering happens on first access for each page. For large books, the first open may take a moment while the first few pages render.

## Valkey / Redis page cache

By default, rendered pages are cached to disk under `DATA_PATH/page_cache/`. For large libraries or multi-user setups, providing a `VALKEY_URL` moves the cache to memory for faster repeat loads.

```yaml
environment:
  - VALKEY_URL=redis://valkey:6379/0
```

See [Docker Compose examples](/deployment/docker-compose) for a complete compose setup with Valkey.

## Workers

The `WORKERS` environment variable controls how many uvicorn worker processes run. More workers allow more concurrent requests but use more memory. 2–4 is typical for home use.

```yaml
environment:
  - WORKERS=4
```
