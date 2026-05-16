"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { findMenuItem, priceLabel, type MenuItem } from "@/data/menu";

type SignatureDish = MenuItem & { id: string };

const confirmedDishIds = ["pi-margherita", "pi-kebab", "h-doener-pommes"] as const;

const pideDish: SignatureDish = {
  id: "signature-pide",
  name: "Pide",
  description: "Pide aus dem Ofen, herzhaft belegt",
  priceOnRequest: true,
};

const imageMap: Record<string, { src: string; alt: string }> = {
  "pi-margherita": {
    src: "/images/hallo.jpg",
    alt: "Pizza halb-halb mit Margherita und Salami",
  },
  "pi-kebab": {
    src: "/images/pizza.jpg",
    alt: "Kebab-Pizza bei Pizzeria Napoli Oetz",
  },
  "h-doener-pommes": {
    src: "/images/kebabteller.jpg",
    alt: "Döner-Teller mit Pommes und Salat",
  },
  "signature-pide": {
    src: "/images/pide.jpg",
    alt: "Pide auf Holzbrett bei Pizzeria Napoli Oetz",
  },
};

const fallbackImage = {
  src: "/images/napoli-hero.png",
  alt: "Pizzeria Napoli Oetz",
};

export default function SignatureDishes() {
  const dishes: SignatureDish[] = confirmedDishIds
    .map((id) => findMenuItem(id))
    .filter((d): d is MenuItem => Boolean(d));

  dishes.push(pideDish);

  return (
    <section className="section-pad relative bg-bg-soft/60">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Beliebte Klassiker"
          title="Was bei uns immer gerne bestellt wird."
          subtitle="Eine kleine Auswahl aus unserer Karte — frisch zubereitet und auch zum Mitnehmen."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d, idx) => {
            const image = imageMap[d.id] ?? fallbackImage;
            return (
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
                    src={image.src}
                    alt={image.alt}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
