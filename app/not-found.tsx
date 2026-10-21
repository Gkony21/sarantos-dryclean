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
    <main className="bg-brand-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:py-32">
        <p className="text-sm font-bold tracking-wider text-brand-green uppercase">Σφάλμα 404</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Η σελίδα δεν βρέθηκε</h1>
        <p className="max-w-xl text-lg text-brand-ink/80">
          Ο σύνδεσμος που ακολουθήσατε μπορεί να είναι παλιός ή να έχει κάποιο λάθος. Δείτε
          την αρχική σελίδα ή καλέστε μας απευθείας.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center rounded-md border-2 border-brand-green bg-white px-6 py-4 text-lg font-bold text-brand-green"
          >
            Πίσω στην αρχική
          </Link>
          <CallButton size="lg" label={`Καλέστε: ${site.mobile.display}`} />
        </div>
      </div>
    </main>
  );
}
