import { Metadata } from "next";
import ContactContent from "./ContactContent";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact RankNex AI | Get a Free SEO & PPC Site Audit",
  description: "Contact RankNex AI, a digital marketing and SEO agency serving UK, US, and Pakistani businesses. Request a free audit or discuss your growth goals today.",
  keywords: [
    "contact ranknex ai",
    "hire seo agency pakistan",
    "digital marketing agency contact",
    "seo company lahore contact",
    "hire digital marketing agency",
    "free website seo audit"
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/contact",
  },
  openGraph: {
    title: "Contact RankNex AI | Digital Marketing Partner",
    description: "Ready to scale your business online? Send us a message or chat on WhatsApp. Get a response from our growth consultant within 24 hours.",
    url: "https://www.ranknexai.com/contact",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactContent />
    </>
  );
}
