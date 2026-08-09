"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const highlights = [
  {
    slug: "flagship-98k-clicks-256k-revenue",
    tag: "Flagship Result",
    title: "98K Organic Clicks & $256K Monthly Revenue",
    stat: "+54.6% Revenue",
    image: "/case-studies/p7-store-overview.png",
  },
  {
    slug: "organic-search-growth-16x-clicks",
    tag: "Organic SEO",
    title: "16x More Organic Clicks in 6 Months",
    stat: "Page 3 → Page 1",
    image: "/case-studies/p1-6month.png",
  },
  {
    slug: "ecommerce-seo-74-percent-revenue-growth",
    tag: "E-Commerce SEO",
    title: "Orders Doubled, Revenue Up 74% in 1 Month",
    stat: "+74% Revenue",
    image: "/case-studies/p2-store-overview.png",
  },
  {
    slug: "local-seo-513-phone-calls",
    tag: "Local SEO",
    title: "513 Phone Calls from Google Business Profile",
    stat: "2,750 Interactions",
    image: "/case-studies/p6-gbp-calls.png",
  },
  {
    slug: "uk-ecommerce-seo-order-growth",
    tag: "UK E-Commerce SEO",
    title: "27.6% More Orders for a UK Store",
    stat: "+27.6% Orders",
    image: "/case-studies/p4-store-overview.png",
  },
];

export default function PortfolioHighlights() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          tag="Verified Results"
          title={<>Real Performance Data, <span className="gradient-text font-bold">Pulled Directly from Google</span></>}
          subtitle="No estimates, no third-party tools. Every screenshot below comes straight from Google Search Console, Google Analytics, and Google Business Profile."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.slug} delay={i * 0.08}>
              <Link href={`/case-studies/${h.slug}`} className="group block h-full">
                <div className="card overflow-hidden p-0 h-full flex flex-col">
                  <div className="relative w-full bg-white overflow-hidden">
                    <Image
                      src={h.image}
                      alt={h.title}
                      width={1310}
                      height={550}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold tracking-wide uppercase text-teal-400 mb-2">
                      {h.tag}
                    </span>
                    <h3 className="text-white font-bold font-heading mb-3 leading-snug">
                      {h.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-teal-400 font-bold text-sm">{h.stat}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-teal-400 transition-colors">
                        Read case study
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
