"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Phone, Search, X } from "lucide-react";
import MenuCard from "./MenuCard";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

// Diakritik-insensitive Kleinschreibung fuer die Suche.
// Entfernt kombinierende Marks (U+0300-U+036F) ueber explizite Hex-Escapes.
const COMBINING_MARKS = new RegExp("[\\u0300-\\u036f]", "g");
function normalize(s: string): string {
  return s.toLowerCase().normalize("NFKD").replace(COMBINING_MARKS, "");
}

export default function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(menu[0]?.id ?? "");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  const q = normalize(query.trim());

  const filteredMenu = useMemo(() => {
    if (!q) return menu;
    return menu
      .map((cat) => {
        const categoryHaystack = normalize(`${cat.title} ${cat.subtitle ?? ""} ${cat.id}`);
        const categoryMatches = categoryHaystack.includes(q);
        const items = categoryMatches ? cat.items : cat.items.filter((it) => {
          const haystack = normalize(
            `${it.name} ${it.description ?? ""} ${cat.title} ${(it.allergens ?? []).join(" ")} ${(it.badges ?? []).join(" ")}`,
          );
          return haystack.includes(q);
        });
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [q]);

  const totalResults = useMemo(
    () => filteredMenu.reduce((sum, c) => sum + c.items.length, 0),
    [filteredMenu],
  );

  useEffect(() => {
    if (q) return;
    const observers: IntersectionObserver[] = [];
    filteredMenu.forEach((cat) => {
      const el = sectionsRef.current[cat.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveCat(cat.id);
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [filteredMenu, q]);

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 mt-6 border-b border-white/5 bg-bg/90 px-5 py-3 backdrop-blur-md sm:top-20 sm:mx-0 sm:rounded-2xl sm:border sm:border-white/10 sm:px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative block w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-200/50" />
            {!query && (
              <span className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-base text-cream-200/40 sm:text-sm">
                In Karte suchen...
              </span>
            )}
            <input
              type="search"
              inputMode="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-11 w-full rounded-full border border-white/10 bg-white/[0.04] py-2 pl-9 pr-9 text-base text-cream-50 focus:border-tomato/40 focus:outline-none focus:ring-2 focus:ring-tomato/20 sm:text-sm"
              aria-label="Speisekarte durchsuchen"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-cream-200/60 hover:text-cream-50"
                aria-label="Suche leeren"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>

          <ul
            className="-mx-1 flex flex-1 snap-x gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Menue-Kategorien"
          >
            {menu.map((cat) => (
              <li key={cat.id} className="shrink-0 snap-start">
                <a
                  href={`#cat-${cat.id}`}
                  onClick={() => setQuery("")}
                  className={`inline-flex min-h-10 items-center rounded-full border px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm ${
                    !q && activeCat === cat.id
                      ? "border-tomato/40 bg-tomato/20 text-cream-50"
                      : "border-white/10 bg-white/[0.03] text-cream-100/75 hover:text-cream-50"
                  }`}
                >
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {q && (
          <div className="mt-2 text-xs text-cream-200/60">
            {totalResults} Treffer für &ldquo;{query}&rdquo;
          </div>
        )}
      </div>

      <div className="mt-10 space-y-14 sm:space-y-16">
        {filteredMenu.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-bg-card/60 p-8 text-center">
            <p className="text-cream-100/85">
              Keine Treffer für <strong>&ldquo;{query}&rdquo;</strong>.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="btn-secondary mx-auto mt-4"
            >
              Suche zurücksetzen
            </button>
          </div>
        ) : (
          filteredMenu.map((cat) => (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              ref={(el) => {
                sectionsRef.current[cat.id] = el;
              }}
              className="scroll-mt-40"
              aria-labelledby={`heading-${cat.id}`}
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2
                    id={`heading-${cat.id}`}
                    className="font-display text-3xl text-cream-50 sm:text-4xl"
                  >
                    {cat.title}
                  </h2>
                  {cat.subtitle && (
                    <p className="mt-1.5 text-sm text-cream-200/70 sm:text-base">
                      {cat.subtitle}
                    </p>
                  )}
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/10 sm:block" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <span className="text-xs text-cream-200/70 sm:text-sm">
                  Telefonisch bestellen?
                </span>
                <a
                  href={`tel:${restaurant.phone.tel}`}
                  className="btn-primary !px-4 !py-2 !text-xs sm:!text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </a>
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
