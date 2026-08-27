import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/helpers.js';

export default function CTABanner() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, rgba(0, 210, 210, 0.12) 0%, #f0fdfd 45%, rgba(51, 222, 222, 0.15) 100%)',
            border: '1px solid rgba(0, 210, 210, 0.3)',
            boxShadow: '0 25px 60px rgba(0, 210, 210, 0.1), 0 10px 30px rgba(0, 0, 0, 0.03)',
            padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 3rem)',
            textAlign: 'center',
          }}
        >
          {/* Sparkle Icon */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              backgroundColor: 'rgba(0, 210, 210, 0.15)',
              color: '#00d2d2',
              marginBottom: '1.5rem',
            }}
          >
            <Sparkles style={{ width: '2rem', height: '2rem' }} />
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              lineHeight: 1.2,
              maxWidth: '780px',
              margin: '0 auto 1.25rem auto',
            }}
          >
            Find Out Exactly What&apos;s{' '}
            <span className="gradient-text">Holding Your Business Back</span> Online.
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--color-slate-400)',
              maxWidth: '640px',
              margin: '0 auto 2.25rem auto',
              lineHeight: 1.7,
            }}
          >
            We&apos;ll audit your website, your Google rankings, your top 5 competitors, and your AI search visibility, all at no cost. You will get a real, actionable report. No sales pressure. No commitment.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <Link
              to="/contact"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9375rem 2rem' }}
            >
              <span>Get My Free Audit ($500 Value)</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
            <a
              href={getWhatsAppUrl('Hi RankNex AI! I want to get a free SEO audit for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '0.9375rem 1.75rem', backgroundColor: '#ffffff' }}
            >
              <MessageCircle style={{ width: '1.25rem', height: '1.25rem', color: '#25D366' }} />
              <span>Chat With Our Team on WhatsApp</span>
            </a>
          </div>

          {/* Micro-trust indicators */}
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-slate-400)',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            ✓ Free Audit Worth $500 &nbsp;·&nbsp; ✓ Results in 90 Days or We Work Free &nbsp;·&nbsp; ✓ No Long-Term Contracts &nbsp;·&nbsp; ✓ Cancel Anytime
          </p>

          {/* Urgency line */}
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-slate-500)',
              marginTop: '0.625rem',
            }}
          >
            We take on a limited number of new clients each month to protect delivery quality. Spots for the current quarter are open.
          </p>
        </div>
      </div>
    </section>
  );
}
