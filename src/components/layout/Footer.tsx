import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Building2,
} from 'lucide-react';
import Logo from './Logo';
import { offices } from '@/lib/offices';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  { label: 'SEO & AI Search', href: '/services/seo' },
  { label: 'PPC Advertising', href: '/services/ppc-advertising' },
  { label: 'Social Media Marketing', href: '/services/social-media' },
  { label: 'Content Writing', href: '/services/content-writing' },
  { label: 'Web Design & Development', href: '/services/web-designing' },
  { label: 'Branding & Identity', href: '/services/branding' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/ranknexai', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/ranknexai', label: 'Twitter' },
  {
    icon: Instagram,
    href: 'https://instagram.com/ranknexai',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/ranknexai',
    label: 'LinkedIn',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-navy-950">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-teal-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* ---- Main grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-16 pb-12">
          {/* Column 1 – Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex mb-5 transition-transform duration-300 hover:scale-[1.03]"
            >
              <Logo size={38} />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              RankNex AI. Pakistan&apos;s AI-powered digital marketing agency.
              Serving businesses in the UK, US, and Pakistan since 2024. No
              lock-in contracts. 90-day results guarantee.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-teal-500 hover:border-teal-500/30 hover:bg-teal-500/[0.08] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Services */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 text-sm hover:text-teal-500 transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Quick Links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 text-sm hover:text-teal-500 transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/923224044150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-teal-500 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-teal-500/60 group-hover:text-teal-500 transition-colors shrink-0" />
                  <span>+92 322 4044150</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ranknexai.com"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-teal-500 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-teal-500/60 group-hover:text-teal-500 transition-colors shrink-0" />
                  <span>info@ranknexai.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-teal-500/60 shrink-0" />
                  <span>Lahore, Pakistan</span>
                </div>
              </li>
            </ul>

            {/* Mini CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="btn-primary !py-2.5 !px-5 !text-xs !rounded-lg w-full justify-center"
              >
                <span>Get Free Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ---- Office Address ---- */}
        <div className="border-t border-white/[0.05] py-8">
          <span className="inline-flex items-center gap-1.5 text-teal-500 text-[11px] font-semibold uppercase tracking-widest bg-teal-500/10 border border-teal-500/20 rounded-full px-3 py-1 mb-6">
            <Building2 className="w-3 h-3" />
            Office Address
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            {offices.map((office) => (
              <div
                key={office.country}
                className="group relative flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 overflow-hidden transition-colors duration-300 hover:border-teal-500/20"
              >
                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-500/[0.08] rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="relative shrink-0 w-8 h-8 rounded-md overflow-hidden border border-white/10 mt-0.5">
                  <img
                    src={`https://flagcdn.com/w40/${office.code}.png`}
                    srcSet={`https://flagcdn.com/w40/${office.code}.png 1x, https://flagcdn.com/w80/${office.code}.png 2x`}
                    alt={`${office.country} flag`}
                    className="w-full h-full object-cover"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                </span>
                <div className="relative">
                  <p className="text-white font-semibold text-sm leading-tight">
                    {office.country}{' '}
                    <span className="text-slate-500 font-normal">({office.label})</span>
                  </p>
                  <p className="flex items-start gap-1.5 text-slate-400 text-sm mt-1.5">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 text-teal-500/50 shrink-0" />
                    <span>{office.address}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="border-t border-white/[0.05] py-6 flex flex-col sm:flex-row items-center justify-between gap-4 pr-0 sm:pr-20">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} RankNex AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 pb-16 sm:pb-0">
            <Link
              href="/privacy-policy"
              className="text-slate-400 text-xs hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 text-xs hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
