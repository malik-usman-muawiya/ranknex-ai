import { Metadata } from "next";
import SeoContent from "./SeoContent";

export const metadata: Metadata = {
  title: "SEO Company Pakistan | Best SEO Services Agency - RankNex AI",
  description: "RankNex AI is an SEO company in Pakistan offering search engine optimization, local SEO, and AI search (GEO) services for UK, US, and Pakistani businesses.",
  keywords: [
    "seo company pakistan",
    "best seo company in pakistan",
    "seo services company in pakistan",
    "seo uk services",
    "local seo services pakistan",
    "generative engine optimization",
    "SEO consultant Lahore"
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/services/seo",
  },
  openGraph: {
    title: "Search Engine Optimization (SEO) Services | RankNex AI",
    description: "RankNex AI delivers SEO services for Pakistan, UK, and US clients. Grow organic traffic with technical, on-page, and off-page optimization.",
    url: "https://www.ranknexai.com/services/seo",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function SeoPage() {
  return <SeoContent />;
}
