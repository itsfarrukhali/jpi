import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, forbidden, unauthorized } from "@/lib/auth/server";
import { serializeProgram } from "@/lib/programs";
import { programUpdateSchema } from "@/lib/validations/programs";

function canWrite(admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>) {
  return admin.role === "SUPER_ADMIN" ||
    (admin.permission !== "READ_ONLY" &&
      (admin.permission === "FULL_ACCESS" || admin.manageContent.includes("PROGRAMS")));
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canWrite(admin)) return forbidden();
  const { id } = await params;
  const parsed = programUpdateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }
  if (parsed.data.slug) {
    const existing = await prisma.program.findUnique({ where: { slug: parsed.data.slug } });
    if (existing && existing.id !== id) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }
  }
  const data = parsed.data;
  const program = await prisma.program.update({
    where: { id },
    data: {
      ...data,
      department: data.department === "" ? null : data.department,
      icon: data.icon === "" ? null : data.icon,
      thumbnail: data.thumbnail === "" ? null : data.thumbnail,
      coverImage: data.coverImage === "" ? null : data.coverImage,
      curriculum: data.curriculum === null ? undefined : data.curriculum,
    },
  });
  return NextResponse.json(serializeProgram(program));
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canWrite(admin)) return forbidden();
  const { id } = await params;
  await prisma.program.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
