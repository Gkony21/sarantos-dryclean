import Link from "next/link";
import CallButton from "@/components/CallButton";
import ViberButton from "@/components/ViberButton";

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
          <ViberButton compact />
          <CallButton />
        </div>
      </div>
    </header>
  );
}
