import Link from "next/link";
import { MapPin, Globe2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LocalSEOSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          tag="Why Lahore"
          title={
            <>
              Why Businesses in the UK &amp; US Choose an{" "}
              <span className="gradient-text font-bold">SEO Company in Lahore</span>
            </>
          }
          subtitle="Lahore has become one of South Asia's most active digital talent hubs, giving UK and US businesses access to experienced SEO specialists at a fraction of what a local agency would charge."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal>
            <div className="card h-full">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6 text-teal-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                A typical UK or US SEO agency spends most of its budget on office rent
                and local salaries, not the actual work. Working with an SEO company in
                Lahore means the same calibre of technical SEO, content, and link
                building, delivered by a team that has spent years working specifically
                with UK and US market conventions, at around 60% lower cost.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card h-full">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Working across time zones is not a barrier, it is standard practice.
                We communicate over WhatsApp, Slack, and email, deliver monthly
                reporting on a predictable schedule, and assign every client a single
                dedicated account manager, so nothing gets lost between time zones.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <SectionHeading
          tag="Who We Serve"
          title={<>Built for Growing Businesses in the <span className="gradient-text font-bold">UK &amp; US</span></>}
          subtitle="Two markets, two dedicated pages, two teams that understand exactly how buyers search in each one."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal>
            <Link href="/uk" className="card h-full block group">
              <span className="text-sm font-semibold text-teal-400 mb-4 inline-block">
                🇬🇧 UK Delivery, UK Office
              </span>
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Built for UK Businesses. Backed by a Real UK Office.
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                SEO, PPC, and content that speaks British English and understands UK
                search behaviour, delivered by a team with an actual registered office
                in Blackburn, not just a claim on a website.
              </p>
              <span className="text-teal-400 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                See UK Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link href="/us" className="card h-full block group">
              <span className="text-sm font-semibold text-cyan-400 mb-4 inline-block">
                🇺🇸 US Timezone Coverage
              </span>
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Silicon Valley Quality. Without the Silicon Valley Invoice.
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                AI-powered SEO, PPC, and AEO/GEO built for how US buyers actually
                search, with US working-hours availability and reporting your team
                can act on same-day.
              </p>
              <span className="text-cyan-400 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                See US Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <SectionHeading
          tag="Our Services"
          title={<>Digital Marketing Services in Lahore, Pakistan <span className="gradient-text font-bold">— At a Glance</span></>}
          subtitle="One team covering everything a growing business needs, from search rankings to the website itself."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: "SEO & AI Search", href: "/services/seo" },
            { label: "PPC Advertising", href: "/services/ppc-advertising" },
            { label: "Social Media Marketing", href: "/services/social-media" },
            { label: "Content Writing", href: "/services/content-writing" },
            { label: "Web Design & Development", href: "/services/web-designing" },
            { label: "Branding & Identity", href: "/services/branding" },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-glass text-center py-5 px-3 text-sm font-semibold text-white hover:text-teal-400 transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
