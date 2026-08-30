import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";

// TEMPORARY — password recovery for when /admin login is locked out and
// there's no way to reset it from the UI. Protected by RECOVERY_TOKEN below.
// Remove this route once the admin login is confirmed working again.
const RECOVERY_TOKEN = "osGp8Ggm-k_n_DiXjRvZzofPVTzNaHM0";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const newPassword = searchParams.get("newPassword");

  if (token !== RECOVERY_TOKEN) {
    return NextResponse.json({ error: "Invalid or missing token" }, { status: 401 });
  }

  if (!newPassword || newPassword.length < 8) {
    return NextResponse.json(
      { error: "newPassword query param is required and must be at least 8 characters" },
      { status: 400 }
    );
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const admin = await prisma.adminUser.upsert({
      where: { username: "admin" },
      update: { password: hashedPassword },
      create: {
        username: "admin",
        email: "admin@ranknexai.com",
        password: hashedPassword,
        name: "RankNex Admin",
      },
    });

    return NextResponse.json({
      success: true,
      message: `Password reset for username "${admin.username}". You can now log in at /admin/login.`,
    });
  } catch (error) {
    console.error("Admin recovery error:", error);
    return NextResponse.json({ error: "Failed to reset password" }, { status: 500 });
  }
}
