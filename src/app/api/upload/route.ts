import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "image/avif",
];

export async function POST(request: NextRequest) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        // Auth check happens before a client upload token is issued, so
        // unauthenticated requests never get a token, matching the old
        // behaviour where uploads required an admin session.
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error("Unauthorized");
        }

        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: 10 * 1024 * 1024, // 10MB
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

