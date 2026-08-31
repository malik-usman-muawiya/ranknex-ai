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

      // Tier 1: Try Vercel Blob if token is configured in environment
      const blobToken =
        process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB2_READ_WRITE_TOKEN;

      if (blobToken) {
        try {
          const { put } = await import("@vercel/blob");
          const blob = await put(filename, file, {
            access: "public",
            token: blobToken,
          });
          return NextResponse.json({ url: blob.url });
        } catch (blobErr) {
          console.warn("Vercel blob upload failed, falling back:", blobErr);
        }
      }

      // Tier 2: Try writing to local filesystem (works on localhost, VPS, Docker)
      try {
        const uploadsDir = path.join(process.cwd(), "public", "uploads");
        await mkdir(uploadsDir, { recursive: true });

        const filePath = path.join(uploadsDir, filename);
        await writeFile(filePath, buffer);

        const publicUrl = `/uploads/${filename}`;
        return NextResponse.json({ url: publicUrl });
      } catch (fsErr) {
        // Tier 3: If filesystem is read-only (e.g. Vercel Serverless EROFS) and no Blob token
        console.warn("Filesystem is read-only (EROFS), converting to base64 data URI:", fsErr);
        const base64Data = buffer.toString("base64");
        const dataUri = `data:${file.type};base64,${base64Data}`;
        return NextResponse.json({ url: dataUri });
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
