import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Odoo Development Case Study: CFMS Intellectual Property Management System",
  description:
    "How RankNex AI built a Case File Management System (CFMS) inside Odoo to track Trademark, Patent, Copyright, and Design cases with a full audit trail.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/cfms-intellectual-property-management",
  },
  openGraph: {
    title: "Odoo Development Case Study: CFMS — Intellectual Property Management | RankNex AI",
    description:
      "A unified Odoo module replacing scattered spreadsheets across four IP categories, with a built-in audit trail.",
    url: "https://www.ranknexai.com/case-studies/cfms-intellectual-property-management",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Odoo ERP Development"
      title="CFMS: A Unified Intellectual Property Case Management System"
      clientLine="IP consultancy — Trademark, Patent, Copyright & Design case tracking"
      heroMetrics={[
        { value: "4", label: "IP Categories" },
        { value: "1", label: "Unified System" },
        { value: "Global", label: "Audit Logbook" },
      ]}
      overview="An IP consultancy needed to track Trademark, Patent, Copyright, and Design cases separately, each with its own workflow, case count, and audit requirements. We built CFMS (Case File Management System) — a dedicated Odoo module bringing all four case types into one platform with proper user management and audit logging."
      challenge={[
        "Trademark, Patent, Copyright, and Design cases were tracked in separate, disconnected spreadsheets.",
        "No consistent way to see case counts or status across all four IP categories at once.",
        "No audit trail for changes made to case records.",
      ]}
      strategy={[
        {
          title: "Dedicated CFMS Module",
          description:
            "Built a purpose-made Odoo module with four case-type categories (Trademark, Patent, Copyright, Design), each tracked as its own project pipeline.",
        },
        {
          title: "User Management",
          description:
            "Added structured user management so access and responsibility for each case type is clearly defined.",
        },
        {
          title: "Global Logbook",
          description:
            "Added a global logbook feature to keep an audit trail of activity across the whole system, not just individual cases.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/odoo-cfms-ip-management-system.webp", caption: "CFMS dashboard — Trademark, Patent, Copyright, and Design tracked as separate pipelines" },
      ]}
      results={[
        "One unified system replacing scattered spreadsheets across all four IP categories.",
        "Case counts and status are now visible across all categories from a single dashboard.",
        "A global logbook gives the team an audit trail that didn't exist before.",
      ]}
      finalMetrics={[
        { value: "4", label: "IP Categories" },
        { value: "Odoo", label: "Platform" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
