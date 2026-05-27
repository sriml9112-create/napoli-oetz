"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type Status = {
  label: string;
  detail: string;
  isOpen: boolean;
};

const OPEN_MINUTES = 11 * 60;
const CLOSE_MINUTES = 23 * 60;
const TIME_ZONE = "Europe/Vienna";

function getViennaMinutes(date: Date) {
  const parts = new Intl.DateTimeFormat("de-AT", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return hour * 60 + minute;
}

function getStatus(date: Date): Status {
  const minutes = getViennaMinutes(date);

  if (minutes >= OPEN_MINUTES && minutes < CLOSE_MINUTES) {
    return {
      label: "Jetzt geöffnet",
      detail: "Heute: 11:00–23:00",
      isOpen: true,
    };
  }

  if (minutes < OPEN_MINUTES) {
    return {
      label: "Öffnet heute um 11:00",
      detail: "Heute: 11:00–23:00",
      isOpen: false,
    };
  }

  return {
    label: "Öffnet morgen um 11:00",
    detail: "Heute: 11:00–23:00",
    isOpen: false,
  };
}

export default function OpeningStatus({
  className = "",
  compact = false,
  showIcon = true,
}: {
  className?: string;
  compact?: boolean;
  showIcon?: boolean;
}) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const current = status ?? {
    label: "Täglich geöffnet",
    detail: "Heute: 11:00–23:00",
    isOpen: true,
  };

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-left text-cream-100/90 shadow-soft backdrop-blur ${className}`}
    >
      {showIcon && (
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
            current.isOpen
              ? "bg-olive/20 text-olive-light ring-1 ring-olive/35"
              : "bg-gold/15 text-gold ring-1 ring-gold/30"
          }`}
        >
          <Clock className="h-4 w-4" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight text-cream-50">
          {current.label}
        </span>
        {!compact && (
          <span className="mt-0.5 block text-xs text-cream-200/70">
            {current.detail}
          </span>
        )}
      </span>
    </div>
  );
}
