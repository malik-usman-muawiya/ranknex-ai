import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO & PPC',
  description:
    'Explore RankNex AI\'s digital marketing services, including SEO, PPC, social media, content, web design, and branding for UK, US, and Pakistani businesses.',
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
    title: 'Digital Marketing Services | RankNex AI',
    description:
      'AI-powered SEO, PPC, social media, content, web design, and branding services that deliver measurable growth.',
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
