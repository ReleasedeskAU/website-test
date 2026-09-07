# Release Desk

Marketing site for **Release Desk** — governed release management with StaffLess AI.

Release Desk replaces scattered spreadsheets, chat threads, and manual status-chasing with one system where every release follows enforced, configurable rules, and where anyone can ask natural-language questions about the data and get accurate, trustworthy answers.

This repository is a static marketing site (no backend). The demo-request form validates in the browser and shows a local success state.

## Stack

- [Next.js](https://nextjs.org/) App Router
- TypeScript
- Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

`npm start` serves the production build (default port 3000).

## Project layout

- `src/app` — App Router pages (`/`, `/privacy`, `/terms`)
- `src/components` — reusable UI (Button, Badge, Card, Section, Nav, Footer) and landing sections
- `src/app/globals.css` — design tokens and global styles

## Honest product boundaries (as stated on the site)

- Live connectors today: **Jira** and **GitHub**. Others are roadmap.
- StaffLess AI answers from **indexed, synced** data — not a live unsynced query.
- Date-range questions are not a current capability.
- Voice actions cover a **focused, confirmed** set — not every platform action.
