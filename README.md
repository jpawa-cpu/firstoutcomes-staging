# First Outcomes — Website Redesign (Staging)

A redesign of firstoutcomes.com modeled on the clean, minimal, single-column
style of locatahealth.com. This is a **static marketing site** (no backend
yet) with a placeholder contact form — nothing submits anywhere yet, it's
just for visual review before we wire it up for real.

## What changed vs. the current site

- **Design**: full visual redesign — clean single-column layout, generous
  whitespace, one accent color, big readable type, card-based sections.
  Modeled on locatahealth.com's look and feel rather than the current
  firstoutcomes.com design.
- **Fewer pages**: trimmed navigation from 6 items down to 3 + contact.
  Removed **Who We Serve**, **FAQ**, and **Workflows** as separate pages —
  their most important content (contract types, workflow list) was folded
  into How It Works / Products instead of being dropped entirely.
- **Pages kept**: Home, How It Works, Products, About (which includes the
  Request Assessment contact form).

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router for page navigation

No backend is included in this version — the contact form is a visual
placeholder only (see `client/src/pages/About.jsx`). When you're ready to
make it live, the next step is a small API (e.g. Express + a JSON or
database-backed lead store) that the form posts to.

## Running locally

```bash
cd client
npm install
npm run dev
```

Visit the URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
cd client
npm run build
```

Output goes to `client/dist/`.

## Deploying (free, for staging/review)

This repo is meant to sit under a placeholder GitHub repo for now, not the
production firstoutcomes.com domain. The simplest free option for a static
site like this is **Cloudflare Pages**:

1. Push this repo to GitHub.
2. In Cloudflare, go to **Workers & Pages → Create → Connect to Git** and
   select this repo.
3. Set **Root directory** to `client`, **Build command** to `npm run build`,
   **Build output directory** to `dist`.
4. Deploy — Cloudflare gives you a free `*.pages.dev` URL to share around
   before pointing any real domain at it.

No environment variables are needed since there's no backend yet.

## Project structure

```
client/
  src/
    components/   Nav, Footer, shared UI bits
    pages/        Home, HowItWorks, Products, About (+ contact form)
    index.css     Tailwind + design tokens (colors, etc.)
```
