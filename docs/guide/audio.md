# Audio Library

Grimoire browses ambient tracks, soundscapes, music, and sound effects alongside your books, maps, and tokens — with in-browser playback and a persistent player that keeps playing while you navigate.

## Folder layout

Add an `audio/` folder at the root of your library, organized by category or creator:

```
audio/
└── Ambient/                ← shown as a group header in the audio library
    ├── cover.jpg           ← optional folder artwork (cover.* or folder.*)
    └── tavern-night.mp3
```

The folder name is used as a group header, exactly like maps and tokens.

## Supported formats

`.mp3`, `.ogg`, `.opus`, `.flac`, `.wav`, `.m4a`, `.aac`

On scan, Grimoire reads each track's embedded **duration** and **title / artist / album** tags.

## Artwork

For a track's artwork, Grimoire uses, in order:

1. A `cover.*` or `folder.*` image in the track's folder, if present.
2. The track's embedded album art.

## Global audio player

Playback happens in a persistent **pop-out player** that keeps playing while you move around the app. Build a local queue by:

- Playing a whole folder at once
- Queueing tracks one at a time with **Play Next**
- Having a GM play a campaign resource group
- Playing all the audio embedded in a campaign wiki note (a note with several tracks plays as a playlist via **Play all**)

Expand the player to see and reorder upcoming tracks, with a repeat-current-track toggle.

## Tagging

Drop a `tags.json` file into any `audio/` folder or subfolder to auto-apply tags on scan, just like maps and tokens. See [Tags](/guide/tags).

## Search

Audio tracks are matched in global search by filename, folder path, and tag. See [Search](/guide/search).
