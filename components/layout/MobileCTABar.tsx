"use client";

import Link from "next/link";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Schnellzugriff"
    >
      <div className="mx-3 mb-3 grid grid-cols-3 gap-1.5 rounded-2xl border border-white/10 bg-bg-soft/95 p-1.5 shadow-elev backdrop-blur-xl">
        <a
          href={`tel:${restaurant.phone.tel}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-tomato py-2.5 text-white"
          aria-label="Restaurant anrufen"
        >
          <Phone className="h-4 w-4" />
          <span className="text-[11px] font-semibold tracking-wide">Anrufen</span>
        </a>
        <Link
          href="/speisekarte"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-white/[0.06] py-2.5 text-cream-50"
          aria-label="Speisekarte ansehen"
        >
          <UtensilsCrossed className="h-4 w-4" />
          <span className="text-[11px] font-semibold tracking-wide">Speisekarte</span>
        </Link>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapsQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-white/[0.06] py-2.5 text-cream-50"
          aria-label="Route öffnen"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-[11px] font-semibold tracking-wide">Route</span>
        </a>
      </div>
    </div>
  );
}
