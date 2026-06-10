import { NextResponse } from "next/server";
import type { Prisma, ProgramListingPage } from "../../../../generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { serializeProgram } from "@/lib/programs";

const listingPages = new Set<ProgramListingPage>([
  "DAE", "CERTIFICATIONS", "DIPLOMA_CERTIFICATIONS", "SHORT_COURSES", "JEC",
]);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedListing = url.searchParams.get("listingPage") as ProgramListingPage | null;
  const listingPage = requestedListing && listingPages.has(requestedListing)
    ? requestedListing
    : undefined;
  const page = Math.max(1, Number(url.searchParams.get("page")) || 1);
  const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit")) || 20));
  const all = url.searchParams.get("all") === "true";
  const where: Prisma.ProgramWhereInput = { published: true, listingPage };
  const [data, total] = await prisma.$transaction([
    prisma.program.findMany({
      where,
      orderBy: [{ listingPage: "asc" }, { createdAt: "asc" }],
      ...(all ? {} : { skip: (page - 1) * limit, take: limit }),
    }),
    prisma.program.count({ where }),
  ]);
  return NextResponse.json({
    data: data.map(serializeProgram),
    pagination: { page: all ? 1 : page, limit: all ? total : limit, total, pages: all ? 1 : Math.ceil(total / limit) },
  });
}
