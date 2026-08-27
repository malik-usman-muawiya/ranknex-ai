import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div
          className="gradient-text-teal"
          style={{
            fontSize: 'clamp(5rem, 10vw, 8rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: 'var(--color-navy-950)',
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'var(--color-slate-400)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          The page you are looking for may have been moved, renamed, or does not exist. Let&apos;s get you back on track.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/" className="btn-primary">
            <Home style={{ width: '1.125rem', height: '1.125rem' }} />
            <span>Back to Home</span>
          </Link>
          <Link to="/services" className="btn-secondary">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
