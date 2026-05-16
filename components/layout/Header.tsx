"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const nav = [
  { href: "/", label: "Start" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={restaurant.name}>
          <span className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10 sm:h-11 sm:w-11">
            <Image
              src="/images/logo.jpg"
              alt={`${restaurant.name} Logo`}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-cream-50 sm:text-2xl">
              Napoli
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold/90 sm:text-xs">
              Oetz · Tirol
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-cream-100/80 transition-colors hover:text-cream-50"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${restaurant.phone.tel}`}
            className="btn-primary !px-5 !py-2.5 !text-sm"
            aria-label="Jetzt anrufen"
          >
            <Phone className="h-4 w-4" />
            Anrufen
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cream-50 backdrop-blur md:hidden"
          aria-label="Menü öffnen"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-bg-soft p-6 shadow-elev transition-transform duration-300 ease-smooth ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-cream-50">Menü</span>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream-50"
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg text-cream-100/90 transition-colors hover:bg-white/5 hover:text-cream-50"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a href={`tel:${restaurant.phone.tel}`} className="btn-primary justify-center">
              <Phone className="h-4 w-4" />
              {restaurant.phone.display}
            </a>
            <p className="text-center text-xs text-cream-200/60">
              {restaurant.hours.summary}
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
