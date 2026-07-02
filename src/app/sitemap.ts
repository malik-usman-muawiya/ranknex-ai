import type { MetadataRoute } from "next";
import prisma from "@/lib/db";

const SITE_URL = "https://www.ranknexai.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/seo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/social-media`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/ppc-advertising`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/content-writing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/web-designing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/branding`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/uk`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Pull every published blog post live from the database so new posts
  // show up in the sitemap automatically, without a manual redeploy.
  const posts = await prisma.blogPost
    .findMany({
      where: { status: "PUBLISHED" },
      select: { slug: true, updatedAt: true },
      orderBy: { createdAt: "desc" },
    })
    .catch(() => []);

  const blogPages: MetadataRoute.Sitemap = posts.map((post: { slug: string; updatedAt: Date }) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
