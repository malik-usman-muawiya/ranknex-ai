import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Globe, Zap, BarChart3, Users, Shield, Headphones, CheckCircle2 } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Digital Marketing Agency for UK Businesses",
  description: "RankNex AI is an outsourced SEO and digital marketing agency for UK businesses, delivering technical SEO, PPC, and AEO/GEO at 60% lower cost than local UK agencies.",
  keywords: [
    "digital marketing agency for uk businesses",
    "outsourced seo agency uk",
    "affordable digital marketing agency uk",
    "seo services uk",
    "seo uk expert",
    "small business marketing agency uk",
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/uk",
  },
  openGraph: {
    title: "Digital Marketing Agency for UK Businesses | RankNex AI",
    description: "RankNex AI is an outsourced SEO and digital marketing agency for UK businesses, delivering technical SEO, PPC, and AEO/GEO at 60% lower cost than local UK agencies.",
    url: "https://www.ranknexai.com/uk",
    siteName: "RankNex AI",
    type: "website",
    locale: "en_GB",
  },
};

const ukServices = [
  {
    icon: Search,
    title: "SEO & AI Search (AEO/GEO)",
    description: "Technical fixes, content strategy, and visibility in ChatGPT, Gemini, and Google AI Overviews for UK search terms, alongside traditional rankings.",
    href: "/services/seo",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Meta Ads Management",
    description: "Paid campaigns built around UK cost-per-lead targets. Google Ads, Meta Ads, and LinkedIn managed with ROAS as the north star.",
    href: "/services/ppc-advertising",
  },
  {
    icon: Zap,
    title: "Content & Copywriting",
    description: "Blog posts, landing pages, and email sequences written in British English for UK search intent, not translated from a US template.",
    href: "/services/content-writing",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Fast, mobile-first sites built for UK Core Web Vitals performance. WordPress, custom builds, e-commerce, all built for performance.",
    href: "/services/web-designing",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Organic and paid strategy across the platforms UK customers use most, from LinkedIn for B2B to Instagram for consumer brands.",
    href: "/services/social-media",
  },
  {
    icon: Shield,
    title: "Brand Identity",
    description: "Visual systems that read as credible and local to a UK buyer, logo, guidelines, and full brand identity.",
    href: "/services/branding",
  },
];

const whyChooseUs = [
  {
    title: "UK-Quality, Pakistan-Priced",
    description: "Get the same calibre of digital marketing work you'd expect from a London agency, at 40-60% lower cost.",
  },
  {
    title: "Dedicated Account Manager",
    description: "A single point of contact who knows your business. No rotating support queues or ticket systems.",
  },
  {
    title: "AI-Powered Efficiency",
    description: "We use AI tools for research, analysis, and optimisation, which means faster execution without cutting corners.",
  },
  {
    title: "Transparent Reporting",
    description: "Monthly reports showing real metrics that matter: traffic, leads, conversions, and ROI. No vanity metrics.",
  },
  {
    title: "UK Business Hours",
    description: "Our team operates during UK business hours. Calls, meetings, and communications happen when it suits you.",
  },
  {
    title: "No Long Contracts",
    description: "Month-to-month engagements. We earn your business through results, not lock-in clauses.",
  },
];

const ukFaqs = [
  {
    question: "Is a Pakistan-based agency reliable for UK SEO?",
    answer:
      "Yes. Google ranks pages the same way regardless of where the agency managing them is based, what matters is technical execution, content quality, and link authority. Our team has years of experience specifically with UK search intent, UK English conventions, and UK-market keyword research. We work UK business hours where needed, communicate over WhatsApp, Slack, or email, and provide the same monthly reporting and account management you'd expect from a London agency, at 60% lower cost.",
  },
  {
    question: "Do you have a physical presence in the UK?",
    answer:
      "Yes. RankNex AI maintains a registered UK office at Ainsworth St, Blackburn BB1 6AF, in addition to our global delivery centre in Lahore.",
  },
  {
    question: "Is my data handled in line with UK GDPR?",
    answer:
      "Yes. We collect and process client data in line with UK GDPR and PECR requirements, and we're transparent about what analytics and tracking tools are in use on your account.",
  },
  {
    question: "Why do UK agencies charge so much more for the same work?",
    answer:
      "UK agency pricing largely reflects UK office rent, salaries, and overhead, not a difference in the actual SEO or marketing work being delivered. A typical UK agency charges £3,000-8,000 a month for SEO. We deliver the same scope of work (technical audits, content, link building, reporting) for a fraction of that, because our costs are lower, not because we cut corners.",
  },
  {
    question: "How do we communicate and manage projects across time zones?",
    answer:
      "Pakistan is 5 hours ahead of the UK (4 hours during UK summer time), which gives us several hours of working-day overlap. We use WhatsApp, email, and scheduled video calls, and every client gets a dedicated account manager as a single point of contact, so nothing gets lost between time zones.",
  },
  {
    question: "Do you offer contracts, or is it month-to-month?",
    answer:
      "All engagements are month-to-month by default, no long-term lock-in. SEO results compound over time, so most clients choose to stay, but that decision is always yours to make based on the results you're seeing.",
  },
];

