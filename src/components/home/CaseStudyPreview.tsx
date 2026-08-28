'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TiltCard from '@/components/ui/TiltCard';

const caseStudies = [
  {
    slug: 'flagship-98k-clicks-256k-revenue',
    client: 'Combined Local + E-Commerce SEO',
    industry: 'E-Commerce & Local Search',
    location: 'Flagship Result',
    challenge: 'Average ranking position sat at 17, and store revenue growth had plateaued despite steady traffic.',
    results: [
      { metric: 'Organic Clicks', value: '98K', period: '6-month trend' },
      { metric: 'Monthly Revenue', value: '$256.9K', period: '+54.6% MoM' },
      { metric: 'Average Position', value: '17 → 8.5', period: '6 months' },
    ],
    services: ['SEO', 'Local SEO', 'E-Commerce'],
    color: 'teal',
  },
  {
    slug: 'organic-search-growth-16x-clicks',
    client: 'Primary Website Organic Growth',
    industry: 'Organic SEO',
    location: 'Verified in Search Console',
    challenge: 'Ranking stuck at position 27 (page 3), with organic traffic flat for months before this engagement.',
    results: [
      { metric: 'Organic Clicks', value: '16x', period: '6-month trend' },
      { metric: 'Impressions', value: '17x', period: '6-month trend' },
      { metric: 'Average Position', value: '27 → 6.2', period: 'Page 3 to Page 1' },
    ],
    services: ['SEO', 'Technical SEO', 'Content'],
    color: 'cyan',
  },
  {
    slug: 'local-seo-513-phone-calls',
    client: 'Local Service Business',
    industry: 'Local SEO',
    location: 'Google Business Profile',
    challenge: 'Business Profile was not optimized for the right categories, and average position sat around 12.',
    results: [
      { metric: 'Phone Calls Generated', value: '513', period: '6 months' },
      { metric: 'Total GBP Interactions', value: '2,750', period: '6 months' },
      { metric: 'Average Position', value: '12 → 7.9', period: '6 months' },
    ],
    services: ['Local SEO', 'Google Business Profile'],
    color: 'teal',
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          tag="Case Studies"
          title={<>Real Clients. Real Numbers. <span className="gradient-text font-bold">Nothing Embellished.</span></>}
          subtitle="Every result you see below is documented. We share the campaign context, the approach, and the full outcome, because vague success stories help nobody."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <TiltCard maxTilt={5}>
                <motion.div
                  className="card group h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        study.color === 'teal' ? 'bg-teal-500' : 'bg-cyan-400'
                      }`}
                    />
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy-950 mb-1">
                    {study.client}
                  </h3>
                  <p className="text-sm text-slate-400">{study.location}</p>
                </div>

                {/* Challenge */}
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  <span className="text-slate-300 font-medium">Challenge:</span>{' '}
                  {study.challenge}
                </p>

                {/* Results */}
                <div className="space-y-3 mb-5 flex-1">
                  {study.results.map((result, rIndex) => (
                    <div
                      key={rIndex}
                      className="flex items-center justify-between py-2 border-b border-navy-700/50 last:border-0"
                    >
                      <div>
                        <p className="text-sm text-slate-300">{result.metric}</p>
                        <p className="text-xs text-slate-400">{result.period}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-teal-500" />
                        <span className="text-lg font-bold font-heading text-teal-500">
                          {result.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services used */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.services.map((service, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-navy-700/50 text-slate-300 border border-navy-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="flex items-center gap-2 text-teal-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>See All Client Results</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
