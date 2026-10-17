import { Phone, Sparkles, Truck } from "lucide-react";

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
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Πώς δουλεύουμε</h2>
        <p className="mt-2 text-lg text-brand-ink/80">
          Τρία βήματα, χωρίς να βγείτε από το σπίτι.
        </p>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="rounded-xl bg-white p-6">
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
    </section>
  );
}
