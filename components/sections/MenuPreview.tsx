"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Pizza,
  UtensilsCrossed,
  Beef,
  Flame,
  Salad,
  Coffee,
  Beer,
  Wine,
  GlassWater,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    id: "pizze",
    title: "Pizze",
    description: "Knapp 40 Sorten aus dem Steinofen — vom Klassiker bis zur Hausspezialität.",
    icon: Pizza,
  },
  {
    id: "hauptgerichte",
    title: "Hauptgerichte",
    description: "Wiener Schnitzel, Lasagne und Döner-Teller — herzhaft und sättigend.",
    icon: UtensilsCrossed,
  },
  {
    id: "burger-snacks",
    title: "Burger & Snacks",
    description: "Frische Burger, Kebab, Dürüm und Pommes — ideal zum Mitnehmen.",
    icon: Beef,
  },
  {
    id: "flammkuchen",
    title: "Flammkuchen",
    description: "Hauchdünn und knusprig — von Classic bis Napoli und Apfel.",
    icon: Flame,
  },
  {
    id: "salate",
    title: "Salate",
    description: "Frische Salate als leichte Mahlzeit oder Beilage.",
    icon: Salad,
  },
  {
    id: "warme-getraenke",
    title: "Warme Getränke",
    description: "Italienischer Espresso, Cappuccino und Tee.",
    icon: Coffee,
  },
  {
    id: "biere",
    title: "Biere",
    description: "Zipfer Märzen, Stiegl und Radler — auch alkoholfrei.",
    icon: Beer,
  },
  {
    id: "weine",
    title: "Weine",
    description: "Offene Weiß- und Rotweine im 1/8 oder 1/4 Liter.",
    icon: Wine,
  },
  {
    id: "alkoholfrei",
    title: "Alkoholfreie Getränke",
    description: "Softdrinks, Säfte, Mineralwasser und Energydrink.",
    icon: GlassWater,
  },
  {
    id: "sonstiges",
    title: "Sonstiges",
    description: "Familienpizza, Halbe-Halbe, Toast, Knoblauchstange & mehr.",
    icon: Sparkles,
  },
];

export default function MenuPreview() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(197,162,90,0.08)_0%,transparent_70%)]"
      />
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Speisekarte"
            title="Pizza, Pasta, Burger & mehr."
            subtitle="Italienische Klassiker, herzhafte Hauptgerichte und beliebte Snacks — alles unter einem Dach."
          />
          <Link href="/speisekarte" className="btn-secondary self-start sm:self-end">
            Komplette Karte
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.min(idx * 0.04, 0.32),
                }}
              >
                <Link
                  href={`/speisekarte#cat-${c.id}`}
                  className="card card-hover group relative flex h-full flex-col gap-3 p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25 transition-colors group-hover:bg-tomato/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-lg text-cream-50">{c.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-cream-200/75">
                      {c.description}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-gold transition-transform group-hover:translate-x-0.5">
                    Ansehen <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
