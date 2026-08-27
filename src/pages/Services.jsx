import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  MousePointerClick,
  PenTool,
  MonitorSmartphone,
  Palette,
  Bot,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { servicesList } from '../data/services.js';

const iconMap = {
  Search: Search,
  MousePointerClick: MousePointerClick,
  Share2: Share2,
  PenTool: PenTool,
  MonitorSmartphone: MonitorSmartphone,
  Palette: Palette,
  Bot: Bot,
};

export default function Services() {
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
            Digital Marketing Capabilities
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
            Full-Stack Growth Services{' '}
            <span className="gradient-text">Engineered for Revenue</span>
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
            From Google page 1 rankings and ChatGPT search dominance to high-converting websites and paid ad management — everything your brand needs to scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {servicesList.map((service) => {
              const Icon = iconMap[service.icon] || Search;
              return (
                <div
                  key={service.slug}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Icon */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(0, 210, 210, 0.1)',
                        color: '#00d2d2',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <Icon style={{ width: '1.75rem', height: '1.75rem' }} />
                    </div>

                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#00a8a8',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {service.tag}
                    </span>

                    <h2
                      style={{
                        fontSize: '1.375rem',
                        fontWeight: 800,
                        color: 'var(--color-navy-950)',
                        marginBottom: '0.875rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h2>

                    <p
                      style={{
                        color: 'var(--color-slate-400)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.65,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                      {service.features.slice(0, 4).map((f, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            color: 'var(--color-slate-300)',
                          }}
                        >
                          <CheckCircle2
                            style={{
                              width: '1rem',
                              height: '1rem',
                              color: '#00d2d2',
                              flexShrink: 0,
                              marginTop: '3px',
                            }}
                          />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="btn-secondary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                    }}
                  >
                    <span>View Service Details &amp; Pricing</span>
                    <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
