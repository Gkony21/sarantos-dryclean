"use client";

import { openStatus } from "@/lib/hours";
import { useSpartaNow } from "@/lib/useSpartaNow";

/** "Ανοιχτά τώρα · κλείνει στις 14:00", with a green (pulsing) or grey dot. */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const now = useSpartaNow();
  const status = now && openStatus(now.weekday, now.time);

  // Until the browser knows the time, an invisible stand-in keeps the line's height,
  // so nothing below it jumps when the status appears.
  return (
    <p className={`flex items-center gap-2 font-bold ${className}`}>
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${status ? (status.open ? "dot-pulse bg-brand-green" : "bg-gray-400") : ""}`}
        aria-hidden="true"
      />
      {status ? (
        [status.label, status.detail].filter(Boolean).join(" · ")
      ) : (
        <span className="invisible">Ανοιχτά τώρα</span>
      )}
    </p>
  );
}
