import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const opening = await prisma.jobOpening.findFirst({
    where: { slug, published: true },
  });

  if (!opening) {
    return NextResponse.json({ error: "Job opening not found" }, { status: 404 });
  }

  return NextResponse.json({ data: opening });
}
