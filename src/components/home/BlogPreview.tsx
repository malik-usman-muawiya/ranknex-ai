'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface BlogPostPreview {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

export default function BlogPreview({ posts }: { posts: BlogPostPreview[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="section section-alt relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          tag="Blog & Insights"
          title={<>Insights That Help You Grow <span className="gradient-text font-bold">: Not Just News About Us</span></>}
          subtitle="Practical guides on SEO, AI search, and digital growth. Written by the same team that executes these strategies for clients every week."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <motion.article
                  className="card group h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Category & Featured badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-500 border border-teal-500/20">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-teal-500 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-navy-700/50">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View all */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Read All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
