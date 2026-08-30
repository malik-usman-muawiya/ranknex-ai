import { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Code2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Meet Our Team | SEO & Development Experts | RankNex AI",
  description:
    "Meet the SEO specialists and software developers behind RankNex AI — an AI-powered digital marketing and development agency serving businesses in the UK, US, and Pakistan.",
  alternates: {
    canonical: "https://www.ranknexai.com/team",
  },
  openGraph: {
    title: "Meet Our Team | RankNex AI",
    description:
      "The SEO specialists and developers delivering measurable growth and production software for RankNex AI clients.",
    url: "https://www.ranknexai.com/team",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function TeamPage() {
  const categories = [
    {
      href: "/team/seo",
      icon: TrendingUp,
      title: "Meet the SEO Team",
      desc: "The SEO executive and specialists running keyword research, technical audits, content strategy, and link building for every client account.",
    },
    {
      href: "/team/development",
      icon: Code2,
      title: "Meet the Development Team",
      desc: "The full-stack developers building custom Odoo ERP modules, React applications, and WordPress websites, shipped to production.",
    },
  ];

  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container">
        <SectionHeading
          tag="The People Behind RankNex AI"
          title={<>Meet the <span className="gradient-text font-bold">Team Driving Your Results</span></>}
          subtitle="A dedicated SEO team and a dedicated development team, working together under one roof to grow and build for our clients."
        />

        {/* Category Cards */}
        <ScrollReveal delay={0.05}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group text-left rounded-2xl p-7 card-glass border border-navy-950/5 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all"
              >
                <cat.icon className="w-9 h-9 mb-4 text-teal-500" />
                <h3 className="text-xl font-bold font-heading text-navy-950 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 mb-4">
                  {cat.desc}
                </p>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-teal-500 group-hover:gap-2.5 transition-all">
                  Meet the team
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* Keyword-rich supporting content */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-950 mb-3">
                A Digital Marketing and Development Agency Built on Real Expertise
              </h2>
              <p className="text-slate-400 leading-relaxed">
                RankNex AI is an AI-powered digital marketing and development agency serving
                businesses across the UK, US, and Pakistan since 2024. Behind every SEO campaign
                and every line of code is a dedicated team, not a single freelancer juggling
                every discipline. Our SEO team handles keyword research, on-page and technical
                SEO, content optimization, Google Business Profile management, and link building.
                Our development team builds and ships real software: custom Odoo ERP modules,
                full-stack React applications, and complete WordPress websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-950 mb-3">
                Why It Matters Who&apos;s Behind Your Account
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Whether you&apos;re looking for an SEO agency in Lahore, a partner for Odoo ERP
                development, or a team that can build a custom React or WordPress website, you
                should know exactly who&apos;s doing the work. Our SEO executive leads keyword
                strategy and technical audits with support from junior SEO specialists focused on
                on-page optimization, content writing, backlink building, and social media
                management. Our development lead architects ERP customizations and full-stack
                applications with support from junior developers focused on front-end
                implementation and full-stack feature work. Explore each team below to see who
                you&apos;d actually be working with.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
