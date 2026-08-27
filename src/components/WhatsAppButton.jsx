import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/helpers.js';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 990,
      }}
    >
      {/* Tooltip */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            right: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            marginRight: '0.75rem',
            backgroundColor: '#ffffff',
            color: '#0A0F1E',
            fontSize: '0.875rem',
            fontWeight: 600,
            padding: '0.5rem 0.875rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
            whiteSpace: 'nowrap',
          }}
        >
          Chat with our team
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl('Hi RankNex AI! I would like to discuss growing my business online.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.25s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <svg
          viewBox="0 0 32 32"
          style={{ width: '32px', height: '32px', fill: '#ffffff' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.001 3C9.097 3 3.5 8.597 3.5 15.5c0 2.444.696 4.726 1.902 6.665L3 29l7.05-2.358A12.43 12.43 0 0 0 16 28.5C22.903 28.5 28.5 22.903 28.5 16S22.903 3 16.001 3Zm7.36 17.642c-.31.875-1.532 1.598-2.512 1.81-.668.143-1.541.257-4.479-.96-3.76-1.557-6.181-5.378-6.37-5.628-.183-.25-1.527-2.033-1.527-3.878 0-1.845.964-2.748 1.307-3.124.343-.376.75-.47.999-.47.25 0 .499.002.717.013.231.012.541-.088.846.645.31.748 1.054 2.593 1.146 2.78.092.187.153.406.031.656-.122.25-.183.406-.36.624-.179.218-.376.487-.538.654-.18.187-.367.39-.158.766.21.376.93 1.535 1.998 2.487 1.373 1.225 2.532 1.605 2.908 1.787.376.18.595.156.815-.094.22-.25.939-1.095 1.19-1.47.25-.376.5-.313.844-.188.343.125 2.18 1.03 2.554 1.218.376.187.625.281.717.438.092.156.092.906-.218 1.78Z" />
        </svg>
      </a>
    </div>
  );
}
