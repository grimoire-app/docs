# Tagging with tags.json

Drop a `tags.json` file into any `maps/`, `tokens/`, or `books/` folder to automatically apply tags when the library is scanned.

## Format

`tags.json` is a plain JSON object. Keys are paths resolved relative to the folder the file lives in:

| Key | What gets tagged |
|---|---|
| `"."` | The containing folder itself |
| `"file.png"` | A file in the same folder |
| `"subfolder"` | A subfolder |
| `"subfolder/file.png"` | A file inside a subfolder |

Values are arrays of tag strings.

```json
{
  ".": ["dungeon", "fantasy"],
  "cave-entrance.png": ["cave", "outdoors"],
  "boss-arena": ["combat", "finale"],
  "boss-arena/throne-room.png": ["throne", "indoor"]
}
```

## Placement

- In any `maps/` folder or subfolder: tags maps and folders
- In any `tokens/` folder or subfolder: tags tokens and folders
- In a game system folder under `books/`: tags the system itself

## Behaviour

Tags are applied (or overwritten) every time the library is rescanned. Tags set via the web UI are **replaced** by the values in `tags.json` on the next scan.

To stop managing tags via file, remove the `tags.json` entry for that item, and the UI-set tags will persist across rescans.
