import { z } from "zod";

const publicOrRemoteUrl = z.string().refine(
  (value) => value.startsWith("/") || URL.canParse(value),
  "Must be a public path or valid URL",
);

export const programSubjectSchema = z.object({
  year: z.string().min(1, "Section name is required"),
  items: z.array(z.string().min(1)).min(1, "Add at least one subject"),
});

const nonNegativeInt = z.number().int().min(0);

export const programCourseSchema = z.object({
  code: z.string().optional().or(z.literal("")),
  name: z.string().min(1, "Course name is required"),
  contactHours: z.object({ theory: nonNegativeInt, practical: nonNegativeInt }),
  creditHours: nonNegativeInt,
  marks: z.object({
    theory: nonNegativeInt,
    practical: nonNegativeInt,
    total: nonNegativeInt,
  }),
});

export const programCurriculumTotalSchema = z.object({
  contactHours: z.object({ theory: nonNegativeInt, practical: nonNegativeInt }),
  creditHours: nonNegativeInt,
  marks: z.object({
    theory: nonNegativeInt,
    practical: nonNegativeInt,
    total: nonNegativeInt,
  }),
});

export const programCurriculumSchema = z.object({
  years: z.array(z.object({
    year: z.number().int().min(1),
    total: programCurriculumTotalSchema,
    courses: z.array(programCourseSchema).min(1, "Add at least one course"),
  })).min(1, "Add at least one curriculum year"),
  grandTotal: programCurriculumTotalSchema,
});

const programBaseSchema = z.object({
  slug: z
    .string()
    .min(3, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens"),
  name: z.string().min(3, "Name is required"),
  shortName: z.string().min(2, "Short name is required"),
  department: z.string().optional().nullable().or(z.literal("")),
  duration: z.string().min(2, "Duration is required"),
  seats: z.coerce.number().int().min(1, "Seats must be at least 1"),
  eligibility: z.array(z.string().min(2)).min(1, "Add at least one requirement"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  icon: z.string().optional().nullable().or(z.literal("")),
  thumbnail: publicOrRemoteUrl.optional().nullable().or(z.literal("")),
  coverImage: publicOrRemoteUrl.optional().nullable().or(z.literal("")),
  tag: z.enum(["DAE", "CERT", "SHORT", "JEC"]),
  category: z.enum(["dae", "certifications", "short_courses", "jec"]),
  listingPage: z.enum([
    "DAE",
    "CERTIFICATIONS",
    "DIPLOMA_CERTIFICATIONS",
    "SHORT_COURSES",
    "JEC",
  ]),
  subjects: z.array(programSubjectSchema),
  curriculum: programCurriculumSchema.optional().nullable(),
  careers: z.array(z.string().min(2)).min(1, "Add at least one career"),
  published: z.boolean().optional().default(true),
});

export const programCreateSchema = programBaseSchema.superRefine((data, context) => {
  if (data.listingPage === "DAE" && !data.curriculum) {
    context.addIssue({
      code: "custom",
      path: ["curriculum"],
      message: "Detailed curriculum is required for DAE programs",
    });
  }
  if (data.listingPage !== "DAE" && data.subjects.length === 0) {
    context.addIssue({
      code: "custom",
      path: ["subjects"],
      message: "Add at least one curriculum section",
    });
  }
});
export const programUpdateSchema = programBaseSchema.partial();
export type ProgramCreateInput = z.input<typeof programCreateSchema>;
export type ProgramCreateOutput = z.output<typeof programCreateSchema>;
