import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthAdmin, unauthorized, forbidden } from "@/lib/auth/server";
import { newsCreateSchema } from "@/lib/validations/news";
import { z } from "zod";

export async function GET() {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();
  if (admin.role !== "SUPER_ADMIN" && admin.permission !== "FULL_ACCESS") {
    return forbidden();
  }
  const news = await prisma.newsItem.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      excerpt: true,
      content: true,
      date: true,
      category: true,
      image: true,
      pdfUrl: true,
      slug: true,
      galleryImages: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return NextResponse.json(news);
}

export async function POST(req: Request) {
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

  const body = await req.json();
  const parsed = newsCreateSchema.safeParse(body);

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
  // Convert date string to Date
  const newItem = await prisma.newsItem.create({
    data: {
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      date: new Date(),
      category: data.category,
      image: data.image,
      pdfUrl: data.pdfUrl || null,
      slug: data.slug,
      galleryImages: data.galleryImages,
      published: data.published,
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });

  return NextResponse.json(newItem, { status: 201 });
}
