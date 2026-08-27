import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronRight } from 'lucide-react';
import Logo from './Logo.jsx';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`header-nav ${isScrolled ? 'scrolled' : 'bg-transparent'}`}
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '72px',
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
              aria-label="RankNex AI Home"
            >
              <Logo size={42} width={240} />
            </Link>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.75rem',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    style={{
                      padding: '0.5rem 0.875rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.9375rem',
                      fontWeight: active ? '700' : '500',
                      color: active ? 'var(--color-teal-500)' : 'var(--color-slate-400)',
                      backgroundColor: active ? 'rgba(0, 210, 210, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Hamburger Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="desktop-cta" style={{ display: 'none' }}>
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{
                    padding: '0.625rem 1.25rem',
                    fontSize: '0.875rem',
                    borderRadius: '0.5rem',
                  }}
                >
                  <span>Get Free Audit</span>
                  <TrendingUp style={{ width: '1rem', height: '1rem' }} />
                </Link>
              </div>

              {/* Mobile Toggle Button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle Navigation Menu"
                className="mobile-menu-btn"
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(0, 210, 210, 0.08)',
                  border: '1px solid rgba(0, 210, 210, 0.2)',
                  color: 'var(--color-navy-950)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isMobileOpen ? (
                  <X style={{ width: '1.5rem', height: '1.5rem', color: '#0A0F1E' }} />
                ) : (
                  <Menu style={{ width: '1.5rem', height: '1.5rem', color: '#0A0F1E' }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 998,
              backgroundColor: 'rgba(10, 15, 30, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Drawer Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '320px',
              backgroundColor: '#ffffff',
              zIndex: 999,
              boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(10, 15, 30, 0.08)',
                marginBottom: '1.25rem',
              }}
            >
              <Logo size={36} width={180} />
              <button
                onClick={() => setIsMobileOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  color: 'var(--color-slate-400)',
                }}
                aria-label="Close menu"
              >
                <X style={{ width: '1.375rem', height: '1.375rem' }} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.875rem 1rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: active ? '700' : '500',
                      color: active ? 'var(--color-teal-500)' : 'var(--color-navy-950)',
                      backgroundColor: active ? 'rgba(0, 210, 210, 0.08)' : 'transparent',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight style={{ width: '1.125rem', height: '1.125rem', opacity: 0.5 }} />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Bottom CTA */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(10, 15, 30, 0.08)', marginTop: '1rem' }}>
              <Link
                to="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary"
                style={{ width: '100%', padding: '0.875rem' }}
              >
                <span>Get Free SEO Audit</span>
                <TrendingUp style={{ width: '1.125rem', height: '1.125rem' }} />
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Responsive media styling for header */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
