import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, forbidden, unauthorized } from "@/lib/auth/server";
import { serializeProgram } from "@/lib/programs";
import { programCreateSchema } from "@/lib/validations/programs";

function canRead(admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>) {
  return admin.role === "SUPER_ADMIN" || admin.permission === "FULL_ACCESS" ||
    admin.manageContent.includes("PROGRAMS");
}

function canWrite(admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>) {
  return canRead(admin) && admin.permission !== "READ_ONLY";
}

export async function GET() {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canRead(admin)) return forbidden();
  const programs = await prisma.program.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(programs.map(serializeProgram));
}

export async function POST(request: Request) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canWrite(admin)) return forbidden();

  const parsed = programCreateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }
  if (await prisma.program.findUnique({ where: { slug: parsed.data.slug } })) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }
  const data = parsed.data;
  const program = await prisma.program.create({
    data: {
      ...data,
      department: data.department || null,
      icon: data.icon || null,
      thumbnail: data.thumbnail || null,
      coverImage: data.coverImage || null,
      curriculum: data.curriculum ?? undefined,
    },
  });
  return NextResponse.json(serializeProgram(program), { status: 201 });
}
