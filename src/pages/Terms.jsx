import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              marginBottom: '1rem',
            }}
          >
            Terms of Service
          </h1>
          <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', marginBottom: '2.5rem' }}>
            Last Updated: January 1, 2025
          </p>

          <div
            style={{
              color: 'var(--color-slate-300)',
              fontSize: '1rem',
              lineHeight: 1.8,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              Welcome to RankNex AI. By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              1. Services &amp; Engagements
            </h2>
            <p>
              RankNex AI provides SEO, PPC advertising management, AI search optimization (AEO/GEO), copywriting, and web development services. Our engagements operate on transparent, month-to-month rolling agreements unless otherwise specified in an individual statement of work.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              2. 90-Day Results Guarantee
            </h2>
            <p>
              Under our 90-day results guarantee, we establish agreed-upon search performance milestone targets. If measurable rank or traffic movement is not achieved within 90 days of onboarding (subject to client implementation of technical recommendations), we continue providing services without additional labor fees until agreed milestones are satisfied.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              3. Intellectual Property
            </h2>
            <p>
              All custom content, copy, website code, and creative assets produced for paying clients become the exclusive property of the client upon receipt of full payment.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              4. Inquiries &amp; Support
            </h2>
            <p>
              For legal or contract questions, reach us at <a href="mailto:info@ranknexai.com" style={{ color: 'var(--color-teal-500)' }}>info@ranknexai.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
