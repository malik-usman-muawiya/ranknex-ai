export type CaseStudyCategory = "SEO" | "Developer";

export interface CaseStudyHighlight {
  slug: string;
  tag: string;
  title: string;
  stat: string;
  image: string;
  category: CaseStudyCategory;
}

export const caseStudyHighlights: CaseStudyHighlight[] = [
  {
    slug: "flagship-98k-clicks-256k-revenue",
    tag: "Flagship Result",
    title: "98K Organic Clicks & $256K Monthly Revenue",
    stat: "+54.6% Revenue",
    image: "/case-studies/p7-6month.png",
    category: "SEO",
  },
  {
    slug: "organic-search-growth-16x-clicks",
    tag: "Organic SEO",
    title: "16x More Organic Clicks in 6 Months",
    stat: "Page 3 → Page 1",
    image: "/case-studies/p1-6month.png",
    category: "SEO",
  },
  {
    slug: "ecommerce-seo-74-percent-revenue-growth",
    tag: "E-Commerce SEO",
    title: "Orders Doubled, Revenue Up 74% in 1 Month",
    stat: "+74% Revenue",
    image: "/case-studies/p2-search-mobile.png",
    category: "SEO",
  },
  {
    slug: "local-seo-513-phone-calls",
    tag: "Local SEO",
    title: "513 Phone Calls from Google Business Profile",
    stat: "2,750 Interactions",
    image: "/case-studies/p6-3months.png",
    category: "SEO",
  },
  {
    slug: "uk-ecommerce-seo-order-growth",
    tag: "UK E-Commerce SEO",
    title: "27.6% More Orders for a UK Store",
    stat: "+27.6% Orders",
    image: "/case-studies/p4-store-overview.png",
    category: "SEO",
  },
  {
    slug: "legal-case-management-system",
    tag: "Odoo ERP Development",
    title: "Legal Case Management System Built on Odoo",
    stat: "15+ Custom Fields",
    image: "/case-studies/developer/odoo-legal-case-management-system.webp",
    category: "Developer",
  },
  {
    slug: "cfms-intellectual-property-management",
    tag: "Odoo ERP Development",
    title: "CFMS — Intellectual Property Management System",
    stat: "4 IP Categories",
    image: "/case-studies/developer/odoo-cfms-ip-management-system.webp",
    category: "Developer",
  },
  {
    slug: "corporate-billing-financial-workflow",
    tag: "Odoo ERP Development",
    title: "Corporate Billing & Financial Workflow Solution",
    stat: "Unified in ERP",
    image: "/case-studies/developer/odoo-erp-suite-overview.webp",
    category: "Developer",
  },
  {
    slug: "softweb-solution-react-app",
    tag: "React Development",
    title: "Softweb Solution — Custom Marketing Site",
    stat: "Live in Production",
    image: "/case-studies/developer/react-softweb-solution.webp",
    category: "Developer",
  },
  {
    slug: "affiliate-plus-marketplace",
    tag: "React Development",
    title: "Affiliate Plus — Full-Stack Affiliate Marketplace",
    stat: "900+ Programs Listed",
    image: "/case-studies/developer/react-affiliate-plus.webp",
    category: "Developer",
  },
  {
    slug: "softsavvy-wordpress-website",
    tag: "WordPress Development",
    title: "SoftSavvy — Complete IT Solutions Website",
    stat: "Live Company Site",
    image: "/case-studies/developer/wordpress-softsavvy.webp",
    category: "Developer",
  },
  {
    slug: "buying-house-wordpress-website",
    tag: "WordPress Development",
    title: "Buying House — Business Website",
    stat: "Live Company Site",
    image: "/case-studies/developer/wordpress-buying-house.webp",
    category: "Developer",
  },
];
