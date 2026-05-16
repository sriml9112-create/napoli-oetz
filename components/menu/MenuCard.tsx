import { Flame, Leaf, Sprout, Star } from "lucide-react";
import { priceLabel, type MenuItem } from "@/data/menu";

const badgeStyles: Record<string, string> = {
  vegetarisch: "bg-olive/15 text-olive-light ring-1 ring-olive/30",
  vegan: "bg-olive/20 text-olive-light ring-1 ring-olive/40",
  scharf: "bg-tomato/15 text-tomato-bright ring-1 ring-tomato/30",
  beliebt: "bg-gold/15 text-gold ring-1 ring-gold/30",
  neu: "bg-cream-100/15 text-cream-50 ring-1 ring-white/20",
};

const badgeIcons: Record<string, React.ReactNode> = {
  vegetarisch: <Leaf className="h-3 w-3" />,
  vegan: <Sprout className="h-3 w-3" />,
  scharf: <Flame className="h-3 w-3" />,
  beliebt: <Star className="h-3 w-3" />,
};

export default function MenuCard({ item }: { item: MenuItem }) {
  const onRequest = item.priceOnRequest || item.price == null;

  return (
    <article className="group rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-colors hover:bg-white/[0.04] sm:px-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 font-display text-lg leading-snug text-cream-50 sm:text-xl">
          {item.name}
        </h3>
        <span
          className={`inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold ${
            onRequest
              ? "border border-white/15 bg-white/[0.04] text-cream-200/75"
              : "border border-gold/25 bg-gold/10 text-gold"
          }`}
        >
          {priceLabel(item)}
        </span>
      </div>
      {item.badges && item.badges.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {item.badges.map((b) => (
            <span
              key={b}
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeStyles[b] ?? ""}`}
            >
              {badgeIcons[b]}
              {b}
            </span>
          ))}
        </div>
      )}
      <div className="min-w-0">
        {item.description && (
          <p className="mt-1 text-sm leading-relaxed text-cream-200/70">
            {item.description}
          </p>
        )}
        {item.allergens && item.allergens.length > 0 && (
          <p className="mt-1.5 text-[11px] uppercase tracking-wider text-cream-200/45">
            Allergene: {item.allergens.join(", ")}
          </p>
        )}
      </div>
    </article>
  );
}
