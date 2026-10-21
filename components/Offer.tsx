import { Gift } from "lucide-react";
import { site } from "@/lib/site";

/** A highlighted offer under the hero; switched on and off in lib/site.ts. */
export default function Offer() {
  if (!site.offer.active) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 pt-4">
      <div className="flex flex-col items-start gap-4 rounded-[28px] bg-brand-leaf p-7 sm:flex-row sm:items-center sm:p-9">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
          <Gift className="h-7 w-7 text-brand-green" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold tracking-[0.08em] text-brand-fern uppercase">Προσφορά</p>
          <h2 className="text-2xl font-extrabold sm:text-3xl">{site.offer.title}</h2>
          <p className="mt-1 text-lg text-brand-fern">{site.offer.text}</p>
        </div>
      </div>
    </section>
  );
}
