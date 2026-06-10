import type {
  ProgramCategory,
  ProgramListingPage,
  ProgramTag,
} from "../../generated/prisma/client";

export type ProgramSubject = {
  year: string;
  items: string[];
};

export type ProgramCourse = {
  code?: string;
  name: string;
  contactHours: { theory: number; practical: number };
  creditHours: number;
  marks: { theory: number; practical: number; total: number };
};

export type ProgramCurriculumYear = {
  year: number;
  total: ProgramCurriculumTotal;
  courses: ProgramCourse[];
};

export type ProgramCurriculumTotal = {
  contactHours: { theory: number; practical: number };
  creditHours: number;
  marks: { theory: number; practical: number; total: number };
};

export type ProgramCurriculum = {
  years: ProgramCurriculumYear[];
  grandTotal: ProgramCurriculumTotal;
};

export type ProgramRecord = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  department: string | null;
  duration: string;
  seats: number;
  eligibility: string[];
  description: string;
  icon: string | null;
  thumbnail: string | null;
  coverImage: string | null;
  tag: ProgramTag;
  category: ProgramCategory;
  listingPage: ProgramListingPage;
  subjects: ProgramSubject[];
  curriculum: ProgramCurriculum | null;
  careers: string[];
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};
