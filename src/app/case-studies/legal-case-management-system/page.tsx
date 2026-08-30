import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Odoo Development Case Study: Legal Case Management System",
  description:
    "How RankNex AI built a custom Odoo module for a law firm to track FIR numbers, case files, hearing dates, and jurisdiction with a full status pipeline.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/legal-case-management-system",
  },
  openGraph: {
    title: "Odoo Development Case Study: Legal Case Management System | RankNex AI",
    description:
      "A custom Odoo module replacing spreadsheet-based case tracking with structured records, jurisdiction fields, and reviewer assignment.",
    url: "https://www.ranknexai.com/case-studies/legal-case-management-system",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Odoo ERP Development"
      title="A Custom Odoo Module for Legal Case Management"
      clientLine="Law firm — case tracking, jurisdiction management, and review workflow"
      heroMetrics={[
        { value: "15+", label: "Custom Fields" },
        { value: "2", label: "Status States", sublabel: "Pending → Finish" },
        { value: "District & City", label: "Jurisdiction Tracking" },
      ]}
      overview="A law firm was tracking FIR numbers, case files, hearing dates, involved parties, and assigned staff across spreadsheets — a setup that couldn't scale once cases needed to be filtered by district, city, and review status. We built a custom Odoo module ('Matters') that brought all of this into one structured, searchable system."
      challenge={[
        "Case data (FIR numbers, petitioners, respondents, hearing dates, file numbers) was scattered across spreadsheets with no consistent structure.",
        "No way to filter or report on cases by district, city, or review status.",
        "Reviewer assignment and case status tracking were entirely manual.",
      ]}
      strategy={[
        {
          title: "Custom Odoo Module",
          description:
            "Built a dedicated 'Matters' module inside Odoo with structured fields for FIR number, year, file number, case number, institution, petitioner, respondent, and further articles.",
        },
        {
          title: "Jurisdiction & Status Pipeline",
          description:
            "Added district and city-level filtering alongside a clear status pipeline (Pending → Finish), so cases can be tracked from open to resolved.",
        },
        {
          title: "Reviewer Assignment",
          description:
            "Added assign-to and reviewed-by fields so case ownership and review responsibility are tracked directly on each record.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/odoo-legal-case-management-system.webp", caption: "Matters module — searchable, filterable case list with district, city, and status tracking" },
      ]}
      results={[
        "Replaced spreadsheet-based case tracking with a structured, searchable Odoo module.",
        "Cases can now be filtered by status, district, and city in a few clicks.",
        "Reviewer assignment is tracked directly on each case record instead of over email or chat.",
      ]}
      finalMetrics={[
        { value: "15+", label: "Custom Fields" },
        { value: "Odoo", label: "Platform" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
