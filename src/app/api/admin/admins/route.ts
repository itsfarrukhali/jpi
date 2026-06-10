import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth/hash";
import { getAuthAdmin, unauthorized, forbidden } from "@/lib/auth/server";

export async function GET() {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  // Only SUPER_ADMIN or FULL_ACCESS can see all admins (or maybe any admin can see list? restrict)
  if (admin.role !== "SUPER_ADMIN" && admin.permission !== "FULL_ACCESS") {
    return forbidden();
  }
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
  });
  return NextResponse.json(admins);
}

export async function POST(req: Request) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (admin.role !== "SUPER_ADMIN" && admin.permission !== "FULL_ACCESS") {
    return forbidden();
  }
  const body = await req.json();
  const {
    username,
    name,
    email,
    password,
    designation,
    role,
    permission,
    manageContent,
  } = body;
  if (!username || !name || !email || !password) {
    return new NextResponse("Missing required fields", { status: 400 });
  }
  const existing = await prisma.admin.findFirst({
    where: { OR: [{ username }, { email }] },
  });
  if (existing) {
    return new NextResponse("Username or email already exists", {
      status: 409,
    });
  }
  const passwordHash = await hashPassword(password);
  const newAdmin = await prisma.admin.create({
    data: {
      username,
      name,
      email,
      passwordHash,
      designation: designation || "ADMINISTRATOR",
      role: role || "ADMIN",
      permission: permission || "READ_ONLY",
      manageContent: manageContent || [],
    },
    select: { id: true, username: true, name: true, email: true, role: true },
  });
  return NextResponse.json(newAdmin, { status: 201 });
}
