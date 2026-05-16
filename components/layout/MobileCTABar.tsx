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
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl bg-tomato py-2 text-white active:bg-tomato-deep"
          aria-label="Restaurant anrufen"
        >
          <Phone className="h-[18px] w-[18px]" />
          <span className="text-[11px] font-semibold tracking-wide">Anrufen</span>
        </a>
        <Link
          href="/speisekarte"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl bg-white/[0.06] py-2 text-cream-50 active:bg-white/[0.12]"
          aria-label="Speisekarte ansehen"
        >
          <UtensilsCrossed className="h-[18px] w-[18px]" />
          <span className="text-[11px] font-semibold tracking-wide">Karte</span>
        </Link>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapsQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl bg-white/[0.06] py-2 text-cream-50 active:bg-white/[0.12]"
          aria-label="Route öffnen"
        >
          <MapPin className="h-[18px] w-[18px]" />
          <span className="text-[11px] font-semibold tracking-wide">Route</span>
        </a>
      </div>
    </div>
  );
}
