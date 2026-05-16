"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 sm:items-center sm:pb-28 sm:pt-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/napoli-hero.png"
          alt="Napoli Oetz – italienisches Restaurant"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/55 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_30%,rgba(178,31,31,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="container-wide relative w-full">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          <span className="h-px w-6 bg-gold/70" />
          Pizzeria · Oetz · Tirol
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="heading-display mt-4 max-w-3xl text-cream-50"
        >
          Echt italienisch.{" "}
          <span className="text-gold">Aus dem Herzen</span> von Oetz.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="body-lead mt-5 max-w-xl text-cream-100/85"
        >
          Knusprige Pizza aus dem Steinofen, frische Pasta und italienische
          Klassiker — täglich für Sie zubereitet im {restaurant.name}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
          className="mt-8 flex flex-wrap items-center gap-3"
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
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-cream-100/80 backdrop-blur sm:text-sm"
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

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
