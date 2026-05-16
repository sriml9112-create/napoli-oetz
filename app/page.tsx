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
  title: "Pizzeria Napoli Oetz – Pizza, Döner & Imbiss in Oetz",
  description:
    "Pizzeria Napoli in Oetz: Pizza, Döner, Flammkuchen, Burger, Salate und Getränke. Täglich 11:00 bis 23:00 geöffnet — auch zum Mitnehmen.",
  alternates: { canonical: "/" },
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
