import { Metadata } from "next";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";

export const metadata: Metadata = {
  title: "Odoo Development Case Study: HR & Payroll Management Customization",
  description:
    "How RankNex AI customized Odoo's Employees and Recruitment modules to centralize HR and payroll data for a growing team.",
  alternates: {
    canonical: "https://www.ranknexai.com/case-studies/hr-payroll-management-customization",
  },
  openGraph: {
    title: "Odoo Development Case Study: HR & Payroll Management Customization | RankNex AI",
    description:
      "Centralized HR and payroll records in one system, cutting manual data entry across departments.",
    url: "https://www.ranknexai.com/case-studies/hr-payroll-management-customization",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return (
    <PortfolioCaseStudy
      tag="Odoo ERP Development"
      title="Centralizing HR & Payroll Data Inside Odoo"
      clientLine="Growing team — employee records, payroll, and recruitment customization"
      heroMetrics={[
        { value: "1", label: "Central HR System" },
        { value: "Odoo", label: "Employees + Recruitment" },
        { value: "Live", label: "Status" },
      ]}
      overview="Manual payroll processing and scattered employee records were creating overhead as the team grew. We customized Odoo's Employees and Recruitment modules to centralize payroll and HR data inside the client's existing ERP instance."
      challenge={[
        "Employee records and payroll data were tracked manually, with no central system.",
        "Recruitment and onboarding data lived separately from ongoing employee records.",
      ]}
      strategy={[
        {
          title: "Employees Module Customization",
          description:
            "Customized Odoo's Employees app to hold structured payroll and HR data specific to the client's needs.",
        },
        {
          title: "Recruitment Integration",
          description:
            "Connected the Recruitment module so candidate data flows naturally into employee records once hired.",
        },
      ]}
      gallery={[
        { src: "/case-studies/developer/odoo-erp-suite-overview.webp", caption: "Odoo ERP suite — Employees and Recruitment modules customized for HR & payroll tracking" },
      ]}
      results={[
        "Centralized HR and payroll records in one system.",
        "Cut manual data entry across departments by connecting recruitment and employee data.",
      ]}
      finalMetrics={[
        { value: "Odoo", label: "Platform" },
        { value: "Centralized", label: "HR & Payroll" },
        { value: "Live", label: "Status" },
      ]}
    />
  );
}
