import { Metadata } from "next";
import ContentWritingContent from "./ContentWritingContent";

export const metadata: Metadata = {
  title: "SEO Content Writing Services | RankNex AI Pakistan",
  description: "RankNex AI offers expert content writing and SEO content marketing for UK, US, and Pakistani brands, written to rank and convert readers into customers.",
  keywords: [
    "content marketing",
    "content writing services",
    "seo content",
    "professional copywriting",
    "blog writing company",
    "website copywriting agency"
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/services/content-writing",
  },
  openGraph: {
    title: "Content Writing & Strategy Services | RankNex AI",
    description: "Engage your audience and climb search rankings with expert copywriting, SEO blog posts, and website content optimized for conversions.",
    url: "https://www.ranknexai.com/services/content-writing",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function ContentWritingPage() {
  return <ContentWritingContent />;
}
