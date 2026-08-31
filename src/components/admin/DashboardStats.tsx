"use client";

import { FileText, CheckCircle2, Briefcase, Inbox } from "lucide-react";

interface DashboardStatsProps {
  totalBlogs: number;
  publishedBlogs: number;
  totalCaseStudies: number;
  unreadSubmissions: number;
}

export default function DashboardStats({
  totalBlogs,
  publishedBlogs,
  totalCaseStudies,
  unreadSubmissions,
}: DashboardStatsProps) {
  const stats = [
    {
      label: "Total Blog Posts",
      value: totalBlogs,
      icon: FileText,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      label: "Published Articles",
      value: publishedBlogs,
      icon: CheckCircle2,
      color: "text-teal-600 bg-teal-50 border-teal-100",
    },
    {
      label: "Case Studies",
      value: totalCaseStudies,
      icon: Briefcase,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      label: "Unread Leads",
      value: unreadSubmissions,
      icon: Inbox,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 p-6 rounded-2xl flex items-center justify-between shadow-xs hover:shadow-md hover:border-teal-500/30 transition-all"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                {stat.label}
              </span>
              <span className="text-3xl font-extrabold text-navy-950 font-heading block">
                {stat.value}
              </span>
            </div>
            <div className={`p-3.5 rounded-2xl border ${stat.color} shrink-0`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
