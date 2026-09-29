import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import CallButton from "@/components/CallButton";
import ViberButton from "@/components/ViberButton";

export default function Contact() {
  return (
    <section id="epikoinonia" className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Επικοινωνία</h2>
        <p className="mt-2 text-lg text-brand-ink/80">
          Καλέστε μας ή στείλτε μήνυμα για να κλείσετε δωρεάν παραλαβή.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" label={`Κινητό: ${site.mobile.display}`} />
              <ViberButton size="lg" label="Viber" />
            </div>

            <ul className="flex flex-col gap-4 text-lg">
              <li className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${site.landline.tel}`}
                  className="underline underline-offset-4"
                >
                  Σταθερό: {site.landline.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all underline underline-offset-4"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />
                <div>
                  <p>{site.address}</p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-green underline underline-offset-4"
                  >
                    Οδηγίες στον χάρτη
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Clock className="h-5 w-5 text-brand-green" aria-hidden="true" />
              Ωράριο
            </h3>
            <dl className="mt-4 flex flex-col gap-3">
              {site.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex flex-col border-b border-gray-200 pb-3 last:border-0 sm:flex-row sm:justify-between"
                >
                  <dt className="font-bold">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
