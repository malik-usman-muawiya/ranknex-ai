import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Organic Search Growth Case Study: 16x Clicks in 6 Months",
  description:
    "See how RankNex AI's SEO work grew a client website's organic clicks 16x and impressions 17x in 6 months, with average position improving from page 3 to page 1.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/organic-search-growth-16x-clicks",
  },
  openGraph: {
    title: "Organic Search Growth Case Study: 16x Clicks in 6 Months | RankNex AI",
    description:
      "Real Google Search Console data showing organic clicks grow 16x and average position improve from 27 to 6.2 in 6 months.",
    url: "https://www.ranknexai.com/case-studies/organic-search-growth-16x-clicks",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Organic SEO"
      title="16x More Organic Clicks in 6 Months, Verified in Google Search Console"
      clientLine="Primary website — full on-page and technical SEO engagement"
      heroMetrics={[
        { value: "22.4K", label: "Clicks", sublabel: "up from 1.38K" },
        { value: "1.98M", label: "Impressions", sublabel: "up from 116K" },
        { value: "6.2", label: "Avg. Position", sublabel: "from position 27" },
        { value: "16x", label: "Click Growth", sublabel: "6-month trend" },
      ]}
      overview="This client came to us ranking on page 3 of Google for their core keywords, with organic traffic that had stalled for months. Over a 6-month engagement covering technical SEO, on-page optimization, and content, we moved their average ranking position from 27 to 6.2, taking them from page 3 to the top of page 1. The results below are pulled directly from Google Search Console across four different reporting windows (24 hours, 7 days, 28 days, and 6 months), showing the growth held consistently rather than spiking once and fading."
      challenge={[
        "Average ranking position stuck at 27 (page 3), effectively invisible to searchers who rarely scroll past page 1.",
        "Organic clicks flat at roughly 1.38K over a 6-month period, with impressions similarly stagnant at 116K.",
        "No clear technical SEO foundation in place: unaddressed crawlability, indexing, and on-page issues were likely limiting ranking potential.",
      ]}
      strategy={[
        {
          title: "Technical SEO Audit & Fixes",
          description:
            "Full crawl of the site to identify indexing issues, broken internal links, missing schema markup, and Core Web Vitals problems, all fixed before any content work began.",
        },
        {
          title: "On-Page Optimization",
          description:
            "Rewrote title tags, meta descriptions, header structure, and internal linking across priority pages to match actual search intent for target keywords.",
        },
        {
          title: "Content Strategy",
          description:
            "Identified and closed content gaps against top-ranking competitors, publishing and updating pages built around the keywords with the clearest ranking opportunity.",
        },
        {
          title: "Ongoing Monitoring & Iteration",
          description:
            "Tracked ranking movement weekly and adjusted the priority list as pages started moving, doubling down on what was working rather than following a fixed plan blindly.",
        },
      ]}
      gallery={[
        { src: "/case-studies/p1-6month.png", caption: "6-Month Trend: 22.4K clicks (up from 1.38K), average position improved from 27 to 6.2" },
        { src: "/case-studies/p1-28days.png", caption: "Last 28 Days: 7.77K clicks, 744K impressions, position 5.3" },
        { src: "/case-studies/p1-7days.png", caption: "Last 7 Days: 1.9K clicks, 198K impressions, position 5.4" },
        { src: "/case-studies/p1-24hours.png", caption: "Last 24 Hours: 221 clicks, 25.1K impressions, position 5.9" },
      ]}
      results={[
        "Organic clicks grew from 1.38K to 22.4K over 6 months, a 16x increase.",
        "Impressions grew from 116K to 1.98M, a 17x increase.",
        "Average ranking position improved from 27 (page 3) to 6.2 (top of page 1).",
        "Growth held consistently across every reporting window tested, from 24-hour snapshots to the full 6-month trend, confirming this is sustained performance, not a temporary spike.",
      ]}
      finalMetrics={[
        { value: "16x", label: "Clicks Growth" },
        { value: "17x", label: "Impressions Growth" },
        { value: "Page 1", label: "From Page 3" },
        { value: "6 Months", label: "Engagement Length" },
      ]}
    />
  );
}
