import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CTABanner from '../components/home/CTABanner.jsx';
import { caseStudiesList } from '../data/caseStudies.js';

export default function CaseStudies() {
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
            Verified Client Outcomes
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
            Real Growth Stories &amp;{' '}
            <span className="gradient-text">Documented ROI</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Explore how we help e-commerce stores, local service brands, and international businesses achieve market dominance with AI-powered SEO and paid media.
          </p>
        </div>
      </section>

      {/* Listing Grid */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {caseStudiesList.map((study) => (
              <div
                key={study.slug}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Industry & Location */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#00d2d2',
                      }}
                    />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate-400)' }}>
                      {study.industry} · {study.location}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 800,
                      color: 'var(--color-navy-950)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {study.client}
                  </h2>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-slate-400)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                    }}
                  >
                    <strong style={{ color: 'var(--color-navy-950)' }}>Challenge:</strong> {study.challenge}
                  </p>

                  {/* Metrics */}
                  <div
                    style={{
                      backgroundColor: 'rgba(240, 253, 253, 0.8)',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(10, 15, 30, 0.06)',
                      padding: '0.875rem 1rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {study.results.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.375rem 0',
                          borderBottom: rIdx < study.results.length - 1 ? '1px solid rgba(10, 15, 30, 0.05)' : 'none',
                        }}
                      >
                        <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)' }}>
                          {r.metric}
                        </span>
                        <span
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 800,
                            color: '#00a8a8',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          <TrendingUp style={{ width: '0.875rem', height: '0.875rem' }} />
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
                    {study.services.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          backgroundColor: 'rgba(0, 210, 210, 0.08)',
                          color: '#00a8a8',
                          border: '1px solid rgba(0, 210, 210, 0.2)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.slug}`}
                  style={{
                    color: 'var(--color-teal-500)',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>View Case Study Blueprint</span>
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
