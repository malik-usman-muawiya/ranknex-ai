"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Users2, Compass, Image, BarChart3 } from "lucide-react";

const smmFeatures = [
  {
    icon: Compass,
    title: "Social Media Strategy",
    description: "Before any content is created, we define: which platforms, what content types, what publishing frequency, and what the success metrics are. Your strategy is built from your business goals and your audience's actual behavior, not copied from a competitor.",
  },
  {
    icon: Image,
    title: "Content Creation & Management",
    description: "Graphics, captions, short-form video, and carousels, produced to your brand standards and published on schedule. We handle the full content calendar: planning, production, scheduling, and community management (responding to comments and messages).",
  },
  {
    icon: Users2,
    title: "Platform Management",
    description: "Instagram, LinkedIn, Facebook, TikTok, and X/Twitter. We manage whichever platforms are relevant for your audience. We don't recommend platforms because they're popular. We recommend them because your customers are there.",
  },
  {
    icon: BarChart3,
    title: "Paid Social Advertising",
    description: "When organic reach isn't enough, or you need to accelerate growth, we run paid social campaigns alongside organic. Audience targeting, creative testing, and conversion optimization handled as one integrated effort.",
  },
  {
    icon: BarChart3,
    title: "Monthly Analytics & Reporting",
    description: "Monthly reports covering follower growth, engagement rate, reach, website traffic from social, and leads generated, with context explaining what the numbers mean and what we're adjusting next month.",
  },
];

const smmProcess = [
  {
    step: "01",
    title: "Brand Strategy Audit",
    description: "We dive deep into your brand voice, industry competition, and target customer demographics to align on clear communication goals.",
  },
  {
    step: "02",
    title: "Content Calendar & Design",
    description: "We draft a 30-day content calendar including visual designs, video concepts, and copy templates, all reviewed and approved by you.",
  },
  {
    step: "03",
    title: "Publishing & Engagement",
    description: "Our team posts according to peak engagement times and actively manages the comments and inbox to nurture incoming inquiries.",
  },
  {
    step: "04",
    title: "Analytics & Optimization",
    description: "We analyze month-over-month engagement rate, reach, click-through rates, and lead metrics to continually refine our creative strategy.",
  },
];

const smmBenefits = [
  "Build a highly loyal and engaged community of brand advocates",
  "Drastically increase brand awareness and organic word-of-mouth recommendations",
  "Turn social channels into consistent customer acquisition pipelines",
  "Clean visual consistency that elevates your brand perception above competitors",
];

const smmFaqs = [
  {
    question: "Which social media platforms should my business focus on?",
    answer: "The ideal platforms depend entirely on your target audience. B2B and professional services see the highest return on LinkedIn and Twitter. E-commerce, lifestyle, and visual brands thrive on Instagram, Facebook, and TikTok. We help you focus budget on the channels where your customers spend their time.",
  },
  {
    question: "Do you create all of the images and videos yourself?",
    answer: "Yes, our team includes professional graphic designers, video editors, and animators. We create custom graphics, design stories, and edit video reels. If you have existing assets, we incorporate them; otherwise, we build files from scratch using stock media, custom animations, and client-provided assets.",
  },
  {
    question: "How often will you post on our accounts?",
    answer: "Post frequency is tailored to your strategy. Typically, we recommend 3 to 5 high-quality feed posts per week, combined with daily active stories. Quality and relevance always win over spamming low-value posts.",
  },
  {
    question: "What metrics do you track to measure SMM success?",
    answer: "We track metrics at every stage: Reach and Impressions (awareness), Likes, Comments, Shares, and Saves (engagement), Link Clicks (traffic), and Form Submissions, Inquiries, or Purchases (conversions). Monthly reports break down exactly what return you got on your investment.",
  },
];

export default function SocialMediaContent() {
  return (
    <ServicePageTemplate
      tag="Social Media Marketing"
      headline="Social Media That Builds Business."
      headlineAccent="Not Just Follower Counts."
      description="Strategy, content creation, community management, and paid social, run by a team that measures success in leads and sales, not likes and shares."
      features={smmFeatures}
      processSteps={smmProcess}
      benefits={smmBenefits}
      faqs={smmFaqs}
      ctaTitle="Get a Free Social Media Audit"
      ctaDescription="Let our social media strategists audit your current social channels. We will give you 3 actionable recommendations on how to improve your engagement and leads, completely free."
    />
  );
}
