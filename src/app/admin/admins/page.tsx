import { prisma } from "@/lib/prisma";
import { AdminsTable } from "@/components/admin/AdminsTable";
import { redirect } from "next/navigation";
import { canManageAdmins, getAuthAdmin } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export default async function AdminsPage() {
  const currentAdmin = await getAuthAdmin();
  if (!currentAdmin) redirect("/login");
  if (!canManageAdmins(currentAdmin)) redirect("/admin");

  const admins = await prisma.admin.findMany({
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      designation: true,
      role: true,
      permission: true,
      manageContent: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admins</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage admin accounts and permissions
          </p>
        </div>
      </div>
      <AdminsTable admins={admins} />
    </div>
  );
}
