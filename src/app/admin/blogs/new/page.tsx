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

export default async function AdminNewBlogPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  // Fetch categories for the editor dropdown
  const categoriesRaw = await prisma.blogCategory.findMany({
    orderBy: { name: "asc" },
  });

  const categories = categoriesRaw.map((cat: BlogCategory) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }));

  return <BlogEditor categories={categories} mode="create" />;
}
