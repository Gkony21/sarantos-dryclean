"use client";

import { DAY_KIND_LABELS, openStatus, weekOverview, type DayKind } from "@/lib/hours";
import { useSpartaNow } from "@/lib/useSpartaNow";

const KIND_STYLE: Record<DayKind, string> = {
  morning: "bg-brand-sprout",
  afternoon: "bg-brand-leaf",
  both: "bg-brand-green",
  closed: "bg-brand-mist shadow-[inset_0_0_0_1.5px_#c2ccbf]",
};

const week = weekOverview();
const kinds = (Object.keys(KIND_STYLE) as DayKind[]).filter((kind) => week.some((day) => day.kind === kind));
const weekLabel =
  "Ωράριο εβδομάδας: " + week.map((day) => `${day.name} ${DAY_KIND_LABELS[day.kind]}`).join(", ");

const capitalize = (text: string) => text.charAt(0).toLocaleUpperCase("el") + text.slice(1);

/** The hero strip: open or closed right now, and the week at a glance with today outlined. */
export default function OpenNow() {
  const now = useSpartaNow();
  const status = now && openStatus(now.weekday, now.time);

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4 rounded-[28px] bg-white px-6 py-5">
      {/* Invisible stand-ins keep the height until the browser knows the time. */}
      <div>
        <p className="flex items-center gap-2.5 text-xl font-extrabold">
          <span
            className={`h-3 w-3 shrink-0 rounded-full ${status ? (status.open ? "dot-pulse bg-brand-green" : "bg-gray-400") : ""}`}
            aria-hidden="true"
          />
          {status ? status.label : <span className="invisible">Ανοιχτά τώρα</span>}
        </p>
        <p className="mt-0.5 text-[15px] text-brand-moss">
          {status?.detail ? capitalize(status.detail) : <span className="invisible">Κλείνει στις 14:00</span>}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div role="img" aria-label={weekLabel} className="grid grid-cols-[repeat(7,30px)] gap-1.5 text-center text-[11px] font-bold">
          {week.map((day) => (
            <div key={day.weekday} className="flex flex-col items-center gap-1">
              <span
                className={`h-[30px] w-full rounded-lg ${KIND_STYLE[day.kind]} ${now?.weekday === day.weekday ? "outline-2 outline-offset-2 outline-brand-ink" : ""}`}
              />
              <span className="text-brand-moss">{day.short}</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-brand-moss">
          {kinds.map((kind) => (
            <span key={kind} className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-[3px] ${KIND_STYLE[kind]}`} />
              {DAY_KIND_LABELS[kind]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
