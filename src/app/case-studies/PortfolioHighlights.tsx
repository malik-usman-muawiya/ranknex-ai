"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Category = "SEO" | "Developer";

interface Highlight {
  slug: string;
  tag: string;
  title: string;
  stat: string;
  image: string;
  category: Category;
}

const highlights: Highlight[] = [
  {
    slug: "flagship-98k-clicks-256k-revenue",
    tag: "Flagship Result",
    title: "98K Organic Clicks & $256K Monthly Revenue",
    stat: "+54.6% Revenue",
    image: "/case-studies/p7-6month.png",
    category: "SEO",
  },
  {
    slug: "organic-search-growth-16x-clicks",
    tag: "Organic SEO",
    title: "16x More Organic Clicks in 6 Months",
    stat: "Page 3 → Page 1",
    image: "/case-studies/p1-6month.png",
    category: "SEO",
  },
  {
    slug: "ecommerce-seo-74-percent-revenue-growth",
    tag: "E-Commerce SEO",
    title: "Orders Doubled, Revenue Up 74% in 1 Month",
    stat: "+74% Revenue",
    image: "/case-studies/p2-search-mobile.png",
    category: "SEO",
  },
  {
    slug: "local-seo-513-phone-calls",
    tag: "Local SEO",
    title: "513 Phone Calls from Google Business Profile",
    stat: "2,750 Interactions",
    image: "/case-studies/p6-3months.png",
    category: "SEO",
  },
  {
    slug: "uk-ecommerce-seo-order-growth",
    tag: "UK E-Commerce SEO",
    title: "27.6% More Orders for a UK Store",
    stat: "+27.6% Orders",
    image: "/case-studies/p4-store-overview.png",
    category: "SEO",
  },
  {
    slug: "legal-case-management-system",
    tag: "Odoo ERP Development",
    title: "Legal Case Management System Built on Odoo",
    stat: "15+ Custom Fields",
    image: "/case-studies/developer/odoo-legal-case-management-system.webp",
    category: "Developer",
  },
  {
    slug: "cfms-intellectual-property-management",
    tag: "Odoo ERP Development",
    title: "CFMS — Intellectual Property Management System",
    stat: "4 IP Categories",
    image: "/case-studies/developer/odoo-cfms-ip-management-system.webp",
    category: "Developer",
  },
  {
    slug: "corporate-billing-financial-workflow",
    tag: "Odoo ERP Development",
    title: "Corporate Billing & Financial Workflow Solution",
    stat: "Unified in ERP",
    image: "/case-studies/developer/odoo-erp-suite-overview.webp",
    category: "Developer",
  },
  {
    slug: "hr-payroll-management-customization",
    tag: "Odoo ERP Development",
    title: "HR & Payroll Management Customization",
    stat: "Centralized HR Data",
    image: "/case-studies/developer/odoo-erp-suite-overview.webp",
    category: "Developer",
  },
  {
    slug: "demarcation-management-module",
    tag: "Odoo ERP Development",
    title: "Demarcation Management Module",
    stat: "Custom Odoo Module",
    image: "/case-studies/developer/odoo-erp-suite-overview.webp",
    category: "Developer",
  },
  {
    slug: "softweb-solution-react-app",
    tag: "React Development",
    title: "Softweb Solution — Custom Marketing Site",
    stat: "Live in Production",
    image: "/case-studies/developer/react-softweb-solution.webp",
    category: "Developer",
  },
  {
    slug: "affiliate-plus-marketplace",
    tag: "React Development",
    title: "Affiliate Plus — Full-Stack Affiliate Marketplace",
    stat: "900+ Programs Listed",
    image: "/case-studies/developer/react-affiliate-plus.webp",
    category: "Developer",
  },
  {
    slug: "softsavvy-wordpress-website",
    tag: "WordPress Development",
    title: "SoftSavvy — Complete IT Solutions Website",
    stat: "Live Company Site",
    image: "/case-studies/developer/wordpress-softsavvy.webp",
    category: "Developer",
  },
  {
    slug: "buying-house-wordpress-website",
    tag: "WordPress Development",
    title: "Buying House — Business Website",
    stat: "Live Company Site",
    image: "/case-studies/developer/wordpress-buying-house.webp",
    category: "Developer",
  },
];

export default function PortfolioHighlights() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const seoCount = highlights.filter((h) => h.category === "SEO").length;
  const developerCount = highlights.filter((h) => h.category === "Developer").length;

  const filtered = activeCategory === "All" ? highlights : highlights.filter((h) => h.category === activeCategory);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          tag="Verified Results"
          title={<>Real Performance Data, <span className="gradient-text font-bold">Pulled Directly from Google</span></>}
          subtitle="No estimates, no third-party tools. Every screenshot below comes straight from Google Search Console, Google Analytics, and Google Business Profile."
        />

        {/* Service Category Cards */}
        <ScrollReveal delay={0.05}>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
            {[
              {
                key: "SEO" as const,
                icon: TrendingUp,
                title: "SEO Case Studies",
                desc: "Rankings, traffic and lead growth, tracked from real Search Console and Analytics data.",
                count: seoCount,
              },
              {
                key: "Developer" as const,
                icon: Code2,
                title: "Developer Case Studies",
                desc: "Custom Odoo ERP modules, React applications, and WordPress builds shipped to production.",
                count: developerCount,
              },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(activeCategory === cat.key ? "All" : cat.key)}
                className={`text-left rounded-2xl p-6 border transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-teal-500 border-teal-500 shadow-lg shadow-teal-500/25"
                    : "card-glass border-navy-950/5 hover:border-teal-500/30"
                }`}
              >
                <cat.icon className={`w-8 h-8 mb-4 ${activeCategory === cat.key ? "text-white" : "text-teal-500"}`} />
                <h3 className={`text-lg font-bold font-heading mb-1.5 ${activeCategory === cat.key ? "text-white" : "text-navy-950"}`}>
                  {cat.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-3 ${activeCategory === cat.key ? "text-white/85" : "text-slate-400"}`}>
                  {cat.desc}
                </p>
                <span className={`text-xs font-semibold ${activeCategory === cat.key ? "text-white/90" : "text-teal-500"}`}>
                  {cat.count} {cat.count === 1 ? "case study" : "case studies"}
                  {activeCategory === cat.key ? " — click to view all" : ""}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((h, i) => (
            <ScrollReveal key={h.slug} delay={i * 0.08}>
              <Link href={`/case-studies/${h.slug}`} className="group block h-full">
                <div className="card overflow-hidden p-0 h-full flex flex-col">
                  <div className="relative w-full aspect-[21/9] bg-white overflow-hidden flex-shrink-0">
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold tracking-wide uppercase text-teal-400 mb-2">
                      {h.tag}
                    </span>
                    <h3 className="text-navy-950 font-bold font-heading mb-3 leading-snug min-h-[3rem] line-clamp-2">
                      {h.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-teal-400 font-bold text-sm">{h.stat}</span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-teal-400 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
