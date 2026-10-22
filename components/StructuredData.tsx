import { openingHoursSpecification } from "@/lib/hours";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: site.name,
  image: `${site.url}/images/storefront-front-1448.webp`,
  url: site.url,
  telephone: site.mobile.tel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressParts.street,
    addressLocality: site.addressParts.city,
    postalCode: site.addressParts.postalCode,
    addressCountry: "GR",
  },
  areaServed: "Σπάρτη",
  openingHoursSpecification: openingHoursSpecification(),
  sameAs: [site.facebook, site.instagram],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
