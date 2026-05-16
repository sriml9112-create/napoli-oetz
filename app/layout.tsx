import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import { restaurant } from "@/data/restaurant";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteName = restaurant.name;
const siteUrl = restaurant.url;
const description = `${restaurant.name} – Pizzeria & italienisches Restaurant in ${restaurant.city}, ${restaurant.region}. Knusprige Pizza aus dem Steinofen, frische Pasta und Antipasti. Täglich geöffnet, auch zum Mitnehmen.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – Pizzeria & Italienisches Restaurant in Oetz`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Pizzeria Oetz",
    "Pizza Oetz",
    "Restaurant Oetz",
    "Italienisches Restaurant Oetz",
    "Essen in Oetz",
    "Napoli Oetz",
    "Pizza Ötztal",
    "Restaurant Ötztal",
    "Italiener Tirol",
    "Mittagessen Oetz",
    "Abendessen Oetz",
    "Pizza Lieferservice Oetz",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: siteUrl,
    siteName,
    title: `${siteName} – Pizzeria in Oetz, Tirol`,
    description,
    images: [
      {
        url: "/images/napoli-hero.png",
        width: 1200,
        height: 630,
        alt: `${siteName} – italienisches Restaurant in Oetz`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Pizzeria in Oetz`,
    description,
    images: ["/images/napoli-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD structured data for local business / restaurant
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description,
  servesCuisine: ["Italian", "Pizza", "Pasta"],
  priceRange: "€€",
  url: siteUrl,
  telephone: restaurant.phone.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    postalCode: restaurant.address.postalCode,
    addressRegion: restaurant.address.region,
    addressCountry: "AT",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:00",
    },
  ],
  image: [`${siteUrl}/images/napoli-hero.png`],
  acceptsReservations: restaurant.features.reservations,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable}`}>
      <body className="grain bg-bg text-cream-100 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
