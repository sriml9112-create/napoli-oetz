"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Flame,
  MapPin,
  ShoppingBag,
  HeartHandshake,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Leaf,
    title: "Frische Zutaten",
    text: "Wir kochen mit ausgewählten, frischen Produkten — so wie es sich für italienische Küche gehört.",
  },
  {
    icon: Flame,
    title: "Echter Steinofen",
    text: "Knusprig, aromatisch, perfekt gebacken: unsere Pizzen kommen direkt aus dem Steinofen.",
  },
  {
    icon: MapPin,
    title: "Mitten in Oetz",
    text: "Zentral gelegen im Ortskern von Oetz — bequem für Einheimische und Gäste im Ötztal.",
  },
  {
    icon: ShoppingBag,
    title: "Auch zum Mitnehmen",
    text: "Alle Speisen gibt es auch zum Mitnehmen — schnell, frisch und unkompliziert.",
  },
  {
    icon: HeartHandshake,
    title: "Herzlicher Service",
    text: "Bei uns soll man sich wie zu Hause fühlen. Freundlich, aufmerksam und unkompliziert.",
  },
  {
    icon: Users,
    title: "Für jeden Anlass",
    text: "Familien, Freunde, Touristen oder das schnelle Mittagessen — bei uns sind Sie richtig.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Warum Napoli"
          title="Gutes Essen. Echte Gastfreundschaft."
          subtitle="Was uns ausmacht — und warum unsere Gäste immer wieder kommen."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.05,
                }}
                className="card card-hover relative p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-olive/15 text-olive-light ring-1 ring-olive/25">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl text-cream-50">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/75">
                  {r.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
