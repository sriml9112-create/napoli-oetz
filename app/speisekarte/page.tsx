import type { Metadata } from "next";
import { Phone, ShoppingBag } from "lucide-react";
import { allergens, restaurant } from "@/data/restaurant";
import MenuExplorer from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "Speisekarte – Pizza, Pasta, Burger & mehr",
  description:
    "Die komplette Speisekarte von Pizzeria Napoli Oetz. Knapp 40 Pizzasorten aus dem Steinofen, Hauptgerichte, Burger, Flammkuchen, Salate, Getränke und vieles mehr. Auch zum Mitnehmen.",
  alternates: { canonical: "/speisekarte" },
  openGraph: {
    title: "Speisekarte – Pizzeria Napoli Oetz",
    description: "Pizza, Hauptgerichte, Burger, Flammkuchen, Salate, Getränke.",
  },
};

export default function SpeisekartePage() {
  return (
    <article className="pb-24 pt-24 sm:pt-32">
      <div className="container-edge">
        <header className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            Speisekarte
          </span>
          <h1 className="heading-display mt-4 text-cream-50">
            Unsere Karte.
          </h1>
          <p className="body-lead mt-4">
            Pizza aus dem Steinofen, herzhafte Hauptgerichte, frische
            Flammkuchen, Salate und Getränke. Alle Speisen auch zum Mitnehmen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${restaurant.phone.tel}`} className="btn-primary">
              <Phone className="h-4 w-4" />
              Bestellen: {restaurant.phone.display}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-cream-100/80 sm:text-sm">
              <ShoppingBag className="h-4 w-4 text-gold" />
              Auch zum Mitnehmen
            </span>
          </div>
        </header>

        <MenuExplorer />

        <section className="mt-20 rounded-2xl border border-white/10 bg-bg-card/80 p-6 sm:p-8">
          <h2 className="font-display text-2xl text-cream-50">Allergenhinweise</h2>
          <p className="mt-2 text-sm text-cream-200/75">
            Gemäß österreichischer Allergeninformationsverordnung kennzeichnen
            wir die folgenden allergenen Zutaten in unserer Karte:
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {allergens.map((a) => (
              <li
                key={a.code}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-tomato/15 text-xs font-bold uppercase text-tomato-bright ring-1 ring-tomato/25">
                  {a.code}
                </span>
                <span className="text-sm text-cream-100/85">{a.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-cream-200/45">
            Bei Allergien oder Unverträglichkeiten sprechen Sie unser Personal
            an — wir beraten Sie gerne. Maßgeblich ist die aktuelle Karte im
            Restaurant.
          </p>
        </section>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-tomato/15 via-bg-card to-bg-card p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-2xl text-cream-50">
                Telefonisch bestellen
              </div>
              <p className="mt-1 text-sm text-cream-200/80">
                Rufen Sie uns an — wir bereiten Ihre Bestellung gerne zum
                Mitnehmen vor.
              </p>
            </div>
            <a href={`tel:${restaurant.phone.tel}`} className="btn-primary">
              <Phone className="h-4 w-4" />
              {restaurant.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky bottom "Jetzt anrufen" call bar, only on Speisekarte */}
      <div
        className="fixed inset-x-0 bottom-20 z-30 md:bottom-6"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="container-edge flex justify-end">
          <a
            href={`tel:${restaurant.phone.tel}`}
            className="hidden items-center gap-2 rounded-full bg-tomato px-5 py-3 text-sm font-semibold text-white shadow-elev hover:bg-tomato-bright md:inline-flex"
            aria-label="Restaurant anrufen"
          >
            <Phone className="h-4 w-4" />
            Jetzt anrufen
          </a>
        </div>
      </div>
    </article>
  );
}
