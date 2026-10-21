import SectionHeading from "@/components/SectionHeading";
import Bubbles from "@/components/Bubbles";

const steps = [
  {
    title: "Καλέστε μας",
    text: "Τηλεφωνήστε ή στείλτε μήνυμα στο Viber για να κλείσουμε μέρα παραλαβής.",
  },
  {
    title: "Ερχόμαστε να το πάρουμε",
    text: "Παραλαμβάνουμε δωρεάν από τον χώρο σας, σε Σπάρτη και γύρω χωριά.",
  },
  {
    title: "Σας το φέρνουμε καθαρό",
    text: "Σας το επιστρέφουμε καθαρό και φρεσκαρισμένο, με δωρεάν παράδοση.",
  },
];

export default function Steps() {
  return (
    <section id="pos-doulevoume" className="mx-auto max-w-6xl px-4 pt-24">
      <div className="relative overflow-hidden rounded-[28px] bg-brand-forest p-7 text-white sm:p-12">
        <Bubbles
          bubbles={[
            { x: "4%", bottom: 20, size: 26, delay: 0 },
            { x: "15%", bottom: 0, size: 14, delay: 2.4 },
            { x: "31%", bottom: 40, size: 36, delay: 4.2, duration: 12 },
            { x: "48%", bottom: 0, size: 16, delay: 1.1 },
            { x: "63%", bottom: 24, size: 22, delay: 6 },
            { x: "78%", bottom: 8, size: 32, delay: 3.3, duration: 11 },
            { x: "92%", bottom: 36, size: 14, delay: 5.1 },
          ]}
        />
        <div className="relative">
          <SectionHeading eyebrow="Απλά και γρήγορα" title="Πώς δουλεύουμε" dark />

          <div className="relative mt-10">
            {/* Wide screens: one dashed line from step 1 to step 3. Phones: a line between each step. */}
            <div
              aria-hidden="true"
              className="absolute top-[27px] right-[calc((100%-4rem)/3-28px)] left-7 hidden border-t-[2.5px] border-dashed border-brand-sprout/60 sm:block"
            />
            <ol className="relative grid gap-7 sm:grid-cols-3 sm:gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-x-4 sm:block">
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-14 -bottom-7 left-[27px] border-l-[2.5px] border-dashed border-brand-sprout/60 sm:hidden"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-sprout text-[22px] font-extrabold text-brand-forest"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-3 mb-1 text-[22px] font-extrabold sm:mt-5 sm:mb-1.5">{step.title}</h3>
                  <p className="col-start-2 text-white/80">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
