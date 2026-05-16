import type { Metadata } from "next";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum gemäß E-Commerce-Gesetz und Mediengesetz.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <article className="pb-10 pt-24 sm:pt-32">
      <div className="container-edge max-w-3xl">
        <header>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            Rechtliches
          </span>
          <h1 className="heading-display mt-4 text-cream-50">Impressum</h1>
        </header>

        <section className="mt-10 space-y-6 text-cream-100/90">
          <div>
            <h2 className="font-display text-2xl text-cream-50">
              Angaben gemäß E-Commerce-Gesetz und Mediengesetz
            </h2>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Betreiber und Medieninhaber
            </h3>
            <p className="mt-3">
              {restaurant.operator.name}
              <br />
              Pizzeria Napoli
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Anschrift</h3>
            <p className="mt-2">
              {restaurant.address.street}
              <br />
              {restaurant.address.postalCode} {restaurant.address.city}
              <br />
              {restaurant.address.country}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Kontakt</h3>
            <p className="mt-2">
              Telefon:{" "}
              <a
                className="underline decoration-gold/40 underline-offset-4 hover:text-cream-50"
                href={`tel:${restaurant.phone.tel}`}
              >
                {restaurant.phone.display}
              </a>
              <br />
              E-Mail: <span className="text-cream-200/70">auf Anfrage</span>
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">UID-Nummer</h3>
            <p className="mt-2">{restaurant.operator.uid}</p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Tätigkeit</h3>
            <p className="mt-2">{restaurant.operator.activity}</p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Beginn der Rechtsform
            </h3>
            <p className="mt-2">{restaurant.operator.legalFormStartDate}</p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Website</h3>
            <p className="mt-2">www.napoli-oetz.com</p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Blattlinie</h3>
            <p className="mt-2">
              Diese Website informiert über die Pizzeria Napoli in Oetz, die
              Speisekarte, Öffnungszeiten, Kontaktmöglichkeiten und Anfahrt.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Haftung für Inhalte
            </h3>
            <p className="mt-2">
              Die Inhalte dieser Website wurden sorgfältig erstellt. Für
              Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr
              übernommen.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Haftung für Links
            </h3>
            <p className="mt-2">
              Für externe Links sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
