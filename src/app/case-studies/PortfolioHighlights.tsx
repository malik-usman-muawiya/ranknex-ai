"use client";

import Link from "next/link";
import { TrendingUp, Code2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { caseStudyHighlights } from "@/data/caseStudyHighlights";

export default function PortfolioHighlights() {
  const seoCount = caseStudyHighlights.filter((h) => h.category === "SEO").length;
  const developerCount = caseStudyHighlights.filter((h) => h.category === "Developer").length;

  const categories = [
    {
      href: "/case-studies/seo",
      icon: TrendingUp,
      title: "SEO Case Studies",
      desc: "Rankings, organic traffic and lead growth, tracked from real Google Search Console, Google Analytics, and Google Business Profile data.",
      count: seoCount,
    },
    {
      href: "/case-studies/developer",
      icon: Code2,
      title: "Developer Case Studies",
      desc: "Custom Odoo ERP modules, full-stack React applications, and WordPress builds shipped to production for real businesses.",
      count: developerCount,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          tag="Verified Results"
          title={<>Real Client Results, <span className="gradient-text font-bold">Across SEO and Software Development</span></>}
          subtitle="No estimates, no filler. Every SEO result is pulled directly from Google — and every development project shown is live, shipped software."
        />

        {/* Service Category Cards */}
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
                  View {cat.count} {cat.count === 1 ? "case study" : "case studies"}
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
                A Results-Driven SEO Agency, Backed by Verified Data
              </h2>
              <p className="text-slate-400 leading-relaxed">
                As an SEO agency working with e-commerce stores, local service businesses, and SaaS
                companies across the UK, US, and Pakistan, we don&apos;t report on estimates or
                third-party rank trackers. Every organic traffic case study on this site is pulled
                directly from Google Search Console, Google Analytics, and Google Business Profile —
                the same tools our clients can log into themselves. That&apos;s why our SEO case
                studies cover real, verifiable outcomes: keyword rankings moving from page 3 to page
                1, organic click growth of 16x or more, e-commerce revenue climbing 74% in a single
                month, and local businesses converting Google Business Profile visibility into
                hundreds of tracked phone calls. If you&apos;re evaluating an SEO agency in Lahore or
                anywhere else, this is what verified, data-backed organic growth actually looks like.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-950 mb-3">
                Odoo ERP, React, and WordPress Development Case Studies
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Alongside SEO and digital marketing, our development team builds real, production
                software — not demo templates. Our Odoo ERP development case studies cover custom
                modules for legal case management, intellectual property tracking, and corporate
                billing workflows, all built and deployed inside clients&apos; existing Odoo
                instances. Our React development work includes full-stack applications built from the
                ground up, including an affiliate marketplace listing hundreds of active programs. And
                our WordPress development case studies show complete business websites taken from
                design through live deployment. Whether you need Odoo ERP customization, a custom
                React web application, or a professional WordPress build, these case studies reflect
                software our developers have actually shipped and clients are actively using.
              </p>
            </div>

            <div className="pt-2 text-center">
              <p className="text-slate-400 leading-relaxed mb-5">
                Want results like these for your own business? Get a free audit of your SEO
                performance or talk to us about your next development project.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 py-3 px-7 text-sm"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
