# Library Structure

Grimoire derives game systems, categories, and groups entirely from your folder structure — no manual configuration required.

## Top-level layout

```
library/
├── books/    ← PDF collection
├── maps/     ← battle maps and scene images
└── tokens/   ← character tokens and portraits
```

## Books

Each top-level folder under `books/` becomes a **game system**. Subfolders are auto-detected as categories.

```
books/
└── Dungeons and Dragons 5e/       ← game system
    ├── core/                      ← category: Core Rulebooks
    │   ├── Players Handbook.pdf
    │   └── monsters/              ← subfolder group "Monsters"
    │       └── Monster Manual.pdf
    ├── supplements/               ← category: Supplements
    ├── adventures/                ← category: Adventures
    │   └── Curse of Strahd/      ← subfolder group "Curse of Strahd"
    │       ├── Curse of Strahd.pdf
    │       └── Strahd DM Screen.pdf
    └── homebrew/                  ← category: Homebrew
```

### Category folder names

Folder name matching is **case-insensitive** and treats hyphens, underscores, and spaces as equivalent.

| Category | Recognized folder names |
|---|---|
| Core Rulebooks | `core`, `rulebooks`, `rules` |
| Starter Set | `starter-set`, `starter kit`, `beginner box`, `boxed set`, `essentials` |
| Supplements | `supplements`, `sourcebooks`, `expansions` |
| Adventures | `adventures`, `modules`, `campaigns` |
| Character Sheets | `character-sheets`, `character sheets`, `charsheets` |
| Handouts | `handouts`, `reference`, `screen` |
| Homebrew | `homebrew`, `custom`, `house-rules` |

::: tip
Files placed directly in a system folder (not in a subfolder) default to the **Core Rulebooks** category.

Any unrecognized subfolder name becomes its own category, slugified from the folder name — `Bestiary` becomes the `bestiary` category.
:::

### Subfolder groups

Any category folder can contain named subfolders to group related books. Grimoire detects these automatically and displays them as collapsible groups — no configuration needed.

Books without a subfolder appear ungrouped at the top of their category, above any groups. Subfolder groups include a download button for the whole group.

### System-agnostic collections

Some books don't belong to a single game system. Create a folder with one of these names and Grimoire displays its contents in a separate **System-Agnostic** section:

| Folder name |
|---|
| `System Agnostic` |
| `Generic` |
| `Any` |

Subfolders directly under the agnostic root become custom category headings — the folder name is used as-is.

### Explicit content

Append `(nsfw)` to a system folder name to mark all content in that system as explicit:

```
books/
└── Some Adult Game (nsfw)/
    └── core/
        └── rulebook.pdf
```

Users with explicit content disabled will not see this system or its books.

## Maps

```
maps/
└── Creator Name/      ← shown as a group header in the map gallery
    └── map-file.png
```

## Tokens

```
tokens/
└── Category/          ← shown as a group header in the token browser
    └── token-file.png
```

## Rescanning

After adding, removing, or reorganizing files, click **Rescan** in the sidebar or go to **Settings → Maintenance → Rescan Library** to pick up the changes.

You can also configure a scheduled rescan in **Settings → Maintenance**.
