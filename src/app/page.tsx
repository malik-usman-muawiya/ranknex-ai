import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AEOGeoSection from "@/components/home/AEOGeoSection";
import WhyRankNex from "@/components/home/WhyRankNex";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "RankNex AI | AI-Powered SEO & Digital Marketing Agency",
  description: "RankNex AI is an AI-powered SEO and digital marketing agency helping UK, US, and Pakistani businesses rank higher on Google and generate more leads online.",
  keywords: [
    "digital marketing agency Pakistan",
    "best SEO company in Pakistan",
    "AI powered digital marketing",
    "SEO agency Lahore",
    "outsourced digital marketing UK",
    "outsourced SEO agency US",
    "web development company Lahore",
    "branding agency Pakistan"
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/",
  },
  openGraph: {
    title: "RankNex AI | AI-Powered SEO & Digital Marketing Agency",
    description: "AI-powered SEO and digital marketing agency helping UK, US, and Pakistani businesses rank higher and get more leads.",
    url: "https://www.ranknexai.com/",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-navy-950 text-slate-300 overflow-hidden">
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <AEOGeoSection />
      <WhyRankNex />
      <ProcessSection />
      <TestimonialsSlider />
      <CaseStudyPreview />
      <BlogPreview />
      <CTABanner />
    </main>
  );
}
