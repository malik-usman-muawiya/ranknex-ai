'use client';

import {
  Bot,
  ShieldCheck,
  Zap,
  DollarSign,
  BarChart3,
  HeartHandshake,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const differentiators = [
  {
    icon: Bot,
    title: 'AEO + GEO — AI Search Optimisation Included',
    description:
      "ChatGPT and Gemini now answer search queries for millions of people every day. We optimize your content so your business appears in those AI answers — not just Google's blue links. Most UK and US agencies charge an extra $2,000/month for this. We include it in every SEO engagement.",
  },
  {
    icon: DollarSign,
    title: '60% Lower Cost. Same Quality. Verifiable.',
    description:
      'Our team is based in Lahore, Pakistan — one of South Asia\'s most active digital marketing hubs. That means you get the same calibre of strategy and execution as a London agency at 60% lower cost. Not because we cut corners. Because our overheads are lower, and we pass that directly to you.',
  },
  {
    icon: ShieldCheck,
    title: '90-Day Results Guarantee — or We Work Free',
    description:
      "We guarantee measurable movement in your target metrics within 90 days — or we keep working without charging you until we get there. We've offered this since day one. It keeps us honest.",
  },
  {
    icon: HeartHandshake,
    title: 'One Account Manager. One Point of Truth.',
    description:
      'No rotating junior staff. No support tickets. You work with one dedicated strategist who knows your project, your goals, and your history — and is reachable on WhatsApp.',
  },
  {
    icon: Zap,
    title: 'No Lock-In Contracts',
    description:
      "Month-to-month by default. You stay because the results make it obvious. We've had clients for 18+ months on rolling monthly arrangements — because it works, not because they're trapped.",
  },
  {
    icon: BarChart3,
    title: 'Reporting That Shows Real Numbers',
    description:
      "Monthly reports cover organic traffic, keyword ranking movement, leads generated, ad spend vs. return, and next month's priorities. No vanity metrics. No charts that look busy but say nothing.",
  },
];

export default function WhyRankNex() {
  return (
    <section className="section section-alt relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          tag="Why Choose Us"
          title={<>The Case for Choosing <span className="gradient-text font-bold">RankNex AI</span></>}
          subtitle="We'll make this simple. Here is exactly what you get that most agencies don't offer — and what it means for your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="card-glass group h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-teal-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
