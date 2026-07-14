# grimoire-docs

Documentation site for [Grimoire](https://github.com/hunter-read/grimoire): a self-hosted TTRPG library manager.

Built with [VitePress](https://vitepress.dev/). Includes an interactive Compose Generator (Vue component, fully client-side) for Docker Compose, Podman Compose, and Podman Quadlets.

## Requirements

- Node 20+

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/grimoire/`.

## Build

```bash
npm run build
```

Output goes to `docs/.vitepress/dist/`.

## Preview production build

```bash
npm run preview
```

## Deploy to GitHub Pages

The site is configured with `base: '/grimoire/'` for GitHub Pages deployment from this repo.

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy docs

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Structure

```
docs/
├── .vitepress/
│   ├── config.mjs          ← site config, nav, sidebar
│   └── theme/
│       └── index.js        ← registers Vue components
├── components/
│   └── ComposeGenerator.vue  ← interactive compose generator
├── guide/                  ← getting started, features, auth
├── configuration/          ← env vars, volumes, users, performance
├── deployment/             ← docker compose examples, file management, reverse proxy
├── api.md                  ← API reference
├── faq.md                  ← FAQ
├── compose-generator.md    ← compose generator page
└── index.md                ← home page
```
