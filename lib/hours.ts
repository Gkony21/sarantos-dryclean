import { site } from "@/lib/site";

// With the article, as used in "ανοίγει τη Δευτέρα".
const ON_DAY = ["την Κυριακή", "τη Δευτέρα", "την Τρίτη", "την Τετάρτη", "την Πέμπτη", "την Παρασκευή", "το Σάββατο"];
const SCHEMA_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DAY_NAMES = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];
const DAY_SHORT = ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"];

/** Monday to Sunday, each day with its opening periods (none when closed). */
export function weekSchedule() {
  return [1, 2, 3, 4, 5, 6, 0].map((weekday) => ({
    weekday,
    name: DAY_NAMES[weekday],
    periods: periodsOn(weekday),
  }));
}

export type DayKind = "morning" | "afternoon" | "both" | "closed";

export const DAY_KIND_LABELS: Record<DayKind, string> = {
  morning: "πρωί",
  afternoon: "απόγευμα",
  both: "πρωί & απόγευμα",
  closed: "κλειστά",
};

/** Monday to Sunday at a glance: short name and whether the shop opens morning, afternoon or both. */
export function weekOverview() {
  return weekSchedule().map(({ weekday, name, periods }) => {
    const kind: DayKind =
      periods.length === 0 ? "closed" : periods.length > 1 ? "both" : periods[0][0] < "12:00" ? "morning" : "afternoon";
    return { weekday, name, short: DAY_SHORT[weekday], kind };
  });
}

/** Opening hours in schema.org form, for Google. */
export function openingHoursSpecification() {
  return site.hours.flatMap((row) =>
    row.periods.map(([opens, closes]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.weekdays.map((day) => SCHEMA_DAYS[day]),
      opens,
      closes,
    })),
  );
}

/** Day of week and "HH:MM" in Sparta, whatever the visitor's device is set to. */
export function spartaNow(date = new Date()): { weekday: number; time: string } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Athens",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { weekday, time: `${get("hour")}:${get("minute")}` };
}

function periodsOn(weekday: number) {
  return site.hours.find((row) => (row.weekdays as readonly number[]).includes(weekday))?.periods ?? [];
}

export type OpenStatus = { open: boolean; label: string; detail: string };

/**
 * Whether the shop is open right now, in two parts so it can be shown on one line
 * ("Ανοιχτά τώρα · κλείνει στις 14:00") or as a title with a line under it.
 */
export function openStatus(weekday: number, time: string): OpenStatus {
  const today = periodsOn(weekday);

  const current = today.find(([opens, closes]) => opens <= time && time < closes);
  if (current) {
    const reopens = today.find(([opens]) => opens > current[1]);
    const detail = `κλείνει στις ${current[1]}` + (reopens ? ` · ανοίγει ξανά ${reopens[0]}` : "");
    return { open: true, label: "Ανοιχτά τώρα", detail };
  }

  const laterToday = today.find(([opens]) => time < opens);
  if (laterToday) return { open: false, label: "Κλειστά", detail: `ανοίγει στις ${laterToday[0]}` };

  for (let ahead = 1; ahead <= 7; ahead++) {
    const day = (weekday + ahead) % 7;
    const [first] = periodsOn(day);
    if (first) {
      const when = ahead === 1 ? "αύριο" : ON_DAY[day];
      return { open: false, label: "Κλειστά", detail: `ανοίγει ${when} στις ${first[0]}` };
    }
  }
  return { open: false, label: "Κλειστά", detail: "" };
}
