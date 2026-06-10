import { prisma } from "@/lib/prisma";
import { CareersTable } from "@/components/admin/careers/CareersTable";
import type { JobOpeningRecord } from "@/types/careers";
import { redirect } from "next/navigation";
import { canReadContent, getAuthAdmin } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export default async function AdminCareersPage() {
  const admin = await getAuthAdmin();
  if (!admin) redirect("/login");
  if (!canReadContent(admin, "CAREERS")) redirect("/admin");

  const openings = await prisma.jobOpening.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serialized: JobOpeningRecord[] = openings.map((opening) => ({
    ...opening,
    createdAt: opening.createdAt.toISOString(),
    updatedAt: opening.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Job Openings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage official vacancies, responsibilities, notices, and publishing.
        </p>
      </div>
      <CareersTable openings={serialized} />
    </div>
  );
}
