import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-band text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="text-2xl font-extrabold">ΣΑΡΑΝΤΟΣ Dry Clean</p>
          <p className="mt-1 font-bold text-white/90">
            ΤΑΠΗΤΟΚΑΘΑΡΙΣΤΗΡΙΑ · ΠΛΥΝΤΗΡΙΑ
          </p>
          <p className="mt-4 text-white/90">{site.address}</p>
        </div>

        <nav aria-label="Σύνδεσμοι σελίδας">
          <p className="font-bold">Σελίδα</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link href="/#ypiresies" className="hover:underline">
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link href="/#epikoinonia" className="hover:underline">
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-bold">Ακολουθήστε μας</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-white/90">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
