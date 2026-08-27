import React from 'react';
import { Users, Globe, TrendingUp, Bot } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter.jsx';

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Clients Served',
    description: 'UK, US & Pakistan',
  },
  {
    icon: Globe,
    value: 3,
    suffix: '+',
    label: 'Countries',
    description: 'Serving Globally',
  },
  {
    icon: TrendingUp,
    value: 90,
    suffix: '%',
    label: 'Client Retention Rate',
    description: 'Industry avg: 54%',
  },
  {
    icon: Bot,
    value: 90,
    suffix: ' Days',
    label: 'To First Results',
    description: 'Guaranteed or we work free',
  },
];

export default function StatsBar() {
  return (
    <section style={{ position: 'relative', zIndex: 20, marginTop: '-2rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        <div
          className="glass-strong glow-teal"
          style={{
            borderRadius: '1.25rem',
            padding: '2rem 1.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem 1.5rem',
            }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 210, 210, 0.1)',
                      color: '#00d2d2',
                      marginBottom: '0.875rem',
                    }}
                  >
                    <Icon style={{ width: '1.375rem', height: '1.375rem' }} />
                  </div>
                  <div
                    className="gradient-text-teal"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1,
                      marginBottom: '0.375rem',
                    }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: 'var(--color-navy-950)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)' }}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
