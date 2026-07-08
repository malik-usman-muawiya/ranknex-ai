export interface Office {
  code: string; // ISO 3166-1 alpha-2 country code, used to render the flag image
  country: string;
  label: string;
  address: string;
}

// Add more offices here as addresses are confirmed.
// Used on both the Contact page and the site Footer.
export const offices: Office[] = [
  {
    code: "gb",
    country: "United Kingdom",
    label: "UK Office",
    address: "Ainsworth St, Blackburn BB1 6AF, UK",
  },
  {
    code: "pk",
    country: "Pakistan",
    label: "Global Delivery Center",
    address: "Near Minar-e-Pakistan, Badami Bagh, Lahore, Pakistan",
  },
];
