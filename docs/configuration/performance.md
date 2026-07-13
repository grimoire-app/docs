# Performance

## Indexing

On first startup Grimoire scans the library and indexes every PDF page for full-text search. This can take several minutes for large collections. The index is stored in the data volume and subsequent startups are fast.

Use the **Rescan** button in the sidebar to pick up newly added files, or configure a scheduled rescan in **Settings → Maintenance**. For large libraries you can also rescan a single corner — every system, category, subfolder, and map/token/audio group has its own rescan button that re-scans just that folder.

## OCR

Some PDFs contain only scanned page images with no embedded text layer (common with older, scanned books). These can't be full-text searched from their text layer alone and show an **Image Only** badge.

The default Grimoire image bundles the [Tesseract](https://github.com/tesseract-ocr/tesseract) OCR engine (English), so on first scan these image-only PDFs are run through OCR and their recognised text is added to the search index. Books indexed this way show an **OCR** badge. OCR runs entirely in-process — no extra container or service is required.

- **Disable OCR** — set `OCR_ENABLED=false`. Image-only PDFs are then left unindexed (the pre-OCR behaviour), exactly as on the slim image.
- **Slim image** — the `-slim` tags (e.g. `hunterreadca/grimoire:slim`, `:1.5.0-slim`) omit Tesseract for a smaller image. OCR is automatically disabled there and Grimoire degrades gracefully.
- **Re-queue on upgrade** — when OCR becomes available (upgrading from a slim image, or enabling it), previously image-only books are automatically re-queued for OCR on the next startup scan.
- **Additional languages** — set `OCR_LANGUAGES` to a `+`-joined list of Tesseract language codes (e.g. `eng+deu+fra`). The extra languages' `.traineddata` files must be present in the image's tessdata directory — mount a directory of `.traineddata` files over it (or point `TESSDATA_PREFIX` at a mounted directory) to add languages without rebuilding.

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
