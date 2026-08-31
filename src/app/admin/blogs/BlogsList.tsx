"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit, Trash2, Plus, Search, ExternalLink, Loader2, Download, CheckCircle2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost, BlogCategory } from "@/types";
import { CASE_STUDY_BLOG_POSTS } from "@/data/caseStudyBlogPosts";

interface BlogsListProps {
  initialPosts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogsList({ initialPosts, categories }: BlogsListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState<{ added: number; skipped: number } | null>(null);

  const missingCaseStudyPosts = CASE_STUDY_BLOG_POSTS.filter(
    (seed) => !posts.some((p) => p.slug === seed.slug)
  );

  const handleImportCaseStudyPosts = async () => {
    if (missingCaseStudyPosts.length === 0) return;
    setIsImporting(true);
    setImportResult(null);

    let added = 0;
    let skipped = 0;
    const createdPosts: BlogPost[] = [];

    for (const seed of missingCaseStudyPosts) {
      const category = categories.find((c) => c.slug === seed.categorySlug);
      try {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: seed.title,
            slug: seed.slug,
            excerpt: seed.excerpt,
            content: seed.content,
            categoryId: category?.id,
            tags: seed.tags,
            metaTitle: seed.metaTitle,
            metaDescription: seed.metaDescription,
            status: "PUBLISHED",
          }),
        });

        if (res.ok) {
          const created = await res.json();
          createdPosts.push(created);
          added += 1;
        } else {
          skipped += 1;
        }
      } catch {
        skipped += 1;
      }
    }

    if (createdPosts.length > 0) {
      setPosts((prev) => [...createdPosts, ...prev]);
    }
    setImportResult({ added, skipped });
    setIsImporting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete blog post.");
      }
    } catch {
      alert("Network error. Failed to delete blog post.");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || post.categoryId === categoryFilter;
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-navy-950">Manage Blog Posts</h1>
          <p className="text-slate-500 text-sm mt-1">Create, edit, publish, and delete blog articles.</p>
        </div>
        <div className="flex items-center gap-3">
          {missingCaseStudyPosts.length > 0 && (
            <button
              onClick={handleImportCaseStudyPosts}
              disabled={isImporting}
              className="py-2.5 px-4 text-xs font-bold inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-navy-950 rounded-xl transition-all cursor-pointer shadow-2xs disabled:opacity-50"
            >
              {isImporting ? (
                <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
              ) : (
                <Download className="w-4 h-4 text-teal-600" />
              )}
              <span>
                {isImporting
                  ? "Importing..."
                  : `Import ${missingCaseStudyPosts.length} Case Study ${missingCaseStudyPosts.length === 1 ? "Post" : "Posts"}`}
              </span>
            </button>
          )}
          <Link href="/admin/blogs/new" className="btn-primary py-2.5 px-5 text-sm inline-flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>New Blog Post</span>
          </Link>
        </div>
      </div>

      {importResult && (
        <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm px-4 py-3 rounded-xl">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-teal-600" />
          <span>
            Imported {importResult.added} blog {importResult.added === 1 ? "post" : "posts"}, published live.
            {importResult.skipped > 0 && ` ${importResult.skipped} skipped (already existed or failed).`}
          </span>
        </div>
      )}

      {/* Filters bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-xs">
        {/* Search */}
        <div className="md:col-span-6 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Category */}
        <div className="md:col-span-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-navy-950 text-sm focus:bg-white focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div className="md:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-navy-950 text-sm focus:bg-white focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Title */}
                    <td className="py-4 px-6 max-w-xs sm:max-w-sm lg:max-w-md">
                      <div className="font-bold text-navy-950 line-clamp-1">{post.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{post.excerpt}</div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6 font-medium text-slate-600">{post.category?.name || "Uncategorized"}</td>

                    {/* Status */}
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          post.status === "PUBLISHED"
                            ? "bg-teal-50 text-teal-700 border border-teal-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {post.status.toLowerCase()}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-6 text-xs text-slate-500">
                      {formatDate(post.publishedAt || post.createdAt)}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right space-x-1.5 whitespace-nowrap">
                      {post.status === "PUBLISHED" && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="inline-flex p-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 border border-slate-200 rounded-xl transition-all shadow-2xs"
                          title="View Live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                      <Link
                        href={`/admin/blogs/${post.id}/edit`}
                        className="inline-flex p-2 text-slate-500 hover:text-navy-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-2xs"
                        title="Edit Post"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        disabled={deletingId === post.id}
                        className="inline-flex p-2 text-slate-500 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl transition-all cursor-pointer disabled:opacity-40 shadow-2xs"
                        title="Delete Post"
                      >
                        {deletingId === post.id ? (
                          <Loader2 className="w-4 h-4 animate-spin text-rose-500" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    No blog posts match your filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
