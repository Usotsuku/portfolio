# Aymane Wakach Portfolio

Production-oriented Angular portfolio generated outside the `yalla-farha-v2` codebase while following the admin workspace philosophy:

- Angular standalone components.
- `projects/portfolio/src/app` application boundary.
- `frames/main` layout organization.
- `config`-driven content and theme settings.
- Shared models, services, directives, and widgets.
- Lazy route loading.
- TailwindCSS global design tokens.
- GSAP, Motion One, Angular animations, and Lenis with reduced-motion guards.
- Docker and CI preparation.

## Important CV Note

The attached CV PDF is image-based. Automated text extraction was not available locally, so the portfolio does not invent work history or projects. Verified data belongs in:

```ts
projects/portfolio/src/app/config/portfolio.config.ts
```

Update `email`, `githubUrl`, `linkedinUrl`, `experience`, and `projects` once OCR or a text CV is available.

## Commands

```bash
npm install
npm start
npm run build:prod
npm run lint
```

The local dev server runs on `http://localhost:4202`.

## Deployment

Build the production bundle:

```bash
npm run build:prod
```

The browser output is generated under `dist/portfolio/browser`.

## Docker

```bash
docker build -t aymane-portfolio .
docker run --rm -p 8080:80 aymane-portfolio
```

Then open `http://localhost:8080`.
