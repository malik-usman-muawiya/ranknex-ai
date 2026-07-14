import { NextRequest, NextResponse } from "next/server";
import { RANKNEX_SYSTEM_PROMPT } from "@/lib/chatbotKnowledge";
import prisma from "@/lib/db";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat is not configured yet." },
        { status: 500 }
      );
    }

    // Pull admin-managed Q&A from the database and fold it into the system
    // prompt, so new questions/answers added in the CMS take effect
    // immediately without any code change or redeploy.
    let knowledgeBase = RANKNEX_SYSTEM_PROMPT;
    try {
      const faqs = await prisma.chatbotFAQ.findMany({
        where: { active: true },
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      });

      if (faqs.length > 0) {
        const faqText = faqs
          .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
          .join("\n\n");
        knowledgeBase += `\n\nADDITIONAL KNOWN QUESTIONS & ANSWERS (use these verbatim when the visitor's question matches one of these, otherwise answer from the facts above):\n\n${faqText}`;
      }
    } catch (dbError) {
      // If the DB is unreachable, fall back to the static prompt rather
      // than failing the whole chat request.
      console.error("Error loading chatbot FAQs from DB:", dbError);
    }

    // Convert our simple message format to Gemini's format
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: knowledgeBase }] },
          contents,
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 300,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      return NextResponse.json(
        { error: "Failed to get a response. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't generate a response. Please try again or contact us directly.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
