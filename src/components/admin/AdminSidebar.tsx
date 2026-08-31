"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Inbox,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blog Posts", href: "/admin/blogs", icon: FileText },
  { label: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
  { label: "Submissions", href: "/admin/contacts", icon: Inbox },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 fixed top-0 left-0 right-0 z-40 h-16 shadow-2xs">
        <Link href="/admin" className="flex items-center gap-2 font-bold text-navy-950 font-heading">
          <div className="relative w-8 h-8">
            <Image
              src="/logo-mark.webp"
              alt="RankNex Logo"
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
          <span className="text-lg">RankNex Admin</span>
        </Link>
        <button
          onClick={toggleSidebar}
          className="p-2 text-slate-600 hover:text-navy-950 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 lg:top-0 bottom-0 left-0 z-30 w-64 bg-white border-r border-slate-200/80 py-6 px-4 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 shadow-xs ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Logo Branding (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 px-3 py-2">
            <div className="relative w-9 h-9 shrink-0">
              <Image
                src="/logo-mark.webp"
                alt="RankNex Logo"
                fill
                className="object-contain"
                sizes="36px"
                priority
              />
            </div>
            <div>
              <span className="text-lg font-bold text-navy-950 font-heading tracking-tight block">
                RankNex AI
              </span>
              <span className="text-[11px] font-semibold text-teal-600 tracking-wide uppercase block -mt-1">
                Admin Center
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Management
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all group ${
                    isActive
                      ? "bg-teal-500/10 text-teal-600 font-bold border border-teal-500/20 shadow-2xs"
                      : "text-slate-600 hover:text-navy-950 hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-teal-600" : "text-slate-400 group-hover:text-teal-600"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-2 pt-4 border-t border-slate-100">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-navy-950 hover:bg-slate-50 border border-transparent transition-all group"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Live Website</span>
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 border border-transparent hover:border-rose-100 transition-all cursor-pointer group"
          >
            <LogOut className="w-4 h-4 text-rose-500 group-hover:text-rose-700 transition-colors" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-20 bg-navy-950/30 backdrop-blur-xs"
        />
      )}
    </>
  );
}
