import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import About from "@/components/sections/About";
import MenuPreview from "@/components/sections/MenuPreview";
import SignatureDishes from "@/components/sections/SignatureDishes";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pizzeria Napoli Oetz | Pizza, Döner & mehr",
  description:
    "Pizzeria Napoli in Oetz: Pizza, Döner, Burger, Flammkuchen und Getränke. Täglich geöffnet von 11:00 bis 23:00 Uhr. Jetzt Speisekarte ansehen oder Route öffnen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pizzeria Napoli Oetz",
    description:
      "Pizzeria Napoli in Oetz: Pizza, Döner, Burger, Flammkuchen und Getränke. Täglich geöffnet von 11:00 bis 23:00 Uhr. Jetzt Speisekarte ansehen oder Route öffnen.",
    url: "https://www.napoli-oetz.com",
    siteName: "Pizzeria Napoli Oetz",
    images: [
      {
        url: "/images/napoli-hero.png",
        width: 1199,
        height: 728,
        alt: "Außenansicht von Pizzeria Napoli Oetz",
      },
    ],
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzeria Napoli Oetz",
    description:
      "Pizzeria Napoli in Oetz: Pizza, Döner, Burger, Flammkuchen und Getränke. Täglich geöffnet von 11:00 bis 23:00 Uhr. Jetzt Speisekarte ansehen oder Route öffnen.",
    images: ["/images/napoli-hero.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <About />
      <MenuPreview />
      <SignatureDishes />
      <WhyChooseUs />
      <GalleryPreview />
      <Location />
      <FinalCTA />
    </>
  );
}
