"use client";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Palette, Compass, BookOpen, Layers } from "lucide-react";

const brandingFeatures = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "A professional, original logo, delivered in all formats (SVG, PNG, PDF) and variants (full color, mono, light, dark) needed for every use case. Not a template. Not a stock icon with your name next to it.",
  },
  {
    icon: Compass,
    title: "Brand Color Palette & Typography",
    description: "A defined color system and typeface selection that works across digital and print, with specific hex codes, RGB values, and usage rules documented so your brand stays consistent even when someone else is creating assets.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines Document",
    description: "A single document that defines how your brand looks and sounds everywhere. Logo usage rules, color codes, typography, tone of voice, do's and don'ts, so every piece of content you produce looks like it came from the same place.",
  },
  {
    icon: Layers,
    title: "Social Media Brand Kit",
    description: "Profile images, cover photos, post templates, and story templates, sized and designed for each platform, ready to use immediately.",
  },
  {
    icon: Layers,
    title: "Business Cards & Stationery",
    description: "Print-ready designs for business cards, letterheads, email signatures, and other stationery, formatted correctly for both digital and professional printing.",
  },
  {
    icon: Compass,
    title: "Brand Refresh (Existing Brands)",
    description: "If you have an existing brand that's lost coherence over time or simply needs modernising, we audit what's worth keeping and redesign strategically, rather than starting from scratch unnecessarily.",
  },
];

const brandingProcess = [
  {
    step: "01",
    title: "Discovery & Moodboards",
    description: "We run a brand discovery session and compile visual moodboards to align on the artistic direction and aesthetic tone before starting layout design.",
  },
  {
    step: "02",
    title: "Concept Development",
    description: "We design 3 unique logo and branding concepts, showing them in real-world application mockups (e.g., stationery, website, apparel) for review.",
  },
  {
    step: "03",
    title: "Feedback & Refinement",
    description: "We gather your feedback and run up to three rounds of design tweaks to perfect the logos, color pairings, and chosen typography.",
  },
  {
    step: "04",
    title: "Asset Delivery",
    description: "We package and hand over all final assets in print-ready vector formats (AI, EPS, PDF) along with standard web formats (PNG, SVG, JPG) and guidelines.",
  },
];

const brandingBenefits = [
  "Command premium rates by presenting a highly professional global image",
  "Stand out memorably in a crowded market from generic templated brands",
  "Align all marketing channels (website, ads, social) under one visual standard",
  "Foster customer loyalty through clean, emotionally resonant brand storytelling",
];

const brandingFaqs = [
  {
    question: "What exactly is included in a complete branding package?",
    answer: "A standard package includes brand discovery research, 3 initial logo concepts, visual identity elements (color palette, typography pairings), a digital PDF brand guidelines document, corporate stationery designs (business card, letterhead), and social media launch assets.",
  },
  {
    question: "Do we get the vector source files for our logo?",
    answer: "Yes, absolutely. You will receive 100% ownership of your brand assets. We deliver high-resolution vector files (.AI, .EPS, .PDF) that can be scaled infinitely for billboard printing, along with transparent web formats (.PNG, .SVG).",
  },
  {
    question: "How long does the branding process take?",
    answer: "Typically, a comprehensive brand identity project takes between 3 to 4 weeks. This includes the initial discovery phase, visual direction alignment, concept design, revision rounds, and final asset preparation.",
  },
  {
    question: "Can you help us rebrand an existing business?",
    answer: "Yes, we specialize in rebranding. We analyze what equity your current brand holds, identify gaps in market perception, and modernize your visual identity while maintaining key elements to avoid confusing your existing client base.",
  },
];

export default function BrandingContent() {
  return (
    <ServicePageTemplate
      tag="Brand Identity & Strategy"
      headline="Your Brand Is the Reason Someone Chooses You"
      headlineAccent="Over a Cheaper Option."
      description="We build brand identities that communicate credibility instantly, logo, visual system, and brand guidelines that stay consistent across your website, social, and everything in between."
      features={brandingFeatures}
      processSteps={brandingProcess}
      benefits={brandingBenefits}
      faqs={brandingFaqs}
      ctaTitle="Start Your Branding Project"
      ctaDescription="Ready to define your brand identity? Schedule a free 30-minute discovery call with our brand strategists to discuss your vision and outline a custom roadmap."
    />
  );
}
