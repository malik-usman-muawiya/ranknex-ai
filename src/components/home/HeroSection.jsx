import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground.jsx';
import GradientOrbs from '../ui/GradientOrbs.jsx';
import HeroVisual from './HeroVisual.jsx';
import { getWhatsAppUrl } from '../../utils/helpers.js';

const trustPoints = [
  'Results in 90 Days Guaranteed',
  'No Lock-In Contracts',
  '50+ Businesses Scaled',
  'Google + AI Search (AEO/GEO)',
];

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        overflow: 'hidden',
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Background layers */}
      <div className="gradient-bg" style={{ position: 'absolute', inset: 0 }} />
      <ParticleBackground particleCount={36} connectionDistance={110} />
      <GradientOrbs
        orbs={[
          { color: 'teal', size: 500, top: '-15%', right: '-10%' },
          { color: 'cyan', size: 400, bottom: '-15%', left: '-10%' },
          { color: 'teal', size: 250, top: '60%', left: '50%' },
        ]}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Central spotlight glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '35%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          maxWidth: '100%',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(0, 210, 210, 0.12), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(0, 210, 210, 0.08)',
                color: '#00a8a8',
                border: '1px solid rgba(0, 210, 210, 0.25)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00d2d2',
                  display: 'inline-block',
                }}
              />
              Pakistan&apos;s AI-First SEO Company · Serving UK &amp; US Businesses
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ color: 'var(--color-navy-950)' }}>More Than Rankings.</span>
            <br />
            <span className="gradient-text">We Build Real Revenue.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto 2.25rem auto',
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.7,
            }}
          >
            We help businesses in the UK, US, and Pakistan rank on Google, show up inside AI answers (ChatGPT, Gemini, Perplexity), and convert online visibility into profitable customers.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9375rem 2rem' }}>
              <span>Get Your Free SEO Audit ($500 Value)</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
            <a
              href={getWhatsAppUrl('Hi RankNex AI! I would like to get a free SEO audit for my website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '0.9375rem 1.75rem' }}
            >
              <MessageCircle style={{ width: '1.25rem', height: '1.25rem', color: '#25D366' }} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.625rem',
            }}
          >
            {trustPoints.map((point) => (
              <span
                key={point}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.375rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--color-slate-400)',
                  backgroundColor: 'rgba(240, 253, 253, 0.9)',
                  border: '1px solid rgba(10, 15, 30, 0.08)',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 210, 210, 0.15)',
                    color: '#00d2d2',
                  }}
                >
                  <Check style={{ width: '12px', height: '12px' }} strokeWidth={3} />
                </span>
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard visual */}
        <HeroVisual />
      </div>
    </section>
  );
}
