import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyGrid from "@/components/portfolio/CaseStudyGrid";
import { caseStudyHighlights } from "@/data/caseStudyHighlights";

export const metadata: Metadata = {
  title: "Developer Case Studies | Odoo ERP, React & WordPress Development",
  description:
    "Real development case studies from RankNex AI — custom Odoo ERP modules, full-stack React applications, and WordPress websites built and shipped to production.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/developer",
  },
  openGraph: {
    title: "Developer Case Studies | RankNex AI",
    description:
      "Custom Odoo ERP modules, React applications, and WordPress builds — real projects shipped to production for real clients.",
    url: "https://www.ranknexai.com/case-studies/developer",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function DeveloperCaseStudiesPage() {
  const developerStudies = caseStudyHighlights.filter((h) => h.category === "Developer");

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
          tag="Developer Case Studies"
          title={<>Custom Software, <span className="gradient-text font-bold">Built and Shipped to Production</span></>}
          subtitle="Odoo ERP modules, React applications, and WordPress websites — real systems built for real businesses, not demo templates."
        />

        <CaseStudyGrid items={developerStudies} />
      </div>
    </main>
  );
}
