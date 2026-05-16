"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-card via-bg-card to-bg-soft p-10 sm:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-gold/70" />
              Lust auf Italien?
            </span>
            <h2 className="heading-section mt-4 text-cream-50">
              Hunger? Wir freuen uns auf Sie.
            </h2>
            <p className="body-lead mt-4">
              Rufen Sie uns an, sehen Sie sich unsere Speisekarte an oder kommen
              Sie direkt vorbei — wir sind täglich von 11:00 bis 23:00 Uhr für
              Sie da.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${restaurant.phone.tel}`} className="btn-primary">
                <Phone className="h-4 w-4" />
                {restaurant.phone.display}
              </a>
              <Link href="/speisekarte" className="btn-secondary">
                <UtensilsCrossed className="h-4 w-4" />
                Speisekarte
              </Link>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  restaurant.mapsQuery,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MapPin className="h-4 w-4" />
                Route öffnen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
