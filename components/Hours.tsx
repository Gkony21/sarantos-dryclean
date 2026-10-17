"use client";

import { Clock } from "lucide-react";
import { site } from "@/lib/site";
import { useSpartaNow } from "@/lib/useSpartaNow";
import OpenStatus from "@/components/OpenStatus";

/** The opening hours card, with today's row highlighted. */
export default function Hours() {
  const now = useSpartaNow();

  return (
    <div className="rounded-xl bg-white p-6">
      <h3 className="flex items-center gap-2 text-xl font-bold">
        <Clock className="h-5 w-5 text-brand-green" aria-hidden="true" />
        Ωράριο
      </h3>
      <OpenStatus className="mt-2 text-brand-ink/80" />
      <dl className="mt-4 flex flex-col gap-1">
        {site.hours.map((row) => {
          const isToday = now !== null && (row.weekdays as readonly number[]).includes(now.weekday);
          return (
            <div
              key={row.days}
              className={`flex flex-col rounded-lg px-3 py-3 sm:flex-row sm:justify-between ${isToday ? "bg-brand-green/10" : ""}`}
            >
              <dt className="font-bold">
                {row.days}
                {isToday && <span className="ml-2 text-sm font-bold text-brand-green">Σήμερα</span>}
              </dt>
              {/* Morning and afternoon on separate lines, so a split day never wraps mid-time. */}
              <dd className="flex flex-col sm:items-end">
                {row.periods.length === 0
                  ? "Κλειστά"
                  : row.periods.map(([opens, closes]) => <span key={opens}>{`${opens}–${closes}`}</span>)}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
