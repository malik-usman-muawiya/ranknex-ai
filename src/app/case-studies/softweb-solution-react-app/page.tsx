import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "React Development Case Study: Softweb Solution Marketing Site",
  description:
    "How RankNex AI built a custom React front-end from the ground up for Softweb's growth-services marketing site.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/softweb-solution-react-app",
  },
  openGraph: {
    title: "React Development Case Study: Softweb Solution | RankNex AI",
    description:
      "A fully custom, production-deployed React marketing website, built from scratch rather than a template.",
    url: "https://www.ranknexai.com/case-studies/softweb-solution-react-app",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="React Development"
      title="A Custom React Marketing Site, Built From Scratch"
      clientLine="Softweb — growth-services marketing website"
      heroMetrics={[
        { value: "React", label: "Framework" },
        { value: "Custom", label: "Built From Scratch" },
        { value: "Live", label: "Status" },
      ]}
      overview="The agency needed a modern, fast marketing website built as a custom application, not a page-builder template. We built a custom React front-end from the ground up for Softweb's growth-services marketing site."
      challenge={[
        "Needed a fast, modern site that stood apart from typical page-builder templates.",
        "Wanted a codebase that could be extended and maintained as a real application, not a static build.",
      ]}
      strategy={[
        {
          title: "Custom React Front-End",
          description:
            "Built the entire site as a custom React application, giving full control over performance, structure, and future feature additions.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/react-softweb-solution.webp", caption: "Softweb Solution — custom React marketing site" },
      ]}
      results={[
        "A fully custom, production-deployed marketing website live for the client.",
        "A maintainable React codebase the client can extend going forward.",
      ]}
      finalMetrics={[
        { value: "React", label: "Stack" },
        { value: "Custom Build", label: "Not a Template" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
