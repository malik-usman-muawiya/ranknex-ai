import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bot, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';

const channels = [
  {
    icon: Search,
    title: 'Google Search Engine',
    description: 'Traditional technical SEO, structured content & top 3 ranking strategies.',
  },
  {
    icon: Bot,
    title: 'ChatGPT / Gemini / Perplexity',
    description: 'AEO + GEO generative optimization so AI models recommend your business.',
  },
  {
    icon: MapPin,
    title: 'Local Maps & Voice Search',
    description: 'Hyper-local map pack dominance and local intent conversion funnels.',
  },
];

export default function AEOGeoSection() {
  return (
    <section className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="AI Search Frontier"
          title={
            <>
              Search Is Changing. <span className="gradient-text font-bold">Is Your Business Keeping Up?</span>
            </>
          }
          subtitle="Google is no longer the only place consumers search. Millions now ask ChatGPT, Gemini, and Perplexity for vendor recommendations, and those AI tools recommend brands with structured entity authority."
        />

        <div
          style={{
            maxWidth: '750px',
            margin: '-1.5rem auto 2.5rem auto',
            textAlign: 'center',
            color: 'var(--color-slate-400)',
            fontSize: '1rem',
            lineHeight: 1.7,
          }}
        >
          We call this Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We include both in every SEO engagement, because appearing inside AI answers is the next massive competitive moat.
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="card-glass" style={{ textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 210, 210, 0.1)',
                    color: '#00d2d2',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {channel.title}
                </h3>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {channel.description}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/services/aeo-geo-optimization" className="btn-secondary">
            <span>Learn How We Optimize for AI Search</span>
            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
