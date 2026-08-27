import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'RankNex AI — AI-Powered SEO & Digital Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0a0f1e',
          backgroundImage:
            'radial-gradient(circle at 85% 20%, rgba(45, 212, 191, 0.25) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(34, 211, 238, 0.15) 0%, transparent 40%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #2dd4bf, #22d3ee)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 700,
              color: '#0a0f1e',
            }}
          >
            R
          </div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, color: '#ffffff' }}>
            RankNex <span style={{ color: '#2dd4bf', marginLeft: 8 }}>AI</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          AI-Powered SEO &amp; Digital Marketing Agency
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#94a3b8',
            marginTop: 24,
            maxWidth: 820,
          }}
        >
          Helping UK, US &amp; Pakistani businesses rank higher and grow faster
        </div>
      </div>
    ),
    { ...size }
  );
}
