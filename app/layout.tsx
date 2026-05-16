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
  "Pizzeria Napoli in Oetz: Pizza, Döner, Burger, Flammkuchen und Getränke. Täglich geöffnet von 11:00 bis 23:00 Uhr. Jetzt Speisekarte ansehen oder Route öffnen.";
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
    "Restaurant Oetz",
    "Italienisches Restaurant Oetz",
    "Essen in Oetz",
    "Napoli Oetz",
    "Pizza Ötztal",
    "Restaurant Ötztal",
    "Mittagessen Oetz",
    "Abendessen Oetz",
    "Döner Oetz",
    "Flammkuchen Oetz",
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
  "@type": "Restaurant",
  name: "Pizzeria Napoli",
  alternateName: "Napoli Oetz",
  description,
  servesCuisine: ["Italian", "Pizza", "Kebab", "Burgers"],
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
  logo: `${siteUrl}/images/logo.jpg`,
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
