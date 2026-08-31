"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import ImageUploader from "@/components/admin/ImageUploader";
import { slugify } from "@/lib/utils";
import type { CaseStudy } from "@/types";

interface CaseStudyEditorProps {
  initialData?: CaseStudy;
  mode: "create" | "edit";
}

interface CaseStudyFormInput {
  title: string;
  slug: string;
  clientIndustry: string;
  metrics: string;
  challenge: string;
  strategy: string;
  results: string;
  featured: boolean;
  published: boolean;
}

export default function CaseStudyEditor({ initialData, mode }: CaseStudyEditorProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || "");
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CaseStudyFormInput>({
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      clientIndustry: initialData?.clientIndustry || "",
      metrics: initialData?.metrics || "",
      challenge: initialData?.challenge || "",
      strategy: initialData?.strategy || "",
      results: initialData?.results || "",
      featured: initialData?.featured || false,
      published: initialData?.published || false,
    },
  });

  const titleVal = watch("title");

  // Auto-generate slug from title
  useEffect(() => {
    if (mode === "create" && titleVal) {
      setValue("slug", slugify(titleVal));
    }
  }, [titleVal, mode, setValue]);

  const onSubmit = async (data: CaseStudyFormInput) => {
    setIsSaving(true);
    setSubmitError("");

    const payload = {
      ...data,
      coverImage,
    };

    try {
      const url = mode === "create" ? "/api/case-studies" : `/api/case-studies/${initialData?.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();

      if (res.ok) {
        router.push("/admin/case-studies");
        router.refresh();
      } else {
        setSubmitError(resData.error || "Failed to save case study.");
      }
    } catch {
      setSubmitError("Network error. Failed to save case study.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/case-studies"
            className="p-2 text-slate-500 hover:text-navy-950 bg-white hover:bg-slate-50 rounded-xl transition-all border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold font-heading text-navy-950">
              {mode === "create" ? "New Case Study" : "Edit Case Study"}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {mode === "create" ? "Publish a new client success story." : "Refine your existing success story details."}
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="btn-primary py-2.5 px-6 text-sm inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving Study...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Case Study</span>
            </>
          )}
        </button>
      </div>

      {submitError && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-sm font-medium">
          {submitError}
        </div>
      )}

      {/* Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xs">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-navy-950 mb-2">
                Case Study Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.title ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="E-Commerce Brand Grows Organic Revenue by 185%"
              />
              {errors.title && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.title.message}</p>}
            </div>

            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-semibold text-navy-950 mb-2">
                URL Slug <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="slug"
                {...register("slug", { required: "Slug is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.slug ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="ecommerce-revenue-growth"
              />
              {errors.slug && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.slug.message}</p>}
            </div>

            {/* Challenge */}
            <div>
              <label htmlFor="challenge" className="block text-sm font-semibold text-navy-950 mb-2">
                The Challenge <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="challenge"
                rows={4}
                {...register("challenge", { required: "Challenge description is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.challenge ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="What was the client's starting situation? Detail their organic bottleneck, keyword stagnation, high CPC, or design issues..."
              ></textarea>
              {errors.challenge && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.challenge.message}</p>}
            </div>

            {/* Strategy */}
            <div>
              <label htmlFor="strategy" className="block text-sm font-semibold text-navy-950 mb-2">
                Our Strategy <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="strategy"
                rows={4}
                {...register("strategy", { required: "Strategy description is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.strategy ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="Describe our AI-powered solution. What keywords did we map? What content clusters did we deploy? What bidding optimizations did we launch?"
              ></textarea>
              {errors.strategy && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.strategy.message}</p>}
            </div>

            {/* Results */}
            <div>
              <label htmlFor="results" className="block text-sm font-semibold text-navy-950 mb-2">
                The Results <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="results"
                rows={4}
                {...register("results", { required: "Results description is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.results ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="Detail the metrics and business impact. Quote specific revenue growth and rank increases..."
              ></textarea>
              {errors.results && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.results.message}</p>}
            </div>
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-6 shadow-xs">
            {/* Status (Publish / Draft toggle) */}
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-sm font-semibold text-navy-950">Publish Success Story</span>
              <input
                type="checkbox"
                id="published"
                {...register("published")}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500/20 rounded border-slate-300 bg-white accent-teal-600 cursor-pointer"
              />
            </div>

            {/* Featured study toggle */}
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-sm font-semibold text-navy-950">Feature on Homepage</span>
              <input
                type="checkbox"
                id="featured"
                {...register("featured")}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500/20 rounded border-slate-300 bg-white accent-teal-600 cursor-pointer"
              />
            </div>

            {/* Client Industry */}
            <div>
              <label htmlFor="clientIndustry" className="block text-sm font-semibold text-navy-950 mb-2">
                Client Industry <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="clientIndustry"
                {...register("clientIndustry", { required: "Industry is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.clientIndustry ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="E-Commerce, Technology, Healthcare"
              />
              {errors.clientIndustry && (
                <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.clientIndustry.message}</p>
              )}
            </div>

            {/* Metrics */}
            <div>
              <label htmlFor="metrics" className="block text-sm font-semibold text-navy-950 mb-2">
                Metrics Highlights <span className="text-slate-400 font-normal">(comma separated)</span>
              </label>
              <input
                type="text"
                id="metrics"
                {...register("metrics")}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-teal-500"
                placeholder="Organic Traffic: +320%, ROAS: 4.5x, CPA: -52%"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Format: <strong>Label: Value</strong> separated by commas.
              </span>
            </div>

            {/* Image Uploader */}
            <ImageUploader
              label="Cover Image"
              initialImageUrl={coverImage}
              onUploadSuccess={setCoverImage}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
