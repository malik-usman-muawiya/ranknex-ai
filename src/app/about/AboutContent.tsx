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
              We&apos;re RankNex AI. Built in Pakistan.{' '}
              <span className="gradient-text">Built for Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
            >
              A team of SEO specialists, content strategists, developers, and
              designers, working from Lahore to deliver digital marketing
              that competes with the best agencies in London and New York,
              at a cost that makes sense for growing businesses.
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
                      <h3 className="text-2xl font-bold text-white">AI + Human</h3>
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
                        className="bg-navy-900/50 rounded-lg p-4 text-center"
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
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
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
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
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
                  <h3 className="text-lg font-bold text-white mb-3 font-heading">
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
                    The People Behind{' '}
                    <span className="gradient-text">the Results</span>
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
                    <h4 className="text-white font-semibold mb-1">{role.title}</h4>
                    <p className="text-slate-400 text-sm">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
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
