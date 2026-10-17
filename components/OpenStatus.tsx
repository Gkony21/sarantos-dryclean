"use client";

import { openStatus } from "@/lib/hours";
import { useSpartaNow } from "@/lib/useSpartaNow";

/** "Ανοιχτά τώρα · κλείνει στις 14:00", with a green or grey dot. */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const now = useSpartaNow();
  if (!now) return null;

  const status = openStatus(now.weekday, now.time);
  return (
    <p className={`flex items-center gap-2 font-bold ${className}`}>
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${status.open ? "bg-brand-green motion-safe:animate-pulse" : "bg-gray-400"}`}
        aria-hidden="true"
      />
      {status.text}
    </p>
  );
}
