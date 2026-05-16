"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-28 pt-24 sm:items-center sm:pb-28 sm:pt-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/napoli-hero.png"
          alt="Außenansicht von Pizzeria Napoli Oetz"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_50%] sm:object-center"
        />
        {/* Cinematic overlays — stronger on mobile for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg sm:from-bg/75 sm:via-bg/50" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_25%_25%,rgba(178,31,31,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="container-wide relative w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          <span className="h-px w-6 bg-gold/70" />
          Pizzeria · Oetz · Tirol
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="heading-display mt-4 max-w-3xl text-balance text-cream-50"
        >
          Napoli Oetz.{" "}
          <span className="text-gold">Pizza & Imbiss</span> an der Hauptstraße.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="body-lead mt-4 max-w-xl text-cream-100/85 sm:mt-5"
        >
          Pizza, Döner, Flammkuchen, Burger und Salate — täglich frisch
          zubereitet im {restaurant.name}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
          className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3"
        >
          <Link href="/speisekarte" className="btn-primary">
            <UtensilsCrossed className="h-4 w-4" />
            Speisekarte ansehen
          </Link>
          <a href={`tel:${restaurant.phone.tel}`} className="btn-secondary">
            <Phone className="h-4 w-4" />
            Jetzt anrufen
          </a>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-cream-100/85 backdrop-blur sm:mt-10 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive-light opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-olive-light" />
          </span>
          <span className="font-medium tracking-wide">
            Heute geöffnet · {restaurant.hours.summary}
          </span>
        </motion.div>
      </div>

      {/* Bottom fade for clean transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
