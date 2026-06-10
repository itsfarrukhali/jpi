import { NextResponse } from "next/server";
import type {
  ContentType,
  Designation,
  Permission,
  Prisma,
  Role,
} from "../../../../../../generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, unauthorized, forbidden } from "@/lib/auth/server";

type AdminUpdateBody = {
  name?: string;
  email?: string;
  username?: string;
  designation?: Designation;
  avatarURL?: string | null;
  role?: Role;
  permission?: Permission;
  manageContent?: ContentType[];
};

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const currentAdmin = await getAuthAdmin();
  if (!currentAdmin) return unauthorized();

  const { id: targetId } = await params;
  // Only SUPER_ADMIN or the owner can update profile (but not role/permission)
  const body = (await req.json()) as AdminUpdateBody;
  const target = await prisma.admin.findUnique({ where: { id: targetId } });
  if (!target) return new NextResponse("Not found", { status: 404 });

  // Authorization
  const isOwner = currentAdmin.id === targetId;
  if (
    !isOwner &&
    currentAdmin.role !== "SUPER_ADMIN" &&
    currentAdmin.permission !== "FULL_ACCESS"
  ) {
    return forbidden();
  }

  // Fields allowed to update
  const updateData: Prisma.AdminUpdateInput = {};
  if (body.name !== undefined) updateData.name = body.name;
  if (body.email !== undefined) updateData.email = body.email;
  if (body.username !== undefined) updateData.username = body.username;
  if (body.designation !== undefined) updateData.designation = body.designation;
  if (body.avatarURL !== undefined) updateData.avatarURL = body.avatarURL;

  // Role/Permission/ManageContent only changeable by SUPER_ADMIN (or FULL_ACCESS) and not on self
  if (
    currentAdmin.role === "SUPER_ADMIN" ||
    currentAdmin.permission === "FULL_ACCESS"
  ) {
    if (!isOwner) {
      // prevent self-role downgrade?
      if (body.role !== undefined) updateData.role = body.role;
      if (body.permission !== undefined)
        updateData.permission = body.permission;
      if (body.manageContent !== undefined)
        updateData.manageContent = body.manageContent;
    }
  }

  const updated = await prisma.admin.update({
    where: { id: targetId },
    data: updateData,
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      role: true,
      permission: true,
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const currentAdmin = await getAuthAdmin();
  if (!currentAdmin) return unauthorized();
  if (
    currentAdmin.role !== "SUPER_ADMIN" &&
    currentAdmin.permission !== "FULL_ACCESS"
  ) {
    return forbidden();
  }
  const { id: targetId } = await params;
  if (currentAdmin.id === targetId) {
    return new NextResponse("Cannot delete yourself", { status: 400 });
  }
  await prisma.admin.delete({ where: { id: targetId } });
  return new NextResponse(null, { status: 204 });
}
