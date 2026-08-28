'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';
import Magnetic from '@/components/ui/Magnetic';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  TrendingUp,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Navigation data                                                    */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact Us', href: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Hidden admin access: 6 clicks on logo within 3 seconds
  const clickTimestamps = useRef<number[]>([]);
  const REQUIRED_CLICKS = 6;
  const TIME_WINDOW_MS = 3000;

  const handleLogoClick = useCallback(() => {
    const now = Date.now();
    clickTimestamps.current = [
      ...clickTimestamps.current.filter((t) => now - t < TIME_WINDOW_MS),
      now,
    ];
    if (clickTimestamps.current.length >= REQUIRED_CLICKS) {
      clickTimestamps.current = [];
      router.push('/admin/login');
      return;
    }
    router.push('/');
  }, [router]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-strong shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ---- Logo ---- */}
            <button
              onClick={handleLogoClick}
              className="flex items-center select-none transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              aria-label="RankNex AI Home"
            >
              <Logo size={36} />
            </button>

            {/* ---- Desktop Nav ---- */}
            <nav className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-teal-500'
                      : 'text-slate-300 hover:text-navy-950'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ---- Desktop CTA + Mobile Toggle ---- */}
            <div className="flex items-center gap-3">
              {/* Wrapper carries the responsive-hide: `.btn-primary` is
                  unlayered and sets display, which would override `hidden`. */}
              <div className="hidden lg:block">
                <Magnetic strength={0.3}>
                  <Link
                    href="/contact"
                    className="btn-primary !py-2.5 !px-5 !text-sm !rounded-lg animate-cta-pulse"
                  >
                    <span>Get Free Audit</span>
                    <TrendingUp className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-navy-950 hover:bg-teal-500/[0.07] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---- Mobile Menu Overlay ---- */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw] bg-mist-100 border-l border-navy-950/[0.06] overflow-y-auto lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-navy-950/[0.06]">
                <span className="text-lg font-bold text-navy-950 font-heading">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-navy-950 hover:bg-teal-500/[0.07] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="p-4">
                <motion.ul
                  className="space-y-1"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                    },
                    closed: {},
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.label}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: 20 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'text-teal-500 bg-teal-500/[0.08]'
                            : 'text-slate-300 hover:text-navy-950 hover:bg-teal-500/[0.06]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-navy-950/[0.06]"
                >
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center !py-3"
                  >
                    <span>Get Free Audit</span>
                    <TrendingUp className="w-4 h-4" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
