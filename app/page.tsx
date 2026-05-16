import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import About from "@/components/sections/About";
import MenuPreview from "@/components/sections/MenuPreview";
import SignatureDishes from "@/components/sections/SignatureDishes";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pizzeria Napoli Oetz – Italienisches Restaurant in Oetz, Tirol",
  description:
    "Italienisches Restaurant und Pizzeria im Herzen von Oetz im Ötztal. Knusprige Pizza aus dem Steinofen, frische Pasta, klassische Antipasti. Täglich geöffnet — auch zum Mitnehmen.",
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
      <Reviews />
      <Location />
      <FinalCTA />
    </>
  );
}
