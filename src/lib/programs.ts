import type { Prisma, Program } from "../../generated/prisma/client";
import { programCurriculumSchema, programSubjectSchema } from "@/lib/validations/programs";
import type {
  ProgramCourse,
  ProgramCurriculum,
  ProgramRecord,
  ProgramSubject,
} from "@/types/programs";

export function parseProgramSubjects(value: Prisma.JsonValue): ProgramSubject[] {
  const result = programSubjectSchema.array().safeParse(value);
  return result.success ? result.data : [];
}

export function parseProgramCurriculum(value: Prisma.JsonValue | null): ProgramCurriculum | null {
  const result = programCurriculumSchema.safeParse(value);
  return result.success ? result.data : null;
}

export function calculateCourseTotals(courses: ProgramCourse[]) {
  return courses.reduce(
    (total, course) => ({
      contactHours: {
        theory: total.contactHours.theory + course.contactHours.theory,
        practical: total.contactHours.practical + course.contactHours.practical,
      },
      creditHours: total.creditHours + course.creditHours,
      marks: {
        theory: total.marks.theory + course.marks.theory,
        practical: total.marks.practical + course.marks.practical,
        total: total.marks.total + course.marks.total,
      },
    }),
    {
      contactHours: { theory: 0, practical: 0 },
      creditHours: 0,
      marks: { theory: 0, practical: 0, total: 0 },
    },
  );
}

export function serializeProgram(program: Program): ProgramRecord {
  return {
    ...program,
    subjects: parseProgramSubjects(program.subjects),
    curriculum: parseProgramCurriculum(program.curriculum),
    createdAt: program.createdAt?.toISOString(),
    updatedAt: program.updatedAt?.toISOString(),
  };
}
