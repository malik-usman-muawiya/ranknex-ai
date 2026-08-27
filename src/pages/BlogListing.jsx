import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CTABanner from '../components/home/CTABanner.jsx';
import { blogPosts, blogCategories } from '../data/blogs.js';

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      {/* Hero */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <span
            style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(0, 210, 210, 0.08)',
              color: '#00a8a8',
              border: '1px solid rgba(0, 210, 210, 0.25)',
              marginBottom: '1.25rem',
            }}
          >
            Digital Marketing Knowledge Base
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              lineHeight: 1.15,
              maxWidth: '850px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            Tactical Guides &amp;{' '}
            <span className="gradient-text">SEO Strategy</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'var(--color-slate-400)',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Data-backed breakdowns on search algorithm shifts, generative AI search optimization, paid media scaling, and conversion rate optimization.
          </p>

          {/* Search bar */}
          <div
            style={{
              maxWidth: '520px',
              margin: '0 auto 2rem auto',
              position: 'relative',
            }}
          >
            <Search
              style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '1.25rem',
                height: '1.25rem',
                color: 'var(--color-slate-400)',
              }}
            />
            <input
              type="text"
              placeholder="Search guides, keywords, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.875rem 1.25rem 0.875rem 3.25rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(10, 15, 30, 0.12)',
                backgroundColor: 'rgba(240, 253, 253, 0.5)',
                fontSize: '0.9375rem',
                color: 'var(--color-navy-950)',
                outline: 'none',
              }}
            />
          </div>

          {/* Categories */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--color-teal-500)' : 'rgba(10, 15, 30, 0.1)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-teal-500)' : 'transparent',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--color-slate-400)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'flex' }}
              >
                <div
                  className="card"
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Category & Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          backgroundColor: 'rgba(0, 210, 210, 0.1)',
                          color: '#00a8a8',
                          border: '1px solid rgba(0, 210, 210, 0.2)',
                          padding: '0.2rem 0.625rem',
                          borderRadius: '9999px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {post.category}
                      </span>
                      {post.featured && (
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            backgroundColor: 'rgba(245, 158, 11, 0.12)',
                            color: '#d97706',
                            border: '1px solid rgba(245, 158, 11, 0.25)',
                            padding: '0.2rem 0.625rem',
                            borderRadius: '9999px',
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <h2
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--color-navy-950)',
                        marginBottom: '0.75rem',
                        lineHeight: 1.35,
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-slate-400)',
                        lineHeight: 1.65,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(10, 15, 30, 0.06)',
                      fontSize: '0.75rem',
                      color: 'var(--color-slate-400)',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                      <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                      {post.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                      <Clock style={{ width: '0.875rem', height: '0.875rem' }} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-slate-400)' }}>
              No articles found matching &quot;{searchQuery}&quot;. Try a different keyword or category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
