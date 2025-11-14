# Synstream Docs

Synstream Docs is built with [Docusaurus](https://docusaurus.io/) and contains product guides, concepts, troubleshooting tips, and release notes for the Synstream platform.

- **Live site:** https://rootsinnovation.github.io/synstream-docs/
- **Repository:** https://github.com/RootsInnovation/synstream-docs

## Prerequisites

- Node.js 20+
- npm 9+

## Installation

```bash
npm ci
```

## Local Development

```bash
npm run start
```

Starts the development server on http://localhost:3000/ with hot reload.

## Build

```bash
npm run build
```

Generates the production-ready static assets under `build/`.

## Deployment

Deployments are handled via GitHub Actions using the official Pages workflow. Push to `main` (or run the `Deploy` workflow manually) and the site is published automatically to GitHub Pages.

To inspect a deployment locally:

```bash
npm run serve
```

This serves the `build/` output on http://localhost:3000/. Hit `Ctrl+C` to stop the server.
