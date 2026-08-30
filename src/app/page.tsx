import { Metadata } from "next";
import prisma from "@/lib/db";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AEOGeoSection from "@/components/home/AEOGeoSection";
import LocalSEOSection from "@/components/home/LocalSEOSection";
import WhyRankNex from "@/components/home/WhyRankNex";
import CEOSection from "@/components/home/CEOSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "SEO Company in Lahore, Pakistan | For UK & US",
  description: "RankNex AI is a leading SEO company in Lahore offering digital marketing for UK, US, and Pakistani businesses. AI-powered SEO, PPC, and AEO/GEO. Free audit.",
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
    title: "SEO Company in Lahore, Pakistan | For UK & US | RankNex AI",
    description: "RankNex AI is a leading SEO company in Lahore offering digital marketing for UK, US, and Pakistani businesses. AI-powered SEO, PPC, and AEO/GEO. Free audit.",
    url: "https://www.ranknexai.com/",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

// Render on-demand so the page never tries to reach the database at build time.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const latestPostsRaw = await prisma.blogPost
    .findMany({
      where: { status: "PUBLISHED" },
      include: { category: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    })
    .catch(() => []);

  const latestPosts = latestPostsRaw.map((post, index) => {
    const wordCount = post.content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    const readTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;
    return {
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      category: post.category?.name ?? "Insights",
      readTime,
      featured: index === 0,
      date: post.publishedAt
        ? post.publishedAt.toLocaleDateString("en-US", { month: "long", year: "numeric" })
        : post.createdAt.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    };
  });

  return (
    <main className="relative min-h-screen bg-white text-slate-300 overflow-hidden">
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <AEOGeoSection />
      <LocalSEOSection />
      <WhyRankNex />
      <CEOSection />
      <ProcessSection />
      <TestimonialsSlider />
      <CaseStudyPreview />
      <BlogPreview posts={latestPosts} />
      <CTABanner />
    </main>
  );
}
