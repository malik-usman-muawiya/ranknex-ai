import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const faq = await prisma.chatbotFAQ.findUnique({ where: { id } });
    if (!faq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json(faq);
  } catch (error) {
    console.error("Error fetching chatbot FAQ:", error);
    return NextResponse.json(
      { error: "Failed to fetch chatbot FAQ" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { question, answer, order, active } = body;

    const existing = await prisma.chatbotFAQ.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    const faq = await prisma.chatbotFAQ.update({
      where: { id },
      data: {
        ...(question !== undefined && { question }),
        ...(answer !== undefined && { answer }),
        ...(order !== undefined && { order }),
        ...(active !== undefined && { active }),
      },
    });

    return NextResponse.json(faq);
  } catch (error) {
    console.error("Error updating chatbot FAQ:", error);
    return NextResponse.json(
      { error: "Failed to update chatbot FAQ" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const existing = await prisma.chatbotFAQ.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    await prisma.chatbotFAQ.delete({ where: { id } });

    return NextResponse.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting chatbot FAQ:", error);
    return NextResponse.json(
      { error: "Failed to delete chatbot FAQ" },
      { status: 500 }
    );
  }
}
