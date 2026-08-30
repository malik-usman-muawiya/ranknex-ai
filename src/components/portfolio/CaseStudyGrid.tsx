"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { CaseStudyHighlight } from "@/data/caseStudyHighlights";

export default function CaseStudyGrid({ items }: { items: CaseStudyHighlight[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((h, i) => (
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
  );
}
