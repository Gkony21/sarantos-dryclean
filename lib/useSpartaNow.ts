"use client";

import { useSyncExternalStore } from "react";
import { spartaNow } from "@/lib/hours";

// Re-checks the clock every 30 seconds, so the "open now" badge changes on time.
function subscribe(onChange: () => void) {
  const timer = setInterval(onChange, 30_000);
  return () => clearInterval(timer);
}

function snapshot() {
  const { weekday, time } = spartaNow();
  return `${weekday} ${time}`;
}

/**
 * Current weekday and time in Sparta, or null while the page is being built:
 * the site is static, so anything time-dependent appears only in the browser.
 */
export function useSpartaNow(): { weekday: number; time: string } | null {
  const now = useSyncExternalStore(subscribe, snapshot, () => null);
  if (now === null) return null;
  const [weekday, time] = now.split(" ");
  return { weekday: Number(weekday), time };
}
