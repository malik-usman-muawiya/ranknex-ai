import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    const where = session ? {} : { active: true };

    const faqs = await prisma.chatbotFAQ.findMany({
      where,
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Error fetching chatbot FAQs:", error);
    return NextResponse.json(
      { error: "Failed to fetch chatbot FAQs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { question, answer, order, active } = body;

    if (!question || !answer) {
      return NextResponse.json(
        { error: "Question and answer are required" },
        { status: 400 }
      );
    }

    const faq = await prisma.chatbotFAQ.create({
      data: {
        question,
        answer,
        order: typeof order === "number" ? order : 0,
        active: active ?? true,
      },
    });

    return NextResponse.json(faq, { status: 201 });
  } catch (error) {
    console.error("Error creating chatbot FAQ:", error);
    return NextResponse.json(
      { error: "Failed to create chatbot FAQ" },
      { status: 500 }
    );
  }
}
