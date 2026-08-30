import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Odoo Development Case Study: Demarcation Management Module",
  description:
    "How RankNex AI built a custom Odoo module for tracking land and property demarcation cases and boundary records.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/demarcation-management-module",
  },
  openGraph: {
    title: "Odoo Development Case Study: Demarcation Management Module | RankNex AI",
    description:
      "A purpose-built Odoo module bringing demarcation case tracking into the same system as the rest of the client's operations.",
    url: "https://www.ranknexai.com/case-studies/demarcation-management-module",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Odoo ERP Development"
      title="A Custom Odoo Module for Demarcation Case Tracking"
      clientLine="Land & property services — demarcation case and boundary tracking"
      heroMetrics={[
        { value: "1", label: "Custom Module" },
        { value: "Odoo", label: "Platform" },
        { value: "Live", label: "Status" },
      ]}
      overview="The client needed to track land and property demarcation cases and boundary records inside their existing business system rather than on paper. We built a custom Odoo module purpose-built for demarcation case tracking, integrated into the client's existing instance."
      challenge={[
        "Demarcation case and boundary records were tracked on paper or outside the client's main business system.",
        "No structured way to search or report on demarcation cases alongside the rest of the client's operations.",
      ]}
      strategy={[
        {
          title: "Purpose-Built Odoo Module",
          description:
            "Designed a custom module specifically for demarcation case records, integrated directly into the client's existing Odoo instance.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/odoo-erp-suite-overview.webp", caption: "Odoo ERP suite — demarcation tracking added as a custom module" },
      ]}
      results={[
        "Brought demarcation case tracking into the same system as the rest of the client's operations.",
        "Replaced paper-based tracking with a searchable, structured module.",
      ]}
      finalMetrics={[
        { value: "Odoo", label: "Platform" },
        { value: "Custom Module", label: "Built From Scratch" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
