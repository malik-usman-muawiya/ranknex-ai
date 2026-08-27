import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  MousePointerClick,
  PenTool,
  MonitorSmartphone,
  Palette,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import GradientOrbs from '../ui/GradientOrbs.jsx';
import { servicesList } from '../../data/services.js';

const iconMap = {
  Search: Search,
  MousePointerClick: MousePointerClick,
  Share2: Share2,
  PenTool: PenTool,
  MonitorSmartphone: MonitorSmartphone,
  Palette: Palette,
};

export default function ServicesGrid() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <GradientOrbs
        orbs={[
          { color: 'teal', size: 300, top: '10%', right: '-5%' },
          { color: 'cyan', size: 250, bottom: '10%', left: '-5%' },
        ]}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="Our Services"
          title={
            <>
              Everything You Need to Grow Online <span className="gradient-text">: In One Place</span>
            </>
          }
          subtitle="Six core digital marketing disciplines. One integrated team. Zero silos. Designed to compound your market share."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {servicesList.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                style={{ textDecoration: 'none', display: 'flex' }}
              >
                <div
                  className="card"
                  style={{
                    flex: 1,
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
                        width: '54px',
                        height: '54px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(0, 210, 210, 0.1)',
                        color: '#00d2d2',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <Icon style={{ width: '1.625rem', height: '1.625rem' }} />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-navy-950)',
                        marginBottom: '0.75rem',
                        lineHeight: 1.35,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
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
                  </div>

                  {/* Link CTA */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--color-teal-500)',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                    }}
                  >
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
