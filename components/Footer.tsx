import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import CurrentYear from "@/components/CurrentYear";

const heading = "mb-2.5 font-bold text-brand-sprout";
const list = "flex flex-col gap-1.5";
const link = "hover:underline underline-offset-4";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pt-24 pb-8">
      <div className="rounded-[28px] bg-brand-forest p-8 text-white sm:p-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                <Image src="/logo.svg" alt="" width={32} height={32} className="h-8 w-8" />
              </span>
              <span className="leading-tight">
                <span className="block text-[22px] font-extrabold">ΣΑΡΑΝΤΟΣ Dry Clean</span>
                <span className="block text-[13px] font-bold tracking-[0.04em] text-brand-sprout">
                  ΤΑΠΗΤΟΚΑΘΑΡΙΣΤΗΡΙΑ · ΠΛΥΝΤΗΡΙΑ
                </span>
              </span>
            </div>
            <p className="mt-4 text-white/85">{site.address}</p>
          </div>

          <nav aria-label="Σύνδεσμοι σελίδας">
            <p className={heading}>Σελίδα</p>
            <ul className={list}>
              <li><Link href="/#ypiresies" className={link}>Υπηρεσίες</Link></li>
              <li><Link href="/#pos-doulevoume" className={link}>Πώς δουλεύουμε</Link></li>
              <li><Link href="/#epikoinonia" className={link}>Επικοινωνία</Link></li>
            </ul>
          </nav>

          <div>
            <p className={heading}>Επικοινωνία</p>
            <ul className={list}>
              <li><a href={`tel:${site.mobile.tel}`} className={link}>{site.mobile.display}</a></li>
              <li><a href={`tel:${site.landline.tel}`} className={link}>{site.landline.display}</a></li>
              <li><a href={`mailto:${site.email}`} className={`${link} break-all`}>{site.email}</a></li>
            </ul>
          </div>

          <div>
            <p className={heading}>Ακολουθήστε μας</p>
            <ul className={list}>
              <li><a href={site.facebook} target="_blank" rel="noopener noreferrer" className={link}>Facebook</a></li>
              <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram</a></li>
              <li><a href={site.googleReviews} target="_blank" rel="noopener noreferrer" className={link}>Κριτικές Google</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-white/20 pt-5 text-sm text-white/80">
          © <CurrentYear /> {site.name}
        </p>
      </div>
    </footer>
  );
}
