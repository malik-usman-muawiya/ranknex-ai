import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, Zap, Globe, Users, Shield, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FAQ from '../components/ui/FAQ.jsx';
import CTABanner from '../components/home/CTABanner.jsx';

const ukServices = [
  {
    icon: Search,
    title: 'UK Search & AI Engine Optimization (AEO/GEO)',
    description: 'Rank for high-intent British search keywords on Google.co.uk and show up inside ChatGPT, Gemini, and Google AI Overviews.',
  },
  {
    icon: BarChart3,
    title: 'PPC & Paid Search (Pounds-Targeted ROAS)',
    description: 'Google Search, Meta Ads, and LinkedIn B2B campaigns managed with strict UK cost-per-lead and return on ad spend targets.',
  },
  {
    icon: Zap,
    title: 'British English Content & Copywriting',
    description: 'High-converting sales pages and long-form articles written natively in British English for UK commercial intent.',
  },
  {
    icon: Globe,
    title: 'High-Speed Web Development',
    description: 'Custom React & WordPress websites built for sub-second Core Web Vitals speed and effortless lead capture.',
  },
];

const ukFaqs = [
  {
    question: 'How do you coordinate with UK businesses across time zones?',
    answer:
      'Our Pakistan strategy team operates in complete alignment with UK business hours (GMT / BST). We provide instant daily communication via WhatsApp and Slack, with weekly video reviews at times that suit you.',
  },
  {
    question: 'Is RankNex AI registered in the United Kingdom?',
    answer:
      'Yes, we maintain a registered UK office in Blackburn (Ainsworth St, Blackburn BB1 6AF), giving our UK clients complete legal and commercial confidence.',
  },
  {
    question: 'How does your pricing compare with local London or Manchester agencies?',
    answer:
      'Our monthly retainers are approximately 60% lower than typical London or Manchester agency rates for identical or superior technical execution, backed by our 90-day results guarantee.',
  },
];

export default function UK() {
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
            🇬🇧 UK Dedicated Portal · Blackburn Office
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
            Built for UK Businesses.{' '}
            <span className="gradient-text">London Quality at 60% Lower Cost.</span>
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
            SEO, PPC, and content crafted natively in British English, backed by our registered UK presence and a 90-day performance guarantee.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9375rem 2rem' }}>
              <span>Get Your Free UK Market Audit</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* UK Services Grid */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            tag="UK Capabilities"
            title={
              <>
                Engineered for the <span className="gradient-text">British Marketplace</span>
              </>
            }
            subtitle="Tailored execution that understands regional UK buyer intent and Google.co.uk algorithms."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {ukServices.map((service, idx) => {
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

      {/* UK FAQs */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="UK FAQ"
            title={
              <>
                UK Businesses <span className="gradient-text">Ask Us This a Lot</span>
              </>
            }
          />
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={ukFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
