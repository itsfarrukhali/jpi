import "server-only";
import type { ProgramListingPage } from "../../generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { serializeProgram } from "@/lib/programs";
import {
  daePrograms,
  diplomaCertifications,
  certificationPrograms,
  shortCourses,
  jecPrograms,
  type Program,
} from "@/data/programs";
import type { ProgramRecord } from "@/types/programs";

function formatStaticProgram(program: Program): ProgramRecord {
  let listingPage: ProgramRecord["listingPage"] = "DAE";
  if (program.category === "short-courses") listingPage = "SHORT_COURSES";
  else if (program.category === "certifications") listingPage = "CERTIFICATIONS";
  else if (program.category === "jec") listingPage = "JEC";

  let tag: ProgramRecord["tag"] = "DAE";
  if (program.tag === "CERT") tag = "CERT";
  else if (program.tag === "SHORT") tag = "SHORT";
  else if (program.tag === "JEC") tag = "JEC";

  let category: ProgramRecord["category"] = "dae";
  if (program.category === "certifications") category = "certifications";
  else if (program.category === "jec" || program.category === "short-courses") category = "jec";

  return {
    id: program.id,
    slug: program.id,
    name: program.name,
    shortName: program.shortName,
    department: null,
    duration: program.duration,
    seats: program.seats,
    eligibility: [program.eligibility],
    description: program.description,
    icon: program.icon,
    thumbnail: null,
    coverImage: null,
    tag,
    category,
    listingPage,
    subjects: program.subjects,
    curriculum: null,
    careers: program.careers,
    published: true,
  };
}

export async function getPublishedPrograms(listingPage: ProgramListingPage): Promise<ProgramRecord[]> {
  try {
    const programs = await prisma.program.findMany({
      where: { listingPage, published: true },
      orderBy: { createdAt: "asc" },
    });
    if (programs && programs.length > 0) {
      return programs.map(serializeProgram);
    }
  } catch (error) {
    console.warn(`[getPublishedPrograms] DB lookup failed or empty for ${listingPage}, falling back to static data.`, error);
  }

  // Fallback to static data
  if (listingPage === "DAE") {
    return daePrograms.map(formatStaticProgram);
  }
  if (listingPage === "DIPLOMA_CERTIFICATIONS") {
    return diplomaCertifications.map(formatStaticProgram);
  }
  if (listingPage === "CERTIFICATIONS") {
    return certificationPrograms.map(formatStaticProgram);
  }
  if (listingPage === "SHORT_COURSES") {
    return shortCourses.map(formatStaticProgram);
  }
  if (listingPage === "JEC") {
    return jecPrograms.map(formatStaticProgram);
  }

  return [];
}
