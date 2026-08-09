import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Local SEO Case Study: 513 Phone Calls from Google Business Profile | RankNex AI",
  description:
    "How RankNex AI's local SEO work generated 513 tracked phone calls and 2,750 total Business Profile interactions for a local service business.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/local-seo-513-phone-calls",
  },
  openGraph: {
    title: "Local SEO Case Study: 513 Phone Calls from Google Business Profile | RankNex AI",
    description:
      "Real Google Business Profile and Search Console data showing 513 tracked calls and 2,750 total interactions from local SEO work.",
    url: "https://www.ranknexai.com/case-studies/local-seo-513-phone-calls",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Local SEO"
      title="513 Phone Calls Generated Directly from Google Business Profile"
      clientLine="Local service business — Google Business Profile optimization & citation building"
      heroMetrics={[
        { value: "513", label: "Phone Calls", sublabel: "6 months" },
        { value: "2,750", label: "Total Interactions", sublabel: "GBP" },
        { value: "9.8", label: "Best Avg. Position" },
        { value: "0.7%", label: "Best CTR" },
      ]}
      overview="Local SEO only matters if it produces real customer actions, not just map-pack rankings. For this local service business, we ran Google Business Profile optimization, citation building, and NAP consistency work alongside standard on-page SEO. Over the reporting period, this generated 513 tracked phone calls directly from the Business Profile and 2,750 total profile interactions (calls, direction requests, website clicks), while organic search position steadily improved from 12 down to under 8."
      challenge={[
        "Business Profile was not optimized for the local service categories the business actually wanted to be found for.",
        "Inconsistent NAP (name, address, phone) data across citations was likely diluting local ranking signals.",
        "Average search position sat around 12, well outside the local pack most customers actually click on.",
      ]}
      strategy={[
        {
          title: "Google Business Profile Optimization",
          description:
            "Rebuilt the profile's categories, service descriptions, and photos to accurately reflect what the business offers and match how customers actually search.",
        },
        {
          title: "Citation Building & NAP Consistency",
          description:
            "Audited and corrected business name, address, and phone number consistency across major citation sources to strengthen local ranking signals.",
        },
        {
          title: "On-Page Local SEO",
          description:
            "Optimized location and service pages on the website itself to reinforce the same local relevance signals Google was seeing from the Business Profile.",
        },
        {
          title: "Ongoing Monitoring",
          description:
            "Tracked both organic search performance and direct Business Profile actions (calls, direction requests) monthly to confirm the work was producing real customer contact, not just visibility.",
        },
      ]}
      gallery={[
        { src: "/case-studies/p6-3months.png", caption: "Search Console, Last 3 Months: 2.94K clicks, 610K impressions, position 12" },
        { src: "/case-studies/p6-28days.png", caption: "Search Console, Last 28 Days: 1.02K clicks, position improved to 10.8" },
        { src: "/case-studies/p6-7days.png", caption: "Search Console, Last 7 Days: 227 clicks, position 9.8, first time under 10" },
        { src: "/case-studies/p6-24hours.png", caption: "Search Console, Last 24 Hours: position 7.9, CTR 0.7%, best short-term result" },
        { src: "/case-studies/p6-gbp-calls.png", caption: "Google Business Profile Calls (Oct 2025 – Mar 2026): 513 total calls" },
        { src: "/case-studies/p6-gbp-overview.png", caption: "Google Business Profile Overview (Oct 2025 – Mar 2026): 2,750 total interactions" },
      ]}
      results={[
        "513 phone calls generated directly from the Google Business Profile over the reporting period.",
        "2,750 total Business Profile interactions, including calls, direction requests, and website clicks.",
        "Average search position improved from 12 (quarterly) to 10.8 (monthly) to 9.8 (weekly) to 7.9 (most recent 24 hours), a clear, compounding upward trend.",
        "Click-through rate improved to 0.7% in the most recent period, the highest recorded for this project.",
      ]}
      finalMetrics={[
        { value: "513", label: "Tracked Calls" },
        { value: "2,750", label: "Total Interactions" },
        { value: "12 → 7.9", label: "Position Improvement" },
        { value: "6 Months", label: "Reporting Period" },
      ]}
    />
  );
}
