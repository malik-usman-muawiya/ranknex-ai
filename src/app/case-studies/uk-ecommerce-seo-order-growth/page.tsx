import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "UK E-Commerce SEO Case Study: +27.6% Orders Month over Month | RankNex AI",
  description:
    "How RankNex AI grew orders 27.66% and revenue steadily for a UK-based high-ticket e-commerce store through product SEO, on-page fixes, and structured data.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/uk-ecommerce-seo-order-growth",
  },
  openGraph: {
    title: "UK E-Commerce SEO Case Study: +27.6% Orders Month over Month | RankNex AI",
    description:
      "Real store dashboard data from a UK e-commerce brand showing orders up 27.66% and revenue growing steadily month over month.",
    url: "https://www.ranknexai.com/case-studies/uk-ecommerce-seo-order-growth",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="E-Commerce SEO — UK Market"
      title="27.66% More Orders for a High-Ticket UK E-Commerce Brand"
      clientLine="UK e-commerce store — international SEO, product content & structured data"
      heroMetrics={[
        { value: "+27.6%", label: "Orders", sublabel: "month over month" },
        { value: "+18.8%", label: "Visits", sublabel: "month over month" },
        { value: "+6.9%", label: "Revenue", sublabel: "month over month" },
        { value: "£335", label: "Avg. Order Value" },
      ]}
      overview="This UK-based store sells a smaller volume of higher-ticket products, which meant SEO here needed to attract the right buyers, not just more traffic. Working within international (UK-market) search conventions, we optimized product content, fixed on-page issues, and implemented structured data. The result: visits grew 18.79%, orders grew 27.66%, and revenue continued climbing steadily, proof that SEO-driven traffic translated into real purchases even in a smaller, higher-value store."
      challenge={[
        "Higher-ticket products meant a smaller total order volume, so every incremental visitor needed to count, low-intent traffic wasn't going to move the needle.",
        "International SEO conventions (UK search behavior, currency, and terminology) needed to be reflected properly across product content.",
        "Missing structured data meant Google had limited context on product pricing, availability, and reviews, likely holding back rich-result visibility.",
      ]}
      strategy={[
        {
          title: "UK-Market Product Content",
          description:
            "Rewrote product descriptions and category content using UK search terminology and buyer language, rather than generic or US-centric copy.",
        },
        {
          title: "On-Page Fixes",
          description:
            "Corrected title tags, header structure, and internal linking across the product catalog to improve relevance signals for target keywords.",
        },
        {
          title: "Structured Data Implementation",
          description:
            "Added product schema (pricing, availability, reviews) so Google could surface richer, more clickable listings in search results.",
        },
      ]}
      gallery={[
        { src: "/case-studies/p4-store-overview.png", caption: "Store Overview, March 2026: Visits +18.79%, Orders +27.66%, Revenue +6.93%" },
      ]}
      results={[
        "Store visits grew 18.79% month over month.",
        "Conversion rate improved 7.58%, showing traffic quality held up alongside volume growth.",
        "Orders grew 27.66% in a single month, the strongest metric movement in this engagement.",
        "Revenue grew 6.93% month over month, with average order value at £335.16, reflecting a broader customer base while still capturing high-value orders.",
      ]}
      finalMetrics={[
        { value: "+27.6%", label: "Order Growth" },
        { value: "+16.7%", label: "New Customers" },
        { value: "£20.1K", label: "Monthly Revenue" },
        { value: "60", label: "Orders" },
      ]}
    />
  );
}
