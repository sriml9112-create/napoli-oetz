"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Bildauswahl bewusst auf vorhandene Fotos beschraenkt; hallo.jpg (halb-halb
// Pizza) bekommt die Hauptkachel, weil es das ansprechendste Pizzafoto ist.
const tiles = [
  {
    src: "/images/hallo.jpg",
    alt: "Pizza halb-halb — Margherita und Salami",
    caption: "Pizza halb-halb",
    primary: true,
  },
  {
    src: "/images/napoli-hero.png",
    alt: "Pizzeria Napoli Oetz — Außenansicht",
    caption: "Pizzeria Napoli Oetz",
  },
  {
    src: "/images/kebabteller.jpg",
    alt: "Döner-Teller mit Pommes und Salat",
    caption: "Döner-Teller",
  },
  {
    src: "/images/pide.jpg",
    alt: "Pide auf Holzbrett",
    caption: "Pide auf Holzbrett",
  },
  {
    src: "/images/pizza.jpg",
    alt: "Kebab-Pizza aus dem Hause Napoli",
    caption: "Kebab-Pizza",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Galerie"
            title="Ein Blick in unser Restaurant."
            subtitle="Frisches Essen, einladende Atmosphäre und Eindrücke aus der Pizzeria in Oetz."
          />
          <Link href="/galerie" className="btn-secondary self-start sm:self-end">
            Alle Bilder
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:grid-rows-2 sm:gap-3">
          {tiles.map((t, idx) => (
            <motion.div
              key={t.src + idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.05,
              }}
              className={`group relative overflow-hidden rounded-xl border border-white/5 sm:rounded-2xl ${
                t.primary
                  ? "col-span-2 row-span-2 aspect-square sm:aspect-auto"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/85 to-transparent p-3">
                <span className="text-xs font-semibold text-cream-50 sm:text-sm">
                  {t.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
