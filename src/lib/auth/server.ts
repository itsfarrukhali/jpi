import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { NextResponse } from "next/server";
import type { ContentType } from "../../../generated/prisma/client";

export async function getAuthAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return null;
  return {
    id: session.user.id,
    role: session.user.role,
    permission: session.user.permission,
    manageContent: session.user.manageContent,
  };
}

export type AuthAdmin = NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>;

export function canReadContent(admin: AuthAdmin, content: ContentType) {
  return (
    admin.role === "SUPER_ADMIN" ||
    admin.permission === "FULL_ACCESS" ||
    admin.manageContent.includes(content)
  );
}

export function canManageAdmins(admin: AuthAdmin) {
  return admin.role === "SUPER_ADMIN" || admin.permission === "FULL_ACCESS";
}

export function unauthorized() {
  return new NextResponse("Unauthorized", { status: 401 });
}

export function forbidden() {
  return new NextResponse("Forbidden", { status: 403 });
}
