import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ items = [], className = '' }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              borderRadius: '0.875rem',
              border: '1px solid rgba(10, 15, 30, 0.08)',
              backgroundColor: 'rgba(240, 253, 253, 0.6)',
              overflow: 'hidden',
              transition: 'all 0.25s ease',
            }}
          >
            <button
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                gap: '1rem',
              }}
              aria-expanded={isOpen}
            >
              <span
                style={{
                  color: 'var(--color-navy-950)',
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  color: 'var(--color-teal-500)',
                  flexShrink: 0,
                }}
              >
                <ChevronDown style={{ width: '1.25rem', height: '1.25rem' }} />
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '0 1.5rem 1.25rem 1.5rem',
                  color: 'var(--color-slate-400)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  borderTop: '1px solid rgba(10, 15, 30, 0.06)',
                  paddingTop: '1rem',
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
