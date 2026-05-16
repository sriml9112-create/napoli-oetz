# Napoli Oetz - Website

Next.js website for **Pizzeria Napoli Oetz** (www.napoli-oetz.com).

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```text
app/
  layout.tsx           # Root layout, SEO, JSON-LD
  page.tsx             # Homepage
  speisekarte/page.tsx # Real menu with search and category navigation
  galerie/page.tsx
  kontakt/page.tsx     # Phone and route only
  impressum/page.tsx
  datenschutz/page.tsx
  sitemap.ts
  robots.ts
  globals.css
components/
  layout/              # Header, Footer, MobileCTABar
  sections/            # Homepage sections
  menu/                # MenuCard, MenuExplorer
  ui/                  # SectionHeading
data/
  restaurant.ts        # Address, phone, opening hours, owner data
  menu.ts              # Complete real menu data
public/
  images/              # Logo, restaurant, food photos
_legacy/               # Original reference files
```

## Business Data

- Restaurant: Napoli Oetz / Pizzeria Napoli
- Betreiber/Inhaber: Mesut Gül
- Adresse: Hauptstraße 29, 6433 Oetz, Österreich
- Telefon: +43 650 2915795
- Öffnungszeiten: täglich 11:00 - 23:00
- UID: ATU69675201
- Tätigkeit: Buffets und Imbißstuben
- Beginndatum der Rechtsform: 01.07.2015

## Contact Strategy

No confirmed official email address is available. The website uses phone contact
and route links only. If the owner later confirms an official email address,
add it deliberately in `data/restaurant.ts` and update the visible contact
surfaces at the same time.

## Owner Confirmation Items

Marked or noted as "bitte prüfen" before launch where applicable:

- Firmenbuchnummer and Firmenbuchgericht, if applicable
- Zuständige Aufsichtsbehörde / Bezirkshauptmannschaft
- Whether any optional third-party services beyond outbound map links are added
- Menu positions with `priceOnRequest: true`

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Connect `www.napoli-oetz.com`.
4. Deploy with the default Next.js settings.

## Git

```bash
git status
git add .
git commit -m "Finalize Napoli website for launch"
git push
```
