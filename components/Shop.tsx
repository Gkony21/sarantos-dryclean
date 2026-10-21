import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { lift } from "@/lib/ui";
import SectionHeading from "@/components/SectionHeading";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  /** Grid size and height of the tile. */
  className: string;
  /** Framing and the hover zoom (which must start from the framing's own zoom). */
  imageClassName: string;
};

const photos: Photo[] = [
  {
    src: "/images/machine.webp",
    alt: "Επαγγελματική μηχανή στεγνού καθαρισμού",
    caption: "Σύγχρονος εξοπλισμός",
    className: "min-h-[420px] lg:col-span-4 lg:row-span-2 lg:min-h-[520px]",
    // A light zoom on the drum and the Realstar logo, leaving out the control panel on the left.
    imageClassName: "origin-right object-[100%_50%] scale-125 group-hover:scale-[1.31]",
  },
  {
    src: "/images/facade.webp",
    alt: "Η βιτρίνα του καταστήματος στη Λεωνίδου 82",
    caption: "Στο κέντρο της Σπάρτης",
    className: "min-h-[420px] lg:col-span-4 lg:row-span-2 lg:min-h-[520px]",
    imageClassName: "group-hover:scale-105",
  },
  {
    src: "/images/blankets.webp",
    alt: "Καθαρά παπλώματα και κουβέρτες συσκευασμένα για παράδοση",
    caption: "Έτοιμα για παράδοση",
    className: "min-h-[252px] lg:col-span-4",
    imageClassName: "group-hover:scale-105",
  },
];

export default function Shop() {
  return (
    <section id="katastima" className="mx-auto max-w-6xl px-4 pt-24">
      <SectionHeading eyebrow="Ο χώρος μας" title="Το κατάστημα" />

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {photos.map((photo) => (
          <figure key={photo.src} className={`reveal group relative m-0 overflow-hidden rounded-[28px] ${photo.className}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover transition duration-[900ms] ease-out motion-reduce:transition-none ${photo.imageClassName}`}
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-white px-3.5 py-2 text-sm font-bold">
              {photo.caption}
            </figcaption>
          </figure>
        ))}

        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal flex flex-col justify-between gap-4 rounded-[28px] bg-brand-leaf p-7 lg:col-span-4 ${lift}`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <MapPin className="h-6 w-6 text-brand-green" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-2xl leading-tight font-extrabold tracking-[-0.01em]">Ελάτε από το κατάστημα</span>
            <span className="mt-1 block text-brand-fern">{site.addressParts.street}, στο κέντρο της Σπάρτης</span>
            <span className="mt-3 block font-bold text-brand-forest">Οδηγίες στον χάρτη →</span>
          </span>
        </a>
      </div>
    </section>
  );
}
