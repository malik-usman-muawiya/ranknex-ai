"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    // Vercel Blob's client SDK gives no built-in timeout — if the storage
    // token is missing/misconfigured server-side, the request can hang
    // indefinitely instead of failing fast. This makes sure the user sees
    // an actual error instead of a spinner that never resolves.
    const timeoutMs = 30000;
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Upload timed out. Check that image storage is configured correctly.")), timeoutMs)
    );

    try {
      const blob = await Promise.race([
        upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
        }),
        timeout,
      ]);

      setImageUrl(blob.url);
      onUploadSuccess(blob.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    setImageUrl("");
    onUploadSuccess("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-300">{label}</label>

      {imageUrl ? (
        /* Image Preview State */
        <div className="relative w-full h-48 rounded-xl border border-white/10 bg-navy-950 overflow-hidden group">
          <Image
            src={imageUrl}
            alt="Upload Preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <button
              onClick={handleRemove}
              className="p-2 bg-red-500 hover:bg-red-650 text-white rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Upload Action State */
        <button
          onClick={triggerFileInput}
          disabled={isUploading}
          className={`w-full h-48 rounded-xl border border-dashed flex flex-col items-center justify-center p-6 bg-navy-950 hover:bg-navy-900/50 transition-all cursor-pointer ${
            error ? "border-red-500/40 hover:border-red-500/60" : "border-white/15 hover:border-teal-500/50"
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
              <span className="text-sm">Uploading file...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-slate-300">
                <Upload className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-white">Click to upload image</span>
              <span className="text-xs text-slate-500">Supports JPEG, PNG, WebP, SVG, AVIF (Max 10MB)</span>
            </div>
          )}
        </button>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

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
