import { services } from "@/lib/services";
import { lift, tile } from "@/lib/ui";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <section id="ypiresies" className="mx-auto max-w-6xl px-4 pt-24">
      <SectionHeading eyebrow="Τι κάνουμε" title="Οι υπηρεσίες μας" split>
        Όλες με δωρεάν παραλαβή και παράδοση σε Σπάρτη και γύρω χωριά.
      </SectionHeading>

      {/* Three per row on wide screens, two on tablets, one on phones; a card left alone on
          the last row is centred. */}
      <ul className="mt-7 flex flex-wrap justify-center gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <li
              key={service.title}
              className={`${tile} ${lift} reveal flex basis-full flex-col gap-2.5 p-7 sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]`}
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-mint">
                <Icon className="h-[26px] w-[26px] text-brand-green" aria-hidden="true" />
              </span>
              <h3 className="mt-1.5 text-[22px] leading-tight font-extrabold tracking-[-0.01em]">{service.title}</h3>
              <p className="text-brand-moss">{service.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
