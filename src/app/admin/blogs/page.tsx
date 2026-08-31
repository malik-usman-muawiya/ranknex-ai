import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import BlogsList from "./BlogsList";
import type { BlogPost, BlogCategory } from "@/types";

export const metadata: Metadata = {
  title: "Manage Blogs | RankNex Admin",
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

export default async function AdminBlogsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  let posts: BlogPost[] = [];
  let categories: BlogCategory[] = DEFAULT_CATEGORIES;

  try {
    const [postsRaw, categoriesRaw] = await Promise.all([
      prisma.blogPost.findMany({
        include: { category: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.blogCategory.findMany({
        orderBy: { name: "asc" },
      }),
    ]);

    posts = postsRaw.map((post: any) => ({
      ...post,
      publishedAt: post.publishedAt ? post.publishedAt.toISOString() : null,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    })) as unknown as BlogPost[];

    if (categoriesRaw.length > 0) {
      categories = categoriesRaw.map((cat: BlogCategory) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
      }));
    }
  } catch (err) {
    console.warn("Database query notice in AdminBlogsPage:", err);
  }

  return <BlogsList initialPosts={posts} categories={categories} />;
}
