import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Target, Users, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SeniorMemberCard from "@/components/team/SeniorMemberCard";
import JuniorMemberCard from "@/components/team/JuniorMemberCard";

export const metadata: Metadata = {
  title: "Meet the SEO Team | Keyword Research, On-Page & Technical SEO | RankNex AI",
  description:
    "Meet the SEO team at RankNex AI — keyword research, on-page and technical SEO, content optimization, backlink building, and social media management for clients across the UK, US, and Pakistan.",
  alternates: {
    canonical: "https://www.ranknexai.com/team/seo",
  },
  openGraph: {
    title: "Meet the SEO Team | RankNex AI",
    description:
      "The SEO executive and specialists running keyword research, technical audits, content strategy, and link building for RankNex AI clients.",
    url: "https://www.ranknexai.com/team/seo",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function SeoTeamPage() {
  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Meet the Full Team</span>
        </Link>

        <SectionHeading
          tag="The SEO Team"
          title={<>Meet the <span className="gradient-text font-bold">SEO Specialists</span> Behind Your Rankings</>}
          subtitle="Real search-engine results, tracked directly from Google Search Console, Google Analytics, and Google Business Profile."
        />

        {/* Senior SEO Executive */}
        <SeniorMemberCard
          photo="/team/muhammad-usman-seo-specialist.webp"
          photoAlt="Muhammad Usman - SEO Executive and Digital Marketing Specialist specializing in Technical SEO, AEO, GEO and AIO"
          name="Muhammad Usman"
          title="SEO Executive & Digital Marketing Specialist"
          stats={[
            { value: "2+ Yrs", label: "SEO Experience" },
            { value: "100+", label: "Backlink Platforms" },
            { value: "16x", label: "Organic Click Growth" },
            { value: "3", label: "Markets Served" },
          ]}
          bioParagraphs={[
            <>
              A results-driven SEO specialist with hands-on experience running{" "}
              <strong className="text-navy-950">On-Page SEO</strong>,{" "}
              <strong className="text-navy-950">Technical SEO</strong>, and{" "}
              <strong className="text-navy-950">Off-Page SEO</strong> for real estate,
              e-commerce, and local service businesses across Pakistan, the UK, and the US. His
              work spans full technical audits, keyword research, content strategy, Google
              Business Profile optimization, and multi-platform link building, always measured
              against real Search Console and Analytics data, not vanity metrics.
            </>,
            <>
              Beyond traditional rankings, he optimizes content for how search is actually
              evolving: structuring pages to win featured snippets and voice results through{" "}
              <strong className="text-navy-950">Answer Engine Optimization (AEO)</strong>,
              formatting content to be cited inside AI Overviews and chatbot answers through{" "}
              <strong className="text-navy-950">Generative Engine Optimization (GEO)</strong>,
              and preparing sites for AI-driven discovery through{" "}
              <strong className="text-navy-950">AI Optimization (AIO)</strong>, alongside core{" "}
              <strong className="text-navy-950">Local SEO</strong> and{" "}
              <strong className="text-navy-950">Search Engine Marketing (SEM)</strong>{" "}
              fundamentals.
            </>,
          ]}
          tags={[
            "On-Page SEO",
            "Technical SEO",
            "Off-Page SEO",
            "Local SEO",
            "AEO (Answer Engine Optimization)",
            "GEO (Generative Engine Optimization)",
            "AIO (AI Optimization)",
            "SEM",
            "Keyword Research",
            "Content Strategy",
            "Google Business Profile (GBP)",
            "Link Building",
          ]}
          metrics={[
            {
              icon: TrendingUp,
              value: "22.4K → 1.98M",
              label: "Clicks & impressions grown across a 6-month organic campaign, position improved from 27 to 6.2",
            },
            {
              icon: Target,
              value: "+101% Orders",
              label: "E-commerce SEO client saw orders and revenue more than double within 28 days",
            },
            {
              icon: Users,
              value: "100+ Platforms",
              label: "High-authority backlink campaigns executed across Medium, GitHub, Quora, Reddit and Pinterest",
            },
            {
              icon: ShieldCheck,
              value: "Full Technical Audits",
              label: "Indexing, crawling, redirect chains and duplicate-tag issues identified and resolved end-to-end",
            },
          ]}
        />

        {/* Junior SEO Specialists */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-heading text-navy-950 text-center mb-10">
              Junior SEO Specialists
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <JuniorMemberCard
              photo={null}
              photoAlt="Syed Fahad - Junior SEO Specialist and Social Media Manager at RankNex AI"
              name="Syed Fahad"
              title="Junior SEO Specialist | Social Media Management"
              bio="Supports the team in improving website visibility, organic traffic, and search performance through keyword research, on-page optimization, content optimization, competitor analysis, and website audits. Also contributes to social media management, content publishing, and audience engagement."
              skills={["Keyword Research", "On-Page SEO", "Competitor Analysis", "Website Audits", "Social Media Management"]}
              delay={0}
            />
            <JuniorMemberCard
              photo="/team/taha-butt-junior-seo-specialist.webp"
              photoAlt="Taha Butt - Junior SEO Specialist and Content Writer at RankNex AI"
              name="Taha Butt"
              title="Junior SEO Specialist | Content Writing & Backlink Building"
              bio="Supports RankNex AI's SEO campaigns through keyword research, on-page optimization, competitor analysis, content optimization, and website audits. Specializes in content writing and backlink building, researching search intent and identifying link opportunities that support website authority."
              skills={["Keyword Research", "On-Page SEO", "Content Writing", "Backlink Building", "Website Audits"]}
              delay={0.08}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
