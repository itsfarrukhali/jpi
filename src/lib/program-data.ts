import "server-only";
import type { ProgramListingPage } from "../../generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { serializeProgram } from "@/lib/programs";

export async function getPublishedPrograms(listingPage: ProgramListingPage) {
  const programs = await prisma.program.findMany({
    where: { listingPage, published: true },
    orderBy: { createdAt: "asc" },
  });
  return programs.map(serializeProgram);
}
