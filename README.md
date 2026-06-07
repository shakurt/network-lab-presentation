# Network Lab Presentation

Reveal.js presentation built with Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

- Deployment is automated by `.github/workflows/deploy-pages.yml`.
- On pushes to `main`, the workflow builds the site and deploys `dist/` to GitHub Pages.
- `vite.config.js` automatically sets the correct Vite `base` path in GitHub Actions using the repository name, so assets resolve correctly when hosted under the repository subpath.
