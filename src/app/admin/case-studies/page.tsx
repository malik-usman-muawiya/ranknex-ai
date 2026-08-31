import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import CaseStudiesList from "./CaseStudiesList";
import type { CaseStudy } from "@/types";

export const metadata: Metadata = {
  title: "Manage Case Studies | RankNex Admin",
};

export default async function AdminCaseStudiesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  let caseStudies: CaseStudy[] = [];

  try {
    const studiesRaw = await prisma.caseStudy.findMany({
      orderBy: { createdAt: "desc" },
    });

    caseStudies = studiesRaw.map((study: any) => ({
      ...study,
      createdAt: study.createdAt.toISOString(),
      updatedAt: study.updatedAt.toISOString(),
    })) as unknown as CaseStudy[];
  } catch (err) {
    console.warn("Database query notice in AdminCaseStudiesPage:", err);
  }

  return <CaseStudiesList initialStudies={caseStudies} />;
}
