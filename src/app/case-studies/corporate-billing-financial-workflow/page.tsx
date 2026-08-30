import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Odoo Development Case Study: Corporate Billing & Financial Workflow",
  description:
    "How RankNex AI customized Odoo's Invoicing and Sales apps into a unified corporate billing workflow inside the client's existing ERP instance.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/corporate-billing-financial-workflow",
  },
  openGraph: {
    title: "Odoo Development Case Study: Corporate Billing & Financial Workflow | RankNex AI",
    description:
      "Streamlined billing and financial workflow inside one ERP platform, removing the need to reconcile data between separate systems.",
    url: "https://www.ranknexai.com/case-studies/corporate-billing-financial-workflow",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Odoo ERP Development"
      title="Corporate Billing & Financial Workflow, Unified Inside Odoo"
      clientLine="Growing business — billing, invoicing, and financial workflow customization"
      heroMetrics={[
        { value: "1", label: "Unified Platform" },
        { value: "Odoo", label: "Invoicing + Sales" },
        { value: "Live", label: "Status" },
      ]}
      overview="A growing business needed billing and invoicing tied directly into its broader operations instead of running on a disconnected accounting tool. We customized Odoo's Invoicing and Sales apps into a unified billing workflow inside the same ERP instance already used for CRM and project tracking."
      challenge={[
        "Billing and invoicing ran on a separate tool, disconnected from CRM and project data.",
        "Reconciling billing records with sales and project activity required manual cross-referencing.",
      ]}
      strategy={[
        {
          title: "Invoicing & Sales Customization",
          description:
            "Customized Odoo's built-in Invoicing and Sales apps to match the client's specific billing workflow and approval process.",
        },
        {
          title: "Single Source of Truth",
          description:
            "Connected billing directly to the same ERP instance used for CRM and project tracking, so financial data stays in sync with the rest of the business.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/odoo-erp-suite-overview.webp", caption: "Odoo ERP suite — Invoicing and Sales apps customized into the client's billing workflow" },
      ]}
      results={[
        "Streamlined billing and financial workflow inside one platform.",
        "Removed the need to reconcile data between separate accounting and CRM systems.",
      ]}
      finalMetrics={[
        { value: "Odoo", label: "Platform" },
        { value: "Unified", label: "Billing Workflow" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
