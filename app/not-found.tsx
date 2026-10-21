import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  title: `Η σελίδα δεν βρέθηκε | ${site.name}`,
};

// Shown for any address that does not exist (built as 404.html, which Cloudflare Pages serves).
export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-4">
      <div className="flex flex-col items-start gap-6 rounded-[28px] bg-white p-8 sm:p-14">
        <p className="text-sm font-bold tracking-[0.08em] text-brand-pine uppercase">Σφάλμα 404</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">Η σελίδα δεν βρέθηκε</h1>
        <p className="max-w-xl text-lg text-brand-moss">
          Ο σύνδεσμος που ακολουθήσατε μπορεί να είναι παλιός ή να έχει κάποιο λάθος. Δείτε
          την αρχική σελίδα ή καλέστε μας απευθείας.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center rounded-full bg-brand-mist px-6 py-4 text-lg font-bold transition-colors hover:bg-brand-mint"
          >
            Πίσω στην αρχική
          </Link>
          <CallButton size="lg" label={`Καλέστε: ${site.mobile.display}`} />
        </div>
      </div>
    </main>
  );
}
