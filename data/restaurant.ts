/**
 * Central restaurant data. Edit values here and the whole site updates.
 * Values marked with REVIEW: should be confirmed by the owner before launch.
 */

export const restaurant = {
  name: "Napoli Oetz",
  tagline: "Pizza, Pasta & italienische Spezialitäten",
  shortDescription:
    "Familiengeführte Pizzeria im Herzen von Oetz im Ötztal. Frische italienische Küche, knusprige Pizza aus dem Steinofen und herzliche Gastfreundschaft.",
  city: "Oetz",
  region: "Tirol",
  country: "Österreich",

  // REVIEW: Confirm full street address with the owner.
  address: {
    street: "Hauptstraße",
    streetExtra: "",
    postalCode: "6433",
    city: "Oetz",
    region: "Tirol",
    country: "Österreich",
    full: "Hauptstraße, 6433 Oetz, Tirol, Österreich",
  },

  phone: {
    display: "+43 650 2915795",
    tel: "+436502915795",
  },

  // Keine offiziell bekannte E-Mail-Adresse — Kontakt erfolgt ausschließlich
  // über Telefon. Falls der Betreiber später eine Adresse bekannt gibt,
  // hier ergänzen (z. B. email: "..." ) und in den Komponenten anzeigen.
  email: null,

  domain: "napoli-oetz.com",
  url: "https://www.napoli-oetz.com",

  hours: {
    summary: "Täglich 11:00 – 23:00",
    schedule: [
      { day: "Montag", open: "11:00", close: "23:00" },
      { day: "Dienstag", open: "11:00", close: "23:00" },
      { day: "Mittwoch", open: "11:00", close: "23:00" },
      { day: "Donnerstag", open: "11:00", close: "23:00" },
      { day: "Freitag", open: "11:00", close: "23:00" },
      { day: "Samstag", open: "11:00", close: "23:00" },
      { day: "Sonntag", open: "11:00", close: "23:00" },
    ],
  },

  features: {
    dineIn: true,
    takeaway: true,
    delivery: false, // REVIEW
    reservations: true, // REVIEW
    familyFriendly: true,
    parkingNearby: true,
  },

  // Used by the "Route öffnen" buttons. Searches Google Maps for the name + city.
  mapsQuery: "Pizzeria Napoli Oetz, Tirol",
  mapsEmbedQuery: "Pizzeria+Napoli+Oetz+Tirol",

  social: {
    // REVIEW: Add real links if available.
    facebook: "",
    instagram: "",
  },
} as const;

export const allergens: { code: string; label: string }[] = [
  { code: "A", label: "Glutenhaltige Getreide" },
  { code: "B", label: "Krebstiere" },
  { code: "C", label: "Ei" },
  { code: "D", label: "Fische" },
  { code: "E", label: "Erdnüsse" },
  { code: "F", label: "Sojabohnen" },
  { code: "G", label: "Milch (Laktose)" },
  { code: "H", label: "Schalenfrüchte" },
  { code: "L", label: "Sellerie" },
  { code: "M", label: "Senf" },
  { code: "N", label: "Sesam" },
  { code: "O", label: "Sulfite" },
  { code: "P", label: "Lupinen" },
  { code: "R", label: "Weichtiere" },
];

export type Restaurant = typeof restaurant;
