import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, unauthorized, forbidden } from "@/lib/auth/server";
import { newsUpdateSchema } from "@/lib/validations/news";
import { z } from "zod";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (
    admin.role !== "SUPER_ADMIN" &&
    !(
      admin.role === "ADMIN" &&
      ["READ_WRITE", "FULL_ACCESS"].includes(admin.permission)
    )
  ) {
    return forbidden();
  }
  const { id: targetId } = await params;
  const item = await prisma.newsItem.findUnique({ where: { id: targetId } });
  if (!item) return new NextResponse("Not found", { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (
    admin.role !== "SUPER_ADMIN" &&
    !(
      admin.role === "ADMIN" &&
      ["READ_WRITE", "FULL_ACCESS"].includes(admin.permission)
    )
  ) {
    return forbidden();
  }
  const { id: targetId } = await params;

  const body = await req.json();
  const parsed = newsUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid data",
        issues: z.treeifyError(parsed.error),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  // Check if slug is unique if changed
  if (data.slug) {
    const existing = await prisma.newsItem.findUnique({
      where: { slug: data.slug },
    });
    if (existing && existing.id !== targetId) {
      return new NextResponse("Slug already exists", { status: 409 });
    }
  }

  const updated = await prisma.newsItem.update({
    where: { id: targetId },
    data: {
      ...data,
      pdfUrl: data.pdfUrl === "" ? null : data.pdfUrl,
    },
    select: { id: true, title: true, slug: true },
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (
    admin.role !== "SUPER_ADMIN" &&
    !(
      admin.role === "ADMIN" &&
      ["READ_WRITE", "FULL_ACCESS"].includes(admin.permission)
    )
  ) {
    return forbidden();
  }

  const { id: targetId } = await params;
  await prisma.newsItem.delete({ where: { id: targetId } });
  return new NextResponse(null, { status: 204 });
}
