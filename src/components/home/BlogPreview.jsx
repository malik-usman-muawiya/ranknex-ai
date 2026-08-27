import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import { blogPosts } from '../../data/blogs.js';

export default function BlogPreview() {
  return (
    <section className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="Industry Insights"
          title={
            <>
              Insights That Drive Revenue <span className="gradient-text font-bold">: Not Fluff</span>
            </>
          }
          subtitle="Actionable guides on modern SEO, AI search positioning, and high-ROI advertising written by practitioners executing every week."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {blogPosts.slice(0, 3).map((post) => (
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
                  {/* Category */}
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
                        letterSpacing: '0.05em',
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

                  <h3
                    style={{
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: 'var(--color-navy-950)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </h3>

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

                {/* Metadata */}
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

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/blog" className="btn-secondary">
            <span>Read All Articles &amp; Guides</span>
            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
