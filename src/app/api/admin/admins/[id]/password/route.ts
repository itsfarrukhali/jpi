import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, unauthorized, forbidden } from "@/lib/auth/server";
import { verifyPassword, hashPassword } from "@/lib/auth/hash";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const currentAdmin = await getAuthAdmin();
  if (!currentAdmin) return unauthorized();

  const { id: targetId } = await params;
  const isOwner = currentAdmin.id === targetId;
  const body = await req.json();
  const { currentPassword, newPassword } = body;

  if (!newPassword)
    return new NextResponse("New password required", { status: 400 });

  const target = await prisma.admin.findUnique({ where: { id: targetId } });
  if (!target) return new NextResponse("Not found", { status: 404 });

  // Case 1: Changing own password – must provide current password
  if (isOwner) {
    if (!currentPassword) {
      return new NextResponse("Current password is required", { status: 400 });
    }
    const isValid = await verifyPassword(currentPassword, target.passwordHash);
    if (!isValid)
      return new NextResponse("Current password is incorrect", { status: 401 });
    const hashed = await hashPassword(newPassword);
    await prisma.admin.update({
      where: { id: targetId },
      data: { passwordHash: hashed },
    });
    return NextResponse.json({ success: true });
  }

  // Case 2: Admin with SUPER_ADMIN/FULL_ACCESS resetting another's password
  if (
    currentAdmin.role !== "SUPER_ADMIN" &&
    currentAdmin.permission !== "FULL_ACCESS"
  ) {
    return forbidden();
  }
  const hashed = await hashPassword(newPassword);
  await prisma.admin.update({
    where: { id: targetId },
    data: { passwordHash: hashed },
  });
  return NextResponse.json({ success: true });
}
