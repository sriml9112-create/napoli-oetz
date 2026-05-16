# Napoli Oetz – Website

Premium Next.js website for **Pizzeria Napoli Oetz** (napoli-oetz.com).

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (subtile Animationen)
- Lucide React (Icons)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Projektstruktur

```
app/
  layout.tsx          # Root layout, SEO, JSON-LD
  page.tsx            # Homepage
  speisekarte/page.tsx# Echte Karte mit Suche + Sticky-Navigation
  galerie/page.tsx
  kontakt/page.tsx    # Nur Telefon + Route (keine E-Mail)
  impressum/page.tsx  # Platzhalter — vom Betreiber prüfen
  datenschutz/page.tsx# Platzhalter — vom Betreiber prüfen
  not-found.tsx
  sitemap.ts
  robots.ts
  globals.css
components/
  layout/             # Header, Footer, MobileCTABar
  sections/           # Homepage-Sektionen
  menu/               # MenuCard, MenuExplorer (Suche + Sticky-Nav)
  ui/                 # SectionHeading
data/
  restaurant.ts       # Adresse, Telefon, Öffnungszeiten (KEINE E-Mail)
  menu.ts             # Komplette echte Speisekarte
public/
  images/             # Hero + Speisen/Atmosphäre
_legacy/              # Originaldateien zur Referenz
```

## Kontakt-Konzept

**Keine E-Mail-Adresse bekannt — Kontakt erfolgt ausschließlich per Telefon.**
Die früher verwendete Adresse `info@napoli-oetz.com` war erfunden und wurde
aus allen Stellen entfernt (Footer, Kontakt, Impressum, Datenschutz, JSON-LD,
Kontaktformular).

Sobald der Betreiber eine offizielle Adresse bestätigt, einfach in
`data/restaurant.ts` ergänzen (`email: "..."`) und die ausgeblendeten
Mail-Felder wieder einblenden.

## Vom Betreiber noch zu bestätigen

In `data/restaurant.ts` mit `REVIEW:` markiert:

- **Vollständige Straße + Hausnummer** (aktuell „Hauptstraße, 6433 Oetz")
- **Lieferung ja/nein** (aktuell `false`)
- **Reservierungen ja/nein** (aktuell `true`)
- **Social-Media-Links** (Facebook/Instagram leer)
- **Impressum-Daten**: Firmenbuchnummer, UID, Inhaber:in, Aufsichtsbehörde
- **Datenschutz**: eingesetzte Drittdienste

In `data/menu.ts` mit `priceOnRequest: true` markierte Positionen:

- **Rot Süß** (Wein, 1/8 oder 1/4 l)
- **Weiß Sauer 1/8 oder 1/4 l** (Grüner Veltliner Variante)
- **Glutenfreie Pizza**

## Deployment

### Vercel (empfohlen)

1. Repo zu GitHub pushen
2. In Vercel importieren
3. Domain `napoli-oetz.com` verbinden
4. Fertig — automatisches SSL, Image Optimization, CDN

### IONOS / sonstiger Node-Host

- **Statischer Export:** `output: "export"` in `next.config.mjs`, dann
  `next build && next export`. Beachte: `next/image`-Optimierung entfällt.
- **Node-Hosting:** `npm run build` + `npm start` (Port 3000).

## Git

```bash
git add .
git commit -m "Real menu data + remove invented email"
git push
```
