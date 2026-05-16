import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <article className="flex min-h-[80svh] items-center pt-28">
      <div className="container-edge max-w-2xl text-center">
        <span className="eyebrow justify-center">
          <span className="h-px w-6 bg-gold/70" />
          Fehler 404
        </span>
        <h1 className="heading-display mt-4 text-cream-50">
          Diese Seite gibt es nicht (mehr).
        </h1>
        <p className="body-lead mt-4">
          Vielleicht wurde sie verschoben — oder Sie haben sich vertippt.
          Kein Problem: Zur Startseite kommen Sie hier.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <a href={`tel:${restaurant.phone.tel}`} className="btn-secondary">
            <Phone className="h-4 w-4" />
            {restaurant.phone.display}
          </a>
        </div>
      </div>
    </article>
  );
}
