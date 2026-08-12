import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Globe, Zap, BarChart3, Users, Shield, Headphones, CheckCircle2, Bot } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Digital Marketing Agency for US Businesses",
  description: "RankNex AI is an outsourced digital marketing agency for US businesses, delivering SEO, PPC, and AI search visibility at 60% lower cost than local agencies.",
  keywords: [
    "digital marketing agency for us businesses",
    "outsourced digital marketing agency usa",
    "affordable digital marketing agency usa",
    "ai powered digital marketing agency",
    "seo agency for us small business",
    "managed seo services usa",
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/us",
  },
  openGraph: {
    title: "Digital Marketing Agency for US Businesses | RankNex AI",
    description: "RankNex AI is an outsourced digital marketing agency for US businesses, delivering SEO, PPC, and AI search visibility at 60% lower cost than local agencies.",
    url: "https://www.ranknexai.com/us",
    siteName: "RankNex AI",
    type: "website",
    locale: "en_US",
  },
};

const usServices = [
  {
    icon: Search,
    title: "SEO & AI Search (AEO/GEO)",
    description: "Technical fixes, content strategy, and visibility in ChatGPT, Gemini, and Google AI Overviews, alongside traditional Google rankings.",
    href: "/services/seo",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Meta Ads Management",
    description: "Paid campaigns built around your CAC targets, not impressions. Google Ads, Meta Ads, and LinkedIn managed with ROAS as the north star.",
    href: "/services/ppc-advertising",
  },
  {
    icon: Zap,
    title: "Content & Copywriting",
    description: "Blog posts, landing pages, and email sequences written specifically for US audiences and search intent, not generic filler.",
    href: "/services/content-writing",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Fast, conversion-focused sites built on Next.js or WordPress. High-performance and built to scale with your business.",
    href: "/services/web-designing",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Organic and paid strategy across the platforms your US customers actually use, from LinkedIn authority-building to TikTok reach.",
    href: "/services/social-media",
  },
  {
    icon: Bot,
    title: "Brand Identity",
    description: "Visual systems that read as credible to a US buyer from the first impression, logo, guidelines, and full brand identity.",
    href: "/services/branding",
  },
];

const whyChooseUs = [
  {
    title: "AI-First Approach",
    description: "We leverage AI for research, analysis, and optimization, delivering faster results with data-driven precision.",
  },
  {
    title: "US-Quality at Better Rates",
    description: "Get the same caliber of work you'd expect from a top US agency, delivered by a dedicated team at significantly lower cost.",
  },
  {
    title: "Dedicated Teams",
    description: "Not freelancers. Not rotating contractors. A dedicated team that learns your business and becomes an extension of your company.",
  },
  {
    title: "Performance Guarantee",
    description: "We stake our reputation on results. If we don't deliver measurable improvement, you don't pay. Simple as that.",
  },
  {
    title: "US Timezone Coverage",
    description: "Our team overlaps with US business hours. Real-time communication, scheduled calls, and Slack availability when you need it.",
  },
  {
    title: "Scalable Engagement",
    description: "Start small, scale fast. Our flexible engagement models adapt as your business grows, no rigid retainers.",
  },
];

const usFaqs = [
  {
    question: "Is it actually reliable to outsource marketing to a Pakistan-based team for a US business?",
    answer: "Yes, when the agency operates on clear contracts, transparent reporting, and real-time communication. RankNex AI works US hours, reports in plain English, and never locks you into a contract you can't leave.",
  },
  {
    question: "Will my ad account and analytics be fully in my ownership?",
    answer: "Yes. Google Ads, Meta Ads, Analytics, and Search Console access all remain under your own accounts. We work inside your infrastructure, not ours.",
  },
  {
    question: "How is pricing structured for US clients?",
    answer: "Monthly retainers in USD, scoped to the channels you need (SEO, PPC, content, or a combined package). No annual contracts required.",
  },
  {
    question: "Do you handle AEO and GEO for ChatGPT and Google AI Overviews?",
    answer: "Yes, included in every SEO engagement by default, not billed as a separate add-on.",
  },
  {
    question: "How fast can we expect results?",
    answer: "Most US clients see measurable movement in rankings, traffic, or ad efficiency within 90 days. We guarantee it, or we keep working at no extra charge until we hit it.",
  },
];

