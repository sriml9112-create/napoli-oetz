/**
 * Echte Speisekarte für Napoli Oetz.
 *
 * Preise, Zutaten und Allergene wurden 1:1 vom Betreiber übernommen.
 * Wenn `priceOnRequest: true` gesetzt ist, wird kein fixer Preis ausgegeben.
 */

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  /** Preis in EUR — entfällt, wenn `priceOnRequest: true`. */
  price?: number;
  /** True = Preis auf Anfrage. */
  priceOnRequest?: boolean;
  allergens?: string[];
  badges?: ("vegetarisch" | "vegan" | "scharf" | "neu" | "beliebt")[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "pizze",
    title: "Pizze",
    subtitle: "Aus dem Steinofen — knusprig und frisch belegt.",
    items: [
      { id: "pi-margherita", name: "Margherita", description: "Tomaten, Mozzarella, Oregano", price: 10.9, allergens: ["a", "c", "g"], badges: ["vegetarisch", "beliebt"] },
      { id: "pi-funghi", name: "Funghi", description: "Tomaten, Mozzarella, Champignons, Oregano", price: 11.9, allergens: ["a", "c", "g"], badges: ["vegetarisch"] },
      { id: "pi-salami", name: "Salami", description: "Tomaten, Mozzarella, Salami, Oregano", price: 11.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-salami-picante", name: "Salami Picante", description: "Tomaten, Mozzarella, scharfe Salami, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"], badges: ["scharf"] },
      { id: "pi-parma", name: "Parma", description: "Tomaten, Mozzarella, Schinken, Oregano", price: 11.9, allergens: ["a", "c", "f", "g"] },
      { id: "pi-tonno", name: "Tonno", description: "Tomaten, Mozzarella, Thunfisch, Zwiebeln, Knoblauch, Oregano", price: 12.5, allergens: ["a", "c", "d", "g"] },
      { id: "pi-gorgonzola", name: "Gorgonzola", description: "Tomaten, Mozzarella, Österkron, Zwiebeln, Oregano", price: 12.5, allergens: ["a", "c", "g"], badges: ["vegetarisch"] },
      { id: "pi-prosciutto-funghi", name: "Prosciutto Funghi", description: "Tomaten, Mozzarella, Champignons, Schinken, Oregano", price: 12.9, allergens: ["a", "c", "f", "g"], badges: ["beliebt"] },
      { id: "pi-calzone", name: "Calzone", description: "Gefüllte Tasche: Tomaten, Mozzarella, Champignons, Schinken, Oregano", price: 12.9, allergens: ["a", "c", "f", "g"] },
      { id: "pi-hawaii", name: "Hawaii", description: "Tomaten, Mozzarella, Schinken, Ananas, Oregano", price: 12.9, allergens: ["a", "c", "f", "g"] },
      { id: "pi-salerno", name: "Salerno", description: "Tomaten, Mozzarella, Schinken, Salami, Oregano", price: 12.9, allergens: ["a", "c", "f", "g", "l", "m"] },
      { id: "pi-diavolo", name: "Diavolo", description: "Tomaten, Mozzarella, Salami, Knoblauch, Pfefferoni, Oregano", price: 13.0, allergens: ["a", "c", "g", "l", "m"], badges: ["scharf"] },
      { id: "pi-siziliana", name: "Siziliana", description: "Tomaten, Mozzarella, Schinken, Thunfisch, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "d", "f", "g"] },
      { id: "pi-romeo", name: "Romeo", description: "Tomaten, Mozzarella, Salami, Paprika, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-mix-formaggi", name: "Mix Formaggi", description: "Tomaten, Mozzarella, Schafkäse, Gorgonzola, Oliven, Oregano", price: 12.9, allergens: ["a", "c", "g"], badges: ["vegetarisch"] },
      { id: "pi-spinacci", name: "Spinacci", description: "Tomaten, Mozzarella, Blattspinat, Knoblauch, Schafkäse, Oregano", price: 12.9, allergens: ["a", "c", "g"], badges: ["vegetarisch"] },
      { id: "pi-salami-funghi", name: "Salami Funghi", description: "Tomaten, Mozzarella, Salami, Champignons, Oregano", price: 12.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-primavera", name: "Primavera", description: "Tomaten, Mozzarella, Schinken, Salami, Zwiebeln, Oregano", price: 12.9, allergens: ["a", "c", "f", "g", "l", "m"] },
      { id: "pi-capriciosa", name: "Capriciosa", description: "Tomaten, Mozzarella, Schinken, Champignons, Artischocken, Oliven, Oregano", price: 13.9, allergens: ["a", "c", "f", "g"] },
      { id: "pi-gigante", name: "Gigante", description: "Tomaten, Mozzarella, Salami, Schinken, Champignons, Thunfisch, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "d", "f", "g", "l", "m"] },
      { id: "pi-vegetaria", name: "Vegetaria", description: "Tomaten, Mozzarella, Champignons, Spinat, Tomaten, Mais, Oliven, Zwiebeln, Paprika, Oregano", price: 13.9, allergens: ["a", "c", "g"], badges: ["vegetarisch"] },
      { id: "pi-paradiso", name: "Paradiso", description: "Tomaten, Mozzarella, Schinken, Shrimps, Knoblauch, Oregano", price: 13.9, allergens: ["a", "b", "c", "f", "g"] },
      { id: "pi-fellini", name: "Fellini", description: "Tomaten, Mozzarella, Schinken, Gorgonzola, frische Tomaten, Oregano", price: 13.9, allergens: ["a", "c", "f", "g"] },
      { id: "pi-las-becia", name: "Las Becia", description: "Tomaten, Mozzarella, Salami, Schinken, Ananas, Paprika, Oregano — süß-pikant", price: 13.9, allergens: ["a", "c", "f", "g", "l", "m"] },
      { id: "pi-pizza-oetzi", name: "Pizza Ötzi", description: "Tomaten, Mozzarella, Salami, Schafkäse, Paprika, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"], badges: ["beliebt"] },
      { id: "pi-del-piero", name: "Del Piero", description: "Tomaten, Mozzarella, Schinken, Salami, Speck, Schafkäse, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "f", "g", "l", "m"] },
      { id: "pi-palermo", name: "Palermo", description: "Tomaten, Mozzarella, Salami, Schinken, Gorgonzola, Mais, Oregano", price: 13.9, allergens: ["a", "c", "f", "g", "l", "m"] },
      { id: "pi-florenza", name: "Florenza", description: "Tomaten, Mozzarella, Salami, Schinken, Paprika, Oregano", price: 13.9, allergens: ["a", "c", "f", "g", "l", "m"] },
      { id: "pi-popeye", name: "Popeye", description: "Tomaten, Mozzarella, Schinken, Spinat, Knoblauch, Oregano", price: 13.9, allergens: ["a", "c", "f", "g"] },
      { id: "pi-gino-pierre", name: "Gino Pierre", description: "Tomaten, Mozzarella, Salami, Speck, Champignons, Zwiebeln, Oregano — extra scharf", price: 13.9, allergens: ["a", "c", "g", "l", "m"], badges: ["scharf"] },
      { id: "pi-milano", name: "Milano", description: "Tomaten, Mozzarella, Schinken, Salami, Speck, Zwiebeln, Knoblauch, Thunfisch, Oregano", price: 13.9, allergens: ["a", "c", "d", "f", "g", "l", "m"] },
      { id: "pi-frutti-di-mare", name: "Frutti Di Mare", description: "Tomaten, Mozzarella, Meeresfrüchte, Knoblauch, Oregano", price: 14.9, allergens: ["a", "b", "c", "d", "g", "r"], badges: ["beliebt"] },
      { id: "pi-tyrolia", name: "Tyrolia", description: "Tomaten, Mozzarella, Salami, Speck, Ei, Spinat, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-calzone-rusticale", name: "Calzone Rusticale", description: "Tomaten, Mozzarella, Salami, Speck, Zwiebeln, Gorgonzola, Mais, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-toscana", name: "Toscana", description: "Tomaten, Mozzarella, Salami, Speck, Mais, Gorgonzola, frische Tomaten, Paprika, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-della-casa", name: "Della Casa", description: "Tomaten, Mozzarella, Schafkäse, Paprika, Gorgonzola, Oliven, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-kebab", name: "Kebab Pizza", description: "Tomaten, Mozzarella, Kebab, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-country", name: "Country", description: "Tomaten, Mozzarella, Salami, Speck, Zwiebeln, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "pi-napoli", name: "Napoli", description: "Tomaten, Mozzarella, scharfe Salami, Zwiebeln, Paprika, Oregano", price: 13.9, allergens: ["a", "c", "g", "l", "m"], badges: ["scharf"] },
      { id: "pi-capello", name: "Capello", description: "Tomaten, Mozzarella, Kapern, Sardellen", price: 15.9, allergens: ["a", "c", "g", "l", "m"] },
    ],
  },

  {
    id: "hauptgerichte",
    title: "Hauptgerichte",
    subtitle: "Herzhafte Klassiker — sättigend und beliebt.",
    items: [
      { id: "h-doener-pommes", name: "Döner Teller mit Pommes", description: "Mit Pommes, Salat und Joghurtsauce", price: 13.5, allergens: ["c", "g", "l", "m", "o"] },
      { id: "h-doener-brot", name: "Döner Teller mit Brot", description: "Mit Brot, Salat und Joghurtsauce", price: 13.5, allergens: ["c", "g", "l", "m", "o"] },
      { id: "h-doener-schafskaese", name: "Döner Teller mit Schafskäse", description: "Mit Schafskäse, dazu Brot oder Pommes und Salat", price: 14.5, allergens: ["c", "g", "l", "m", "o"] },
      { id: "h-wiener-schnitzel", name: "Wiener Schnitzel", description: "Vom Schwein, mit Pommes und gemischtem Salat", price: 15.5, allergens: ["a", "c", "l", "m", "o"], badges: ["beliebt"] },
      { id: "h-lasagne", name: "Lasagne al Forno", description: "In Tomatensauce mit Mozzarella", price: 14.0, allergens: ["a", "c", "f", "g", "l"] },
    ],
  },

  {
    id: "burger-snacks",
    title: "Burger & Snacks",
    subtitle: "Schnell und gut — ideal zum Mitnehmen.",
    items: [
      { id: "b-hamburger", name: "Hamburger", description: "Frisch vom Rind, Salat, Zwiebeln", price: 8.0, allergens: ["a", "c", "g", "m", "n", "o"] },
      { id: "b-cheeseburger", name: "Cheeseburger", description: "Frisch vom Rind, Käse, Salat, Zwiebeln und hausgemachte Cocktailsauce", price: 8.5, allergens: ["a", "c", "g", "m", "n", "o"] },
      { id: "b-schnitzelburger", name: "Schnitzelburger", description: "Frisch paniertes Hühnerschnitzel, Salat, Zwiebeln und hausgemachte Cocktailsauce", price: 8.5, allergens: ["a", "c", "g", "m", "n", "o"] },
      { id: "b-pommes", name: "Pommes Frites", description: "Knusprige Pommes Frites", price: 4.9, allergens: ["o"], badges: ["vegetarisch"] },
      { id: "b-kebab-sandwich", name: "Kebab Sandwich", description: "Salat, Tomate, Zwiebel", price: 7.0, allergens: ["a", "c", "g", "l", "m", "s", "d", "z"] },
      { id: "b-kebab-schafkaese", name: "Kebab mit Schafskäse", description: "Salat, Tomate, Zwiebel", price: 8.0, allergens: ["a", "c", "g", "l", "m", "s", "d", "z"] },
      { id: "b-duerum", name: "Dürüm", description: "Salat, Tomate, Zwiebel", price: 7.5, allergens: ["a", "c", "g", "l", "m", "s", "d", "z"] },
      { id: "b-duerum-schafkaese", name: "Dürüm mit Schafskäse", description: "Dürüm mit Schafskäse", price: 8.0, allergens: ["a", "c", "g", "l", "m", "s", "d", "z"] },
      { id: "b-kebab-veggie", name: "Kebab vegetarisch / Dürüm vegan", description: "Vegetarische Kebab- oder Dürüm-Variante", price: 7.0, allergens: ["a", "c", "g", "l", "m", "s", "d", "z"], badges: ["vegetarisch"] },
    ],
  },

  {
    id: "flammkuchen",
    title: "Flammkuchen",
    subtitle: "Hauchdünner Boden — knusprig überbacken.",
    items: [
      { id: "f-classic", name: "Classic Flammkuchen", description: "Speck und Zwiebeln mit feinem Käse überbacken", price: 12.5, allergens: ["a", "g"] },
      { id: "f-gaertner", name: "Flammkuchen Gärtner Art", description: "Gemüse der Saison mit feinem Käse überbacken", price: 12.5, allergens: ["a", "g"], badges: ["vegetarisch"] },
      { id: "f-mediterran", name: "Mediterraner Flammkuchen", description: "Weichkäse, Paprika und Oliven", price: 12.5, allergens: ["a", "g"], badges: ["vegetarisch"] },
      { id: "f-pikant", name: "Pikanter Flammkuchen", description: "Pfeffersalami, Paprika, Broccoli und Zwiebeln mit feinem Käse überbacken", price: 13.5, allergens: ["a", "g"], badges: ["scharf"] },
      { id: "f-3-beilagen", name: "Flammkuchen mit bis zu 3 Beilagen nach Wahl", description: "Flammkuchen mit bis zu 3 Beilagen nach Wahl", price: 13.5, allergens: ["a", "g"] },
      { id: "f-apfel", name: "Apfel Flammkuchen", description: "Dünne Apfelstreifen mit Zimt und Zucker", price: 12.5, allergens: ["a", "g"], badges: ["vegetarisch"] },
      { id: "f-napoli", name: "Flammkuchen Napoli", description: "Kebab, Zwiebeln und Paprika", price: 13.5, allergens: ["a", "g"], badges: ["beliebt"] },
      { id: "f-elsaesser", name: "Elsässer", description: "Scharfe Salami, Speckwürfel, Zwiebeln, Paprika, Tomaten", price: 13.5, allergens: ["a", "g"], badges: ["scharf"] },
      { id: "f-fantastik", name: "Fantastik", description: "Paprika, Speckwürfel", price: 12.5, allergens: ["a", "g"] },
    ],
  },

  {
    id: "salate",
    title: "Salate",
    subtitle: "Frisch, knackig und leicht.",
    items: [
      { id: "s-tuna", name: "Tuna Salad", description: "Verschiedene Blattsalate mit Oliven, Gurken, Zwiebeln und Thunfisch, dazu Balsamicovinaigrette", price: 11.5, allergens: ["d", "m", "o"] },
      { id: "s-olympisch", name: "Olympisches Gold", description: "Knackige Blattsalate mit Tomaten, Gurken, Oliven, Zwiebeln und Schafkäse", price: 11.5, allergens: ["g", "m", "o"], badges: ["vegetarisch"] },
      { id: "s-gemischt-gross", name: "Gemischter Salat (groß)", description: "Gemischter Salat groß", price: 7.9, allergens: ["l", "m"], badges: ["vegetarisch"] },
      { id: "s-gruener-gross", name: "Grüner Salat (groß)", description: "Grüner Salat groß", price: 7.9, allergens: ["l", "m"], badges: ["vegan"] },
    ],
  },

  {
    id: "warme-getraenke",
    title: "Warme Getränke",
    subtitle: "Italienischer Kaffee und mehr.",
    items: [
      { id: "w-espresso", name: "Espresso", description: "Espresso", price: 2.8 },
      { id: "w-doppelter-espresso", name: "Doppelter Espresso", description: "Doppelter Espresso", price: 3.8 },
      { id: "w-verlaengerter", name: "Verlängerter", description: "Verlängerter", price: 3.3 },
      { id: "w-cappuccino", name: "Cappuccino", description: "Cappuccino", price: 3.9, allergens: ["g"] },
      { id: "w-tee", name: "Tee", description: "Verschiedene Sorten", price: 3.3 },
    ],
  },

  {
    id: "biere",
    title: "Biere",
    subtitle: "Vom Fass und aus der Dose.",
    items: [
      { id: "bi-zipfer-maerzen", name: "Zipfer Märzen", description: "Bier", price: 4.3, allergens: ["a", "o"] },
      { id: "bi-zipfer-dose", name: "Zipfer Dose", description: "Bier (Dose)", price: 3.8, allergens: ["a", "o"] },
      { id: "bi-stiegl", name: "Stiegl", description: "Bier", price: 5.2, allergens: ["a", "o"] },
      { id: "bi-radler-af", name: "Öttinger Radler alkoholfrei", description: "Alkoholfreier Radler", price: 4.3 },
    ],
  },

  {
    id: "weine",
    title: "Weine",
    subtitle: "Offen ausgeschenkt — 1/8 l oder 1/4 l.",
    items: [
      { id: "we-weiss-sauer", name: "Weiß Sauer", description: "Weißwein sauer", price: 4.5 },
      { id: "we-rot-sauer", name: "Rot Sauer", description: "Rotwein sauer", price: 4.5 },
      { id: "we-gruener-veltliner", name: "Grüner Veltliner", description: "Grüner Veltliner", price: 4.5 },
      { id: "we-zweigelt", name: "Zweigelt", description: "Zweigelt", price: 4.5 },
      { id: "we-rot-suess", name: "Rot Süß", description: "Zweigelt, 1/8 l oder 1/4 l", priceOnRequest: true },
      { id: "we-weiss-1-8-1-4", name: "Weiß Sauer 1/8 l oder 1/4 l", description: "Grüner Veltliner, 1/8 l oder 1/4 l", priceOnRequest: true },
    ],
  },

  {
    id: "alkoholfrei",
    title: "Alkoholfreie Getränke",
    subtitle: "Erfrischend und klassisch.",
    items: [
      { id: "a-softdrinks", name: "Coca-Cola, Fanta, Sprite, Mezzo Mix, Eistee, Coca-Cola Light", description: "Alkoholfreies Getränk", price: 3.2 },
      { id: "a-almdudler", name: "Almdudler", description: "Alkoholfreies Getränk", price: 3.7 },
      { id: "a-apfelsaft", name: "Apfelsaft", description: "Apfelsaft", price: 3.7 },
      { id: "a-orangensaft", name: "Orangensaft", description: "Orangensaft", price: 3.7 },
      { id: "a-mineralwasser", name: "Mineralwasser", description: "Mineralwasser", price: 3.3 },
      { id: "a-energydrink", name: "Energydrink", description: "Energydrink", price: 4.3 },
    ],
  },

  {
    id: "sonstiges",
    title: "Sonstiges",
    subtitle: "Familienpizzen, Spezialitäten und Beilagen.",
    items: [
      { id: "so-familienpizza", name: "Familienpizza nach Wahl", description: "Familienpizza nach Wahl", price: 27.0 },
      { id: "so-glutenfrei", name: "Glutenfreie Pizza", description: "Glutenfreie Pizza", priceOnRequest: true, allergens: ["a", "c", "g", "l", "m"] },
      { id: "so-familienpizza-frutti", name: "Familienpizza mit Frutti Di Mare", description: "Familienpizza mit Frutti Di Mare", price: 30.0 },
      { id: "so-pizza-3-beilagen", name: "Pizza mit bis zu 3 Beilagen nach Wahl", description: "Pizza mit bis zu 3 Beilagen nach Wahl", price: 13.9 },
      { id: "so-halbe-halbe", name: "Halbe-Halbe", description: "Pizza halb-halb", price: 15.0 },
      { id: "so-pizza-brot", name: "Pizza-Brot", description: "Tomatensauce mit Knoblauch", price: 10.0 },
      { id: "so-toast-schinken-kaese", name: "Schinken-Käse Toast", description: "Schinken-Käse Toast", price: 9.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "so-toast-hawaii", name: "Toast Hawaii", description: "Toast Hawaii", price: 9.9, allergens: ["a", "c", "g", "l", "m"] },
      { id: "so-toast-picante", name: "Toast Picante", description: "Toast Picante", price: 9.9, allergens: ["a", "c", "g", "l", "m"], badges: ["scharf"] },
      { id: "so-knoblauchstange", name: "Knoblauchstange", description: "Knoblauchstange", price: 3.5, allergens: ["a", "c"] },
      { id: "so-jogurt-sauce", name: "Joghurt-Sauce", description: "250 ml Joghurt-Sauce", price: 3.0 },
    ],
  },
];

/**
 * Gerichte, die auf der Homepage als Highlights gezeigt werden.
 */
export const signatureDishIds = [
  "pi-margherita",
  "pi-kebab",
  "h-doener-pommes",
  "f-napoli",
] as const;

export function findMenuItem(id: string): MenuItem | undefined {
  for (const cat of menu) {
    const hit = cat.items.find((i) => i.id === id);
    if (hit) return hit;
  }
  return undefined;
}

export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + " €";
}

export function priceLabel(item: MenuItem): string {
  if (item.priceOnRequest || item.price == null) return "auf Anfrage";
  return formatPrice(item.price);
}
