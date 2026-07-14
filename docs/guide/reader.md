# Reader

Grimoire renders PDF pages server-side as WebP images, keeping the viewer fast on mobile without loading large files into the browser.

## Features

- **Page-by-page navigation**: swipe or use arrow keys
- **Pinch-to-zoom** on mobile
- **Spread mode**: display two pages side-by-side (even/odd offset toggle)
- **Table of contents**: jump directly to any chapter
- **Bookmarks**: save page bookmarks or text-selection highlights, with inline highlight overlay
- **Native PDF viewer**: switch to the browser's built-in PDF viewer any time via the toolbar
- **Download**: download the original PDF file

## Performance

PDF pages are rendered as WebP images at up to 3000px wide. Rendered pages are cached aggressively (`Cache-Control: max-age=31536000, immutable`) so repeat visits are instant.

For large libraries or multi-user setups, add a [Valkey page cache](/deployment/docker-compose#with-valkey-cache) to keep rendered pages in memory rather than disk.
