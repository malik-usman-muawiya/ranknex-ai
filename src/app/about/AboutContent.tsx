'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
  Cpu,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: TrendingUp,
    title: 'Results Before Relationships',
    description: 'We earn long-term clients by delivering first.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency Over Comfort',
    description: "We report what's actually happening, not what looks good.",
  },
  {
    icon: Users,
    title: 'No Lock-In',
    description: "Clients stay because they want to, not because they're trapped.",
  },
  {
    icon: Lightbulb,
    title: 'Honest Timelines',
    description: "We tell you what's realistic, not what you want to hear.",
  },
  {
    icon: Cpu,
    title: 'Quality Control',
    description: 'AI tools accelerate our work; human judgment governs it.',
  },
];

export default function AboutContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="orb orb-teal w-96 h-96 -top-48 -right-24 opacity-10" />
        <div className="orb orb-cyan w-72 h-72 top-1/2 -left-36 opacity-8" />

        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide text-teal-500 border border-teal-500/20 bg-teal-500/5 mb-6"
            >
              About RankNex AI
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
            >
              We Built RankNex AI Because UK and US Agencies{' '}
              <span className="gradient-text">Overcharge by 60%.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
            >
              50+ clients. 90-day results guarantee. A team of SEO specialists,
              content strategists, developers, and designers working from
              Lahore, delivering the same calibre of digital marketing as
              London and New York agencies, at a cost that actually makes
              sense.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  tag="Our Story"
                  title={
                    <>
                      Why We Started <span className="gradient-text">RankNex AI</span>
                    </>
                  }
                  align="left"
                />
                <div className="space-y-5 text-slate-300 leading-relaxed -mt-8">
                  <p>
                    The digital marketing industry has a pricing problem. A mid-size
                    agency in London charges £3,000-8,000 per month for SEO. A
                    similar agency in New York charges $5,000-12,000. The work
                    itself, keyword research, content creation, technical audits,
                    link building, doesn&apos;t cost that much to do well. The
                    overhead does.
                  </p>
                  <p>
                    Pakistan has a deep, experienced pool of digital marketing
                    talent. Our team includes specialists who&apos;ve worked on UK,
                    US, and Gulf market campaigns for years, people who understand
                    international SEO requirements, cultural nuance, and the
                    standards that Western clients expect. We built RankNex AI to
                    bring that talent to businesses who need international-quality
                    marketing but can&apos;t justify international-scale invoices.
                  </p>
                  <p>
                    We&apos;re not a content mill. We&apos;re not a cheap alternative
                    that delivers cheap results. We&apos;re a professional agency
                    that happens to have lower overheads, and we pass that
                    directly to clients.
                  </p>
                </div>

                <h2 className="text-2xl font-bold font-heading text-navy-950 mt-10 mb-4">
                  Why a Digital Marketing Agency in Pakistan Works for UK &amp; US Budgets
                </h2>
                <div className="space-y-5 text-slate-300 leading-relaxed">
                  <p>
                    A UK or US business paying £3,000-8,000 a month for SEO isn&apos;t
                    paying for better strategy, it&apos;s paying for higher rent and
                    higher salaries in London or New York. A digital marketing agency
                    in Pakistan delivers the same technical depth and account
                    management standard, without that overhead, which is why more UK
                    and US businesses are working with Lahore-based teams every year.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="card-glass p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-950">AI + Human</h3>
                      <p className="text-slate-400">The perfect combination</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '50+', label: 'Clients Served' },
                      { value: '90 Days', label: 'To First Results' },
                      { value: '3+', label: 'Countries Served' },
                      { value: '90%', label: 'Client Retention' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-mist-100/50 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold gradient-text-teal">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Our Mission"
            title={
              <>
                What We&apos;re <span className="gradient-text">Actually Trying to Do</span>
              </>
            }
            subtitle="Every strategy we build, every campaign we run, and every line of code we write is guided by a clear mission and an ambitious vision."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4 font-heading">
                  Our Mission
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Make it possible for a business in Leeds, or Houston, or Karachi
                  to get the same quality of digital marketing as a company with
                  a £50,000 monthly agency budget, for a fraction of that cost.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4 font-heading">
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  We believe good marketing shouldn&apos;t be a privilege of
                  scale. And we believe the best way to prove that is to show
                  results, be transparent about how we work, and never lock a
                  client into a contract they can&apos;t leave if we&apos;re
                  not delivering.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why RankNex AI Exists */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            tag="How We Work"
            title={
              <>
                Our Approach, <span className="gradient-text">Practical Over Theoretical</span>
              </>
            }
            subtitle="We use AI tools. We're transparent about that."
          />

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  AI helps us do keyword research faster, analyze competitors
                  more thoroughly, and generate content frameworks more
                  efficiently than manual methods allow.
                </p>
                <p>
                  But every strategy is developed by an experienced specialist.
                  Every piece of content is reviewed and edited by a human.
                  Every recommendation is based on judgment, not just output.
                </p>
                <p>
                  We also believe in communication that doesn&apos;t require a
                  follow-up email to understand. Monthly reports are written
                  in plain language. Recommendations come with reasons.
                  Account managers are reachable on WhatsApp, not hidden
                  behind a ticket system.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Our Values"
            title={
              <>
                What We <span className="gradient-text">Won&apos;t Compromise On</span>
              </>
            }
            subtitle="Five principles that guide every decision we make and every result we deliver."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <div className="card p-7 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                    <value.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Expertise Positioning */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeading
                tag="Our Team"
                title={
                  <>
                    A Trusted SEO Company in Lahore,{' '}
                    <span className="gradient-text">Serving Clients Worldwide</span>
                  </>
                }
                align="left"
              />
              <div className="space-y-5 text-slate-300 leading-relaxed -mt-8">
                <p>
                  Our team is based in Lahore, Pakistan, one of South Asia&apos;s
                  most active digital talent hubs. We work across UK, US, and
                  Pakistani time zones.
                </p>
                <p>
                  Our team brings together SEO architects, paid media specialists, content
                  strategists, brand designers, and data scientists, all unified by a
                  commitment to performance that compounds over time.
                </p>
                <p>
                  Every team member is trained in the latest AI tools, platform algorithms,
                  and conversion optimization techniques. We invest heavily in learning so
                  our clients never have to worry about being left behind.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'SEO & GEO Experts', desc: 'Technical, on-page, off-page & local' },
                  { title: 'Paid Media Pros', desc: 'Google Ads, Meta Ads, TikTok Ads' },
                  { title: 'Content Strategists', desc: 'Copywriting, blogs & brand voice' },
                  { title: 'Design & Dev', desc: 'UI/UX, web development & branding' },
                ].map((role, i) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="card-glass p-5 text-center"
                  >
                    <h4 className="text-navy-950 font-semibold mb-1">{role.title}</h4>
                    <p className="text-slate-400 text-sm">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meet Your Specialist */}
      <section className="section">
        <div className="container">
          <SectionHeading
            tag="The Person Behind Your Rankings"
            title={
              <>
                Meet the <span className="gradient-text">Search Specialist</span> Leading Your Account
              </>
            }
            subtitle="Real search-engine results, tracked directly from Google Search Console, Google Analytics, and Google Business Profile."
          />

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start max-w-6xl mx-auto">
            {/* Photo + identity card */}
            <ScrollReveal direction="left">
              <div className="card-glass p-8 text-center h-full flex flex-col items-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden mb-6 ring-2 ring-teal-500/20">
                  <Image
                    src="/team/muhammad-usman-seo-specialist.webp"
                    alt="Muhammad Usman - SEO Specialist and Digital Marketing Expert specializing in Technical SEO, AEO, GEO and AIO"
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 font-heading mb-1">
                  Muhammad Usman
                </h3>
                <p className="text-teal-500 font-semibold mb-5">
                  SEO Executive &amp; Digital Marketing Specialist
                </p>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { value: '2+ Yrs', label: 'SEO Experience' },
                    { value: '100+', label: 'Backlink Platforms' },
                    { value: '16x', label: 'Organic Click Growth' },
                    { value: '3', label: 'Markets Served' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="bg-mist-100/50 rounded-lg p-3"
                    >
                      <div className="text-lg font-bold gradient-text-teal">{stat.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Bio + entity expertise + performance cards */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="card p-8">
                  <p className="text-slate-300 leading-relaxed">
                    A results-driven SEO specialist with hands-on experience running{' '}
                    <strong className="text-navy-950">On-Page SEO</strong>,{' '}
                    <strong className="text-navy-950">Technical SEO</strong>, and{' '}
                    <strong className="text-navy-950">Off-Page SEO</strong> for real estate,
                    e-commerce, and local service businesses across Pakistan, the UK, and the
                    US. His work spans full technical audits, keyword research, content
                    strategy, Google Business Profile optimization, and multi-platform link
                    building, always measured against real Search Console and Analytics data,
                    not vanity metrics.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Beyond traditional rankings, he optimizes content for how search is
                    actually evolving: structuring pages to win featured snippets and voice
                    results through <strong className="text-navy-950">Answer Engine
                    Optimization (AEO)</strong>, formatting content to be cited inside AI
                    Overviews and chatbot answers through{' '}
                    <strong className="text-navy-950">Generative Engine Optimization (GEO)</strong>,
                    and preparing sites for AI-driven discovery through{' '}
                    <strong className="text-navy-950">AI Optimization (AIO)</strong>, alongside
                    core <strong className="text-navy-950">Local SEO</strong> and{' '}
                    <strong className="text-navy-950">Search Engine Marketing (SEM)</strong>{' '}
                    fundamentals.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {[
                      'On-Page SEO',
                      'Technical SEO',
                      'Off-Page SEO',
                      'Local SEO',
                      'AEO (Answer Engine Optimization)',
                      'GEO (Generative Engine Optimization)',
                      'AIO (AI Optimization)',
                      'SEM',
                      'Keyword Research',
                      'Content Strategy',
                      'Google Business Profile (GBP)',
                      'Link Building',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold text-teal-500 border border-teal-500/20 bg-teal-500/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: TrendingUp,
                      value: '22.4K → 1.98M',
                      label: 'Clicks & impressions grown across a 6-month organic campaign, position improved from 27 to 6.2',
                    },
                    {
                      icon: Target,
                      value: '+101% Orders',
                      label: 'E-commerce SEO client saw orders and revenue more than double within 28 days',
                    },
                    {
                      icon: Users,
                      value: '100+ Platforms',
                      label: 'High-authority backlink campaigns executed across Medium, GitHub, Quora, Reddit and Pinterest',
                    },
                    {
                      icon: ShieldCheck,
                      value: 'Full Technical Audits',
                      label: 'Indexing, crawling, redirect chains and duplicate-tag issues identified and resolved end-to-end',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.value}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="card-glass p-5"
                    >
                      <item.icon className="w-6 h-6 text-teal-500 mb-3" />
                      <div className="text-lg font-bold text-navy-950 mb-1">{item.value}</div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="orb orb-teal w-64 h-64 -top-32 -right-32 opacity-20" />
              <div className="orb orb-cyan w-48 h-48 -bottom-24 -left-24 opacity-15" />

              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative z-10">
                Ready to See What <span className="gradient-text">AI-Powered Marketing</span> Can Do?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Get a free, no-obligation audit of your digital presence. We&apos;ll show you
                exactly where you&apos;re leaving money on the table, and how to capture it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/contact" className="btn-primary">
                  <span>Work With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  <span>See Our Results</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
