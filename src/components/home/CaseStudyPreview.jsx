import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import { caseStudiesList } from '../../data/caseStudies.js';

export default function CaseStudyPreview() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="Documented Client Results"
          title={
            <>
              Real Numbers. Verified Growth. <span className="gradient-text font-bold">Zero Embellishment.</span>
            </>
          }
          subtitle="Every result below is backed by verified analytics data. We share the campaign challenge, the tactical execution, and the full financial outcome."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {caseStudiesList.slice(0, 3).map((study) => (
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

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {study.client}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-slate-400)',
                    lineHeight: 1.6,
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

                {/* Service Tags */}
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

              {/* Link */}
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
                <span>Read Full Case Study</span>
                <ArrowRight style={{ width: '1rem', height: '1rem' }} />
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/case-studies" className="btn-secondary">
            <span>View All Client Case Studies</span>
            <ExternalLink style={{ width: '1rem', height: '1rem' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
