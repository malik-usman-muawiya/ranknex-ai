import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: isCenter ? '0 auto 3.5rem auto' : '0 0 2.5rem 0',
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {tag && (
        <span
          style={{
            display: 'inline-block',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.8125rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-teal-500)',
            border: '1px solid rgba(0, 210, 210, 0.25)',
            backgroundColor: 'rgba(0, 210, 210, 0.08)',
            marginBottom: '1rem',
          }}
        >
          {tag}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--color-navy-950)',
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'var(--color-slate-400)',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: isCenter ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
