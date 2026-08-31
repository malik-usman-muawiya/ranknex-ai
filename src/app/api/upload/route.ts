import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentType = request.headers.get("content-type") || "";

    // Handle Multipart Form Data (Direct file upload)
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
      }

      // Validate image type
      if (!file.type.startsWith("image/")) {
        return NextResponse.json(
          { error: "Invalid file type. Only images are allowed." },
          { status: 400 }
        );
      }

      // Max size: 15MB
      if (file.size > 15 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File size exceeds 15MB limit" },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create sanitized filename with timestamp
      const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
      const filename = `${Date.now()}-${originalName}`;

      // Target uploads directory in public/uploads
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadsDir, { recursive: true });

      const filePath = path.join(uploadsDir, filename);
      await writeFile(filePath, buffer);

      const publicUrl = `/uploads/${filename}`;
      return NextResponse.json({ url: publicUrl });
    }

    // Handle Vercel Blob JSON payload if present
    if (contentType.includes("application/json")) {
      const body = await request.json();
      
      // If Vercel Blob client handler is used and token exists
      if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB2_READ_WRITE_TOKEN) {
        const { handleUpload } = await import("@vercel/blob/client");
        const jsonResponse = await handleUpload({
          body,
          request,
          token: process.env.BLOB2_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN,
          onBeforeGenerateToken: async () => ({
            allowedContentTypes: ["image/*"],
            maximumSizeInBytes: 15 * 1024 * 1024,
            addRandomSuffix: true,
            tokenPayload: JSON.stringify({}),
          }),
          onUploadCompleted: async () => {},
        });
        return NextResponse.json(jsonResponse);
      }
    }

    return NextResponse.json(
      { error: "Unsupported upload format. Use multipart/form-data." },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error in upload API:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to upload file" },
      { status: 500 }
    );
  }
}
