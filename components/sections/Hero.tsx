"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import OpeningStatus from "@/components/ui/OpeningStatus";

const foodImages = [
  {
    src: "/images/hallo.jpg",
    alt: "Pizza halb-halb bei Pizzeria Napoli Oetz",
    label: "Pizza",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: "/images/kebabteller.jpg",
    alt: "Döner-Teller mit Pommes und Salat",
    label: "Döner-Teller",
    className: "aspect-square",
  },
  {
    src: "/images/pide.jpg",
    alt: "Pide auf Holzbrett",
    label: "Pide",
    className: "aspect-square",
  },
];

export default function Hero() {
  const routeUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.mapsQuery,
  )}`;

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-28 pt-24 sm:items-center sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/napoli-hero.png"
          alt="Außenansicht von Pizzeria Napoli Oetz an der Hauptstraße in Oetz"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_50%] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/68 to-bg sm:from-bg/80 sm:via-bg/58" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_30%,rgba(178,31,31,0.16)_0%,transparent_62%)]" />
      </div>

      <div className="container-wide relative grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            <span className="h-px w-6 bg-gold/70" />
            Pizzeria Napoli Oetz
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="heading-display mt-4 max-w-3xl text-balance text-cream-50"
          >
            Pizza, Döner &{" "}
            <span className="text-gold">Take-away</span> mitten in Oetz.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="body-lead mt-4 max-w-2xl text-cream-100/88 sm:mt-5"
          >
            Pizzeria Napoli Oetz serviert Pizza, Döner, Flammkuchen, Burger,
            Salate, Snacks und Getränke an der Hauptstraße 29. Schnell
            telefonisch bestellen oder direkt vorbeikommen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="mt-5 flex flex-wrap gap-2.5 text-xs font-semibold text-cream-100/85 sm:text-sm"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur">
              <MapPin className="h-4 w-4 text-gold" />
              Hauptstraße 29, Oetz
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur">
              <ShoppingBag className="h-4 w-4 text-gold" />
              Alle Speisen auch zum Mitnehmen
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
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
              href={routeUrl}
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
            className="mt-7"
          >
            <OpeningStatus />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="hidden lg:block"
          aria-label="Beliebte Speisen bei Pizzeria Napoli Oetz"
        >
          <div className="grid grid-cols-2 gap-3">
            {foodImages.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-card/70 shadow-elev ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 205px, 0px"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-bg/70 px-3 py-1 text-xs font-semibold text-cream-50 backdrop-blur">
                  {image.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
