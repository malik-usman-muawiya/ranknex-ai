import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FAQ from '../components/ui/FAQ.jsx';
import CTABanner from '../components/home/CTABanner.jsx';
import { servicesList } from '../data/services.js';
import { getWhatsAppUrl } from '../utils/helpers.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      {/* Service Hero */}
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
            {service.tag}
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              lineHeight: 1.2,
              maxWidth: '850px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            {service.title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.75,
              maxWidth: '750px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {service.description}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9375rem 2rem' }}>
              <span>Get Your Free Strategy Audit</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
            <a
              href={getWhatsAppUrl(`Hi RankNex AI! I am interested in ${service.shortTitle} services.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '0.9375rem 1.75rem' }}
            >
              <MessageCircle style={{ width: '1.25rem', height: '1.25rem', color: '#25D366' }} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            tag="What Is Included"
            title={
              <>
                Comprehensive <span className="gradient-text">Deliverables &amp; Execution</span>
              </>
            }
            subtitle="Everything required to achieve market leadership in your niche, delivered with zero shortcuts."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {service.features.map((feature, idx) => (
              <div key={idx} className="card-glass" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <CheckCircle2 style={{ width: '1.25rem', height: '1.25rem', color: '#00d2d2', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.25rem' }}>
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="The ROI"
            title={
              <>
                The Commercial Advantage <span className="gradient-text">For Your Business</span>
              </>
            }
            subtitle="Why our client retainers deliver 3x to 10x return on investment."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="card">
                <ShieldCheck style={{ width: '1.75rem', height: '1.75rem', color: '#00d2d2', marginBottom: '0.75rem' }} />
                <p style={{ color: 'var(--color-navy-950)', fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <SectionHeading
              tag="Frequently Asked Questions"
              title={
                <>
                  Questions About <span className="gradient-text">{service.shortTitle}</span>
                </>
              }
              subtitle="Everything you need to know before getting started."
            />
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <FAQ items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
