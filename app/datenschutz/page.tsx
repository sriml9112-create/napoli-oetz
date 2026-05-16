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
    <article className="pb-10 pt-28 sm:pt-36">
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
            <strong className="text-cream-50">Platzhalter:</strong> Diese
            Datenschutzerklärung ist ein allgemein gehaltener Mustertext und
            ersetzt keine individuelle Rechtsberatung. Bitte vor Live-Gang von
            der Inhaberin / dem Inhaber prüfen und ggf. ergänzen (eingesetzte
            Dienste, Tracking, Cookie-Consent, Reservierungs-Tools etc.).
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
              {restaurant.name}
              <br />
              {restaurant.address.full}
              <br />
              Telefon: {restaurant.phone.display}
              <br />
              E-Mail: auf Anfrage
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
              gewährleisten. Diese Daten werden nicht mit anderen Datenquellen
              zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">Kontaktaufnahme</h3>
            <p className="mt-2">
              Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch
              kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage
              verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche/vertragliche Maßnahmen) bzw. lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Cookies & Tracking
            </h3>
            <p className="mt-2">
              Diese Website setzt technisch notwendige Cookies ein. Sofern
              optionale Cookies oder Drittdienste (z. B. Google Maps, Analytics)
              eingebunden werden, holen wir hierfür Ihre Einwilligung ein.
            </p>
            <p className="mt-2 text-cream-200/70">
              [Platzhalter — falls Google Maps oder andere Drittanbieter
              eingebunden werden, hier ergänzen.]
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-cream-50">
              Ihre Rechte
            </h3>
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
