import { services } from "@/lib/services";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <section id="ypiresies" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <SectionHeading eyebrow="Τι κάνουμε" title="Οι υπηρεσίες μας">
          Με δωρεάν παραλαβή και παράδοση σε Σπάρτη και γύρω χωριά.
        </SectionHeading>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className="reveal rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10">
                  <Icon className="h-6 w-6 text-brand-green" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-brand-ink/80">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
