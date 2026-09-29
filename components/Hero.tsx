import { MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:py-24">
        <p className="w-fit rounded-full bg-brand-green px-3 py-1 text-sm font-bold text-white">
          25 χρόνια στον χώρο
        </p>

        <h1 className="max-w-2xl text-4xl leading-tight font-extrabold sm:text-5xl">
          Καθαρισμός χαλιών, ρούχων και σαλονιών στη Σπάρτη
        </h1>

        <p className="flex items-center gap-2 text-lg font-bold text-brand-blue">
          <Truck className="h-6 w-6 shrink-0" />
          Δωρεάν παραλαβή και παράδοση στον χώρο σας
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.mobile.tel}`}
            className="flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-4 text-lg font-bold text-white"
          >
            <Phone className="h-5 w-5" />
            Καλέστε: {site.mobile.display}
          </a>
          <a
            href={site.viber}
            className="flex items-center justify-center gap-2 rounded-md border-2 border-brand-green bg-white px-6 py-4 text-lg font-bold text-brand-green"
          >
            <MessageCircle className="h-5 w-5" />
            Μήνυμα στο Viber
          </a>
        </div>

        <p className="flex items-center gap-2">
          <MapPin className="h-5 w-5 shrink-0" />
          {site.address}
        </p>
      </div>
    </section>
  );
}
