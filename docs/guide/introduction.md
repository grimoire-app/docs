# Introduction

Grimoire is a self-hosted web application for managing your tabletop RPG PDF collection. It runs as a Docker container, mounts your existing library folder, and gives you a clean browser-based UI to browse, search, and read your books from any device on your network.

## What it does

- **Organizes** your PDFs by game system and category, derived automatically from your folder structure — no manual tagging required to get started
- **Indexes** every page of every PDF for full-text search using SQLite FTS5
- **Renders** PDF pages server-side as WebP images so the reader is fast even on mobile
- **Tracks** maps and tokens alongside books in the same library
- **Supports** campaigns, bookmarks, favorites, OPDS feeds, and OpenID Connect authentication

## What it does not do

Grimoire is a **read-only viewer**. It never modifies the files in your library folder. Adding, removing, or reorganizing files is done with whatever tool you prefer — a file manager, Calibre, Filebrowser Quantum, or just your OS. After making changes, trigger a **Rescan** in the Grimoire UI to pick them up.

## Stack

| Layer | Technology |
|---|---|
| Backend | FastAPI (async Python 3.12) |
| Database | SQLite with FTS5 full-text search |
| PDF rendering | PyMuPDF → WebP |
| Frontend | React 18, served by the FastAPI backend |
| Optional cache | Valkey / Redis (page image cache) |
| Auth | JWT + optional OpenID Connect |

## License

GNU General Public License v3.0. Source on [GitHub](https://github.com/hunter-read/grimoire).
