import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "WordPress Development Case Study: Buying House Business Website",
  description:
    "How RankNex AI built a complete WordPress website for a buying house, from design through live deployment.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/buying-house-wordpress-website",
  },
  openGraph: {
    title: "WordPress Development Case Study: Buying House | RankNex AI",
    description:
      "A live, professional website representing the client's buying house business.",
    url: "https://www.ranknexai.com/case-studies/buying-house-wordpress-website",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="WordPress Development"
      title="A Professional WordPress Website for a Buying House"
      clientLine="Buying house — business website design and deployment"
      heroMetrics={[
        { value: "WordPress", label: "Platform" },
        { value: "End-to-End", label: "Design to Deploy" },
        { value: "Live", label: "Status" },
      ]}
      overview="The client needed a professional web presence to represent their buying house operations online. We built a complete WordPress website from design through live deployment."
      challenge={[
        "Needed a professional, credible web presence to represent buying house operations to potential partners and clients.",
      ]}
      strategy={[
        {
          title: "End-to-End WordPress Build",
          description:
            "Designed and built the complete site in WordPress and deployed it live, giving the business a professional online presence.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/wordpress-buying-house.webp", caption: "Buying House — WordPress website" },
      ]}
      results={[
        "A live, professional website representing the client's business.",
      ]}
      finalMetrics={[
        { value: "WordPress", label: "Platform" },
        { value: "Complete Build", label: "Design to Deploy" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
