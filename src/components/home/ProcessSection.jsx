import React from 'react';
import { ClipboardCheck, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Free SEO Audit (Week 1)',
    description:
      'We run deep diagnostics on your website, top 5 competitors, keyword landscape, and visibility across Google and AI tools. Real insights, zero sales pressure.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Custom Strategy (Week 1-2)',
    description:
      'We map the fastest route to organic revenue: priority technical fixes, high-intent buyer keywords, content calendar, and structured 90-day milestones.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Execute & Deploy (Weeks 2-12)',
    description:
      'Our team executes technical updates, content publishing, white-hat link building, and AEO structured data with weekly progress updates.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Report & Scale (Month 3+)',
    description:
      'At 90 days, we review performance against KPIs. From there, we double down on what converts and scale monthly compounding ROI.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="Our Proven Process"
          title={
            <>
              How We Get You From Audit to{' '}
              <span className="gradient-text font-bold">Growth in 90 Days</span>
            </>
          }
          subtitle="Four disciplined steps. Clear milestones. You always know exactly what is happening every single week."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  padding: '2.25rem 1.5rem',
                }}
              >
                {/* Step badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0, 210, 210, 0.12)',
                    color: '#00a8a8',
                    border: '1px solid rgba(0, 210, 210, 0.25)',
                    borderRadius: '8px',
                    padding: '0.2rem 0.6rem',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                  }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(0, 210, 210, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00d2d2',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon style={{ width: '1.75rem', height: '1.75rem' }} />
                </div>

                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
