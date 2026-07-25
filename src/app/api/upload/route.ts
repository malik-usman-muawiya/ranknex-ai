import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token: process.env.BLOB2_READ_WRITE_TOKEN,
      onBeforeGenerateToken: async () => {
        // Auth check happens before a client upload token is issued, so
        // unauthenticated requests never get a token, matching the old
        // behaviour where uploads required an admin session.
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error("Unauthorized");
        }

        return {
          // Wildcard: accept any image type (JPEG, PNG, GIF, WebP, SVG,
          // AVIF, HEIC, BMP, TIFF, ICO, etc.), not just a fixed whitelist.
          allowedContentTypes: ["image/*"],
          maximumSizeInBytes: 15 * 1024 * 1024, // 15MB
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async () => {
        // No DB record needed here — the caller stores the returned URL
        // directly on the blog post / case study record.
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Error handling blob upload:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to upload file" },
      { status: 400 }
    );
  }
}

