"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CEOSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          tag="Leadership"
          title={<>A Message From Our <span className="gradient-text font-bold">CEO</span></>}
          subtitle="The vision and strategy driving RankNex AI's growth for every client we work with."
        />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="card-glass p-8 text-center flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden mb-6 ring-2 ring-teal-500/20">
                <Image
                  src="/team/muhammad-usman-seo-specialist.webp"
                  alt="Muhammad Usman - CEO of RankNex AI"
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 font-heading mb-1">
                Muhammad Usman
              </h3>
              <p className="text-teal-500 font-semibold">CEO, RankNex AI</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card p-8 md:p-10 relative">
              <Quote className="w-9 h-9 text-teal-500/20 mb-4" />
              <p className="text-slate-300 leading-relaxed">
                Muhammad Usman is the CEO of RankNex AI, a digital growth and SEO-focused company
                dedicated to helping businesses build a stronger online presence. With a strong
                understanding of Search Engine Optimization, Usman focuses on developing practical
                strategies that improve website visibility, organic traffic, search rankings, and
                long-term digital growth.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                As the CEO, he leads the team with a clear vision: to combine modern SEO
                techniques, AI-powered solutions, quality content, technical optimization, and
                data-driven strategies to deliver measurable results. His approach focuses on
                understanding each business, identifying growth opportunities, analyzing
                competitors, and creating customized strategies instead of relying on
                one-size-fits-all methods.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                At RankNex AI, Usman also focuses on building a professional team culture where
                continuous learning, accountability, creativity, and consistent execution are
                highly valued. His goal is to establish RankNex AI as a trusted digital growth
                partner for businesses looking to compete and grow in an increasingly competitive
                online environment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
