import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "WordPress Development Case Study: SoftSavvy IT Solutions Website",
  description:
    "How RankNex AI built a complete WordPress website for SoftSavvy, an IT solutions company, end-to-end from design to deployment.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/softsavvy-wordpress-website",
  },
  openGraph: {
    title: "WordPress Development Case Study: SoftSavvy | RankNex AI",
    description:
      "A live, professional company website representing SoftSavvy's full service offering.",
    url: "https://www.ranknexai.com/case-studies/softsavvy-wordpress-website",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="WordPress Development"
      title="A Complete WordPress Website for SoftSavvy"
      clientLine="SoftSavvy — complete IT solutions company website"
      heroMetrics={[
        { value: "WordPress", label: "Platform" },
        { value: "End-to-End", label: "Design to Deploy" },
        { value: "Live", label: "Status" },
      ]}
      overview="An IT solutions company needed a professional website covering services, industries served, and careers — built to convert visitors into leads. We built a complete WordPress website end-to-end, from design to live deployment."
      challenge={[
        "Needed a professional site covering services, industries served, and careers in one cohesive design.",
        "Wanted the site built to actually convert visitors into leads, not just look good.",
      ]}
      strategy={[
        {
          title: "End-to-End WordPress Build",
          description:
            "Designed and built the complete site in WordPress, covering the homepage, services, industries, and careers sections, and deployed it live.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/wordpress-softsavvy.webp", caption: "SoftSavvy — WordPress website homepage" },
      ]}
      results={[
        "A live, professional company website representing SoftSavvy's full service offering.",
        "A cohesive site covering services, industries, and careers in one build.",
      ]}
      finalMetrics={[
        { value: "WordPress", label: "Platform" },
        { value: "Complete Build", label: "Design to Deploy" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
