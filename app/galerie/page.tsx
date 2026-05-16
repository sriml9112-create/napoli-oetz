import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Galerie — Eindrücke aus Pizzeria Napoli Oetz",
  description:
    "Bilder aus Pizzeria Napoli Oetz — Pizza, Döner, Pide und einladende Atmosphäre im Herzen von Oetz.",
  alternates: { canonical: "/galerie" },
};

// Beschreibungen ehrlich gewählt — keine generische "Pizza"-Behauptung dort,
// wo es eigentlich Kebabpizza, Pide oder Döner ist.
const sections = [
  {
    title: "Aus der Küche",
    description: "Was bei uns frisch zubereitet auf den Tisch kommt.",
    items: [
      {
        src: "/images/hallo.jpg",
        alt: "Pizza halb-halb — Margherita und Salami",
        caption: "Pizza halb-halb — Margherita und Salami",
        primary: true,
      },
      {
        src: "/images/pizza.jpg",
        alt: "Kebab-Pizza aus dem Hause Napoli",
        caption: "Kebab-Pizza",
      },
      {
        src: "/images/pide.jpg",
        alt: "Pide auf Holzbrett",
        caption: "Pide auf Holzbrett",
      },
      {
        src: "/images/kebabteller.jpg",
        alt: "Döner-Teller mit Pommes und Salat",
        caption: "Döner-Teller mit Pommes und Salat",
      },
    ],
  },
  {
    title: "Restaurant & Atmosphäre",
    description: "Ein Blick in unser Lokal in Oetz.",
    items: [
      {
        src: "/images/napoli-hero.png",
        alt: "Napoli Oetz — Außenansicht",
        caption: "Pizzeria Napoli Oetz — Außenansicht",
        primary: true,
      },
      {
        src: "/images/bier.jpg",
        alt: "Erfrischende Getränke",
        caption: "Getränke",
      },
      {
        src: "/images/pommes.jpg",
        alt: "Pommes Frites — knusprige Beilage",
        caption: "Pommes Frites",
      },
    ],
  },
];

export default function GaleriePage() {
  return (
    <article className="pb-10 pt-24 sm:pt-32">
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
              Jetzt anrufen
            </a>
          </div>
        </header>

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          {sections.map((section, sIdx) => (
            <section key={section.title}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl text-cream-50 sm:text-3xl md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-cream-200/70">{section.description}</p>
                </div>
                <span className="hidden text-xs uppercase tracking-[0.22em] text-gold/70 sm:inline">
                  0{sIdx + 1}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
                {section.items.map((it, idx) => (
                  <div
                    key={it.src + idx}
                    className={`group relative overflow-hidden rounded-xl border border-white/5 sm:rounded-2xl ${
                      it.primary
                        ? "col-span-2 row-span-2 aspect-square"
                        : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/85 to-transparent p-3 sm:p-4">
                      <span className="text-xs font-semibold text-cream-50 sm:text-sm">
                        {it.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-cream-200/45">
          Die Bilder zeigen vorhandene Aufnahmen und werden bewusst nur dort
          eingesetzt, wo sie inhaltlich passen.
        </p>
      </div>
    </article>
  );
}
