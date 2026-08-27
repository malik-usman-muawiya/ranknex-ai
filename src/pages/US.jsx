import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, Zap, Globe, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FAQ from '../components/ui/FAQ.jsx';
import CTABanner from '../components/home/CTABanner.jsx';

const usServices = [
  {
    icon: Search,
    title: 'Enterprise SEO & Generative Search (AEO/GEO)',
    description: 'Dominate competitive national US search queries across Google and conversational AI platforms (ChatGPT, Gemini, Perplexity).',
  },
  {
    icon: BarChart3,
    title: 'PPC & Growth Advertising (ROAS Focused)',
    description: 'High-precision Google Ads, Meta Ads, and LinkedIn B2B funnels optimized for low cost-per-acquisition (CPA) in the US market.',
  },
  {
    icon: Zap,
    title: 'Conversion-Focused American Copywriting',
    description: 'High-converting sales copy, topic clusters, and whitepapers written natively for US B2B and direct-to-consumer buyers.',
  },
  {
    icon: Globe,
    title: 'High-Performance Web Engineering',
    description: 'Fast, modern web architectures built to crush Core Web Vitals and maximize conversion rate optimization.',
  },
];

const usFaqs = [
  {
    question: 'How do you handle US working hours and communication?',
    answer:
      'Our senior account strategists are active during US Eastern, Central, and Pacific working hours. We communicate directly via WhatsApp and Slack with same-day turnaround.',
  },
  {
    question: 'What results can we expect in the first 90 days?',
    answer:
      'We establish measurable KPI benchmarks on day one. Within 90 days, we deliver verifiable rank movements, traffic acceleration, and qualified inbound lead growth — or we continue working for free until we do.',
  },
  {
    question: 'How does your pricing model work for US companies?',
    answer:
      'Because our global delivery center is based in Lahore, we deliver Silicon Valley-grade digital marketing at approximately 60% lower retainer cost, with zero long-term contract lock-in.',
  },
];

export default function US() {
  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      {/* Hero */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <span
            style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(0, 210, 210, 0.08)',
              color: '#00a8a8',
              border: '1px solid rgba(0, 210, 210, 0.25)',
              marginBottom: '1.25rem',
            }}
          >
            🇺🇸 US Dedicated Portal · Global Delivery Hub
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              lineHeight: 1.15,
              maxWidth: '850px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            Silicon Valley Calibre Execution.{' '}
            <span className="gradient-text">Without the Inflated Retainers.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            AI-powered SEO, PPC, and AEO/GEO built for US commercial search behavior, with active US business hour availability and rapid sprint updates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9375rem 2rem' }}>
              <span>Get Your Free US Market Audit</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            tag="US Capabilities"
            title={
              <>
                Engineered for High-Competition <span className="gradient-text">US Markets</span>
              </>
            }
            subtitle="Deep keyword research, entity authority architecture, and rapid revenue expansion."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {usServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 210, 210, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00d2d2',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '0.5rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* US FAQs */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="US FAQ"
            title={
              <>
                US Companies <span className="gradient-text">Frequently Ask</span>
              </>
            }
          />
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={usFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
