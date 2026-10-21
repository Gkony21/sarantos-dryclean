"use client";

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
    <div className="h-full rounded-[28px] bg-white p-5 sm:p-7">
      <h3 className="text-[22px] font-extrabold">Ωράριο</h3>
      <OpenStatus className="mt-1.5 font-medium text-brand-moss" />

      <table className="mt-4 w-full border-collapse text-[13px] tabular-nums min-[360px]:text-[15px]">
        <thead>
          <tr className="text-left text-sm text-brand-moss">
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
                className={`border-t border-brand-mist ${isToday ? "bg-brand-mint" : ""}`}
                aria-current={isToday ? "date" : undefined}
              >
                <th scope="row" className="rounded-l-lg py-2.5 pr-1.5 pl-1.5 text-left font-bold min-[360px]:pr-2 min-[360px]:pl-2">
                  {name}
                </th>
                {morning ? (
                  <>
                    <td className="py-2.5 pr-1.5 whitespace-nowrap min-[360px]:pr-2">{`${morning[0]}–${morning[1]}`}</td>
                    <td className="rounded-r-lg py-2.5 pr-1.5 whitespace-nowrap min-[360px]:pr-2">
                      {afternoon ? `${afternoon[0]}–${afternoon[1]}` : <span className="text-brand-moss">—</span>}
                    </td>
                  </>
                ) : (
                  <td colSpan={2} className="rounded-r-lg py-2.5 pr-2 text-brand-moss">
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
