import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MapPin, Navigation, Phone, ShoppingBag } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Kontakt – Pizzeria Napoli Oetz",
  description:
    "Kontaktieren Sie Pizzeria Napoli in Oetz. Telefon, Adresse, Öffnungszeiten und Anfahrt. Wir freuen uns auf Ihren Besuch.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <article className="pb-10 pt-28 sm:pt-36">
      <div className="container-edge">
        <header className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            Kontakt
          </span>
          <h1 className="heading-display mt-4 text-cream-50">
            Wir freuen uns auf Sie.
          </h1>
          <p className="body-lead mt-4">
            Bestellen oder fragen Sie am einfachsten telefonisch — oder
            kommen Sie direkt vorbei. Wir sind täglich für Sie da.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <section className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${restaurant.phone.tel}`}
                className="card card-hover flex items-center gap-4 p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
                    Telefon
                  </div>
                  <div className="mt-0.5 text-base font-medium text-cream-50">
                    {restaurant.phone.display}
                  </div>
                </div>
              </a>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
                    Öffnungszeiten
                  </div>
                  <div className="mt-0.5 text-base font-medium text-cream-50">
                    {restaurant.hours.summary}
                  </div>
                </div>
              </div>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
                    Adresse
                  </div>
                  <div className="mt-0.5 text-base font-medium text-cream-50">
                    {restaurant.address.full}
                  </div>
                </div>
              </div>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
                    Take-away
                  </div>
                  <div className="mt-0.5 text-base font-medium text-cream-50">
                    Alle Speisen auch zum Mitnehmen
                  </div>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {restaurant.hours.schedule.map((d) => (
                    <tr key={d.day} className="border-t border-white/5 first:border-t-0">
                      <td className="px-5 py-3 text-cream-100/80">{d.day}</td>
                      <td className="px-5 py-3 text-right text-cream-50">
                        {d.open} – {d.close}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                restaurant.mapsQuery,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <Navigation className="h-4 w-4" />
              Route in Google Maps öffnen
            </a>

            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 shadow-elev sm:min-h-96">
              <Image
                src="/images/napoli-hero.png"
                alt="Außenansicht von Pizzeria Napoli Oetz an der Hauptstraße"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="max-w-md rounded-xl border border-white/10 bg-bg-card/85 p-4 backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Adresse
                  </div>
                  <p className="mt-1 text-sm font-medium text-cream-50">
                    {restaurant.address.full}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-bg-card via-bg-card to-bg-soft p-6 sm:p-8">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold/70" />
                Am schnellsten
              </span>
              <h2 className="mt-3 font-display text-2xl text-cream-50 sm:text-3xl">
                Telefonisch bestellen oder nachfragen
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Rufen Sie uns an — wir nehmen Ihre Bestellung gerne entgegen,
                beantworten Fragen zur Karte und helfen direkt weiter.
              </p>

              <a
                href={`tel:${restaurant.phone.tel}`}
                className="btn-primary mt-6 w-full justify-center text-base"
              >
                <Phone className="h-4 w-4" />
                {restaurant.phone.display}
              </a>

              <div className="mt-8 grid gap-3 text-sm text-cream-100/85">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    Erreichbar während unserer Öffnungszeiten —{" "}
                    {restaurant.hours.summary.toLowerCase()}.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBag className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    Sie können auch vorbestellen und Ihre Speisen einfach
                    abholen.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>Oder kommen Sie direkt zu uns nach {restaurant.city}.</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
