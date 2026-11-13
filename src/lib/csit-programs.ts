import type { ProgramRecord, ProgramSubject } from "../types/programs";

export function getCSITCourseGroups(program: ProgramRecord): ProgramSubject[] {
  if (program.curriculum?.years.length) {
    return program.curriculum.years.map((year) => ({
      year: `Year ${year.year}`,
      items: year.courses.map((course) => course.code ? `${course.code} - ${course.name}` : course.name),
    }));
  }
  return program.subjects;
}
