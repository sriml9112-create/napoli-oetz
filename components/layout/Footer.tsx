import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/5 bg-bg-soft/80">
      <div className="container-wide grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl text-cream-50">{restaurant.name}</div>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-gold/90">
            Pizzeria · Tirol
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/70">
            {restaurant.shortDescription}
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Navigation
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="text-cream-100/80 hover:text-cream-50">Start</Link></li>
            <li><Link href="/speisekarte" className="text-cream-100/80 hover:text-cream-50">Speisekarte</Link></li>
            <li><Link href="/galerie" className="text-cream-100/80 hover:text-cream-50">Galerie</Link></li>
            <li><Link href="/kontakt" className="text-cream-100/80 hover:text-cream-50">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Kontakt
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2 text-cream-100/80">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tomato-bright" />
              <a href={`tel:${restaurant.phone.tel}`} className="hover:text-cream-50">
                {restaurant.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2 text-cream-100/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tomato-bright" />
              <span>{restaurant.address.full}</span>
            </li>
            <li className="flex items-start gap-2 text-cream-100/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-tomato-bright" />
              <span>{restaurant.hours.summary}</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Rechtliches
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/impressum" className="text-cream-100/80 hover:text-cream-50">Impressum</Link></li>
            <li><Link href="/datenschutz" className="text-cream-100/80 hover:text-cream-50">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="hairline" />
      <div className="container-wide flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-200/50 sm:flex-row">
        <span>© {new Date().getFullYear()} {restaurant.name}. Alle Rechte vorbehalten.</span>
        <span>Mit Liebe gebacken in {restaurant.city}, {restaurant.region}.</span>
      </div>
    </footer>
  );
}
