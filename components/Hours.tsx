"use client";

import { Clock } from "lucide-react";
import { weekSchedule } from "@/lib/hours";
import { useSpartaNow } from "@/lib/useSpartaNow";
import OpenStatus from "@/components/OpenStatus";

/**
 * The opening hours card: one row per day with morning and afternoon columns, so every row
 * has the same height and the times line up. Today's row is highlighted.
 */
export default function Hours() {
  const now = useSpartaNow();

  return (
    <div className="rounded-xl bg-white p-4 min-[360px]:p-5 sm:p-6">
      <h3 className="flex items-center gap-2 text-xl font-bold">
        <Clock className="h-5 w-5 text-brand-green" aria-hidden="true" />
        Ωράριο
      </h3>
      <OpenStatus className="mt-2 text-brand-ink/80" />

      <table className="mt-4 w-full border-collapse text-[13px] tabular-nums min-[360px]:text-[15px] sm:text-base">
        <thead>
          <tr className="text-left text-sm text-brand-ink/70">
            <th className="pb-2 font-normal">
              <span className="sr-only">Ημέρα</span>
            </th>
            <th className="pb-2 font-normal">Πρωί</th>
            <th className="pb-2 font-normal">Απόγευμα</th>
          </tr>
        </thead>
        <tbody>
          {weekSchedule().map(({ weekday, name, periods }) => {
            const isToday = now?.weekday === weekday;
            const [morning, afternoon] = periods;
            return (
              <tr
                key={weekday}
                className={`border-t border-gray-100 ${isToday ? "bg-brand-green/10 font-bold" : ""}`}
                aria-current={isToday ? "date" : undefined}
              >
                <th scope="row" className="rounded-l-lg py-2 pr-1.5 pl-1.5 text-left min-[360px]:pr-2 min-[360px]:pl-2 font-bold">
                  {name}
                </th>
                {morning ? (
                  <>
                    <td className="py-2 pr-1.5 whitespace-nowrap min-[360px]:pr-2">{`${morning[0]}–${morning[1]}`}</td>
                    <td className="rounded-r-lg py-2 pr-1.5 whitespace-nowrap min-[360px]:pr-2">
                      {afternoon ? `${afternoon[0]}–${afternoon[1]}` : <span className="text-brand-ink/70">—</span>}
                    </td>
                  </>
                ) : (
                  <td colSpan={2} className="rounded-r-lg py-2 pr-2 text-brand-ink/70">
                    Κλειστά
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
