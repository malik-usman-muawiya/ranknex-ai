import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us | RankNex AI, A Pakistan-Based SEO Agency',
  description:
    'RankNex AI is a Pakistan-based digital marketing agency combining AI tools with human expertise to deliver SEO growth for UK, US, and Pakistani businesses.',
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
    title: 'About RankNex AI | AI-Powered Digital Marketing Agency',
    description:
      'We combine AI intelligence with human creativity to deliver measurable growth for businesses in Pakistan, UK, and beyond.',
    url: 'https://www.ranknexai.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
