import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum gemäß § 5 ECG und § 25 Mediengesetz.",
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

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm text-cream-100/90">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <p>
            <strong className="text-cream-50">Hinweis:</strong> Einzelne Felder
            (Firmenbuch, Firmenbuchgericht, Aufsichtsbehörde) sind als
            &bdquo;bitte prüfen&ldquo; markiert und sollten vom Betreiber vor dem
            Live-Gang final bestätigt oder ergänzt werden.
          </p>
        </div>

        <section className="mt-10 space-y-6 text-cream-100/90">
          <div>
            <h2 className="font-display text-2xl text-cream-50">
              Angaben gemäß § 5 ECG und § 25 Mediengesetz
            </h2>
            <p className="mt-3">
              Pizzeria Napoli
              <br />
              Inhaber: {restaurant.owner.name}
              <br />
              {restaurant.address.full}
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
              E-Mail:{" "}
              <span className="text-cream-200/70">
                Keine offizielle E-Mail bekannt.
              </span>
              <br />
              Web: {restaurant.url}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Unternehmensangaben
            </h3>
            <p className="mt-2">
              Tätigkeit: {restaurant.owner.activity}
              <br />
              Beginndatum der Rechtsform: {restaurant.owner.legalFormStartDate}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Umsatzsteuer-Identifikationsnummer
            </h3>
            <p className="mt-2">UID-Nummer: {restaurant.owner.uid}</p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Firmenbuch
            </h3>
            <p className="mt-2 text-cream-200/70">
              Firmenbuchnummer: bitte prüfen
              <br />
              Firmenbuchgericht: bitte prüfen
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Aufsichtsbehörde / Kammer
            </h3>
            <p className="mt-2 text-cream-200/70">
              Aufsichtsbehörde gemäß ECG: zuständige Bezirkshauptmannschaft
              (bitte prüfen)
              <br />
              Kammer: Wirtschaftskammer Tirol, Fachgruppe Gastronomie
              <br />
              Berufsrechtliche Vorschriften: Gewerbeordnung (GewO), abrufbar
              unter ris.bka.gv.at
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Haftungsausschluss
            </h3>
            <p className="mt-2">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Online-Streitbeilegung
            </h3>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                className="underline decoration-gold/40 underline-offset-4 hover:text-cream-50"
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Urheberrecht</h3>
            <p className="mt-2">
              Alle Inhalte dieser Website (Texte, Bilder, Grafiken) unterliegen
              dem Urheberrecht. Eine Verwendung außerhalb dieser Website
              bedarf der schriftlichen Zustimmung von {restaurant.name}.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
