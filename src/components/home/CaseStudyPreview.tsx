'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const caseStudies = [
  {
    client: 'UK E-Commerce Fashion Brand',
    industry: 'Retail & E-Commerce',
    location: 'United Kingdom',
    challenge: 'The brand was spending £3,000/month on paid ads with a cost-per-acquisition double the industry average. Organic traffic was flat for 18 months.',
    results: [
      { metric: 'Organic Traffic', value: '+320%', period: '6 months' },
      { metric: 'Revenue Growth', value: '+185%', period: 'Year-over-year' },
      { metric: 'Cost Per Acquisition', value: '-52%', period: 'vs. previous agency' },
    ],
    services: ['SEO', 'PPC', 'Content Writing'],
    color: 'teal',
  },
  {
    client: 'US SaaS Startup',
    industry: 'Technology',
    location: 'United States',
    challenge: 'New market entry — zero brand awareness, no inbound leads, and a 4-month runway to demonstrate growth to investors.',
    results: [
      { metric: 'Monthly Leads', value: '250+', period: 'from zero' },
      { metric: 'Domain Authority', value: '+35', period: '8 months' },
      { metric: 'MQL to SQL Rate', value: '38%', period: 'industry avg: 13%' },
    ],
    services: ['SEO', 'Content Writing', 'Social Media'],
    color: 'cyan',
  },
  {
    client: 'Pakistan Healthcare Provider',
    industry: 'Healthcare',
    location: 'Pakistan',
    challenge: 'Outdated website with no mobile optimization, zero local search presence, and patient inquiries coming entirely through word of mouth.',
    results: [
      { metric: 'Website Traffic', value: '+410%', period: '4 months' },
      { metric: 'Patient Inquiries', value: '+200%', period: 'Monthly' },
      { metric: 'Google Maps Ranking', value: 'Top 3', period: 'Local search' },
    ],
    services: ['Web Design', 'Local SEO', 'Branding'],
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
          subtitle="Every result you see below is documented. We share the campaign context, the approach, and the full outcome — because vague success stories help nobody."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
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
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    {study.client}
                  </h3>
                  <p className="text-sm text-slate-500">{study.location}</p>
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
                        <p className="text-xs text-slate-500">{result.period}</p>
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
                  href="/case-studies"
                  className="flex items-center gap-2 text-teal-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
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
