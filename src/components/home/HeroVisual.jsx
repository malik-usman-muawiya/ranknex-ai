import React from 'react';
import { TrendingUp, Search, Users } from 'lucide-react';

const tiles = [
  { label: 'Keywords Top 10', value: '1,240' },
  { label: 'Conversion Rate', value: '6.8%' },
  { label: 'Domain Rating', value: '72' },
];

const bars = [38, 52, 46, 64, 58, 76, 70, 88];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

export default function HeroVisual() {
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '820px',
        margin: '3.5rem auto 0 auto',
        width: '100%',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-1rem',
          borderRadius: '2rem',
          backgroundColor: 'rgba(0, 210, 210, 0.1)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main card */}
      <div
        className="glass-strong"
        style={{
          position: 'relative',
          borderRadius: '1.25rem',
          border: '1px solid rgba(10, 15, 30, 0.1)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06), 0 0 30px rgba(0, 210, 210, 0.08)',
        }}
      >
        {/* Card Header Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid rgba(10, 15, 30, 0.06)',
            backgroundColor: 'rgba(240, 253, 253, 0.5)',
          }}
        >
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f87171' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#34d399' }} />
          <span style={{ marginLeft: '0.75rem', fontSize: '0.8125rem', color: 'var(--color-slate-400)', fontWeight: 600 }}>
            RankNex AI · Client Organic Growth Report
          </span>
          <span
            style={{
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: '#00a8a8',
              backgroundColor: 'rgba(0, 210, 210, 0.12)',
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#00d2d2',
              }}
            />
            Live Verified Data
          </span>
        </div>

        {/* Card Body */}
        <div style={{ padding: '1.5rem' }}>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)', marginBottom: '0.25rem' }}>
                Organic Search Traffic · Last 30 Days
              </p>
              <p
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy-950)',
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                128,540
              </p>
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: '#00a8a8',
                fontSize: '0.875rem',
                fontWeight: 700,
                backgroundColor: 'rgba(0, 210, 210, 0.1)',
                border: '1px solid rgba(0, 210, 210, 0.25)',
                padding: '0.375rem 0.75rem',
                borderRadius: '0.5rem',
              }}
            >
              <TrendingUp style={{ width: '1rem', height: '1rem' }} /> +217% MoM
            </span>
          </div>

          {/* Charts Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* SVG Area Chart */}
            <div style={{ height: '130px', position: 'relative' }}>
              <svg viewBox="0 0 320 120" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D2D2" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#00D2D2" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 100 L40 92 L80 96 L120 74 L160 78 L200 52 L240 40 L280 30 L320 12 L320 120 L0 120 Z"
                  fill="url(#heroAreaGradient)"
                />
                <path
                  d="M0 100 L40 92 L80 96 L120 74 L160 78 L200 52 L240 40 L280 30 L320 12"
                  fill="none"
                  stroke="#00D2D2"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="320" cy="12" r="5" fill="#ffffff" stroke="#00D2D2" strokeWidth="3" />
              </svg>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.625rem',
                  color: 'var(--color-slate-500)',
                  marginTop: '0.25rem',
                }}
              >
                {months.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '0.5rem',
                height: '130px',
                paddingBottom: '1.25rem',
              }}
            >
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    backgroundColor: i === bars.length - 1 ? '#00D2D2' : 'rgba(0, 210, 210, 0.4)',
                    borderRadius: '4px 4px 0 0',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mini Stat Tiles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem',
              marginTop: '1.25rem',
            }}
          >
            {tiles.map((tile) => (
              <div
                key={tile.label}
                style={{
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(240, 253, 253, 0.8)',
                  border: '1px solid rgba(10, 15, 30, 0.06)',
                  padding: '0.75rem',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-navy-950)',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1,
                  }}
                >
                  {tile.value}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)', marginTop: '0.375rem' }}>
                  {tile.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
