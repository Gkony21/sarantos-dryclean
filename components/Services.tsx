import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="ypiresies" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Οι υπηρεσίες μας</h2>
        <p className="mt-2 text-lg text-brand-ink/80">
          Με δωρεάν παραλαβή και παράδοση σε Σπάρτη και γύρω χωριά.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className="rounded-xl border border-gray-200 p-6"
              >
                <Icon className="h-8 w-8 text-brand-green" aria-hidden="true" />
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
