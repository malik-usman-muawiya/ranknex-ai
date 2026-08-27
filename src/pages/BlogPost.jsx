import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import CTABanner from '../components/home/CTABanner.jsx';
import { blogPosts } from '../data/blogs.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              color: 'var(--color-slate-400)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              marginBottom: '1.5rem',
            }}
          >
            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            <span>Back to all insights</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: 'rgba(0, 210, 210, 0.1)',
                color: '#00a8a8',
                border: '1px solid rgba(0, 210, 210, 0.25)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                textTransform: 'uppercase',
              }}
            >
              {post.category}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-950)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--color-slate-400)',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(10, 15, 30, 0.08)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              <Calendar style={{ width: '1rem', height: '1rem' }} />
              {post.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              <Clock style={{ width: '1rem', height: '1rem' }} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div
            className="blog-article-content"
            style={{
              color: 'var(--color-slate-300)',
              fontSize: '1.0625rem',
              lineHeight: 1.85,
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Box */}
          <div
            className="card-glass"
            style={{
              marginTop: '3.5rem',
              padding: '1.75rem',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00d2d2 0%, #33dede 100%)',
                color: '#ffffff',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                flexShrink: 0,
              }}
            >
              RN
            </div>
            <div>
              <p style={{ fontWeight: 800, color: 'var(--color-navy-950)', fontSize: '1rem', marginBottom: '0.25rem' }}>
                RankNex AI Editorial Team
              </p>
              <p style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                Written and curated by full-time SEO practitioners and AI search strategists executing campaigns across the UK, US, and Pakistan.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1.5rem' }}>
                Related Reading
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    to={`/blog/${rPost.slug}`}
                    style={{ textDecoration: 'none', display: 'flex' }}
                  >
                    <div className="card" style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#00a8a8', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                        {rPost.category}
                      </span>
                      <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-navy-950)', lineHeight: 1.4 }}>
                        {rPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      <style>{`
        .blog-article-content h2 {
          font-size: 1.625rem;
          font-weight: 800;
          color: var(--color-navy-950);
          margin: 2.25rem 0 1rem 0;
          line-height: 1.3;
        }
        .blog-article-content p {
          margin-bottom: 1.35rem;
        }
      `}</style>
    </div>
  );
}
