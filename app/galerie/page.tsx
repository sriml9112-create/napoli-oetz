import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Galerie – Eindrücke aus Pizzeria Napoli Oetz",
  description:
    "Bilder aus dem Pizzeria Napoli Oetz – unsere Pizza aus dem Steinofen, italienische Spezialitäten und einladende Atmosphäre.",
  alternates: { canonical: "/galerie" },
};

const sections = [
  {
    title: "Aus der Küche",
    description: "Was bei uns frisch zubereitet auf den Tisch kommt.",
    items: [
      { src: "/images/pizza.jpg", alt: "Frische Pizza aus dem Steinofen" },
      { src: "/images/kebabteller.jpg", alt: "Spezialitäten des Hauses" },
      { src: "/images/pide.jpg", alt: "Gebackene Spezialität" },
      { src: "/images/pommes.jpg", alt: "Beilagen und Snacks" },
    ],
  },
  {
    title: "Restaurant & Atmosphäre",
    description: "Ein Blick in unser Lokal in Oetz.",
    items: [
      { src: "/images/napoli-hero.png", alt: "Napoli Oetz – Restaurantansicht" },
      { src: "/images/bier.jpg", alt: "Erfrischende Getränke" },
    ],
  },
];

export default function GaleriePage() {
  return (
    <article className="pb-10 pt-28 sm:pt-36">
      <div className="container-edge">
        <header className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            Galerie
          </span>
          <h1 className="heading-display mt-4 text-cream-50">
            Eindrücke aus dem Napoli.
          </h1>
          <p className="body-lead mt-4">
            Frische Zutaten, italienische Klassiker und eine einladende
            Atmosphäre — bei uns in Oetz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/speisekarte" className="btn-primary">
              <UtensilsCrossed className="h-4 w-4" />
              Zur Speisekarte
            </Link>
            <a href={`tel:${restaurant.phone.tel}`} className="btn-secondary">
              <Phone className="h-4 w-4" />
              Tisch reservieren
            </a>
          </div>
        </header>

        <div className="mt-16 space-y-16">
          {sections.map((section, sIdx) => (
            <section key={section.title}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-3xl text-cream-50 sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-cream-200/70">{section.description}</p>
                </div>
                <span className="hidden text-xs uppercase tracking-[0.22em] text-gold/70 sm:inline">
                  0{sIdx + 1}
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {section.items.map((it, idx) => (
                  <div
                    key={it.src + idx}
                    className={`group relative overflow-hidden rounded-2xl border border-white/5 ${
                      idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-cream-200/45">
          Weitere Bilder können einfach in <code className="rounded bg-white/5 px-1.5 py-0.5">public/images</code> hinzugefügt
          und auf dieser Seite eingebunden werden.
        </p>
      </div>
    </article>
  );
}
