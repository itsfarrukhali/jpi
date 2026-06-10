import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getNewsFiles } from "@/lib/news-files";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const item = await prisma.newsItem.findFirst({
    where: { slug, published: true },
    select: { image: true, pdfUrl: true, galleryImages: true },
  });

  if (!item) {
    return NextResponse.json({ error: "News item not found" }, { status: 404 });
  }

  return NextResponse.json({ data: getNewsFiles(item) });
}
