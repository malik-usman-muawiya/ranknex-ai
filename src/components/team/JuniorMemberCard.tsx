"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface JuniorMemberCardProps {
  photo: string | null;
  photoAlt: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  delay?: number;
}

export default function JuniorMemberCard({
  photo,
  photoAlt,
  name,
  title,
  bio,
  skills,
  delay = 0,
}: JuniorMemberCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="card p-7 h-full flex flex-col items-center text-center">
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden mb-5 ring-2 ring-teal-500/20 bg-mist-100/50">
          {photo ? (
            <Image
              src={photo}
              alt={photoAlt}
              fill
              sizes="112px"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-teal-500/40 font-heading">
              {name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
        </div>
        <h4 className="text-lg font-bold text-navy-950 font-heading mb-1">{name}</h4>
        <p className="text-teal-500 text-sm font-semibold mb-4">{title}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{bio}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-teal-500 border border-teal-500/20 bg-teal-500/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
