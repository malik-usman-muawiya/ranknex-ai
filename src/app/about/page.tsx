import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us | SEO Company in Lahore, Pakistan',
  description:
    'RankNex AI is a leading SEO company in Lahore, Pakistan offering digital marketing to UK, US, and Pakistani clients since 2024. Free SEO audit available.',
  keywords: [
    'about ranknex ai',
    'digital marketing agency pakistan',
    'seo company lahore',
    'ai powered marketing agency',
    'best seo company in pakistan',
    'digital marketing experts',
  ],
  alternates: {
    canonical: 'https://www.ranknexai.com/about',
  },
  openGraph: {
    title: 'About Us | SEO Company in Lahore, Pakistan | RankNex AI',
    description:
      'RankNex AI is a leading SEO company in Lahore, Pakistan offering digital marketing to UK, US, and Pakistani clients since 2024. Free SEO audit available.',
    url: 'https://www.ranknexai.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </>
  );
}
