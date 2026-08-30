"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Stat {
  value: string;
  label: string;
}

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface SeniorMemberCardProps {
  photo: string;
  photoAlt: string;
  name: string;
  title: string;
  stats: Stat[];
  bioParagraphs: React.ReactNode[];
  tags: string[];
  metrics: Metric[];
}

export default function SeniorMemberCard({
  photo,
  photoAlt,
  name,
  title,
  stats,
  bioParagraphs,
  tags,
  metrics,
}: SeniorMemberCardProps) {
  return (
    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start max-w-6xl mx-auto">
      {/* Photo + identity card */}
      <ScrollReveal direction="left">
        <div className="card-glass p-8 text-center h-full flex flex-col items-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden mb-6 ring-2 ring-teal-500/20">
            <Image
              src={photo}
              alt={photoAlt}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-navy-950 font-heading mb-1">
            {name}
          </h3>
          <p className="text-teal-500 font-semibold mb-5">{title}</p>
          <div className="grid grid-cols-2 gap-3 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-mist-100/50 rounded-lg p-3"
              >
                <div className="text-lg font-bold gradient-text-teal">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Bio + tags + metric cards */}
      <div className="space-y-6">
        <ScrollReveal delay={0.1}>
          <div className="card p-8">
            {bioParagraphs.map((para, i) => (
              <p key={i} className={`text-slate-300 leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-teal-500 border border-teal-500/20 bg-teal-500/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-4">
            {metrics.map((item, i) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-5"
              >
                <div className="mb-3">{item.icon}</div>
                <div className="text-lg font-bold text-navy-950 mb-1">{item.value}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
