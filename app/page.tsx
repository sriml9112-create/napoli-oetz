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
    "Pizzeria Napoli Oetz: Pizza, Döner, Burger, Flammkuchen, Salate, Getränke und Take-away in Oetz. Täglich 11:00–23:00 geöffnet.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pizzeria Napoli Oetz",
    description:
      "Pizzeria Napoli Oetz: Pizza, Döner, Burger, Flammkuchen, Salate, Getränke und Take-away in Oetz. Täglich 11:00–23:00 geöffnet.",
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
      "Pizzeria Napoli Oetz: Pizza, Döner, Burger, Flammkuchen, Salate, Getränke und Take-away in Oetz. Täglich 11:00–23:00 geöffnet.",
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
