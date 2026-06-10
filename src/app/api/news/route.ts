import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getNewsFiles } from "@/lib/news-files";

function positiveInteger(value: string | null, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const includeAll = searchParams.get("all") === "true";
  const page = positiveInteger(searchParams.get("page"), 1);
  const pageSize = Math.min(positiveInteger(searchParams.get("pageSize"), 10), 50);
  const skip = (page - 1) * pageSize;

  const [total, news] = await Promise.all([
    prisma.newsItem.count({ where: { published: true } }),
    prisma.newsItem.findMany({
      where: { published: true },
      orderBy: [{ date: "desc" }, { createdAt: "desc" }],
      skip: includeAll ? undefined : skip,
      take: includeAll ? undefined : pageSize,
    }),
  ]);

  return NextResponse.json({
    data: news.map((item) => ({ ...item, files: getNewsFiles(item) })),
    pagination: {
      page: includeAll ? 1 : page,
      pageSize: includeAll ? total : pageSize,
      total,
      totalPages: includeAll ? (total > 0 ? 1 : 0) : Math.ceil(total / pageSize),
    },
  });
}
