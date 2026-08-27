import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';

const testimonials = [
  {
    name: 'James Richardson',
    role: 'CEO, TechVentures UK',
    location: 'London, United Kingdom',
    content:
      'RankNex AI completely transformed our organic growth. Within 4 months, our search traffic increased by 320% and we are now ranking on page 1 for our top 15 commercial keywords. Easily the best ROI we have seen from any agency.',
    rating: 5,
    avatar: 'JR',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director, HealthPlus',
    location: 'New York, USA',
    content:
      'Working with RankNex AI has been a game-changer. Their AI-driven approach to PPC cut our cost-per-lead by 45% while increasing inbound booked calls. Responsive, transparent, and genuinely results-driven.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Founder, UrbanStyle Pk',
    location: 'Lahore, Pakistan',
    content:
      'As a growing brand, we needed an agency that delivered real impact without bloated retainers. RankNex AI helped grow our online store revenue by 250% in just 6 months. Exceptional team.',
    rating: 5,
    avatar: 'AH',
  },
  {
    name: 'Emma Thompson',
    role: 'Owner, Bloom Interiors',
    location: 'Manchester, United Kingdom',
    content:
      'I was initially cautious about working with an overseas team, but RankNex AI exceeded every expectation. Communication on WhatsApp is instant, reports are transparent, and our website traffic is up 200%.',
    rating: 5,
    avatar: 'ET',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataFlow Solutions',
    location: 'San Francisco, USA',
    content:
      'Their web speed and technical SEO combo is unbeatable. RankNex AI rebuilt our frontend for sub-second load times and organic sessions doubled within 3 months.',
    rating: 5,
    avatar: 'MC',
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          tag="Client Testimonials"
          title={
            <>
              What Business Owners <span className="gradient-text font-bold">Say About Us</span>
            </>
          }
          subtitle="Don't just take our word for it. Here is what leaders across the UK, US, and Pakistan say about working with RankNex AI."
        />

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="card-glass"
            style={{
              position: 'relative',
              padding: '2.5rem',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Quote
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                width: '40px',
                height: '40px',
                color: 'rgba(0, 210, 210, 0.15)',
              }}
            />

            <div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} style={{ width: '1.125rem', height: '1.125rem', fill: '#f59e0b', color: '#f59e0b' }} />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: 'var(--color-slate-300)',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                }}
              >
                &ldquo;{t.content}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00d2d2 0%, #33dede 100%)',
                  color: '#ffffff',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9375rem',
                }}
              >
                {t.avatar}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-navy-950)', fontSize: '0.9375rem' }}>
                  {t.name}
                </p>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.8125rem' }}>
                  {t.role} · {t.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.5rem',
            }}
          >
            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    height: '8px',
                    width: idx === current ? '32px' : '8px',
                    borderRadius: '9999px',
                    backgroundColor: idx === current ? '#00D2D2' : 'rgba(10, 15, 30, 0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(10, 15, 30, 0.12)',
                  color: 'var(--color-navy-950)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                <ChevronLeft style={{ width: '1.25rem', height: '1.25rem' }} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(10, 15, 30, 0.12)',
                  color: 'var(--color-navy-950)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                <ChevronRight style={{ width: '1.25rem', height: '1.25rem' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
