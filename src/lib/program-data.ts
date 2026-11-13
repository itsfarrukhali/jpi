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
import { aiCurriculum, cyberCurriculum } from "@/data/new-dae-curricula";
import { departments as courseDepartments } from "@/data/courses";
import { completeDaeCatalog } from "@/lib/dae-catalog";

function formatStaticProgram(program: Program): ProgramRecord {
  const departmentSlug = program.id === "dae-refrigeration" ? "rac" : program.id.replace(/^dae-/, "");
  const courseDepartment = courseDepartments.find((department) => department.slug === departmentSlug);
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
    curriculum: program.id === "dae-ai" ? aiCurriculum : program.id === "dae-cyber-security" ? cyberCurriculum : courseDepartment ? { years: courseDepartment.years, grandTotal: courseDepartment.grandTotal } : null,
    careers: program.careers,
    published: true,
  };
}

export async function getPublishedPrograms(listingPage: ProgramListingPage): Promise<ProgramRecord[]> {
  try {
    const programs = await prisma.program.findMany({
      where: { listingPage, ...(listingPage === "DAE" ? {} : { published: true }) },
      orderBy: { createdAt: "asc" },
    });
    if (programs && programs.length > 0) {
      if (listingPage === "DAE") return completeDaeCatalog(programs.map(serializeProgram), daePrograms.map(formatStaticProgram));
      return programs.map(serializeProgram);
    }
  } catch (error) {
    console.warn(`[getPublishedPrograms] DB lookup failed or empty for ${listingPage}, falling back to static data.`, error);
  }

  // Fallback to static data
  if (listingPage === "DAE") {
    return completeDaeCatalog([], daePrograms.map(formatStaticProgram));
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
