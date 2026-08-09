import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "E-Commerce SEO Case Study: +74% Revenue in 1 Month | RankNex AI",
  description:
    "How RankNex AI's e-commerce SEO work grew a store's monthly revenue by 74%, orders by 101%, and organic clicks by 26.6%, verified with real store dashboard data.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/ecommerce-seo-74-percent-revenue-growth",
  },
  openGraph: {
    title: "E-Commerce SEO Case Study: +74% Revenue in 1 Month | RankNex AI",
    description:
      "Real store dashboard data showing revenue up 74%, orders up 101%, and organic clicks up 26.6% in a single month.",
    url: "https://www.ranknexai.com/case-studies/ecommerce-seo-74-percent-revenue-growth",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="E-Commerce SEO"
      title="Orders More Than Doubled, Revenue Up 74% in a Single Month"
      clientLine="US e-commerce store — product SEO, technical fixes & Merchant listing setup"
      heroMetrics={[
        { value: "+74%", label: "Revenue", sublabel: "month over month" },
        { value: "+101%", label: "Orders", sublabel: "month over month" },
        { value: "+46%", label: "Visits", sublabel: "month over month" },
        { value: "$21.2K", label: "Monthly Revenue" },
      ]}
      overview="This US-based e-commerce store needed more than traffic, they needed traffic that converted into actual orders. We ran a full-funnel SEO engagement covering product page optimization, technical fixes, content, and Google Merchant listing setup. Within a single month, visits were up 46%, orders more than doubled, and revenue grew 74%, direct evidence that the organic traffic increase converted into real, paying customers rather than just vanity page views."
      challenge={[
        "Product pages were not optimized for the search terms actual buyers were using, limiting organic visibility for high-intent traffic.",
        "Technical issues on the storefront were likely suppressing indexing and ranking potential for product and category pages.",
        "No Google Merchant listing setup, meaning the store was missing free product visibility in Google Shopping-style placements.",
      ]}
      strategy={[
        {
          title: "Product Page SEO",
          description:
            "Rewrote product titles, descriptions, and structured data to match real buyer search intent, rather than generic manufacturer copy.",
        },
        {
          title: "Technical Fixes",
          description:
            "Resolved crawlability and indexing issues across the storefront so search engines could properly discover and rank product and category pages.",
        },
        {
          title: "Content Support",
          description:
            "Added supporting content around key product categories to capture additional top-of-funnel search traffic and build topical relevance.",
        },
        {
          title: "Google Merchant Listing Setup",
          description:
            "Configured the store's product feed for Google Merchant, unlocking additional free organic product visibility beyond standard search results.",
        },
      ]}
      gallery={[
        { src: "/case-studies/p2-store-overview.png", caption: "Store Overview, Last 28 Days: Visits +46.12%, Orders +101.46%, Revenue +74.23%" },
        { src: "/case-studies/p2-search-mobile.png", caption: "Google Search Performance (Mobile): 4.23K clicks, +26.6% over 28 days" },
      ]}
      results={[
        "Store visits grew 46.12% month over month, from organic search-driven traffic.",
        "Conversion rate improved 39.04%, meaning traffic quality improved alongside volume.",
        "Orders grew 101.46%, more than doubling in a single month.",
        "Revenue grew 74.23% to $21,196.61 for the month.",
        "Mobile organic search clicks climbed 26.6% over the same 28-day period, confirming the order growth was directly tied to search visibility gains.",
      ]}
      finalMetrics={[
        { value: "+74%", label: "Revenue Growth" },
        { value: "+101%", label: "Order Growth" },
        { value: "391", label: "New Customers" },
        { value: "413", label: "Total Orders" },
      ]}
    />
  );
}
