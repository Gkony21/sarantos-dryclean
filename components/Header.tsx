import CallButton from "@/components/CallButton";
import ViberButton from "@/components/ViberButton";
import Image from "next/image";
import HomeLink from "@/components/HomeLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4">
        <HomeLink
          aria-label="Σαράντος Dry Clean, αρχική σελίδα"
          className="flex items-center gap-2 leading-tight"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={40}
            height={40}
            className="h-8 w-8 shrink-0 sm:h-10 sm:w-10"
          />
          {/* On the narrowest phones (320px) only the logo fits next to the buttons. */}
          <span className="hidden min-[360px]:block">
            <span className="block text-base font-extrabold text-brand-green min-[400px]:text-lg sm:text-xl">
              ΣΑΡΑΝΤΟΣ
            </span>
            <span className="block text-sm font-bold text-brand-blue">
              Dry Clean
            </span>
          </span>
        </HomeLink>

        <div className="flex items-center gap-2">
          <ViberButton compact />
          <CallButton />
        </div>
      </div>
    </header>
  );
}
