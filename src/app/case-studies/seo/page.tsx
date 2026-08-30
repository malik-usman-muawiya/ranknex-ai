import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyGrid from "@/components/portfolio/CaseStudyGrid";
import { caseStudyHighlights } from "@/data/caseStudyHighlights";

export const metadata: Metadata = {
  title: "SEO Case Studies | Verified Google Search Console & Analytics Results",
  description:
    "Real SEO case studies from RankNex AI — organic traffic growth, keyword ranking improvements, and revenue results verified directly from Google Search Console, Google Analytics, and Google Business Profile.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/seo",
  },
  openGraph: {
    title: "SEO Case Studies | RankNex AI",
    description:
      "Verified SEO results for e-commerce, local, and UK/US/Pakistan clients — organic traffic, rankings, and revenue growth backed by real Google data.",
    url: "https://www.ranknexai.com/case-studies/seo",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function SeoCaseStudiesPage() {
  const seoStudies = caseStudyHighlights.filter((h) => h.category === "SEO");

  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>

        <SectionHeading
          tag="SEO Case Studies"
          title={<>Organic Growth, <span className="gradient-text font-bold">Backed by Real Google Data</span></>}
          subtitle="Every result below is pulled directly from Google Search Console, Google Analytics, and Google Business Profile — no estimates, no third-party tools."
        />

        <CaseStudyGrid items={seoStudies} />
      </div>
    </main>
  );
}
