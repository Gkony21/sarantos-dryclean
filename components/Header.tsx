import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import HomeLink from "@/components/HomeLink";
import HideOnScroll from "@/components/HideOnScroll";

const links = [
  { href: "/#ypiresies", label: "Υπηρεσίες" },
  { href: "/#pos-doulevoume", label: "Πώς δουλεύουμε" },
  { href: "/#epikoinonia", label: "Επικοινωνία" },
];

/**
 * A frosted-glass bar floating at the top: it hides while scrolling down and returns on scroll up. On phones the links give way to two round
 * buttons (Viber, call), so the bar always stays one line.
 */
export default function Header() {
  return (
    <HideOnScroll className="sticky top-3 z-50 mx-auto mt-3 w-full max-w-6xl px-4">
      <div className="flex items-center justify-between gap-3 rounded-full bg-white/80 py-2 pr-2 pl-4 shadow-[0_6px_24px_rgb(22_38_27/0.10)] ring-1 ring-white/70 backdrop-blur-md backdrop-saturate-150">
        <HomeLink aria-label="Σαράντος Dry Clean, αρχική σελίδα" className="flex min-w-0 items-center gap-2.5 leading-tight">
          <Image src="/logo.svg" alt="" width={36} height={36} loading="eager" className="h-9 w-9 shrink-0" />
          <span>
            <span className="block text-[17px] font-extrabold text-brand-green sm:text-lg">ΣΑΡΑΝΤΟΣ</span>
            <span className="block text-xs font-bold text-brand-blue sm:text-[13px]">Dry Clean</span>
          </span>
        </HomeLink>

        <div className="flex shrink-0 items-center gap-1">
          <nav aria-label="Κύρια" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2.5 text-[15px] font-medium transition-colors hover:bg-brand-mist"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.viber}
            aria-label="Μήνυμα στο Viber"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-mist md:hidden"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`tel:${site.mobile.tel}`}
            aria-label={`Κλήση στο ${site.mobile.display}`}
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white md:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`tel:${site.mobile.tel}`}
            className="hidden items-center gap-2 rounded-full bg-brand-green px-4.5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-brand-forest md:flex"
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            {site.mobile.display}
          </a>
        </div>
      </div>
    </HideOnScroll>
  );
}
