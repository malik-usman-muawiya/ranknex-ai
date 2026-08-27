import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ShieldCheck,
  Users,
  Lightbulb,
  Cpu,
  Target,
  Eye,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';

const values = [
  {
    icon: TrendingUp,
    title: 'Results Before Relationships',
    description: 'We earn long-term partnerships by delivering measurable ROI from month one.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency Over Comfort',
    description: 'We report real conversion metrics and search movements, not misleading vanity charts.',
  },
  {
    icon: Users,
    title: 'Zero Lock-In Contracts',
    description: 'Clients stay with us because our performance compounds, not because of rigid legal retainers.',
  },
  {
    icon: Lightbulb,
    title: 'Honest Timelines',
    description: 'We set realistic, achievable expectations rather than making empty overnight promises.',
  },
  {
    icon: Cpu,
    title: 'AI Speed + Human Judgment',
    description: 'AI tools accelerate keyword research and data analysis; seasoned human marketers govern the strategy.',
  },
];

const teamRoles = [
  { title: 'SEO & GEO Strategists', desc: 'Technical audits, on-page optimization, entity mapping & local citations' },
  { title: 'PPC & Media Buyers', desc: 'Google Ads, Meta Performance Max, LinkedIn B2B ad funnels' },
  { title: 'Content & Copywriters', desc: 'British/US English copywriting, buyer guides & thought leadership' },
  { title: 'UI/UX & Web Developers', desc: 'React, Next.js, WordPress speed optimization & CRO landing pages' },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      {/* Hero */}
      <section className="section" style={{ textAlign: 'center', position: 'relative' }}>
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
            About RankNex AI
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
            We Built RankNex AI Because Traditional Agencies{' '}
            <span className="gradient-text">Overcharge by 60%.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.7,
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            50+ businesses scaled. 90-day results guarantee. A powerhouse team of SEO architects, content strategists, developers, and media buyers operating from Lahore, delivering international-calibre performance at pricing that makes financial sense.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <SectionHeading
                tag="Our Story"
                title={
                  <>
                    Why We Started <span className="gradient-text">RankNex AI</span>
                  </>
                }
                align="left"
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-slate-300)', lineHeight: 1.75 }}>
                <p>
                  The digital marketing agency model is broken. Mid-sized agencies in London charge £4,000-8,000/month, and New York firms demand $6,000-12,000/month. Most of that retainer pays for expensive prime real estate and bloated corporate overhead.
                </p>
                <p>
                  Pakistan has a world-class pool of specialized digital talent. Our team has managed campaigns for British, American, and Pakistani brands for years, mastering nuanced search habits and international conversion standards.
                </p>
                <p>
                  We created RankNex AI to bridge that gap: providing high-growth businesses with elite digital marketing without the unsustainable Western agency markup.
                </p>
              </div>
            </div>

            <div className="card-glass" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(0, 210, 210, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00d2d2',
                  }}
                >
                  <Sparkles style={{ width: '1.625rem', height: '1.625rem' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
                    AI Speed + Human Mastery
                  </h3>
                  <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem' }}>
                    The formula that powers compound ROI
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {[
                  { value: '50+', label: 'Businesses Scaled' },
                  { value: '90 Days', label: 'To First Results' },
                  { value: '3+', label: 'Continents Served' },
                  { value: '90%', label: 'Retention Rate' },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: 'rgba(240, 253, 253, 0.8)',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                      textAlign: 'center',
                      border: '1px solid rgba(10, 15, 30, 0.05)',
                    }}
                  >
                    <div
                      className="gradient-text-teal"
                      style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)', marginTop: '0.25rem' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Our North Star"
            title={
              <>
                What We Are <span className="gradient-text">Here to Accomplish</span>
              </>
            }
            subtitle="Every line of code we ship and campaign we optimize is anchored by two core commitments."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            <div className="card">
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 210, 210, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00d2d2',
                  marginBottom: '1.25rem',
                }}
              >
                <Target style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '0.75rem' }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--color-slate-400)', lineHeight: 1.7 }}>
                Enable ambitious business owners in Manchester, Texas, or Lahore to acquire the same quality of digital growth strategy as enterprise brands with £50,000/month budgets, for a fraction of the cost.
              </p>
            </div>

            <div className="card">
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(51, 222, 222, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#33dede',
                  marginBottom: '1.25rem',
                }}
              >
                <Eye style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '0.75rem' }}>
                Our Vision
              </h3>
              <p style={{ color: 'var(--color-slate-400)', lineHeight: 1.7 }}>
                Democratize world-class digital marketing and AI search optimization by aligning our incentives with our clients: month-to-month contracts, verifiable ROI, and total operational transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            tag="Core Principles"
            title={
              <>
                What We <span className="gradient-text font-bold">Never Compromise On</span>
              </>
            }
            subtitle="Five non-negotiable principles that guide every client recommendation and campaign deliverable."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="card-glass">
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 210, 210, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00d2d2',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon style={{ width: '1.375rem', height: '1.375rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.5rem' }}>
                    {val.title}
                  </h3>
                  <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team / Expertise */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Our Team"
            title={
              <>
                The Practitioners <span className="gradient-text font-bold">Behind Your Results</span>
              </>
            }
            subtitle="Cross-disciplinary digital specialists working together in synchrony."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {teamRoles.map((role, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '0.5rem' }}>
                  {role.title}
                </h4>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9375rem 2rem' }}>
              <span>Work With Our Team</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
