import { Metadata } from "next";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Pakistan | RankNex AI",
  description: "RankNex AI is a social media marketing agency in Pakistan offering custom SMM services for UK, US, and Pakistani brands to drive engagement and leads.",
  keywords: [
    "social media marketing agency in pakistan",
    "smm agency lahore",
    "social media management uk",
    "social media agency pakistan",
    "instagram marketing services",
    "facebook advertising agency"
  ],
  alternates: {
    canonical: "https://www.ranknexai.com/services/social-media",
  },
  openGraph: {
    title: "Social Media Marketing (SMM) Services | RankNex AI",
    description: "RankNex AI delivers results-driven social media management and advertising for global brands. Accelerate your social growth.",
    url: "https://www.ranknexai.com/services/social-media",
    siteName: "RankNex AI",
    locale: "en_US",
    type: "website",
  },
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
