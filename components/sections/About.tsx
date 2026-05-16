"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-edge grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 shadow-elev"
        >
          <Image
            src="/images/pizza.jpg"
            alt="Frisch gebackene Pizza aus dem Steinofen"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-bg-card/70 px-4 py-3 backdrop-blur-md">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold/90">
                Hausgemacht
              </div>
              <div className="text-sm text-cream-50">Tradition seit Jahren</div>
            </div>
            <div className="font-display text-2xl text-cream-50">Napoli</div>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Über uns"
            title="Die Wärme Italiens, mitten in Tirol."
            subtitle="Bei Napoli Oetz steht echte italienische Küche im Mittelpunkt. Wir backen Pizzen knusprig im Steinofen, kochen Pasta frisch nach klassischen Rezepten und legen Wert auf gute Zutaten. Ob für Einheimische, Familien oder Gäste auf dem Weg ins Ötztal — bei uns soll man sich wohlfühlen."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {[
              "Klassische Pizza & Pasta",
              "Aus dem Steinofen",
              "Tiroler Gastfreundschaft",
              "Auch zum Mitnehmen",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-sm text-cream-100/90">{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
