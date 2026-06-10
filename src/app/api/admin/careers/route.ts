import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, forbidden, unauthorized } from "@/lib/auth/server";
import { jobOpeningCreateSchema } from "@/lib/validations/careers";

function canReadCareers(admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>) {
  return (
    admin.role === "SUPER_ADMIN" ||
    admin.permission === "FULL_ACCESS" ||
    admin.manageContent.includes("CAREERS")
  );
}

function canWriteCareers(admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>) {
  return canReadCareers(admin) && admin.permission !== "READ_ONLY";
}

export async function GET() {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canReadCareers(admin)) return forbidden();

  return NextResponse.json(
    await prisma.jobOpening.findMany({ orderBy: { createdAt: "desc" } }),
  );
}

export async function POST(request: Request) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (!canWriteCareers(admin)) return forbidden();

  const parsed = jobOpeningCreateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const existing = await prisma.jobOpening.findUnique({ where: { slug: data.slug } });
  if (existing) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }

  const opening = await prisma.jobOpening.create({
    data: {
      ...data,
      officialNoticeUrl: data.officialNoticeUrl || null,
      officialNoticeType: data.officialNoticeType ?? null,
    },
  });

  return NextResponse.json(opening, { status: 201 });
}
