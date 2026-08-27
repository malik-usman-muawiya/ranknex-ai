import React from 'react';

export default function Logo({
  className = '',
  size = 42,
  width = 250,
  isFooter = false,
}) {
  return (
    <span className={`inline-flex items-center select-none ${className}`} style={{ maxWidth: '100%' }}>
      <img
        src="/logo-mark.webp"
        alt="RankNex AI"
        width={300}
        height={60}
        className="object-contain"
        style={{
          height: `${size}px`,
          width: typeof width === 'number' ? `${width}px` : width,
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
        onError={(e) => {
          // Fallback if webp isn't found
          e.currentTarget.src = '/logo.png';
        }}
      />
    </span>
  );
}
