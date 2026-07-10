import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RankNex AI',
  description:
    'Read the RankNex AI privacy policy to understand how we collect, use, and protect your personal information when you use our website and services.',
  alternates: {
    canonical: 'https://www.ranknexai.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | RankNex AI',
    description:
      'Read the RankNex AI privacy policy to understand how we collect, use, and protect your personal information when you use our website and services.',
    url: 'https://www.ranknexai.com/privacy-policy',
    siteName: 'RankNex AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | RankNex AI',
    description:
      'Read the RankNex AI privacy policy to understand how we collect, use, and protect your personal information when you use our website and services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 2026';

  return (
    <main className="relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="orb orb-teal w-96 h-96 -top-48 -right-24 opacity-10" />
      <div className="orb orb-cyan w-72 h-72 bottom-12 -left-36 opacity-8" />

      <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: {lastUpdated}</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">1. Introduction</h2>
            <p>
              RankNex AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates ranknexai.com (the
              &quot;Site&quot;) and provides digital marketing, SEO, PPC, content writing, web design, and
              branding services. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our Site or use our services. By using the Site, you agree to
              the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information in the following ways:</p>
            <p className="mb-3">
              <span className="text-white font-semibold">Information you provide directly:</span> When you
              submit a contact form, request a free audit, or reach out via WhatsApp or email, we collect
              details such as your name, email address, phone number, company name, the service you are
              interested in, and any message you send us.
            </p>
            <p>
              <span className="text-white font-semibold">Information collected automatically:</span> When you
              browse the Site, we automatically collect certain technical data, including your IP address,
              browser type, device information, pages visited, time spent on pages, and referring URLs. This
              is collected through Google Analytics and similar tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Send you free audits, proposals, or other materials you request</li>
              <li>Communicate with you about your project or our services</li>
              <li>Improve our Site, services, and user experience</li>
              <li>Analyze how visitors use our Site through analytics tools</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">4. Cookies and Tracking Technologies</h2>
            <p>
              Our Site uses cookies and similar tracking technologies, including Google Analytics, to
              understand how visitors interact with the Site. Cookies are small text files stored on your
              device. You can control or disable cookies through your browser settings, though doing so may
              affect certain features of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">5. How We Share Your Information</h2>
            <p className="mb-3">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Service providers who help us operate the Site and deliver our services (such as hosting
                providers, email tools, and analytics platforms)
              </li>
              <li>Legal authorities, when required to comply with applicable law or legal process</li>
              <li>A successor entity, in the event of a merger, acquisition, or sale of business assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">6. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes outlined in
              this policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">7. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal
              information from unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">8. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict the
              use of your personal information. To exercise these rights, contact us using the details
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">9. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the privacy
              practices or content of those websites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">10. Children&apos;s Privacy</h2>
            <p>
              Our Site and services are not directed at individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated &quot;Last updated&quot; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">12. Contact Us</h2>
            <p className="mb-3">
              If you have any questions about this Privacy Policy or how we handle your information, please
              contact us:
            </p>
            <ul className="space-y-1">
              <li>
                Email:{' '}
                <a href="mailto:info@ranknexai.com" className="text-teal-400 hover:text-teal-300">
                  info@ranknexai.com
                </a>
              </li>
              <li>
                Phone/WhatsApp:{' '}
                <a href="https://wa.me/923224044150" className="text-teal-400 hover:text-teal-300">
                  +92 322 4044150
                </a>
              </li>
              <li>Location: Lahore, Pakistan</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
