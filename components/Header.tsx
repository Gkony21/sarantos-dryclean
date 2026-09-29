import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="leading-tight">
          <span className="block text-xl font-extrabold text-brand-lime">
            ΣΑΡΑΝΤΟΣ
          </span>
          <span className="block text-sm font-bold text-brand-blue">
            Dry Clean
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={site.viber}
            aria-label="Στείλτε μήνυμα στο Viber"
            className="flex items-center gap-2 rounded-md border-2 border-brand-green px-3 py-2 font-bold text-brand-green"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline">Viber</span>
          </a>
          <a
            href={`tel:${site.mobile.tel}`}
            className="flex items-center gap-2 rounded-md bg-brand-green px-3 py-2 font-bold text-white"
          >
            <Phone className="h-5 w-5" />
            <span>{site.mobile.display}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
