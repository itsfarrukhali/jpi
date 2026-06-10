import { prisma } from "@/lib/prisma";
import { serializeProgram } from "@/lib/programs";
import { ProgramsTable } from "@/components/admin/programs/ProgramsTable";
import { redirect } from "next/navigation";
import { canReadContent, getAuthAdmin } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export default async function AdminProgramsPage() {
  const admin = await getAuthAdmin();
  if (!admin) redirect("/login");
  if (!canReadContent(admin, "PROGRAMS")) redirect("/admin");

  const programs = await prisma.program.findMany({ orderBy: { createdAt: "desc" } });
  return <div className="space-y-6">
    <div><h1 className="text-2xl font-bold text-gray-800">Programs</h1>
      <p className="mt-1 text-sm text-gray-500">Manage program listings, eligibility, curriculum, careers, media, and publishing.</p>
    </div>
    <ProgramsTable programs={programs.map(serializeProgram)} />
  </div>;
}
