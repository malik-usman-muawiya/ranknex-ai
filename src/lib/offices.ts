export interface Office {
  flag: string;
  country: string;
  label: string;
  address: string;
}

// Add more offices here as addresses are confirmed (e.g. Pakistan).
// Used on both the Contact page and the site Footer.
export const offices: Office[] = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    label: "UK Office",
    address: "Ainsworth St, Blackburn BB1 6AF, UK",
  },
];
