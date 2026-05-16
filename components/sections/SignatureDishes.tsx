"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { findMenuItem, priceLabel, signatureDishIds } from "@/data/menu";

// Bildzuordnung — verwendet ausschließlich Bilder, die in public/images existieren.
const imageMap: Record<string, string> = {
  "pi-margherita": "/images/pizza.jpg",
  "pi-frutti-di-mare": "/images/pizza.jpg",
  "h-doener-pommes": "/images/kebabteller.jpg",
  "f-napoli": "/images/pide.jpg",
};

export default function SignatureDishes() {
  const dishes = signatureDishIds
    .map((id) => findMenuItem(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section className="section-pad relative bg-bg-soft/60">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Beliebte Klassiker"
          title="Was bei uns immer gerne bestellt wird."
          subtitle="Eine kleine Auswahl aus unserer Karte — vom italienischen Klassiker bis zur Hausspezialität."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d, idx) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.07,
              }}
              className="card card-hover overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageMap[d.id] ?? "/images/pizza.jpg"}
                  alt={`${d.name} – Pizzeria Napoli Oetz`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-smooth hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
                {d.badges?.includes("scharf") && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-tomato/95 px-2.5 py-1 text-[11px] font-semibold text-white">
                    <Flame className="h-3 w-3" /> scharf
                  </span>
                )}
                {d.badges?.includes("beliebt") && !d.badges?.includes("scharf") && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[11px] font-semibold text-bg">
                    Beliebt
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-cream-50">{d.name}</h3>
                  <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">
                    {priceLabel(d)}
                  </span>
                </div>
                {d.description && (
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cream-200/75">
                    {d.description}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-xs text-cream-200/45">
          Maßgeblich ist die aktuelle Speisekarte im Restaurant. Preise können
          Änderungen unterliegen.
        </p>
      </div>
    </section>
  );
}
