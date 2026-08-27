import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Building2,
} from 'lucide-react';
import Logo from './Logo.jsx';
import { offices } from '../data/offices.js';

const services = [
  { label: 'SEO & AI Search', href: '/services/seo' },
  { label: 'PPC Advertising', href: '/services/ppc-advertising' },
  { label: 'Social Media Marketing', href: '/services/social-media' },
  { label: 'Content Writing', href: '/services/content-writing' },
  { label: 'Web Design & Development', href: '/services/web-designing' },
  { label: 'Branding & Identity', href: '/services/branding' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#0a0f1e',
        color: '#ffffff',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Decorative ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 210, 210, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <Logo size={42} width={240} isFooter={true} />
            </Link>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              RankNex AI is Pakistan&apos;s AI-first digital marketing agency.
              Delivering international-calibre SEO, PPC, and AEO/GEO services to businesses in the UK, US, and Pakistan at 60% lower cost.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://facebook.com/ranknexai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  transition: 'all 0.2s',
                }}
              >
                <Facebook style={{ width: '1.125rem', height: '1.125rem' }} />
              </a>
              <a
                href="https://www.instagram.com/ranknexai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  transition: 'all 0.2s',
                }}
              >
                <Instagram style={{ width: '1.125rem', height: '1.125rem' }} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.9375rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00D2D2')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.9375rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00D2D2')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <li>
                <a
                  href="https://wa.me/923224044150"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9375rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    textDecoration: 'none',
                  }}
                >
                  <Phone style={{ width: '1.125rem', height: '1.125rem', color: '#00D2D2' }} />
                  <span>+92 322 4044150</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ranknexai.com"
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9375rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    textDecoration: 'none',
                  }}
                >
                  <Mail style={{ width: '1.125rem', height: '1.125rem', color: '#00D2D2' }} />
                  <span>info@ranknexai.com</span>
                </a>
              </li>
              <li>
                <div
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9375rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                  }}
                >
                  <MapPin style={{ width: '1.125rem', height: '1.125rem', color: '#00D2D2', marginTop: '3px' }} />
                  <span>Badami Bagh, Lahore, Pakistan</span>
                </div>
              </li>
            </ul>

            <Link
              to="/contact"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                fontSize: '0.875rem',
              }}
            >
              <span>Get Free Audit</span>
              <ArrowUpRight style={{ width: '1rem', height: '1rem' }} />
            </Link>
          </div>
        </div>

        {/* Office Addresses */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#00D2D2',
              backgroundColor: 'rgba(0, 210, 210, 0.1)',
              border: '1px solid rgba(0, 210, 210, 0.2)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              marginBottom: '1.25rem',
            }}
          >
            <Building2 style={{ width: '0.875rem', height: '0.875rem' }} />
            Global Offices
          </span>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {offices.map((office) => (
              <div
                key={office.country}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.875rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <img
                  src={`https://flagcdn.com/w40/${office.code}.png`}
                  alt={`${office.country} flag`}
                  style={{
                    width: '32px',
                    height: '24px',
                    borderRadius: '4px',
                    objectFit: 'cover',
                    marginTop: '2px',
                  }}
                  loading="lazy"
                />
                <div>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9375rem' }}>
                    {office.country} <span style={{ color: '#64748b', fontWeight: 400 }}>({office.label})</span>
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {office.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            color: '#94a3b8',
            fontSize: '0.8125rem',
          }}
        >
          <p>© {new Date().getFullYear()} RankNex AI. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
