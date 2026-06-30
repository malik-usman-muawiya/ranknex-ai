'use client';

import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/ui/ParticleBackground';
import GradientOrbs from '@/components/ui/GradientOrbs';
import HeroVisual from '@/components/home/HeroVisual';
import { getWhatsAppUrl } from '@/lib/utils';

const trustPoints = [
  'Results in 90 Days',
  'No Lock-In Contracts',
  '50+ Businesses Served',
  'Google + AI Optimisation',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-bg" />
      <ParticleBackground particleCount={36} connectionDistance={110} />
      <GradientOrbs
        orbs={[
          { color: 'teal', size: 500, top: '-15%', right: '-10%', delay: 0 },
          { color: 'cyan', size: 400, bottom: '-15%', left: '-10%', delay: 3 },
          { color: 'teal', size: 250, top: '60%', left: '50%', delay: 5 },
        ]}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      {/* Central spotlight glow behind headline */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(0,201,167,0.10), transparent)' }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-8 glow-teal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Pakistan&apos;s AI-First Digital Marketing Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <span className="text-white">More Than Rankings.</span>
            <br />
            <span className="gradient-text animate-gradient">We Build Businesses.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            We help businesses in the UK, US, and Pakistan rank on Google,
            show up in AI search (ChatGPT, Gemini, Perplexity), and turn
            that visibility into revenue. Expert team. AI-powered tools.
            No long contracts.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            <Link href="/contact" className="btn-primary group text-base w-full sm:w-auto justify-center">
              <span>Get Your Free SEO Audit. Worth $500</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={getWhatsAppUrl('Hi RankNex AI! I\'d like to discuss growing my business online.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group text-base w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-slate-300 bg-white/[0.03] border border-white/10 backdrop-blur-sm whitespace-nowrap"
              >
                <span className="flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-teal-500/15 text-teal-400 shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={3} />
                </span>
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Hero dashboard visual */}
        <HeroVisual />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  );
}
