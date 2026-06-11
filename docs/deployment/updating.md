# Updating

## Docker Compose

```bash
docker compose pull
docker compose up -d
```

Your data volume (database, thumbnails, search index, user accounts) is stored separately and is not affected by updates.

## Pinning to a version

Replace `latest` with a specific tag to pin to a release:

```yaml
image: hunterreadca/grimoire:1.0.0
```

Check [DockerHub](https://hub.docker.com/r/hunterreadca/grimoire/tags) for available tags.

## After updating

Grimoire runs any necessary database migrations automatically on startup. No manual steps are required.

If the update includes new library scanning logic, trigger a **Rescan** from **Settings → Maintenance** to pick up any new metadata.
