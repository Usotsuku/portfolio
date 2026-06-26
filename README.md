# Aymane Wakach — Portfolio

Personal portfolio built to showcase my experience, projects, and approach to building software products.

Live website available through deployment.

---

## Overview

This portfolio presents:

* Professional experience
* Selected projects
* Engineering approach
* Technology focus
* Project demos
* Contact and collaboration information

Built with attention to maintainability, performance, accessibility, and long-term scalability.

---

## Tech Stack

### Frontend

* Angular (Standalone Components)
* TypeScript
* TailwindCSS

### Motion & Interaction

* GSAP
* Motion One
* Angular Animations
* Lenis Smooth Scroll

### Architecture

* Feature-oriented structure
* Shared UI primitives
* Config-driven content
* Lazy loading
* SSR-ready rendering
* Reusable component patterns

### Deployment

* Vercel
* Docker-ready setup

---

## Project Structure

```text
projects/
└── portfolio/
    ├── src/
    │   ├── app/
    │   │   ├── config/
    │   │   ├── core/
    │   │   ├── features/
    │   │   ├── frames/
    │   │   ├── shared/
    │   │   └── widgets/
    │   ├── assets/
    │   └── environments/
```

Structure is organized around separation of concerns and reusable feature boundaries.

---

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Application:

```text
http://localhost:4202
```

---

## Production Build

Generate production output:

```bash
npm run build:prod
```

Build artifacts:

```text
dist/portfolio/browser
```

Preview locally:

```bash
serve -s dist/portfolio/browser
```

---

## Docker

Build:

```bash
docker build -t portfolio .
```

Run:

```bash
docker run --rm -p 8080:80 portfolio
```

Open:

```text
http://localhost:8080
```

---

## Deployment

Production deployment is handled through Vercel.

Every push to the main branch automatically triggers a new deployment.

---

## Contact

Aymane Wakach
Software Engineer

Email: [aymen.wakach@gmail.com](mailto:aymen.wakach@gmail.com)

LinkedIn and GitHub are available directly through the portfolio website.
