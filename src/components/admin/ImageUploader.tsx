"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X, Loader2, Link2, ImageIcon, Check } from "lucide-react";

interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  initialImageUrl?: string;
  label?: string;
}

export default function ImageUploader({
  onUploadSuccess,
  initialImageUrl = "",
  label = "Featured Image",
}: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [customUrl, setCustomUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.url) {
        setImageUrl(data.url);
        onUploadSuccess(data.url);
      } else {
        throw new Error(data.error || "Failed to upload image.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    setImageUrl(customUrl.trim());
    onUploadSuccess(customUrl.trim());
    setShowUrlInput(false);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    setImageUrl("");
    onUploadSuccess("");
    setCustomUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-semibold text-navy-950">{label}</label>
        {!imageUrl && (
          <button
            type="button"
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Link2 className="w-3 h-3" />
            <span>{showUrlInput ? "Upload File Instead" : "Paste Image URL"}</span>
          </button>
        )}
      </div>

      {imageUrl ? (
        /* Image Preview State */
        <div className="relative w-full h-48 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden group shadow-xs">
          <Image
            src={imageUrl}
            alt="Upload Preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={triggerFileInput}
              className="py-2 px-3 bg-white/90 hover:bg-white text-navy-950 text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Change</span>
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-md transition-all cursor-pointer"
              title="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : showUrlInput ? (
        /* Direct URL Input Mode */
        <div className="space-y-2 p-4 rounded-2xl border border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="https://example.com/image.jpg or /logo.png"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 bg-white border border-slate-200 rounded-xl py-2 px-3 text-navy-950 text-sm placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
            <button
              type="button"
              onClick={handleApplyCustomUrl}
              className="btn-primary py-2 px-4 text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-500">
            Paste a public image link or a path to a static image in the public folder.
          </p>
        </div>
      ) : (
        /* Upload Action State */
        <button
          type="button"
          onClick={triggerFileInput}
          disabled={isUploading}
          className={`w-full h-48 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 bg-cyan-50/40 hover:bg-cyan-50/80 transition-all cursor-pointer group ${
            error
              ? "border-rose-300 hover:border-rose-400"
              : "border-teal-500/30 hover:border-teal-500"
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center gap-2 text-slate-600">
              <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
              <span className="text-sm font-semibold">Uploading image...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-600">
              <div className="p-3 bg-white rounded-2xl border border-teal-500/20 text-teal-600 shadow-xs group-hover:scale-105 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-navy-950">Click to upload image</span>
              <span className="text-xs text-slate-500">
                JPEG, PNG, WebP, SVG, AVIF (Max 15MB)
              </span>
            </div>
          )}
        </button>
      )}

      {error && <p className="text-rose-500 text-xs mt-1 font-medium">{error}</p>}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
