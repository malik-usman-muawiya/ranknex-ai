import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "React Development Case Study: Affiliate Plus Marketplace",
  description:
    "How RankNex AI built Affiliate Plus, a full-stack React affiliate marketplace with program browsing, category filters, and a network directory.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/affiliate-plus-marketplace",
  },
  openGraph: {
    title: "React Development Case Study: Affiliate Plus Marketplace | RankNex AI",
    description:
      "A live directory covering hundreds of affiliate programs across dozens of categories and multiple ad networks.",
    url: "https://www.ranknexai.com/case-studies/affiliate-plus-marketplace",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="React Development"
      title="Affiliate Plus: A Full-Stack Affiliate Marketplace"
      clientLine="AFFILIATE.Plus — affiliate program directory and marketplace"
      heroMetrics={[
        { value: "900+", label: "Affiliate Programs" },
        { value: "40+", label: "Categories" },
        { value: "Multiple", label: "Ad Networks" },
      ]}
      overview="Needed a full affiliate marketplace connecting publishers with affiliate programs across many categories and ad networks — browsable, filterable, and built to scale. We built Affiliate Plus, a full-stack React affiliate platform with program browsing, category filters, a network directory, and promo listings."
      challenge={[
        "Needed to organize hundreds of affiliate programs across dozens of categories in a way publishers could actually browse and filter.",
        "Required a network directory and promo listings alongside the core program browser, all in one platform.",
      ]}
      strategy={[
        {
          title: "Full-Stack React Platform",
          description:
            "Built the entire marketplace as a full-stack React application, covering program browsing, category filtering, and network directory features.",
        },
        {
          title: "Scalable Data Structure",
          description:
            "Structured the underlying data model to comfortably support hundreds of programs across dozens of categories and multiple ad networks.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/react-affiliate-plus.webp", caption: "AFFILIATE.Plus — program browser with category filters and network directory" },
      ]}
      results={[
        "A live directory covering hundreds of affiliate programs across dozens of categories.",
        "A network directory and promo listings integrated into the same platform.",
      ]}
      finalMetrics={[
        { value: "900+", label: "Programs" },
        { value: "40+", label: "Categories" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
