import Image from "next/image";

const photos = [
  {
    src: "/images/facade.webp",
    alt: "Η βιτρίνα του καταστήματος στη Λεωνίδου 82",
    title: "Λεωνίδου 82",
    text: "Στο κέντρο της Σπάρτης",
  },
  {
    src: "/images/machine.webp",
    alt: "Επαγγελματική μηχανή στεγνού καθαρισμού",
    title: "Σύγχρονος εξοπλισμός",
    text: "Επαγγελματικές μηχανές καθαρισμού",
  },
  {
    src: "/images/blankets.webp",
    alt: "Καθαρά παπλώματα και κουβέρτες συσκευασμένα για παράδοση",
    title: "Έτοιμα για παράδοση",
    text: "Καθαρά και προσεγμένα, στον χώρο σας",
  },
];

export default function Shop() {
  return (
    <section id="katastima" className="bg-brand-lime/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="text-sm font-bold tracking-wider text-brand-green uppercase">
          Ο χώρος μας
        </p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Το κατάστημα
        </h2>
        <p className="mt-3 max-w-2xl text-lg">
          Σας περιμένουμε στη Λεωνίδου 82, με σύγχρονο εξοπλισμό και 25 χρόνια
          εμπειρίας.
        </p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {photos.map((photo, index) => (
            <li key={photo.src}>
              <figure>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={1000}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-auto w-full transition duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-lg font-bold">{photo.title}</p>
                  <p className="text-brand-ink/70">{photo.text}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
