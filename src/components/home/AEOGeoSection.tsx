'use client';

import Link from 'next/link';
import { Search, Bot, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const channels = [
  {
    icon: Search,
    title: 'Google Search',
    description: 'Traditional SEO (we do this)',
  },
  {
    icon: Bot,
    title: 'ChatGPT / Gemini / Perplexity',
    description: 'AEO + GEO (we do this too)',
  },
  {
    icon: MapPin,
    title: 'Local Maps / Voice Search',
    description: 'Local SEO (included)',
  },
];

export default function AEOGeoSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          tag="AI Search"
          title={<>Search Is Changing. <span className="gradient-text font-bold">Is Your Business Keeping Up?</span></>}
          subtitle="Google isn't the only place people search anymore. Millions of users now ask ChatGPT, Gemini, and Perplexity questions, and those AI tools pick businesses to recommend based on how well-structured and authoritative your online presence is."
        />

        <div className="max-w-3xl mx-auto -mt-6 mb-12 text-center">
          <p className="text-slate-400 leading-relaxed">
            We call this AEO (Answer Engine Optimization) and GEO (Generative
            Engine Optimization). We include both in every SEO engagement,
            because showing up in AI answers is where search is heading, and
            getting there early is a significant competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-glass text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{channel.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services/seo" className="btn-secondary inline-flex items-center gap-2">
            <span>See How We Handle AI Search</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
