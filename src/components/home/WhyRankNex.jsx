import React from 'react';
import {
  Bot,
  ShieldCheck,
  Zap,
  DollarSign,
  BarChart3,
  HeartHandshake,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';

const differentiators = [
  {
    icon: Bot,
    title: 'AEO + GEO Included in Every Plan',
    description:
      'ChatGPT and Gemini answer search queries for millions every day. We optimize your content so your business appears in AI answers, not just Google blue links.',
  },
  {
    icon: DollarSign,
    title: '60% Lower Retainer Cost. Verified Quality.',
    description:
      'Our team is based in Lahore, Pakistan. You get the same calibre of strategy and execution as a London or New York agency at 60% lower cost.',
  },
  {
    icon: ShieldCheck,
    title: '90-Day Results Guarantee or We Work Free',
    description:
      'We guarantee measurable movement in your target organic search metrics within 90 days, or we keep working without charge until we hit the goal.',
  },
  {
    icon: HeartHandshake,
    title: 'One Dedicated Account Strategist',
    description:
      'No rotating junior staff or frustrating support tickets. You work with one dedicated senior marketer directly on WhatsApp.',
  },
  {
    icon: Zap,
    title: 'No Long-Term Lock-In Contracts',
    description:
      'Month-to-month by default. You stay because the ROI makes it obvious, not because of a legal lock-in clause.',
  },
  {
    icon: BarChart3,
    title: 'Plain-English Performance Reports',
    description:
      'Monthly reports cover real revenue impact: organic clicks, keyword rank gains, qualified lead volume, and ROI. No vanity metrics.',
  },
];

export default function WhyRankNex() {
  return (
    <section className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="Why RankNex AI"
          title={
            <>
              The Case for Choosing <span className="gradient-text font-bold">RankNex AI</span>
            </>
          }
          subtitle="We make digital marketing transparent and accountable. Here is exactly what sets our agency apart."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card-glass" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 210, 210, 0.1)',
                    color: '#00d2d2',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
