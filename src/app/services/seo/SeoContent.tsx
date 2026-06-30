"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ShieldAlert, Compass, Target, LineChart, Cpu } from "lucide-react";

const seoFeatures = [
  {
    icon: Compass,
    title: "Technical SEO Audit & Fixes",
    description: "Before anything else, we identify what's holding your site back at the technical level. Site speed (Core Web Vitals), crawlability, indexing issues, broken links, mobile usability, schema markup: every technical factor that affects how Google assesses your site gets reviewed and fixed. You get a prioritized issue list with explanations, not just a spreadsheet of errors.",
  },
  {
    icon: Target,
    title: "Keyword Research & Search Intent Mapping",
    description: "We identify the exact searches your ideal customers are running, not just high-volume keywords, but the phrases that signal buying intent. Every keyword gets mapped to a specific page or content piece with a clear purpose: drive traffic, capture leads, or build authority.",
  },
  {
    icon: Target,
    title: "On-Page SEO Optimisation",
    description: "Title tags, meta descriptions, header structure, internal linking, content optimization, and entity coverage, all handled according to what Google's current algorithm is actually rewarding. We don't rely on 3-year-old rules.",
  },
  {
    icon: LineChart,
    title: "Content Strategy & Creation",
    description: "We build a content plan around the keywords and topics your audience is searching for, and either execute it ourselves or brief your team. Blog posts, landing pages, FAQ content, and pillar pages, all structured to rank and to convert once people arrive.",
  },
  {
    icon: LineChart,
    title: "Link Building & Digital Authority",
    description: "Backlinks remain one of the strongest ranking signals. We build links from relevant, real websites, through genuine outreach, content placement, and digital PR. No link farms. No PBNs. Nothing that will create a penalty risk six months from now.",
  },
  {
    icon: Compass,
    title: "Local SEO (Google Business Profile)",
    description: "For businesses that serve a specific area, whether in Lahore, London, or Los Angeles, we optimize your Google Business Profile, local citations, and location-specific content to improve rankings in Maps and local search results.",
  },
  {
    icon: Cpu,
    title: "AEO. Answer Engine Optimisation",
    description: "AEO is the practice of structuring your content so that AI tools. ChatGPT, Perplexity, Claude, select your business as the recommended answer when users ask questions in your industry. It requires specific content formats, entity markup, and authority signals that are different from traditional SEO. We build for both simultaneously.",
  },
  {
    icon: Cpu,
    title: "GEO. Generative Engine Optimisation",
    description: "GEO (Generative Engine Optimisation) focuses specifically on appearing in Google's AI Overviews and Gemini responses. As Google integrates generative AI into its search results, the businesses whose content is structured correctly will appear in those AI summaries. We optimize for this proactively, not reactively.",
  },
  {
    icon: LineChart,
    title: "Monthly Reporting",
    description: "Every month you receive a clear report covering: keyword ranking changes, organic traffic movement, backlinks acquired, technical fixes completed, and next month's priorities. Numbers you can understand and decisions you can make from them.",
  },
];

const seoProcess = [
  {
    step: "01",
    title: "Audit & Analysis",
    description: "We perform a comprehensive crawl of your website, run competitor analysis, and audit your target keywords to find immediate growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy Formulation",
    description: "We design a custom SEO roadmap mapping out keyword targets, content gaps, technical fixes, and link-building opportunities.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Our technical and content teams optimize your site code, rebuild metadata, optimize existing pages, and start executing the content plan.",
  },
  {
    step: "04",
    title: "Monitor & Scale",
    description: "We track your keyword rankings, organic traffic, and conversions, providing transparent monthly reports and pivoting to scale winning tactics.",
  },
];

const seoBenefits = [
  "Continuous stream of high-quality organic leads without ongoing ad spend",
  "Higher conversions through landing pages optimized for search intent",
  "Authority and trust established as your brand dominates industry searches",
  "Long-term traffic equity that grows over time and outlasts pay-per-click budgets",
];

const seoFaqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "For most businesses, you'll see meaningful keyword movement within 60-90 days and measurable traffic growth within 3-6 months. The timeline depends on three things: how competitive your target keywords are, how many technical issues your site has at the start, and how consistently we can publish quality content. We'll give you a specific timeline estimate during your free audit, not a generic answer designed to manage expectations downward.",
  },
  {
    question: "What is AEO and why does it matter for my business?",
    answer: "AEO stands for Answer Engine Optimisation. It's the practice of structuring your content so that AI tools like ChatGPT, Perplexity, and Google's AI Overviews choose your business as the answer when users ask relevant questions. As more people use AI-powered search tools, appearing in those answers is becoming as important as ranking on the first page of Google. We include AEO in every SEO engagement.",
  },
  {
    question: "What is the difference between GEO and AEO?",
    answer: "AEO (Answer Engine Optimisation) focuses on appearing as a recommended answer in tools like ChatGPT, Perplexity, and Claude. GEO (Generative Engine Optimisation) focuses specifically on appearing in Google's AI-generated overviews, the AI summaries that now appear at the top of many search results pages. Both are increasingly important, and both require different technical and content approaches from traditional SEO. We handle all three simultaneously.",
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer: "Yes, most of our SEO clients are in the UK and US. We work across time zones with no meaningful friction: communication happens on WhatsApp, Slack, or email, and reporting is delivered asynchronously so you receive it when it's convenient for your schedule.",
  },
  {
    question: "What if SEO doesn't work for my business?",
    answer: "We stand behind a 90-day results guarantee. If we don't achieve measurable movement in your agreed target metrics within 90 days, we continue working without charging you until we do. We've offered this since we started, it keeps us accountable and makes the decision easier for you.",
  },
  {
    question: "Do you require a long-term contract?",
    answer: "No. All engagements are month-to-month by default. SEO compounds over time, so clients who stay see compounding results, but that decision should always be yours to make, based on what you're seeing.",
  },
];

export default function SeoContent() {
  return (
    <ServicePageTemplate
      tag="AI-Powered SEO Services. Pakistan, UK & US"
      headline="SEO That Works on Google"
      headlineAccent="and in ChatGPT."
      description="We build SEO strategies that get your business ranking on traditional search and appearing in AI-generated answers. One team. Full coverage. Measurable results in 90 days."
      features={seoFeatures}
      processSteps={seoProcess}
      benefits={seoBenefits}
      faqs={seoFaqs}
      ctaTitle="Get a Free SEO Audit"
      ctaDescription="Find out exactly what is holding your website back from ranking on page 1. Get a comprehensive technical and content audit from our experts today, 100% free."
    />
  );
}
