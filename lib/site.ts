const addressParts = {
  street: "Λεωνίδου 82",
  city: "Σπάρτη",
  postalCode: "23100",
};
const address = `${addressParts.street}, ${addressParts.city} ${addressParts.postalCode}`;
export const site = {
  url: "https://sarantos-dryclean.gr",
  title: "Σαράντος Dry Clean | Ταπητοκαθαριστήριο & Πλυντήριο στη Σπάρτη",
  description:
    "Καθαρισμός χαλιών, ρούχων, παπλωμάτων και σαλονιών στη Σπάρτη. 25 χρόνια εμπειρίας, δωρεάν παραλαβή και παράδοση.",
  name: "Σαράντος Dry Clean",
  owner: "Σαράντος Ψυχογιός",
  address,
  addressParts,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  // The one place for opening hours: the page, the "open now" badge and Google's
  // structured data all read from here. Weekdays: 0 = Sunday … 6 = Saturday.
  hours: [
    { days: "Δευτέρα & Τετάρτη", weekdays: [1, 3], periods: [["08:00", "14:00"]] },
    {
      days: "Τρίτη, Πέμπτη & Παρασκευή",
      weekdays: [2, 4, 5],
      periods: [
        ["08:00", "14:00"],
        ["17:30", "20:30"],
      ],
    },
    { days: "Σάββατο", weekdays: [6], periods: [["08:00", "14:00"]] },
    { days: "Κυριακή", weekdays: [0], periods: [] },
  ],
  mobile: { display: "693 223 8223", tel: "+306932238223" },
  landline: { display: "27310 24408", tel: "+302731024408" },
  email: "sarantos-pao13@hotmail.com",
  viber: "viber://chat?number=%2B306932238223",
  facebook: "https://www.facebook.com/SARANTOSPSYHOGIOS",
  instagram: "https://www.instagram.com/sarantos13/",
  googleReviews: "https://g.page/r/CR1lANgYa4FsEBM/review",
  offer: {
    active: false,
    title: "2 ρούχα + 1 δώρο",
    text: "Με τον καθαρισμό 2 ρούχων, 1 δώρο!",
  },
} as const;
