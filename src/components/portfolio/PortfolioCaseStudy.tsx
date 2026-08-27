"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface PortfolioMetric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface PortfolioGalleryImage {
  src: string;
  caption: string;
}

interface PortfolioCaseStudyProps {
  tag: string;
  title: string;
  clientLine: string;
  heroMetrics: PortfolioMetric[];
  overview: string;
  challenge: string[];
  strategy: { title: string; description: string }[];
  gallery: PortfolioGalleryImage[];
  results: string[];
  finalMetrics: PortfolioMetric[];
}

export default function PortfolioCaseStudy({
  tag,
  title,
  clientLine,
  heroMetrics,
  overview,
  challenge,
  strategy,
  gallery,
  results,
  finalMetrics,
}: PortfolioCaseStudyProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-teal w-[500px] h-[500px] -top-20 -right-20 opacity-10" />
        <div className="container relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Case Studies</span>
          </Link>

          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
              {tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-navy-950 leading-tight max-w-3xl mb-4">
              {title}
            </h1>
            <p className="text-slate-400 text-lg mb-10">{clientLine}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroMetrics.map((m) => (
                <div key={m.label} className="card-glass text-center py-6">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400 font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">{m.label}</div>
                  {m.sublabel && (
                    <div className="text-[11px] text-slate-500 mt-0.5">{m.sublabel}</div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-heading text-navy-950 mb-4">Overview</h2>
            <p className="text-slate-300 leading-relaxed">{overview}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="section section-alt">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-heading text-navy-950 mb-6">The Challenge</h2>
            <ul className="space-y-3">
              {challenge.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategy */}
      <section className="section">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-heading text-navy-950 mb-8">
              What We Did
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {strategy.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0 font-bold font-heading">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-950 mb-1.5">{s.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <ScrollReveal>
              <h2 className="text-2xl font-bold font-heading text-navy-950 mb-8 text-center">
                Performance Data
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {gallery.map((g, i) => (
                <ScrollReveal key={g.src} delay={i * 0.06}>
                  <div className="card overflow-hidden p-0">
                    <div className="relative w-full bg-white">
                      <Image
                        src={g.src}
                        alt={g.caption}
                        width={1310}
                        height={550}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                    <div className="px-4 py-3 border-t border-navy-950/5">
                      <p className="text-sm text-slate-400">{g.caption}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="section">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-heading text-navy-950 mb-6">The Results</h2>
            <ul className="space-y-3 mb-10">
              {results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {finalMetrics.map((m) => (
                <div key={m.label} className="card-glass text-center py-6">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400 font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">{m.label}</div>
                  {m.sublabel && (
                    <div className="text-[11px] text-slate-500 mt-0.5">{m.sublabel}</div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-navy-950 mb-4">
              Want Results Like This for Your Business?
            </h2>
            <p className="text-slate-400 mb-8">
              Get a free audit and see exactly where the opportunity is for your website.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>Get My Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
