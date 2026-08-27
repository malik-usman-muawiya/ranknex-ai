import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, TrendingUp, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { offices } from '../data/offices.js';
import { getWhatsAppUrl } from '../utils/helpers.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: 'SEO & AI Search',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
            Start Your Growth Journey
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
            Let&apos;s Build Your <span className="gradient-text">Unfair Advantage</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Request your free $500 comprehensive audit or message our leadership directly on WhatsApp for an immediate consultation.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Form */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1.5rem' }}>
                Request Your Free Audit
              </h2>

              {isSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(0, 210, 210, 0.1)',
                    border: '1px solid rgba(0, 210, 210, 0.3)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 style={{ width: '3rem', height: '3rem', color: '#00d2d2', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '0.5rem' }}>
                    Audit Request Received!
                  </h3>
                  <p style={{ color: 'var(--color-slate-400)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Our strategy team will review your website and competitor landscape within 24 hours. Check your email or WhatsApp for your full diagnostic report.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.375rem' }}>
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '0.625rem',
                        border: '1px solid rgba(10, 15, 30, 0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.9375rem',
                        color: 'var(--color-navy-950)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.375rem' }}>
                      Business Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '0.625rem',
                        border: '1px solid rgba(10, 15, 30, 0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.9375rem',
                        color: 'var(--color-navy-950)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.375rem' }}>
                      Website URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '0.625rem',
                        border: '1px solid rgba(10, 15, 30, 0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.9375rem',
                        color: 'var(--color-navy-950)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.375rem' }}>
                      Primary Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '0.625rem',
                        border: '1px solid rgba(10, 15, 30, 0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.9375rem',
                        color: 'var(--color-navy-950)',
                        outline: 'none',
                      }}
                    >
                      <option value="SEO & AI Search">SEO &amp; AI Search Optimization</option>
                      <option value="PPC Advertising">PPC &amp; Google/Meta Ads</option>
                      <option value="Web Design & Development">Web Design &amp; Speed Optimization</option>
                      <option value="Content Writing">Content Writing &amp; Copy</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Branding & Identity">Branding &amp; Identity</option>
                      <option value="Other">Other Custom Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.375rem' }}>
                      Tell Us About Your Goals &amp; Competitors
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What are your current revenue goals and top target markets?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '0.625rem',
                        border: '1px solid rgba(10, 15, 30, 0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.9375rem',
                        color: 'var(--color-navy-950)',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                    <span>Send Audit Request</span>
                    <Send style={{ width: '1.125rem', height: '1.125rem' }} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Cards & Offices */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* WhatsApp Fast Channel */}
              <div
                className="card-glass"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, rgba(240, 253, 253, 0.95) 100%)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MessageCircle style={{ width: '1.375rem', height: '1.375rem' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
                      Instant WhatsApp Channel
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
                      Direct access to senior strategy team
                    </p>
                  </div>
                </div>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Need immediate answers or want to discuss project scope? We respond on WhatsApp in real-time.
                </p>
                <a
                  href={getWhatsAppUrl('Hi RankNex AI! I would like to speak with a strategist.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    backgroundColor: '#25D366',
                    backgroundImage: 'none',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <span>Chat on WhatsApp (+92 322 4044150)</span>
                </a>
              </div>

              {/* Direct Details */}
              <div className="card">
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1rem' }}>
                  Direct Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a
                    href="mailto:info@ranknexai.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'var(--color-slate-300)',
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                    }}
                  >
                    <Mail style={{ width: '1.25rem', height: '1.25rem', color: '#00d2d2' }} />
                    <span>info@ranknexai.com</span>
                  </a>
                  <a
                    href="https://wa.me/923224044150"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'var(--color-slate-300)',
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                    }}
                  >
                    <Phone style={{ width: '1.25rem', height: '1.25rem', color: '#00d2d2' }} />
                    <span>+92 322 4044150</span>
                  </a>
                </div>
              </div>

              {/* Global Offices */}
              <div className="card">
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1rem' }}>
                  Global Office Locations
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {offices.map((office) => (
                    <div
                      key={office.country}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        backgroundColor: 'rgba(240, 253, 253, 0.7)',
                      }}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${office.code}.png`}
                        alt={`${office.country} flag`}
                        style={{ width: '28px', height: '20px', borderRadius: '3px', marginTop: '2px' }}
                      />
                      <div>
                        <p style={{ fontWeight: 700, color: 'var(--color-navy-950)', fontSize: '0.875rem' }}>
                          {office.country} ({office.label})
                        </p>
                        <p style={{ color: 'var(--color-slate-400)', fontSize: '0.8125rem' }}>
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
