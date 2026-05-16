/**
 * Zentrale Stammdaten von Napoli Oetz.
 * Bearbeite Werte hier — die gesamte Seite zieht sich daraus.
 *
 * Mit "// REVIEW:" markierte Felder sollten vom Betreiber vor dem Launch
 * noch einmal bestaetigt werden.
 */

export const restaurant = {
  name: "Napoli Oetz",
  tagline: "Pizza, Döner & italienische Spezialitäten",
  shortDescription:
    "Pizzeria und Imbiss im Herzen von Oetz im Ötztal. Frisch zubereitete Pizza, Döner, Flammkuchen, Burger, Salate und herzliche Gastfreundschaft.",
  city: "Oetz",
  region: "Tirol",
  country: "Österreich",

  // Echte Adresse — vom Betreiber bestaetigt.
  address: {
    street: "Hauptstraße 29",
    streetExtra: "",
    postalCode: "6433",
    city: "Oetz",
    region: "Tirol",
    country: "Österreich",
    full: "Hauptstraße 29, 6433 Oetz, Österreich",
  },

  phone: {
    display: "+43 650 2915795",
    tel: "+436502915795",
  },

  // Keine offiziell bekannte E-Mail-Adresse — Kontakt erfolgt ausschliesslich
  // ueber Telefon. Falls der Betreiber spaeter eine Adresse bekannt gibt,
  // hier ergaenzen (z. B. email: "..." ) und in den Komponenten anzeigen.
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
    delivery: false,
    reservations: null, // REVIEW: bitte vom Betreiber bestätigen.
    familyFriendly: true,
    parkingNearby: true,
  },

  // Echte Inhaberdaten — werden im Impressum verwendet.
  owner: {
    name: "Mesut Gül",
    uid: "ATU69675201",
    activity: "Buffets und Imbißstuben",
    legalFormStartDate: "01.07.2015",
    // REVIEW: Firmenbuchnummer und Firmenbuchgericht — falls vorhanden ergaenzen.
    firmenbuch: "",
    firmenbuchgericht: "",
  },

  // Wird von den "Route oeffnen"-Buttons genutzt.
  mapsQuery: "Pizzeria Napoli, Hauptstraße 29, 6433 Oetz, Tirol",
  mapsEmbedQuery: "Pizzeria+Napoli+Hauptstrasse+29+6433+Oetz+Tirol",

  social: {
    // REVIEW: Echte Links ergaenzen, falls vorhanden.
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
