import { Phone, Sparkles, Truck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    title: "Καλέστε μας",
    text: "Τηλεφωνήστε ή στείλτε μήνυμα στο Viber για να κλείσουμε μέρα παραλαβής.",
    icon: Phone,
  },
  {
    title: "Ερχόμαστε να το πάρουμε",
    text: "Παραλαμβάνουμε δωρεάν από τον χώρο σας, σε Σπάρτη και γύρω χωριά.",
    icon: Truck,
  },
  {
    title: "Σας το φέρνουμε καθαρό",
    text: "Το παραδίδουμε καθαρό και φρεσκαρισμένο, πάλι δωρεάν.",
    icon: Sparkles,
  },
];

export default function Steps() {
  return (
    <section id="pos-doulevoume" className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <SectionHeading eyebrow="Απλά και γρήγορα" title="Πώς δουλεύουμε">
          Τρία βήματα, χωρίς να βγείτε από το σπίτι.
        </SectionHeading>

        <div className="relative mt-10">
          {/* On wide screens a dashed line joins the step numbers, read left to right. */}
          <div
            className="absolute top-11 right-12 left-12 hidden border-t-2 border-dashed border-brand-green/40 sm:block"
            aria-hidden="true"
          />
          <ol className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="reveal relative rounded-xl bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg font-extrabold text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <Icon className="h-7 w-7 text-brand-green" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-brand-ink/80">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
