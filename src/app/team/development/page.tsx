import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu, Users, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SeniorMemberCard from "@/components/team/SeniorMemberCard";
import JuniorMemberCard from "@/components/team/JuniorMemberCard";

export const metadata: Metadata = {
  title: "Meet the Development Team | Odoo ERP, React & WordPress | RankNex AI",
  description:
    "Meet the development team at RankNex AI — custom Odoo ERP modules, full-stack React applications, and WordPress websites, built and shipped to production.",
  alternates: {
    canonical: "https://www.ranknexai.com/team/development",
  },
  openGraph: {
    title: "Meet the Development Team | RankNex AI",
    description:
      "The full-stack developers building custom Odoo ERP modules, React applications, and WordPress websites for RankNex AI clients.",
    url: "https://www.ranknexai.com/team/development",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function DevelopmentTeamPage() {
  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Meet the Full Team</span>
        </Link>

        <SectionHeading
          tag="The Development Team"
          title={<>Meet the <span className="gradient-text font-bold">Developers</span> Building Your Platform</>}
          subtitle="Real production systems, from ERP customization to custom React apps and WordPress builds."
        />

        {/* Senior Full-Stack Developer */}
        <SeniorMemberCard
          photo="/team/zohaib-full-stack-developer.webp"
          photoAlt="Syed Muhammad Ahmad - Full-Stack Developer specializing in Odoo ERP, React, Next.js and WordPress development"
          name="Syed Muhammad Ahmad"
          title="Full-Stack Developer & ERP Specialist"
          stats={[
            { value: "7+", label: "Production Systems" },
            { value: "3", label: "Tech Stacks" },
            { value: "ERP", label: "Odoo Customization" },
            { value: "Full-Stack", label: "React & WordPress" },
          ]}
          bioParagraphs={[
            <>
              A full-stack developer with hands-on experience building and customizing{" "}
              <strong className="text-navy-950">Odoo ERP</strong> modules for legal case
              management, intellectual property tracking, corporate billing, HR &amp; payroll,
              and demarcation management, real production systems used by operating businesses,
              not demo templates.
            </>,
            <>
              Beyond ERP work, he builds custom <strong className="text-navy-950">React</strong>{" "}
              applications from the ground up and delivers full{" "}
              <strong className="text-navy-950">WordPress</strong> websites for clients who need
              a site live and maintainable fast. Every project is built with clean, scalable
              code and deployed with the same standard RankNex AI holds its own platform to.
            </>,
          ]}
          tags={[
            "Odoo ERP Development",
            "React.js",
            "Next.js",
            "WordPress Development",
            "Custom Module Development",
            "API Integration",
            "Database Design",
            "Full-Stack Development",
            "UI/UX Implementation",
            "Legal & IP Management Systems",
            "Corporate Billing Systems",
            "HR & Payroll Systems",
          ]}
          metrics={[
            {
              icon: <Cpu className="w-6 h-6 text-teal-500" />,
              value: "5 Odoo Modules",
              label: "Custom ERP systems built for legal, IP, billing, HR/payroll and demarcation management",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
              value: "2 React Apps",
              label: "Full-stack applications built from scratch, including an affiliate management platform",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
              value: "2 WordPress Builds",
              label: "Complete client websites delivered end-to-end, from design to live deployment",
            },
            {
              icon: <Users className="w-6 h-6 text-teal-500" />,
              value: "End-to-End Delivery",
              label: "From database design and API integration to production deployment and maintenance",
            },
          ]}
        />

        {/* Junior Developers */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-heading text-navy-950 text-center mb-10">
              Junior Web Developers
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <JuniorMemberCard
              photo="/team/muhammad-talha-butt-junior-web-developer.webp"
              photoAlt="Muhammad Talha Butt - Junior Web Developer specializing in full-stack development at RankNex AI"
              name="Muhammad Talha Butt"
              title="Junior Web Developer | Full-Stack Development"
              bio="Supports the team in building functional, scalable, and user-friendly web applications. Assists with front-end and back-end development, website customization, API integration, database-related tasks, bug fixing, and technical implementation across WordPress and custom web projects."
              skills={["Full-Stack Development", "JavaScript", "React.js", "WordPress", "API Integration", "Database Support"]}
              delay={0}
            />
            <JuniorMemberCard
              photo="/team/subhan-qayyom-junior-web-developer.webp"
              photoAlt="Subhan Abdul Qayyom - Junior Web Developer specializing in front-end development at RankNex AI"
              name="Subhan Abdul Qayyom"
              title="Junior Web Developer | Front-End Development"
              bio="Supports the team in creating responsive, modern, and user-friendly websites. Assists with HTML, CSS, JavaScript, responsive layouts, UI implementation, website customization, and front-end optimization, transforming designs into functional web interfaces."
              skills={["Front-End Development", "HTML", "CSS", "JavaScript", "Responsive Design", "WordPress"]}
              delay={0.08}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
