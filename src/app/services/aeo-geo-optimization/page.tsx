import { Metadata } from "next";
import AeoGeoContent from "./AeoGeoContent";

export const metadata: Metadata = {
  title: "AEO & GEO Services | AI Search Optimization - RankNex AI",
  description:
    "RankNex AI helps businesses get recommended by ChatGPT, Perplexity, and Google AI Overviews with Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) services.",
  keywords: [
    "answer engine optimization",
    "generative engine optimization",
    "AEO services",
    "GEO services",
    "AI search optimization",
    "get featured in ChatGPT",
    "Google AI Overviews optimization",
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/services/aeo-geo-optimization",
  },
  openGraph: {
    title: "AEO & GEO Services | AI Search Optimization - RankNex AI",
    description:
      "Get your business recommended inside ChatGPT, Perplexity, Gemini, and Google AI Overviews, not just ranked in traditional search results.",
    url: "https://www.ranknexai.com/services/aeo-geo-optimization",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO & GEO Services | AI Search Optimization - RankNex AI",
    description:
      "Get your business recommended inside ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  },
};

export default function AeoGeoPage() {
  return <AeoGeoContent />;
}
