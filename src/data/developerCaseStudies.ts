// Structured seed data for the 9 developer case studies (Odoo ERP, React,
// and WordPress projects). Used by the "Import Developer Case Studies"
// button in /admin/case-studies — each entry is POSTed to /api/case-studies
// from the browser (using the logged-in admin session) when clicked, since
// that API requires an authenticated session and can't be called from
// outside the app.
//
// clientIndustry values are load-bearing: the public Case Studies page
// buckets any entry tagged exactly "Odoo ERP Development", "React
// Development", or "WordPress Development" under the "Developer Case
// Studies" card — everything else counts as "SEO". Keep these exact.

export interface DeveloperCaseStudySeed {
  title: string;
  clientIndustry: string;
  challenge: string;
  strategy: string;
  results: string;
  metrics?: string;
  coverImage: string;
  featured?: boolean;
}

export const DEVELOPER_CASE_STUDIES: DeveloperCaseStudySeed[] = [
  {
    title: "Legal Case Management System",
    clientIndustry: "Odoo ERP Development",
    challenge:
      "A law firm was tracking FIR numbers, case files, hearing dates, involved parties, and assigned staff across spreadsheets — a setup that couldn't scale once cases needed to be filtered by district, city, and review status.",
    strategy:
      "Built a custom Odoo module (\"Matters\") with structured case records, jurisdiction fields (district/city), a status pipeline (Pending to Finish), reviewer assignment, and full search and filter support.",
    results:
      "Delivered a searchable, filterable case management system with role-based reviewer assignment, replacing manual spreadsheet tracking entirely.",
    metrics: "Custom Fields: 15+, Status Pipeline: Pending to Finish, Tracking: District & City level",
    coverImage: "/case-studies/developer/odoo-legal-case-management-system.webp",
    featured: true,
  },
  {
    title: "CFMS — Intellectual Property Management System",
    clientIndustry: "Odoo ERP Development",
    challenge:
      "An IP consultancy needed to track Trademark, Patent, Copyright, and Design cases separately, each with its own workflow, case count, and audit requirements.",
    strategy:
      "Built a dedicated CFMS (Case File Management System) module inside Odoo with four case-type categories, an Applications menu, User Management, and a Global Logbook for audit tracking.",
    results:
      "One unified system replacing scattered spreadsheets across all four IP categories, with a built-in audit trail.",
    metrics: "IP Categories: 4, Modules: Trademark, Patent, Copyright, Design, Audit Trail: Global Logbook",
    coverImage: "/case-studies/developer/odoo-cfms-ip-management-system.webp",
  },
  {
    title: "Corporate Billing & Financial Workflow Solution",
    clientIndustry: "Odoo ERP Development",
    challenge:
      "A growing business needed billing and invoicing tied directly into its broader operations instead of running on a disconnected accounting tool.",
    strategy:
      "Customized Odoo's Invoicing and Sales apps into a unified billing workflow inside the same ERP instance used for CRM and project tracking.",
    results:
      "Streamlined billing and financial workflow inside one platform, removing the need to reconcile data between separate systems.",
    coverImage: "/case-studies/developer/odoo-erp-suite-overview.webp",
  },
  {
    title: "HR & Payroll Management Customization",
    clientIndustry: "Odoo ERP Development",
    challenge:
      "Manual payroll processing and scattered employee records were creating overhead as the team grew.",
    strategy:
      "Customized Odoo's Employees and Recruitment modules to centralize payroll and HR data inside the client's existing ERP instance.",
    results:
      "Centralized HR and payroll records in one system, cutting manual data entry across departments.",
    coverImage: "/case-studies/developer/odoo-erp-suite-overview.webp",
  },
  {
    title: "Demarcation Management Module",
    clientIndustry: "Odoo ERP Development",
    challenge:
      "The client needed to track land/property demarcation cases and boundary records inside their existing business system rather than on paper.",
    strategy:
      "Built a custom Odoo module purpose-built for demarcation case tracking, integrated into the client's existing instance.",
    results:
      "A purpose-built module that brought demarcation case tracking into the same system as the rest of the client's operations.",
    coverImage: "/case-studies/developer/odoo-erp-suite-overview.webp",
  },
  {
    title: "Softweb Solution",
    clientIndustry: "React Development",
    challenge:
      "The agency needed a modern, fast marketing website built as a custom application — not a page-builder template.",
    strategy:
      "Built a custom React front-end from the ground up for Softweb's growth-services marketing site.",
    results:
      "A fully custom, production-deployed marketing website live for the client.",
    coverImage: "/case-studies/developer/react-softweb-solution.webp",
  },
  {
    title: "Affiliate Plus",
    clientIndustry: "React Development",
    challenge:
      "Needed a full affiliate marketplace connecting publishers with affiliate programs across many categories and ad networks — browsable, filterable, and built to scale.",
    strategy:
      "Built a full-stack React affiliate platform (AFFILIATE.Plus) with program browsing, category filters, a network directory, and promo listings.",
    results:
      "A live directory covering hundreds of affiliate programs across dozens of categories and multiple ad networks.",
    metrics: "Affiliate Programs: 900+, Categories: 40+, Ad Networks: Multiple",
    coverImage: "/case-studies/developer/react-affiliate-plus.webp",
    featured: true,
  },
  {
    title: "SoftSavvy",
    clientIndustry: "WordPress Development",
    challenge:
      "An IT solutions company needed a professional website covering services, industries served, and careers — built to convert visitors into leads.",
    strategy:
      "Built a complete WordPress website end-to-end, from design to live deployment.",
    results:
      "A live, professional company website representing SoftSavvy's full service offering.",
    coverImage: "/case-studies/developer/wordpress-softsavvy.webp",
  },
  {
    title: "Buying House",
    clientIndustry: "WordPress Development",
    challenge:
      "The client needed a professional web presence to represent their buying house operations online.",
    strategy:
      "Built a complete WordPress website from design through live deployment.",
    results:
      "A live, professional website representing the client's business.",
    coverImage: "/case-studies/developer/wordpress-buying-house.webp",
  },
];
