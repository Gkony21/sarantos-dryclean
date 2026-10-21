import { MapPin, Star } from "lucide-react";
import { site } from "@/lib/site";
import { lift } from "@/lib/ui";
import SectionHeading from "@/components/SectionHeading";
import Hours from "@/components/Hours";
import Bubbles from "@/components/Bubbles";
import Drop from "@/components/Drop";

export default function Contact() {
  return (
    <section id="epikoinonia" className="mx-auto max-w-6xl px-4 pt-24">
      <SectionHeading eyebrow="Είμαστε εδώ" title="Επικοινωνία" />

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        <div className="reveal relative flex flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-brand-forest p-8 text-white sm:col-span-2 sm:p-9 lg:col-span-5 lg:row-span-2">
          <Drop className="pointer-events-none absolute -right-10 -bottom-[70px] h-[330px] w-[260px] rotate-[18deg] text-brand-sprout/10" />
          <Bubbles
            bubbles={[
              { x: "86%", bottom: 20, size: 28, delay: 0.8 },
              { x: "70%", bottom: 0, size: 14, delay: 3.6 },
              { x: "56%", bottom: 30, size: 20, delay: 6.2, duration: 11 },
              { x: "92%", bottom: 90, size: 12, delay: 2 },
              { x: "8%", bottom: 0, size: 18, delay: 4.8 },
            ]}
          />
          <div className="relative">
            <p className="font-bold text-brand-sprout">Κλείστε δωρεάν παραλαβή</p>
            <a
              href={`tel:${site.mobile.tel}`}
              className="mt-2.5 block text-[40px] leading-none font-extrabold tracking-[-0.02em] sm:text-[52px]"
            >
              {site.mobile.display}
            </a>
            <p className="mt-3.5 text-white/80">
              Σταθερό:{" "}
              <a href={`tel:${site.landline.tel}`} className="text-white underline underline-offset-4">
                {site.landline.display}
              </a>
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a
              href={`tel:${site.mobile.tel}`}
              className="rounded-full bg-brand-sprout px-6 py-4 font-extrabold text-brand-forest transition-colors hover:bg-white"
            >
              Καλέστε τώρα
            </a>
            <a href={site.viber} className="rounded-full bg-white/12 px-6 py-4 font-bold text-white transition-colors hover:bg-white/20">
              Μήνυμα στο Viber
            </a>
          </div>
        </div>

        <div className="reveal sm:col-span-2 lg:col-span-4 lg:row-span-2">
          <Hours />
        </div>

        <a
          href={site.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal flex min-h-[180px] flex-col justify-between gap-4 rounded-[28px] bg-brand-leaf p-7 lg:col-span-3 ${lift}`}
        >
          <Star className="h-8 w-8 text-brand-forest" aria-hidden="true" />
          <span className="text-xl leading-tight font-extrabold">Αφήστε μας κριτική στη Google →</span>
        </a>

        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal flex min-h-[180px] flex-col justify-between gap-4 rounded-[28px] bg-white p-7 lg:col-span-3 ${lift}`}
        >
          <MapPin className="h-8 w-8 text-brand-green" aria-hidden="true" />
          <span>
            <span className="block text-xl font-extrabold">{site.addressParts.street}</span>
            <span className="block text-brand-moss">
              {site.addressParts.city} {site.addressParts.postalCode} · Οδηγίες →
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
