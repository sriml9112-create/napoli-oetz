"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Car, Clock, MapPin, Navigation } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { restaurant } from "@/data/restaurant";

export default function Location() {
  return (
    <section className="section-pad">
      <div className="container-edge grid items-stretch gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Standort"
            title={`Mitten in ${restaurant.city}.`}
            subtitle="Sie finden uns zentral im Ortskern von Oetz im Ötztal. Für die Anfahrt öffnen Sie die Route direkt in Ihrer Karten-App."
          />

          <div className="mt-8 space-y-4 text-cream-100/90">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-cream-50">Adresse</div>
                <div className="text-sm text-cream-200/85">{restaurant.address.full}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-cream-50">Öffnungszeiten</div>
                <div className="text-sm text-cream-200/85">{restaurant.hours.summary}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                <Car className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-cream-50">Anreise</div>
                <div className="text-sm text-cream-200/85">
                  Route per Google Maps oder Apple Maps öffnen.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                restaurant.mapsQuery,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Navigation className="h-4 w-4" />
              Route öffnen
            </a>
            <a
              href={`https://maps.apple.com/?q=${encodeURIComponent(restaurant.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Apple Maps
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10 shadow-elev md:h-full md:min-h-[420px]"
        >
          <Image
            src="/images/napoli-hero.png"
            alt="Außenansicht von Pizzeria Napoli Oetz"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="rounded-xl border border-white/10 bg-bg-card/85 p-4 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Pizzeria Napoli
              </div>
              <p className="mt-1 text-sm font-medium text-cream-50">
                {restaurant.address.full}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
