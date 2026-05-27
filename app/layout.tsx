import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
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

const siteName = "Pizzeria Napoli Oetz";
const siteUrl = restaurant.url;
const description =
  "Pizzeria Napoli Oetz: Pizza, Döner, Burger, Flammkuchen, Salate, Getränke und Take-away in Oetz. Täglich 11:00–23:00 geöffnet.";
const ogImage = "/images/napoli-hero.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pizzeria Napoli Oetz | Pizza, Döner & mehr",
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Pizzeria Oetz",
    "Pizza Oetz",
    "Pizza Ötz",
    "Restaurant Oetz",
    "Restaurant Ötz",
    "Italienisches Restaurant Oetz",
    "Essen in Oetz",
    "Napoli Oetz",
    "Pizzeria Napoli Oetz",
    "Pizza Ötztal",
    "Restaurant Ötztal",
    "Döner Oetz",
    "Döner Ötz",
    "Take-away Oetz",
    "Flammkuchen Oetz",
    "Burger Oetz",
    "Speisekarte Napoli Oetz",
    "Mittagessen Oetz",
    "Abendessen Oetz",
    "Pizza und Döner in Oetz",
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
    title: siteName,
    description,
    images: [
      {
        url: ogImage,
        width: 1199,
        height: 728,
        alt: "Außenansicht von Pizzeria Napoli Oetz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: [ogImage],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Restaurant", "LocalBusiness"],
      "@id": `${siteUrl}/#restaurant`,
      name: siteName,
      alternateName: "Pizzeria Napoli",
      description,
      servesCuisine: ["Italian", "Pizza", "Kebab", "Fast Food"],
      priceRange: "€€",
      url: siteUrl,
      telephone: restaurant.phone.display,
      image: [`${siteUrl}/images/napoli-hero.png`],
      logo: `${siteUrl}/images/logo.jpg`,
      hasMenu: `${siteUrl}/speisekarte`,
      address: {
        "@type": "PostalAddress",
        streetAddress: restaurant.address.street,
        addressLocality: restaurant.address.city,
        postalCode: restaurant.address.postalCode,
        addressRegion: restaurant.address.region,
        addressCountry: "AT",
      },
      openingHours: "Mo-Su 11:00-23:00",
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
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "de-AT",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Speisekarte",
          item: `${siteUrl}/speisekarte`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kontakt",
          item: `${siteUrl}/kontakt`,
        },
      ],
    },
  ],
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
        <Analytics />
      </body>
    </html>
  );
}
