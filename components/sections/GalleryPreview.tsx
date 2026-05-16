"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const tiles = [
  { src: "/images/pizza.jpg", alt: "Pizza aus dem Steinofen", span: "row-span-2" },
  { src: "/images/napoli-hero.png", alt: "Restaurant Napoli Oetz", span: "" },
  { src: "/images/kebabteller.jpg", alt: "Spezialitäten des Hauses", span: "" },
  { src: "/images/bier.jpg", alt: "Getränke und Bier", span: "" },
  { src: "/images/pommes.jpg", alt: "Beilagen", span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Galerie"
            title="Ein Blick in unser Restaurant."
            subtitle="Frisches Essen, einladende Atmosphäre und italienische Lebensfreude — gleich nebenan in Oetz."
          />
          <Link href="/galerie" className="btn-secondary self-start sm:self-end">
            Alle Bilder
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2">
          {tiles.map((t, idx) => (
            <motion.div
              key={t.src + idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.05,
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${
                idx === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
