"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { findMenuItem, priceLabel, signatureDishIds } from "@/data/menu";

// Bildzuordnung — jede Zuordnung wurde auf optische Glaubwuerdigkeit geprueft.
// pizza.jpg ist eine Kebabpizza — daher NICHT fuer Margherita oder Frutti di Mare.
// hallo.jpg ist halb-halb (Margherita + Salami mit Kebabsauce) — passt am ehesten
// als Pizza-Hero-Bild. pide.jpg = Pide (Flammkuchen-aehnlich).
const imageMap: Record<string, string> = {
  "pi-margherita": "/images/hallo.jpg",
  "pi-kebab": "/images/pizza.jpg",
  "h-doener-pommes": "/images/kebabteller.jpg",
  "f-napoli": "/images/pide.jpg",
};

const fallbackImage = "/images/hallo.jpg";

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
          subtitle="Eine kleine Auswahl aus unserer Karte — mit Bildern, die zu den Gerichten passen."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d, idx) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.06,
              }}
              className="card card-hover overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageMap[d.id] ?? fallbackImage}
                  alt={`${d.name} bei Pizzeria Napoli Oetz`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-smooth hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/85 via-transparent to-transparent" />
                {d.badges?.includes("scharf") && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-tomato/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow-soft">
                    <Flame className="h-3 w-3" /> scharf
                  </span>
                )}
                {d.badges?.includes("beliebt") && !d.badges?.includes("scharf") && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[11px] font-semibold text-bg shadow-soft">
                    Beliebt
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight text-cream-50">
                    {d.name}
                  </h3>
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
