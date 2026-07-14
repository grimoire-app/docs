# File Management

Grimoire mounts your library folder **read-only** and never modifies your files. To upload, organize, or remove content, use a companion tool that mounts the same library folder with write access.

After adding files with any tool, trigger a **Rescan** in Grimoire (sidebar or Settings → Maintenance) to pick up new content.

## Filebrowser Quantum

[Filebrowser Quantum](https://github.com/gtsteffaniak/filebrowser) is a lightweight, browser-based file manager. Upload PDFs, create folders, rename, move, and delete files, all from a web UI.

### Docker Compose

```yaml
services:
  grimoire:
    image: hunterreadca/grimoire:latest
    container_name: grimoire
    restart: unless-stopped
    ports:
      - "9481:9481"
    environment:
      - LIBRARY_PATH=/library
      - DATA_PATH=/data
      - WORKERS=2
      - SECRET_KEY=change-me
    volumes:
      - /path/to/your/library:/library:ro   # read-only for Grimoire
      - /path/to/grimoire/data:/data
    networks:
      - grimoire

  filebrowser:
    image: gtsteffaniak/filebrowser:latest
    container_name: grimoire-filebrowser
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      - FB_ROOT=/srv
      - FB_DATABASE=/database/filebrowser.db
      - FB_ADDRESS=0.0.0.0
      - FB_PORT=8080
    volumes:
      - /path/to/your/library:/srv          # read-write for Filebrowser
      - filebrowser_data:/database
    networks:
      - grimoire

volumes:
  filebrowser_data:

networks:
  grimoire:
```

Access Filebrowser at `http://localhost:8080`. Default credentials: `admin` / `admin`: change these immediately.

::: tip Use the Compose Generator
The **[Compose Generator](/compose-generator)** can build this file with your paths pre-filled.
:::

## Calibre

[Calibre](https://calibre-ebook.com/) is a full-featured ebook manager. Its main value here is metadata editing: it writes `.opf` sidecar files that Grimoire reads automatically on the next scan to populate titles, authors, publishers, and tags.

See [OPF Metadata](/guide/opf-metadata) for the fields Grimoire reads.

### Docker Compose (full desktop via noVNC)

```yaml
services:
  grimoire:
    image: hunterreadca/grimoire:latest
    container_name: grimoire
    restart: unless-stopped
    ports:
      - "9481:9481"
    environment:
      - LIBRARY_PATH=/library
      - DATA_PATH=/data
      - WORKERS=2
      - SECRET_KEY=change-me
    volumes:
      - /path/to/your/library:/library:ro
      - /path/to/grimoire/data:/data
    networks:
      - grimoire

  calibre:
    image: lscr.io/linuxserver/calibre:latest
    container_name: grimoire-calibre
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    ports:
      - "8080:8080"   # Calibre desktop (noVNC)
      - "8081:8081"   # Calibre Content Server
    volumes:
      - /path/to/your/library:/library      # read-write for Calibre
      - calibre_config:/config
    networks:
      - grimoire

volumes:
  calibre_config:

networks:
  grimoire:
```

Access the Calibre desktop at `http://localhost:8080`. On first run, point the Calibre library at `/library/books`.

### Calibre's folder layout

Calibre writes a subfolder per book with `metadata.opf` and `cover.jpg`:

```
books/
└── Dungeons & Dragons/
    └── core/
        ├── Players Handbook/
        │   ├── players_handbook.pdf
        │   ├── metadata.opf        ← read by Grimoire
        │   └── cover.jpg
        └── Dungeon Masters Guide/
            ├── dungeon_masters_guide.pdf
            ├── metadata.opf
            └── cover.jpg
```

## Calibre-Web

[Calibre-Web](https://github.com/janeczku/calibre-web) is a lightweight browser UI for an existing Calibre library. Use it instead of the full Calibre desktop if you don't need the desktop application.

```yaml
  calibre-web:
    image: lscr.io/linuxserver/calibre-web:latest
    container_name: grimoire-calibre-web
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
      - DOCKER_MODS=linuxserver/mods:universal-calibre  # enables metadata writing
    ports:
      - "8083:8083"
    volumes:
      - /path/to/your/library:/library
      - calibre_web_config:/config
```

Point Calibre-Web at `/library/books` as its library path on first setup. Default credentials: `admin` / `admin123`.
