import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              marginBottom: '1rem',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', marginBottom: '2.5rem' }}>
            Last Updated: January 1, 2025
          </p>

          <div
            style={{
              color: 'var(--color-slate-300)',
              fontSize: '1rem',
              lineHeight: 1.8,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              At RankNex AI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), protecting your personal privacy is paramount. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (ranknexai.com) or utilize our digital marketing and SEO services.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when requesting a free SEO audit, submitting a contact form inquiry, or contacting our team via WhatsApp. This may include your full name, business email address, company name, website URL, and campaign goals.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information strictly to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Generate and deliver your custom SEO and technical performance audit report.</li>
              <li>Communicate with you regarding our services, proposals, and campaign updates.</li>
              <li>Improve our website performance, user experience, and technical infrastructure.</li>
            </ul>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              3. Data Security &amp; Sharing
            </h2>
            <p>
              We never sell, rent, or trade your personal data to third parties. We employ industry-standard encryption and security protocols to prevent unauthorized access or disclosure of your information.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-navy-950)', marginTop: '1rem' }}>
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at <a href="mailto:info@ranknexai.com" style={{ color: 'var(--color-teal-500)' }}>info@ranknexai.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
