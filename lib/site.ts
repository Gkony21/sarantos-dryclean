const address = "Λεωνίδου 82, Σπάρτη 23100";
export const site = {
  name: "Σαράντος Dry Clean",
  owner: "Σαράντος Ψυχογιός",
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  hours: [
    { days: "Δευτέρα & Τετάρτη", time: "08:00–14:00" },
    { days: "Τρίτη, Πέμπτη & Παρασκευή", time: "08:00–14:00 & 18:00–21:00" },
    { days: "Σάββατο", time: "08:00–14:00" },
    { days: "Κυριακή", time: "Κλειστά" },
  ],
  mobile: { display: "693 223 8223", tel: "+306932238223" },
  landline: { display: "27310 24408", tel: "+302731024408" },
  email: "sarantos-pao13@hotmail.com",
  viber: "viber://chat?number=%2B306932238223",
  facebook: "https://www.facebook.com/SARANTOSPSYHOGIOS",
  instagram: "https://www.instagram.com/sarantos13/",
  offer: {
    active: true,
    title: "2 ρούχα + 1 δώρο",
    text: "Με τον καθαρισμό 2 ρούχων, 1 δώρο!",
  },
} as const;
