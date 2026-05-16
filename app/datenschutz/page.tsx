import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <article className="pb-10 pt-24 sm:pt-32">
      <div className="container-edge max-w-3xl">
        <header>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            Rechtliches
          </span>
          <h1 className="heading-display mt-4 text-cream-50">
            Datenschutzerklärung
          </h1>
        </header>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm text-cream-100/90">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <p>
            <strong className="text-cream-50">Hinweis:</strong> Dies ist eine
            allgemein gehaltene Mustererklärung und ersetzt keine
            individuelle Rechtsberatung. Bei Einbindung weiterer Drittdienste
            (z. B. Analytics, Reservierungs-Tools) sollte dieser Text vom
            Betreiber entsprechend ergänzt werden.
          </p>
        </div>

        <section className="mt-10 space-y-6 text-cream-100/90">
          <div>
            <h2 className="font-display text-2xl text-cream-50">
              Verantwortlicher
            </h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              Pizzeria Napoli — Inhaber: {restaurant.owner.name}
              <br />
              {restaurant.address.full}
              <br />
              Telefon: {restaurant.phone.display}
              <br />
              Keine offizielle E-Mail bekannt; Kontakt bitte telefonisch.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Allgemeines zur Datenverarbeitung
            </h3>
            <p className="mt-2">
              Wir behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Datenschutzvorschriften
              (insbesondere DSGVO und österreichisches DSG).
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Server-Logfiles
            </h3>
            <p className="mt-2">
              Beim Aufruf dieser Website werden vom Hosting-Provider technische
              Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene
              Seite) verarbeitet, um den sicheren Betrieb der Website zu
              gewährleisten. Diese Daten werden nicht mit anderen
              Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Kontaktaufnahme</h3>
            <p className="mt-2">
              Wenn Sie uns telefonisch kontaktieren, werden Ihre Angaben zur
              Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Maßnahmen)
              bzw. lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Cookies & Tracking
            </h3>
            <p className="mt-2">
              Diese Website setzt technisch notwendige Cookies ein. Sofern
              optionale Cookies oder Drittdienste (z. B. Google Maps,
              Analytics) eingebunden werden, holen wir hierfür Ihre
              Einwilligung ein.
            </p>
            <p className="mt-2 text-cream-200/70">
              Aktuell wird keine eingebettete Kartenansicht geladen. Die
              Route-Buttons führen erst nach aktivem Anklicken zu externen
              Kartenanbietern.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Ihre Rechte</h3>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch. Sie können sich zudem bei der österreichischen
              Datenschutzbehörde beschweren.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Kontakt</h3>
            <p className="mt-2">
              Bei Fragen zum Datenschutz wenden Sie sich bitte telefonisch an{" "}
              <a
                className="underline decoration-gold/40 underline-offset-4 hover:text-cream-50"
                href={`tel:${restaurant.phone.tel}`}
              >
                {restaurant.phone.display}
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
