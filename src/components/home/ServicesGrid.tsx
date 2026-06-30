'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Share2,
  MousePointerClick,
  PenTool,
  MonitorSmartphone,
  Palette,
} from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GradientOrbs from '@/components/ui/GradientOrbs';

const services = [
  {
    icon: Search,
    title: 'Rank on Google. Show Up in ChatGPT. Get Found Everywhere.',
    description:
      'More people now search on AI tools. ChatGPT, Gemini, Perplexity, than you think. We optimize your website for traditional Google rankings AND for AI-powered search results. Technical SEO, content, link building, AEO, and GEO, all handled by one team.',
    href: '/services/seo',
    color: 'teal',
    ctaText: 'See SEO Services',
  },
  {
    icon: MousePointerClick,
    title: 'Pay for Clicks That Actually Buy.',
    description:
      "Google Ads, Facebook Ads, LinkedIn, managed with AI bidding so every pound and rupee goes where it converts. We don't optimise for impressions. We optimise for sales.",
    href: '/services/ppc-advertising',
    color: 'cyan',
    ctaText: 'See PPC Services',
  },
  {
    icon: Share2,
    title: 'Build an Audience That Becomes a Customer Base.',
    description:
      'Strategy, content creation, community management, and paid social across Instagram, LinkedIn, TikTok, and Facebook. We build social presence with one goal: turning followers into buyers.',
    href: '/services/social-media-marketing',
    color: 'teal',
    ctaText: 'See Social Services',
  },
  {
    icon: PenTool,
    title: 'Content That Ranks, Reads Well, and Converts.',
    description:
      'Blog posts, web copy, and articles researched with AI and written by human specialists. Every piece is built to rank for a specific keyword and move the reader toward a decision. No fluff. No filler.',
    href: '/services/content-writing',
    color: 'cyan',
    ctaText: 'See Content Services',
  },
  {
    icon: MonitorSmartphone,
    title: 'A Website That Earns Its Keep.',
    description:
      'Fast, SEO-ready, mobile-first websites built on WordPress or custom code. Designed to convert visitors, not just to look good in a Dribbble screenshot. Every site we build includes speed optimization, schema markup, and conversion-focused page structure.',
    href: '/services/web-designing',
    color: 'teal',
    ctaText: 'See Web Services',
  },
  {
    icon: Palette,
    title: 'Look Like You Belong at the Top.',
    description:
      'Logo, brand colors, typography, and full visual identity, built so your business looks as credible online as it is in person. From first impression to lasting recognition.',
    href: '/services/branding',
    color: 'cyan',
    ctaText: 'See Branding Services',
  },
];

export default function ServicesGrid() {
  return (
    <section className="section relative overflow-hidden">
      <GradientOrbs
        orbs={[
          { color: 'teal', size: 300, top: '10%', right: '-5%', delay: 0 },
          { color: 'cyan', size: 250, bottom: '10%', left: '-5%', delay: 3 },
        ]}
      />

      <div className="container relative z-10">
        <SectionHeading
          tag="Our Services"
          title={<>Everything You Need to Grow Online <span className="gradient-text font-bold">: In One Place</span></>}
          subtitle="Six services. One team. Zero silos. Your marketing and tech stack, built to work together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link href={service.href} className="block h-full">
                  <motion.div
                    className="card group h-full flex flex-col"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-colors duration-300 ${
                        service.color === 'teal'
                          ? 'bg-teal-500/10 text-teal-500 group-hover:bg-teal-500/20'
                          : 'bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-teal-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>{service.ctaText} →</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