export default function USPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "US", url: "/us" },
  ]);
  const faqSchema = generateFAQSchema(usFaqs);
  return (
    <main>
      {/* Structured data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Structured data: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-teal w-[500px] h-[500px] -top-20 -left-20 opacity-10" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 -right-20 opacity-10" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-teal-500 text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Digital Growth Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              AI-Driven Digital Marketing & IT Solutions for{" "}
              <span className="gradient-text">US Businesses</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              RankNex AI combines artificial intelligence with human expertise to deliver SEO, PPC, 
              AI automation, and full-stack development services to US companies, with the quality of a 
              Silicon Valley agency and the economics that make growth actually profitable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-y border-white/5 relative z-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-slate-300">
            {[
              "US Timezone Availability",
              "English-Native Reporting",
              "No Lock-In Contracts",
              "AEO/GEO Included for ChatGPT & Google AI Overviews",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 relative z-10">
        <div className="container">
          <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "520%", label: "Avg Traffic Growth" },
              { value: "12x", label: "Average Client ROI" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold gradient-text-teal mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why US Businesses Work With RankNex AI */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Why US Businesses Work With <span className="gradient-text-teal">RankNex AI</span>
            </h2>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">
                Silicon Valley Quality Standards. Pakistan-Level Overheads.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                US agencies price SEO and PPC retainers based on San Francisco or New York
                office rent, not on the actual cost of doing the work. RankNex AI runs the
                same audit process, the same keyword research discipline, and the same
                AI-assisted workflows top US agencies use, from a delivery base where those
                overheads don&apos;t exist. You get the strategy quality of an $8,000/month
                agency at a fraction of the invoice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">
                Built for How US Buyers Actually Search Now
              </h3>
              <p className="text-slate-400 leading-relaxed">
                More of your US customers are asking ChatGPT and Google&apos;s AI Overviews
                before they ever type a query into classic Google search. RankNex AI includes
                AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) in
                every US engagement by default, not as a $2,000/month add-on the way most
                American agencies structure it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">
                Real-Time Availability, Not Overnight Delays
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Outsourcing gets a bad reputation when &quot;support&quot; means waiting
                until the next US morning for a reply. Your RankNex AI account manager works
                US business hours, is reachable directly on WhatsApp or email, and joins live
                calls, not async ticket threads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Enterprise-Grade Services, <span className="gradient-text-teal">Startup-Friendly Pricing</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From AI automation to full-funnel marketing, everything a US business needs to dominate digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usServices.map((service, i) => (
              <Link key={i} href={service.href} className="card group">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
                <div className="mt-4 text-teal-500 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Why US Companies Partner with <span className="gradient-text-teal">RankNex AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="card-glass">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold font-heading">{item.title}</h3>
                </div>
                <p className="text-slate-400 pl-8">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              How We Work With US Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We learn your business, goals, and challenges in a 30-minute strategy call." },
              { step: "02", title: "Free Audit", desc: "We analyze your digital presence and deliver a detailed opportunity report." },
              { step: "03", title: "Custom Roadmap", desc: "A tailored strategy with clear KPIs, timelines, and resource allocation." },
              { step: "04", title: "Execute & Scale", desc: "We implement, optimize, and scale, with transparent monthly reporting." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-teal-500/20 mb-4 font-heading">{item.step}</div>
                <h3 className="text-lg font-semibold font-heading mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section section-alt">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              The Real <span className="gradient-text-teal">Cost Comparison</span>
            </h2>
            <p className="text-slate-400">
              Here&apos;s what the same scope of SEO and PPC management typically costs,
              based on published US agency pricing.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Mid-size US agency (SEO + PPC retainer)", value: "$5,000 \u2013 $12,000/month" },
              { label: "RankNex AI (same scope, same reporting cadence)", value: "A fraction of that, month-to-month, no lock-in" },
              { label: "What doesn't change", value: "Strategy quality, communication standards, and the 90-day results benchmark" },
            ].map((row) => (
              <div key={row.label} className="card-glass flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5">
                <span className="text-slate-300">{row.label}</span>
                <span className="text-teal-400 font-semibold">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              US Businesses <span className="gradient-text-teal">Ask Us This a Lot</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={usFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="orb orb-cyan w-[300px] h-[300px] -top-20 -left-20 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Get a Free Audit of Your US Marketing Performance
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                We&apos;ll analyze your site, your top 5 US competitors, and your visibility
                on Google and AI search. No cost, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  <span>Get Your Free US Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="https://wa.me/923224044150" className="btn-secondary text-lg px-8 py-4">
                  <Headphones className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
