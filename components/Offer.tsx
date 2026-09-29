import { Gift } from "lucide-react";
import { site } from "@/lib/site";

export default function Offer() {
  if (!site.offer.active) return null;

  return (
    <section className="bg-brand-lime">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center">
        <Gift
          className="h-12 w-12 shrink-0 text-brand-ink"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-bold tracking-wide text-brand-ink/80">
            ΠΡΟΣΦΟΡΑ
          </p>
          <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">
            {site.offer.title}
          </h2>
          <p className="mt-1 text-lg text-brand-ink">{site.offer.text}</p>
        </div>
      </div>
    </section>
  );
}
