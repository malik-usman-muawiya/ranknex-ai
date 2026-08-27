import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function LocalSEOSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          tag="Global Delivery Hub"
          title={
            <>
              Why UK &amp; US Businesses Choose an{' '}
              <span className="gradient-text font-bold">SEO Agency in Lahore</span>
            </>
          }
          subtitle="Lahore has become South Asia's most active digital talent powerhouse, giving international businesses access to senior marketing strategists at a fraction of Western agency rates."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <div className="card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(0, 210, 210, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00d2d2',
                marginBottom: '1.25rem',
              }}
            >
              <Globe2 style={{ width: '1.5rem', height: '1.5rem' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.75rem' }}>
              60% Lower Retainers. 100% Quality.
            </h3>
            <p style={{ color: 'var(--color-slate-400)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Western agencies spend majority of their fees on expensive office rents and corporate overhead. By partnering with RankNex AI in Lahore, you get the exact same calibre of technical SEO, high-impact copywriting, and link building at 60% lower cost.
            </p>
          </div>

          <div className="card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(51, 222, 222, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#33dede',
                marginBottom: '1.25rem',
              }}
            >
              <MapPin style={{ width: '1.5rem', height: '1.5rem' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.75rem' }}>
              Zero Friction Time Zone Coverage
            </h3>
            <p style={{ color: 'var(--color-slate-400)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              We operate across UK and US business hours with instant WhatsApp access, dedicated account strategists, predictable weekly sprint updates, and comprehensive monthly performance reporting.
            </p>
          </div>
        </div>

        {/* Dedicated Region Hubs */}
        <SectionHeading
          tag="Market Specialization"
          title={
            <>
              Dedicated Portals for the <span className="gradient-text font-bold">UK &amp; US Markets</span>
            </>
          }
          subtitle="Specialized market teams that understand localized search nuances, regional dialects, and buyer intent."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <Link to="/uk" style={{ textDecoration: 'none', display: 'flex' }}>
            <div className="card-glass" style={{ flex: 1 }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#00a8a8', marginBottom: '0.75rem', display: 'inline-block' }}>
                🇬🇧 UK Delivery · Blackburn Office
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.75rem' }}>
                Engineered for UK Businesses
              </h3>
              <p style={{ color: 'var(--color-slate-400)', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                British English copywriting, UK local search intent, and Google.co.uk optimization, backed by our registered UK office in Blackburn.
              </p>
              <span style={{ color: 'var(--color-teal-500)', fontWeight: 700, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                Explore UK Services <ArrowRight style={{ width: '1rem', height: '1rem' }} />
              </span>
            </div>
          </Link>

          <Link to="/us" style={{ textDecoration: 'none', display: 'flex' }}>
            <div className="card-glass" style={{ flex: 1 }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#33dede', marginBottom: '0.75rem', display: 'inline-block' }}>
                🇺🇸 US Timezone Coverage
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '0.75rem' }}>
                Silicon Valley Standard Execution
              </h3>
              <p style={{ color: 'var(--color-slate-400)', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                High-speed execution, AEO/GEO integration, and US commercial keyword targeting with same-day responses during US working hours.
              </p>
              <span style={{ color: 'var(--color-teal-500)', fontWeight: 700, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                Explore US Services <ArrowRight style={{ width: '1rem', height: '1rem' }} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
