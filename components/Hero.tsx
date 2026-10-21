import { House, MapPin, Truck } from "lucide-react";
import { site } from "@/lib/site";
import { lift, tile } from "@/lib/ui";
import CallButton from "@/components/CallButton";
import ViberButton from "@/components/ViberButton";
import OpenNow from "@/components/OpenNow";
import Bubbles from "@/components/Bubbles";
import Drop from "@/components/Drop";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-4">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className={`${tile} flex flex-col justify-between gap-7 p-7 sm:p-10 lg:col-span-6`}>
          <div>
            <p className="hero-in inline-flex items-center gap-2 rounded-full bg-brand-mint px-3.5 py-1.5 text-sm font-bold text-brand-forest">
              <Drop className="h-3.5 w-3 text-brand-green" />
              Ταπητοκαθαριστήριο &amp; πλυντήριο
            </p>
            <h1 className="mt-6 mb-4 text-[34px] leading-[1.06] font-extrabold tracking-[-0.02em] sm:text-5xl lg:text-[3.375rem]">
              Καθαρισμός χαλιών, ρούχων και σαλονιών στη Σπάρτη
            </h1>
            <p className="hero-in max-w-[34ch] text-lg text-brand-moss [--delay:100ms] sm:text-xl">
              Τα φροντίζουμε με προσοχή, σαν να ήταν δικά μας.
            </p>
          </div>
          <div className="hero-in flex flex-col gap-3 [--delay:200ms] sm:flex-row">
            <CallButton size="lg" label={`Καλέστε: ${site.mobile.display}`} />
            <ViberButton size="lg" />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-6">
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-[28px] lg:aspect-auto lg:min-h-[300px] lg:flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/storefront-1600.webp"
              srcSet="/images/storefront-640.webp 640w, /images/storefront-1024.webp 1024w, /images/storefront-1600.webp 1600w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Η πρόσοψη του καταστήματος Σαράντος Dry Clean στη Λεωνίδου 82, Σπάρτη"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[55%_55%] transition duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
            <figcaption className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold">
              <MapPin className="h-4 w-4 text-brand-green" aria-hidden="true" />
              Λεωνίδου 82 · Σπάρτη
            </figcaption>
          </figure>
          <OpenNow />
        </div>

        <div className={`relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-[28px] bg-brand-green p-8 text-white lg:col-span-4 lg:min-h-[280px] ${lift}`}>
          <Bubbles
            bubbles={[
              { x: "84%", bottom: 10, size: 26, delay: 0.5 },
              { x: "66%", bottom: 0, size: 14, delay: 3 },
              { x: "90%", bottom: 60, size: 16, delay: 5.5 },
              { x: "52%", bottom: 20, size: 20, delay: 7, duration: 11 },
              { x: "74%", bottom: 80, size: 10, delay: 1.8 },
            ]}
          />
          <span className="relative text-[120px] leading-[0.82] font-extrabold tracking-[-0.05em] sm:text-[150px]">25</span>
          <span className="relative mt-2.5 text-[22px] font-bold">χρόνια στον χώρο</span>
          <span className="relative text-[15px]">Οικογενειακή επιχείρηση</span>
        </div>

        <div className={`flex flex-col justify-between gap-7 overflow-hidden rounded-[28px] bg-brand-leaf p-8 lg:col-span-8 lg:min-h-[280px] ${lift}`}>
          <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
            <p className="text-[28px] leading-[1.1] font-extrabold tracking-[-0.01em] sm:text-[34px]">
              Δωρεάν παραλαβή
              <br />
              &amp; παράδοση
            </p>
            <p className="max-w-[28ch] text-brand-fern">
              Σε Σπάρτη και γύρω χωριά. Ερχόμαστε εμείς στον χώρο σας.
            </p>
          </div>
          {/* From the customer's door to the shop and back. */}
          <div aria-hidden="true" className="relative h-[92px] [--road:calc(100%-140px)]">
            <div className="absolute top-[42px] right-[22px] left-[22px] border-t-[3px] border-dashed border-brand-green" />
            <House className="absolute top-6 left-0 h-9 w-9 text-brand-forest" fill="#d9eebf" strokeWidth={2} />
            <Drop className="absolute top-5 right-0.5 h-[38px] w-[30px] text-brand-green" />
            <div className="van absolute top-1.5 left-11 w-full">
              <Truck className="h-12 w-12 text-brand-ink" fill="#d9eebf" strokeWidth={1.6} />
            </div>
            <span className="absolute bottom-0 left-0 text-[13px] font-bold text-brand-fern">Ο χώρος σας</span>
            <span className="absolute right-0 bottom-0 text-[13px] font-bold text-brand-fern">Λεωνίδου 82</span>
          </div>
        </div>
      </div>
    </section>
  );
}
