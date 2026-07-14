# OPDS Catalog

Grimoire supports the [OPDS 1.2](https://specs.opds.io/opds-1.2) catalog format, allowing e-reader apps (Panels, Chunky, Kybook, KOReader, etc.) to browse and download books directly from your library.

## Enabling OPDS

Set `OPDS_ENABLED=true` and `BASE_URL` to your instance's public URL:

```yaml
environment:
  - OPDS_ENABLED=true
  - BASE_URL=https://grimoire.example.com
```

## Personal feed URLs

OPDS access is per-user. Each user generates their own opaque feed URL in **Settings → Account → OPDS Feed**. The URL contains a long random token; no username or password is needed by the OPDS client.

- **Enable**: generates a unique feed URL
- **Copy**: copies the URL to clipboard
- **Regenerate**: issues a new token; the old URL stops working immediately
- **Disable**: revokes the token

## Feed URL structure

```
https://grimoire.example.com/opds/{token}              ← navigation root
https://grimoire.example.com/opds/{token}/all           ← all books
https://grimoire.example.com/opds/{token}/entry/{id}    ← single book
https://grimoire.example.com/opds/{token}/download/{id} ← file download
```

## Content filtering

The OPDS feed respects each user's explicit-content preference. Users with explicit content disabled will not see explicit books in their feed.
