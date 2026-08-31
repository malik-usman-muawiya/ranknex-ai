import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import BlogEditor from "@/components/admin/BlogEditor";
import type { BlogCategory } from "@/types";

export const metadata: Metadata = {
  title: "New Blog Post | RankNex Admin",
};

const DEFAULT_CATEGORIES: BlogCategory[] = [
  { id: "cat-1", name: "SEO", slug: "seo" },
  { id: "cat-2", name: "PPC", slug: "ppc" },
  { id: "cat-3", name: "Social Media", slug: "social-media" },
  { id: "cat-4", name: "Content Marketing", slug: "content-marketing" },
  { id: "cat-5", name: "Web Design", slug: "web-design" },
  { id: "cat-6", name: "AI & Automation", slug: "ai-automation" },
  { id: "cat-7", name: "Digital Marketing", slug: "digital-marketing" },
  { id: "cat-8", name: "Branding", slug: "branding" },
];

export default async function AdminNewBlogPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  let categories: BlogCategory[] = DEFAULT_CATEGORIES;

  try {
    const categoriesRaw = await prisma.blogCategory.findMany({
      orderBy: { name: "asc" },
    });

    if (categoriesRaw.length > 0) {
      categories = categoriesRaw.map((cat: BlogCategory) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
      }));
    }
  } catch (err) {
    console.warn("Database query notice in AdminNewBlogPage:", err);
  }

  return <BlogEditor categories={categories} mode="create" />;
}
