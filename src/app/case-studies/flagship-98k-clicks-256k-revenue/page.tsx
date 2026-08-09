import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Flagship SEO Case Study: 98K Clicks & $256K Monthly Revenue | RankNex AI",
  description:
    "How RankNex AI drove 98,000 organic clicks in 6 months and $256,965 in monthly e-commerce revenue for a combined local + e-commerce SEO engagement.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/flagship-98k-clicks-256k-revenue",
  },
  openGraph: {
    title: "Flagship SEO Case Study: 98K Clicks & $256K Monthly Revenue | RankNex AI",
    description:
      "Real Google Search Console and store dashboard data: 98K organic clicks in 6 months and $256,965.50 in monthly revenue, up 54.6%.",
    url: "https://www.ranknexai.com/case-studies/flagship-98k-clicks-256k-revenue",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Flagship Result — Local + E-Commerce"
      title="98,000 Organic Clicks and $256,965 in Monthly Revenue"
      clientLine="Combined local + e-commerce SEO engagement — the strongest result set in our portfolio"
      heroMetrics={[
        { value: "98K", label: "Clicks", sublabel: "6-month trend" },
        { value: "3.24M", label: "Impressions", sublabel: "6-month trend" },
        { value: "$256.9K", label: "Monthly Revenue", sublabel: "+54.6%" },
        { value: "3%", label: "Avg. CTR" },
      ]}
      overview="This is the strongest result set in our portfolio: a combined local and e-commerce SEO engagement that grew across every metric we track, search visibility, click-through rate, ranking position, and revenue. Over 6 months, organic clicks grew from 68K to 98K and impressions grew from 2.24M to 3.24M, while average position nearly doubled, improving from 17 to 8.5. On the revenue side, the store hit $256,965.50 in monthly revenue, up 54.6% month over month, with orders up 52.86%, direct, measurable proof that the organic growth converted into serious business revenue."
      challenge={[
        "Average ranking position sat at 17 six months prior, well outside page 1 for most competitive terms.",
        "Store revenue growth had plateaued, and traffic gains weren't reliably converting into proportional order growth.",
        "Needed a strategy covering both local search visibility and e-commerce conversion performance simultaneously, not two disconnected efforts.",
      ]}
      strategy={[
        {
          title: "Technical & On-Page SEO at Scale",
          description:
            "Systematic technical fixes and on-page optimization across the highest-opportunity pages, prioritized by search volume and current ranking proximity to page 1.",
        },
        {
          title: "Click-Through Rate Optimization",
          description:
            "Rewrote titles and meta descriptions specifically to improve CTR, not just rankings, pushing average CTR to 2.6-3% versus a typical 1-2% benchmark.",
        },
        {
          title: "E-Commerce Conversion Alignment",
          description:
            "Aligned SEO-driven landing pages with actual purchase intent, ensuring the growing organic traffic had a clear, frictionless path to checkout.",
        },
        {
          title: "Continuous Iteration Across Timeframes",
          description:
            "Monitored performance across 24-hour, weekly, monthly, and quarterly windows to catch both immediate wins and long-term compounding trends.",
        },
      ]}
      gallery={[
        { src: "/case-studies/p7-24hours.png", caption: "Last 24 Hours: 523 clicks, 2.8% CTR, position 6.3" },
        { src: "/case-studies/p7-7days.png", caption: "Last 7 Days: 4.7K clicks, 216K impressions, position 6.7" },
        { src: "/case-studies/p7-28days.png", caption: "Last 28 Days: 17.2K clicks, 663K impressions, 2.6% CTR" },
        { src: "/case-studies/p7-3months.png", caption: "Last 3 Months: 49.7K clicks, 1.87M impressions, 2.7% CTR" },
        { src: "/case-studies/p7-6month.png", caption: "6-Month Trend: 98K clicks (up from 68K), position improved from 17 to 8.5" },
        { src: "/case-studies/p7-store-overview.png", caption: "E-Commerce Store Overview, March 2026: $256,965.50 revenue, +54.6% month over month" },
      ]}
      results={[
        "Organic clicks grew from 68K to 98K over 6 months.",
        "Impressions grew from 2.24M to 3.24M over the same period.",
        "Average ranking position nearly doubled, improving from 17 to 8.5.",
        "Click-through rate held at an exceptional 2.6-3% across every reporting window, well above the typical 1-2% industry benchmark.",
        "E-commerce revenue hit $256,965.50 for the month, up 54.6%, with orders up 52.86% and new customers up 45.06%.",
      ]}
      finalMetrics={[
        { value: "98K", label: "6-Month Clicks" },
        { value: "$256.9K", label: "Monthly Revenue" },
        { value: "17 → 8.5", label: "Position Improvement" },
        { value: "989", label: "Monthly Orders" },
      ]}
    />
  );
}
