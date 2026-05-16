"use client";

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
            subtitle="Sie finden uns zentral im Ortskern von Oetz im Ötztal. Parkmöglichkeiten in der Nähe."
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
                  Parkmöglichkeiten in unmittelbarer Nähe.
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
              Route in Google Maps
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
          className="relative h-80 overflow-hidden rounded-3xl border border-white/10 shadow-elev md:h-full md:min-h-[420px]"
        >
          <iframe
            title={`Karte zu ${restaurant.name}`}
            src={`https://www.google.com/maps?q=${restaurant.mapsEmbedQuery}&output=embed`}
            loading="lazy"
            className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
