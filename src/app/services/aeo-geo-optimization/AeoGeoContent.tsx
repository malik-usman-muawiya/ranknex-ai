"use client";

import Link from "next/link";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Bot, Search, MapPin, FileText, Cpu, LineChart } from "lucide-react";

const aeoGeoFeatures = [
  {
    icon: Bot,
    title: "AEO: Answer Engine Optimisation",
    description:
      "We structure your content so AI tools like ChatGPT, Perplexity, and Claude choose your business as the recommended answer when users ask relevant questions. This requires specific content formats, entity markup, and authority signals that differ from traditional SEO.",
  },
  {
    icon: Cpu,
    title: "GEO: Generative Engine Optimisation",
    description:
      "GEO focuses specifically on appearing in Google's AI Overviews and Gemini responses. As Google integrates generative AI into search results, businesses with correctly structured content appear in those AI summaries. We optimize for this proactively, not reactively.",
  },
  {
    icon: FileText,
    title: "Answer-First Content Structuring",
    description:
      "Every page is rewritten so the direct answer appears in the first 2-3 sentences, followed by supporting detail. This is exactly what AI tools look for when selecting a source to quote or summarise.",
  },
  {
    icon: Search,
    title: "Entity & Schema Markup",
    description: (
      <>
        Structured data (FAQ schema, Organization schema, Service schema)
        that tells AI systems exactly what your business does, who it
        serves, and why it should be trusted, working alongside our{" "}
        <Link href="/services/seo" className="text-teal-400 hover:text-teal-300 underline underline-offset-2">
          core SEO work
        </Link>{" "}
        rather than replacing it.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Consistent Business Information",
    description:
      "AI models cross-reference business details across the web. We audit and align your name, service descriptions, and key facts across your website, Google Business Profile, and other citations, so AI systems trust and surface consistent information.",
  },
  {
    icon: LineChart,
    title: "AI Visibility Tracking",
    description:
      "We manually test how your brand shows up in ChatGPT, Perplexity, and Google AI Overviews for your target questions, and report on movement over time, since there's no traditional rank tracker for AI answers yet.",
  },
];

const aeoGeoProcess = [
  {
    step: "01",
    title: "AI Visibility Audit",
    description:
      "We test how your business currently appears (or doesn't) across ChatGPT, Perplexity, and Google AI Overviews for the questions your customers actually ask.",
  },
  {
    step: "02",
    title: "Content & Schema Restructuring",
    description:
      "We rewrite key pages to lead with direct answers, add structured data, and align entity information across your site and citations.",
  },
  {
    step: "03",
    title: "Publish & Monitor",
    description:
      "Changes go live alongside your core SEO work. We re-test the same target questions monthly and adjust based on what's actually moving the needle.",
  },
];

const aeoGeoBenefits = [
  "Show up as the recommended answer in ChatGPT, Perplexity & Gemini",
  "Appear in Google AI Overviews for your target keywords",
  "Included in every SEO engagement, not sold as a separate add-on",
  "No long-term contract required",
];

const aeoGeoFaqs = [
  {
    question: "What is the difference between AEO and GEO?",
    answer:
      "AEO (Answer Engine Optimisation) focuses on appearing as a recommended answer in conversational AI tools like ChatGPT, Perplexity, and Claude. GEO (Generative Engine Optimisation) focuses specifically on appearing in Google's AI-generated overviews, the AI summaries that now appear at the top of many search results pages. Both require similar but distinct technical and content approaches, and we handle them together.",
  },
  {
    question: "Do I need AEO/GEO if I already do SEO?",
    answer:
      "Traditional SEO still matters, most search traffic still comes from standard blue-link results. But a growing share of searches now happen inside AI tools instead of Google. AEO and GEO make sure your business is visible in both places, not just one. We include this in every SEO engagement rather than treating it as a separate service.",
  },
  {
    question: "How do you measure results for AEO/GEO?",
    answer:
      "There's no equivalent of a Google rank tracker for AI answers yet, so we manually test your target questions against ChatGPT, Perplexity, and Google AI Overviews on a regular cadence and report what's changed, whether your business is appearing, how it's described, and what competitors are showing up instead.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "AI tools update their training and retrieval sources at different speeds. Some changes (like schema markup and Google AI Overviews) can reflect within weeks. Appearing consistently inside ChatGPT or Perplexity answers can take longer since those systems rely on broader web signals. We set realistic expectations during your audit rather than promising a fixed timeline.",
  },
];

export default function AeoGeoContent() {
  return (
    <ServicePageTemplate
      tag="AI Search Optimisation"
      headline="Get Recommended by ChatGPT."
      headlineAccent="Get Featured in Google AI Overviews."
      description="AEO and GEO services that get your business cited as the answer inside ChatGPT, Perplexity, Gemini, and Google's AI-generated search results, not just ranked in traditional blue links."
      features={aeoGeoFeatures}
      processSteps={aeoGeoProcess}
      benefits={aeoGeoBenefits}
      faqs={aeoGeoFaqs}
      ctaTitle="Get a Free AI Visibility Check"
      ctaDescription="We'll test how your business currently shows up in ChatGPT, Perplexity, and Google AI Overviews for your key questions, and tell you exactly what's missing. 100% free."
    />
  );
}