export default function UKPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "UK", url: "/uk" },
  ]);
  const faqSchema = generateFAQSchema(ukFaqs);
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
        <div className="orb orb-teal w-[500px] h-[500px] -top-20 -right-20 opacity-10" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 -left-20 opacity-10" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-teal-500 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Trusted by UK Businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Affordable Digital Marketing & SEO for{" "}
              <span className="gradient-text">UK Businesses</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              A typical UK SEO agency charges £3,000-8,000 a month. RankNex AI is a
              Pakistan-based digital agency delivering the same international-standard
              SEO, PPC, social media, and web services to UK businesses, remotely,
              at 60% lower cost. Same expertise. Same results. Significantly better value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-y border-navy-950/5 relative z-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-slate-300">
            {[
              "Registered UK Office \u2013 Blackburn, BB1 6AF",
              "UK Working-Hours Support",
              "No Lock-In Contracts",
              "GDPR/PECR-Aware Reporting & Data Handling",
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
              { value: "50+", label: "UK Clients Served" },
              { value: "340%", label: "Avg Traffic Growth" },
              { value: "60%", label: "Cost Savings vs Local" },
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

      {/* Why UK Businesses Work With RankNex AI */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Why UK Businesses Work With <span className="gradient-text-teal">RankNex AI</span>
            </h2>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold font-heading mb-3 text-navy-950">
                A Digital Marketing Agency With an Actual UK Office
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Most agencies offering &quot;affordable UK SEO&quot; from overseas are
                exactly that: overseas, with no UK entity, no UK point of contact, and no
                accountability if something goes wrong. RankNex AI maintains a registered
                UK office at Ainsworth St, Blackburn BB1 6AF, alongside our delivery team
                in Lahore. You get a real UK presence for contracts and communication, and
                the cost advantage of a Pakistan-based delivery team.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading mb-3 text-navy-950">
                London Agency Standards. Not London Agency Invoices.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                A mid-size London SEO or PPC agency typically charges £3,000-8,000 a month.
                RankNex AI runs the same audit rigour, the same reporting standards, and the
                same AEO/GEO inclusion, at roughly 60% lower cost, because our delivery
                overheads simply aren&apos;t London office overheads.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading mb-3 text-navy-950">
                Built for UK Search Behaviour, Not a US Template
              </h3>
              <p className="text-slate-400 leading-relaxed">
                UK search intent, spelling conventions, and buyer language differ from the
                US. Our content and on-page work is written and optimised specifically for
                a UK audience, not adapted from an American template with the currency
                symbol swapped.
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
              Digital Marketing Services for the <span className="gradient-text-teal">UK Market</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive digital marketing solutions tailored for UK businesses, from local SEO to enterprise PPC campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukServices.map((service, i) => (
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
              Why UK Businesses Choose <span className="gradient-text-teal">RankNex AI</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              The quality of a top-tier UK agency, the value of a dedicated offshore partner.
            </p>
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

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Getting Started is Simple
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Audit", desc: "We analyse your current digital presence and identify opportunities." },
              { step: "02", title: "Custom Strategy", desc: "We build a tailored plan with clear KPIs and realistic timelines." },
              { step: "03", title: "Execute & Optimise", desc: "Our team implements the strategy using AI tools and expert judgement." },
              { step: "04", title: "Report & Scale", desc: "Monthly transparent reporting with continuous improvement." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-teal-500/20 mb-4 font-heading">{item.step}</div>
                <h3 className="text-lg font-semibold font-heading mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-5 h-5 text-teal-500/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              The Real <span className="gradient-text-teal">Cost Comparison</span>
            </h2>
            <p className="text-slate-400">
              Here&apos;s what the same scope of SEO and PPC management typically costs,
              based on published UK agency pricing.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Mid-size London/Manchester agency (SEO + PPC retainer)", value: "£3,000 \u2013 £8,000/month" },
              { label: "RankNex AI (same scope, same reporting cadence, UK point of contact)", value: "A fraction of that, month-to-month, no lock-in" },
              { label: "What doesn't change", value: "Strategy quality, transparent reporting, and the 90-day results benchmark" },
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
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              UK Businesses <span className="gradient-text-teal">Ask Us This a Lot</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={ukFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="orb orb-teal w-[300px] h-[300px] -top-20 -right-20 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Get a Free Audit of Your UK Marketing Performance
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                We&apos;ll analyze your site, your top 5 UK competitors, and your visibility
                on Google and AI search. No cost, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  <span>Get Your Free UK Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="https://wa.me/923224044150" className="btn-secondary text-lg px-8 py-4">
                  <Headphones className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
