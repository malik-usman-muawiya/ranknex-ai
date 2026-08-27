import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TrendingUp, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CTABanner from '../components/home/CTABanner.jsx';
import { caseStudiesList } from '../data/caseStudies.js';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudiesList.find((c) => c.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <Link
            to="/case-studies"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              color: 'var(--color-slate-400)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              marginBottom: '1.5rem',
            }}
          >
            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            <span>Back to all case studies</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#00d2d2',
              }}
            />
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00a8a8' }}>
              {study.industry} · {study.location}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              lineHeight: 1.2,
              marginBottom: '2rem',
              maxWidth: '850px',
            }}
          >
            {study.client}
          </h1>

          {/* Key Metrics Highlight Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3.5rem',
            }}
          >
            {study.results.map((r, i) => (
              <div
                key={i}
                className="card-glass glow-teal"
                style={{ padding: '1.5rem', borderRadius: '1rem' }}
              >
                <div
                  className="gradient-text-teal"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    marginBottom: '0.375rem',
                  }}
                >
                  <TrendingUp style={{ width: '1.5rem', height: '1.5rem' }} />
                  {r.value}
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-navy-950)', fontSize: '0.9375rem' }}>
                  {r.metric}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)', marginTop: '0.25rem' }}>
                  {r.period}
                </div>
              </div>
            ))}
          </div>

          {/* Breakdown: Challenge, Strategy, Results */}
          <div style={{ maxWidth: '850px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="card">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1rem' }}>
                The Challenge
              </h2>
              <p style={{ color: 'var(--color-slate-400)', fontSize: '1rem', lineHeight: 1.75 }}>
                {study.challenge}
              </p>
            </div>

            <div className="card">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1rem' }}>
                Our Tactical Strategy &amp; Execution
              </h2>
              <p style={{ color: 'var(--color-slate-400)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {study.strategy}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {study.services.map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(0, 210, 210, 0.1)',
                      color: '#00a8a8',
                      border: '1px solid rgba(0, 210, 210, 0.25)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
