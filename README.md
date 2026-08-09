# BlackProp Frontend

A premium dark-theme prop-trading frontend starter built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Theme

- Black / graphite base
- Gold primary accent
- Silver secondary accent
- White typography
- Subtle gradients, metallic text, glass borders, dashboard-style cards

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
npm run start
```

## Git + GitHub

This folder is ready to initialize as a Git repository:

```bash
git init
git add .
git commit -m "chore: initialize BlackProp frontend"
git branch -M main
```

### Option A — GitHub CLI

After logging in with `gh auth login`:

```bash
gh repo create blackprop --private --source=. --remote=origin --push
```

Use `--public` instead if you want a public repository.

### Option B — GitHub website

Create an empty repository named `blackprop` on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/blackprop.git
git push -u origin main
```

## Current structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
    sections/
    ui/
  lib/
public/
```

## First build milestone

The starter already includes:

- Fixed responsive navbar
- BlackProp wordmark component
- Hero with original dashboard mockup
- Challenge/account cards
- How-it-works section
- Feature grid
- CTA
- Footer
- Design tokens for gold/silver/black/white theme

## Next pages/components to build

1. Full account configurator with model + account-size state
2. Mobile navigation
3. Testimonials / payout proof carousel
4. Trading-platform section
5. FAQ accordion
6. About, Contact, Affiliate, Legal pages
7. Motion/scroll animations
8. Final logo/assets and brand system
9. Responsive QA and accessibility pass
10. Vercel deployment

> Important: pricing, trading rules, legal language, claims, reviews, and metrics currently shown are placeholder UI content. Replace them with verified BlackProp information before launch.
