import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, forbidden, unauthorized } from "@/lib/auth/server";
import { jobOpeningUpdateSchema } from "@/lib/validations/careers";

function canWriteCareers(admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>) {
  return (
    admin.role === "SUPER_ADMIN" ||
    (admin.permission !== "READ_ONLY" &&
      (admin.permission === "FULL_ACCESS" || admin.manageContent.includes("CAREERS")))
  );
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canWriteCareers(admin)) return forbidden();

  const { id } = await params;
  const parsed = jobOpeningUpdateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }

  if (parsed.data.slug) {
    const existing = await prisma.jobOpening.findUnique({
      where: { slug: parsed.data.slug },
    });
    if (existing && existing.id !== id) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }
  }

  const data = parsed.data;
  return NextResponse.json(
    await prisma.jobOpening.update({
      where: { id },
      data: {
        ...data,
        officialNoticeUrl: data.officialNoticeUrl === "" ? null : data.officialNoticeUrl,
        officialNoticeType:
          data.officialNoticeUrl === "" ? null : data.officialNoticeType,
      },
    }),
  );
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canWriteCareers(admin)) return forbidden();

  const { id } = await params;
  await prisma.jobOpening.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
