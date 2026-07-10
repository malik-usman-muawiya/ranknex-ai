import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | RankNex AI',
  description:
    'Read the RankNex AI terms of service governing the use of our website and digital marketing, SEO, PPC, content, web design, and branding services.',
  alternates: {
    canonical: 'https://www.ranknexai.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | RankNex AI',
    description:
      'Read the RankNex AI terms of service governing the use of our website and digital marketing, SEO, PPC, content, web design, and branding services.',
    url: 'https://www.ranknexai.com/terms',
    siteName: 'RankNex AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | RankNex AI',
    description:
      'Read the RankNex AI terms of service governing the use of our website and digital marketing, SEO, PPC, content, web design, and branding services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const lastUpdated = 'June 2026';

  return (
    <main className="relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="orb orb-teal w-96 h-96 -top-48 -right-24 opacity-10" />
      <div className="orb orb-cyan w-72 h-72 bottom-12 -left-36 opacity-8" />

      <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: {lastUpdated}</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the RankNex AI
              website at ranknexai.com (the &quot;Site&quot;) and any services we provide, including SEO,
              PPC advertising, social media marketing, content writing, web design and development, and
              branding services (collectively, the &quot;Services&quot;). By accessing the Site or engaging
              our Services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">2. Use of the Site</h2>
            <p className="mb-3">
              You agree to use the Site only for lawful purposes and in accordance with these Terms. You
              agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the Site in any way that violates applicable local, national, or international law</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
              <li>Use any automated system, including bots or scrapers, to access the Site without permission</li>
              <li>Transmit any harmful code, viruses, or malicious software through the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">3. Services and Engagements</h2>
            <p className="mb-3">
              Any Services provided by RankNex AI, including audits, SEO campaigns, advertising management,
              content creation, web development, or branding work, are subject to a separate written or
              verbal agreement, proposal, or scope of work between RankNex AI and the client. These Terms
              govern use of the Site itself; specific service deliverables, timelines, and fees will be
              outlined in the relevant client agreement.
            </p>
            <p>
              Free audits and consultations offered through the Site are provided as a courtesy and do not
              constitute a binding service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">4. No Guaranteed Results</h2>
            <p>
              Digital marketing, including SEO and PPC advertising, depends on numerous factors outside our
              direct control, including search engine algorithm changes, market competition, and platform
              policies. While we apply industry best practices and use data-driven strategies, we do not
              guarantee specific rankings, traffic numbers, conversion rates, or revenue outcomes. Any
              performance figures referenced on the Site reflect results achieved for specific clients under
              specific conditions and are not a guarantee of similar results for any other business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">5. Intellectual Property</h2>
            <p className="mb-3">
              All content on the Site, including text, graphics, logos, and design elements, is the property
              of RankNex AI or its licensors and is protected by applicable intellectual property laws. You
              may not reproduce, distribute, or create derivative works from any content on the Site without
              our prior written consent.
            </p>
            <p>
              Ownership of deliverables created for clients as part of a paid engagement (such as website
              code, content, or creative assets) will be governed by the relevant client agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">6. Third-Party Links and Tools</h2>
            <p>
              The Site may contain links to third-party websites or integrate third-party tools, such as
              WhatsApp or Google Analytics. We are not responsible for the content, policies, or practices of
              any third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, RankNex AI shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the Site or our
              Services, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless RankNex AI, its team members, and affiliates from any
              claims, damages, or expenses arising from your misuse of the Site or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Pakistan, without
              regard to its conflict of law principles. Any disputes arising from these Terms or your use of
              the Site shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">10. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. Any changes will be posted on this page with an
              updated &quot;Last updated&quot; date. Continued use of the Site after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white font-heading mb-3">11. Contact Us</h2>
            <p className="mb-3">If you have any questions about these Terms, please contact us:</p>
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
