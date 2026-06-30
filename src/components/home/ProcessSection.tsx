'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Lightbulb, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GradientOrbs from '@/components/ui/GradientOrbs';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Free Audit (Week 1)',
    description:
      "We analyze your website, your top 5 competitors, your keyword landscape, and your current search visibility — on Google and in AI tools. You get a real report, not a sales pitch. Most agencies charge $500 for this. We do it free because it's the foundation of everything.",
    color: 'teal',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Custom Strategy (Week 1-2)',
    description:
      'We map the fastest routes to measurable results: which keywords to target, which content to create, which technical issues to fix first, and how much of the budget should go to ads vs. organic. Every plan comes with clear KPIs and a 90-day milestone chart.',
    color: 'cyan',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Execute (Weeks 2-12)',
    description:
      'Our team deploys across all agreed channels — SEO, content, ads, or web. AI tools help us move faster on research and analysis; experienced specialists make every strategic call. You get weekly progress updates, not a monthly surprise.',
    color: 'teal',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Report & Scale (Month 3 Onwards)',
    description:
      "At the 90-day mark, you'll see a full performance review against the KPIs we agreed on day one. From there, we double down on what's generating returns and expand into adjacent opportunities. This is where month-over-month compounding starts.",
    color: 'cyan',
  },
];

export default function ProcessSection() {
  return (
    <section className="section relative overflow-hidden py-16">
      <GradientOrbs
        orbs={[
          { color: 'cyan', size: 300, top: '20%', left: '-8%', delay: 1 },
          { color: 'teal', size: 250, bottom: '20%', right: '-8%', delay: 3 },
        ]}
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Heading - centered */}
        <div className="text-center mb-0">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide text-teal-500 border border-teal-500/20 bg-teal-500/5 mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-white">
            How We Get You From Audit to{' '}
            <span className="text-teal-400">Growth in 90 Days</span>
          </h2>
          <p className="mt-4 mb-8 text-lg text-slate-400 max-w-2xl mx-auto text-center">
            No guesswork. No generic packages. Four clear steps — and you know exactly what&apos;s happening at every one of them.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="flex flex-col items-center text-center group px-4">
                  {/* Icon box */}
                  <div className="relative mb-5">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        step.color === 'teal'
                          ? 'bg-teal-500/10 border-teal-500/20 group-hover:border-teal-500/50 group-hover:bg-teal-500/20'
                          : 'bg-cyan-400/10 border-cyan-400/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20'
                      }`}
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          step.color === 'teal' ? 'text-teal-500' : 'text-cyan-400'
                        }`}
                      />
                    </motion.div>
                    {/* Step number badge */}
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                        step.color === 'teal' ? 'bg-teal-500' : 'bg-cyan-500'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-6 xl:hidden">
                      <ArrowRight className="w-5 h-5 text-teal-500/40 rotate-90" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}