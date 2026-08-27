import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'SEO, PPC & Web Design Services in Lahore, PK',
  description:
    'Full-stack digital marketing from RankNex AI, an SEO company in Lahore, Pakistan serving UK, US, and local businesses: SEO, PPC, social, content, web design.',
  keywords: [
    'digital marketing services pakistan',
    'seo services',
    'social media marketing',
    'ppc advertising',
    'content writing services',
    'web design pakistan',
    'branding agency',
  ],
  alternates: {
    canonical: 'https://www.ranknexai.com/services',
  },
  openGraph: {
    title: 'SEO, PPC & Web Design Services in Lahore, PK | RankNex AI',
    description:
      'Full-stack digital marketing from RankNex AI, an SEO company in Lahore, Pakistan serving UK, US, and local businesses: SEO, PPC, social, content, web design.',
    url: 'https://www.ranknexai.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesContent />
    </>
  );
}
