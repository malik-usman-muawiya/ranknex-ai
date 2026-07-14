import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import ChatbotFAQList from "./ChatbotFAQList";

export const metadata: Metadata = {
  title: "Manage Chatbot Q&A | RankNex Admin",
};

export default async function AdminChatbotPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const faqsRaw = await prisma.chatbotFAQ.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  const faqs = faqsRaw.map((f) => ({
    ...f,
    createdAt: f.createdAt.toISOString(),
    updatedAt: f.updatedAt.toISOString(),
  }));

  return <ChatbotFAQList initialFaqs={faqs} />;
}
