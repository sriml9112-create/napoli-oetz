"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const items = [
  {
    icon: MapPin,
    label: "Standort",
    value: `${restaurant.city}, ${restaurant.region}`,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapsQuery)}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: restaurant.phone.display,
    href: `tel:${restaurant.phone.tel}`,
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: restaurant.hours.summary,
  },
  {
    icon: ShoppingBag,
    label: "Take-away",
    value: "Auch zum Mitnehmen",
  },
];

export default function QuickInfo() {
  return (
    <section className="relative -mt-12 sm:-mt-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="card grid grid-cols-2 gap-px overflow-hidden border-white/10 bg-bg-card shadow-elev md:grid-cols-4"
        >
          {items.map((it, idx) => {
            const Icon = it.icon;
            const inner = (
              <div className="flex items-center gap-4 p-5 sm:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-tomato/15 text-tomato-bright ring-1 ring-tomato/25">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
                    {it.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-medium text-cream-50 sm:text-base">
                    {it.value}
                  </div>
                </div>
              </div>
            );
            return it.href ? (
              <a
                key={idx}
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noopener noreferrer" : undefined}
                className="group bg-bg-card transition-colors hover:bg-white/[0.03]"
              >
                {inner}
              </a>
            ) : (
              <div key={idx} className="bg-bg-card">
                {inner}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
