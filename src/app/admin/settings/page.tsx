import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SecuritySettings } from "@/components/admin/settings/SecuritySettings";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  const admin = await prisma.admin.findUnique({
    where: { id: session.user.id },
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
  });
  if (!admin) redirect("/login");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Review your account, access, and security.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Your signed-in administrator profile</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <Info label="Name" value={admin.name} />
            <Info label="Username" value={admin.username} />
            <Info label="Email" value={admin.email} />
            <Info label="Designation" value={admin.designation.replaceAll("_", " ")} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access & Security</CardTitle>
            <CardDescription>Your dashboard role and allowed content areas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge>{admin.role.replaceAll("_", " ")}</Badge>
              <Badge variant="outline">{admin.permission.replaceAll("_", " ")}</Badge>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-gray-700">Managed Content</p>
              <div className="flex flex-wrap gap-2">
                {admin.manageContent.length > 0
                  ? admin.manageContent.map((item) => <Badge key={item} variant="secondary">{item.replaceAll("_", " ")}</Badge>)
                  : <span className="text-xs text-gray-500">No assigned content areas</span>}
              </div>
            </div>
            <SecuritySettings admin={admin} />
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-gray-500">
        Profile details and permissions are managed from the Admins section by an authorized administrator.
      </p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border bg-gray-50 p-3">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="mt-1 text-sm font-medium text-gray-800">{value}</p>
  </div>;
}
