"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { MousePointerClick, Search, Target, Landmark } from "lucide-react";

const ppcFeatures = [
  {
    icon: Search,
    title: "Google Search Ads",
    description: "Show up at the top of Google when your ideal customer is actively searching for your product or service. We build search campaigns with tight keyword grouping, quality ad copy testing, and negative keyword management — so you're paying for intent, not browsing.",
  },
  {
    icon: Landmark,
    title: "Google Shopping Campaigns (eCommerce)",
    description: "For online stores, Shopping campaigns put your products in front of buyers with price and image — right at the moment of search. We optimise product feed quality, bidding strategy, and ROAS targets to maximise return on ad spend.",
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Audience-based advertising for consumer and B2C brands. We build interest and lookalike audiences, test creative formats (static, video, carousel), and optimise toward conversion events — not vanity engagement metrics.",
  },
  {
    icon: Target,
    title: "LinkedIn Ads (B2B)",
    description: "For businesses targeting decision-makers by job title, seniority, or company size, LinkedIn Ads are often the most cost-effective B2B paid channel. We manage Sponsored Content, Lead Gen Forms, and Message campaigns with a focus on MQL quality over volume.",
  },
  {
    icon: MousePointerClick,
    title: "Retargeting Campaigns",
    description: "Most visitors don't convert on their first visit. Retargeting ads re-engage people who've already shown interest — typically at 3-5x the conversion rate of cold traffic. We build retargeting sequences across Google Display, Meta, and LinkedIn simultaneously.",
  },
  {
    icon: Landmark,
    title: "Landing Page Review & Recommendations",
    description: "Sending strong ad traffic to a weak landing page is the most common PPC failure mode. Before we launch campaigns, we audit your landing pages for conversion rate killers — slow load time, unclear CTA, missing trust signals — and give you specific recommendations to fix them. This step alone often improves conversion rates before we've optimised a single bid.",
  },
  {
    icon: MousePointerClick,
    title: "Monthly ROI Reporting",
    description: "Every month: total ad spend, cost per click, conversion rate, cost per lead or sale, and ROAS — in a format you can read in five minutes. We include a brief written summary of what we changed last month and what we're testing next.",
  },
];

const ppcProcess = [
  {
    step: "01",
    title: "Strategy & Audit",
    description: "We analyze your target market, perform competitor bidding research, and audit your conversion tracking to ensure every cent is measured.",
  },
  {
    step: "02",
    title: "Campaign Development",
    description: "We set up tracking tags, perform keyword selection, write compelling ad copy variations, and design high-converting visual assets.",
  },
  {
    step: "03",
    title: "Launch & A/B Testing",
    description: "We launch the campaigns with structured budgets and immediately start testing different ad creatives, copy, and audience demographic targets.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Our PPC experts constantly adjust bids, add negative keywords, and reallocate budget to the highest-performing campaigns to maximize ROAS.",
  },
];

const ppcBenefits = [
  "Immediate flow of targeted traffic and inbound leads from the day of launch",
  "Highly predictable and controllable client acquisition costs",
  "Reach buyers actively searching with high purchasing intent",
  "Total transparency over ad spend, impressions, clicks, and conversion values",
];

const ppcFaqs = [
  {
    question: "What is PPC and how does it benefit my business?",
    answer: "PPC (Pay-Per-Click) is a model of digital advertising where you pay a fee each time one of your ads is clicked. Unlike organic SEO which takes time to build, PPC allows you to buy visits to your site immediately, making it perfect for rapid lead generation and sales scaling.",
  },
  {
    question: "What is a reasonable starting budget for paid ads?",
    answer: "There is no minimum budget, but we recommend starting with at least $500 to $1,000 per month for ad spend. This budget allows us to gather enough performance data to test keywords, ad copy, and landing pages, optimizing your campaigns effectively.",
  },
  {
    question: "Do you manage both search and social ads?",
    answer: "Yes, we are a full-service PPC agency. We manage search campaigns (Google, Bing) as well as paid social ad campaigns (Meta, Instagram, LinkedIn, TikTok) depending on where your audience is most active and conversion-friendly.",
  },
  {
    question: "How do you ensure our ad spend isn't wasted?",
    answer: "We employ strict optimization techniques: setting up precise negative keywords (so you don't pay for irrelevant clicks), hyper-targeted audience scoping, landing page conversion tests, and active manual bid management to ensure your ads only show to qualified prospects.",
  },
];

export default function PpcContent() {
  return (
    <ServicePageTemplate
      tag="PPC Management — Google, Meta & LinkedIn Ads"
      headline="Stop Funding Campaigns That Guess."
      headlineAccent="Start Running Ads That Convert."
      description="We manage paid ad campaigns on Google, Meta, and LinkedIn — built around your cost-per-acquisition target, not around impressions. AI-optimised bidding. Monthly ROI reporting. No wasted spend."
      features={ppcFeatures}
      processSteps={ppcProcess}
      benefits={ppcBenefits}
      faqs={ppcFaqs}
      ctaTitle="Get a Free PPC Audit"
      ctaDescription="Already running ads? Let our certified specialists perform a free audit on your Google or Meta ad account. We will uncover wasted spend and outline 3 key optimization tips."
    />
  );
}
