import { Metadata } from "next";
import PortfolioHighlights from "./PortfolioHighlights";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | RankNex AI Pakistan",
  description: "See how RankNex AI helped UK, US, and Pakistani brands grow organic traffic, lower acquisition costs, and scale qualified leads through SEO and PPC.",
  keywords: [
    "digital marketing case studies",
    "seo results client stories",
    "paid advertising case studies",
    "conversion optimization success",
    "ranknex ai results"
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies",
  },
  openGraph: {
    title: "Case Studies & Client Success Stories | RankNex AI",
    description: "Proof in numbers. Real growth results and case studies from search engine optimization, PPC advertising, and web development.",
    url: "https://www.ranknexai.com/case-studies",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

// Render on-demand so the page never tries to reach the database at build time.
export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PortfolioHighlights />
    </>
  );
}
