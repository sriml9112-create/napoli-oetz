"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Beispiel-Stimmen — vor Veroeffentlichung durch echte Google-Bewertungen ersetzen.
const reviews = [
  {
    name: "Lisa M.",
    role: "aus Oetz",
    text: "Beste Pizza im Oetztal — der Teig ist herrlich knusprig, die Zutaten frisch. Wir kommen immer wieder gerne.",
    rating: 5,
  },
  {
    name: "Markus T.",
    role: "Urlaubsgast",
    text: "Super netter Service und das Essen kommt schnell. Die Pizza Oetzi ist absolute Empfehlung!",
    rating: 5,
  },
  {
    name: "Familie S.",
    role: "aus Imst",
    text: "Familienfreundlich, gemuetlich und das Preis-Leistungs-Verhaeltnis stimmt. Auch zum Mitnehmen perfekt.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="section-pad relative bg-bg-soft/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(178,31,31,0.08)_0%,transparent_70%)]"
      />
      <div className="container-edge">
        <SectionHeading
          eyebrow="Gaestestimmen"
          title="Was unsere Gaeste sagen."
          subtitle="Beispielhafte Stimmen — wir freuen uns ueber jede neue Bewertung."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.08,
              }}
              className="card relative p-6"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-gold/40" />
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-cream-100/90 leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato/15 font-display text-tomato-bright">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-cream-50">{r.name}</div>
                  <div className="text-xs text-cream-200/60">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-cream-200/45">
          Diese Stimmen dienen als Beispiel-Layout. Echte Bewertungen koennen
          jederzeit durch tatsaechliche Google-Rezensionen ersetzt werden.
        </p>
      </div>
    </section>
  );
}
