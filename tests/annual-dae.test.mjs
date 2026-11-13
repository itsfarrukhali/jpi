import test from "node:test";
import assert from "node:assert/strict";
import { aiCurriculum, cyberCurriculum } from "../src/data/new-dae-curricula.ts";
import { programCurriculumSchema } from "../src/lib/validations/programs.ts";
import { csitTechnologies, coeducationSlugs } from "../src/data/csit.ts";

test("both supplied schemes have three annual years and round-trip through API validation", () => {
  for (const scheme of [aiCurriculum, cyberCurriculum]) {
    assert.deepEqual(scheme.years.map((year) => year.year), [1, 2, 3]);
    assert.deepEqual(programCurriculumSchema.parse(scheme), scheme);
    assert.equal(scheme.marksAvailable, false);
    for (const year of scheme.years) for (const course of year.courses) {
      assert.ok(course.totalHours > 0);
      assert.equal(course.marks.total, 0);
    }
  }
});

test("printed totals are retained instead of silently replacing source discrepancies", () => {
  assert.deepEqual(aiCurriculum.years.map((year) => year.total.totalHours), [1088, 1152, 1216]);
  assert.deepEqual(cyberCurriculum.years.map((year) => year.total.totalHours), [1120, 1536, 1216]);
  assert.equal(cyberCurriculum.years[1].courses.reduce((sum, course) => sum + course.totalHours, 0), 1120);
  assert.ok(cyberCurriculum.notes.some((note) => note.includes("differ")));
});

test("CSIT has four pathways, two new technologies, and coeducation eligibility messaging", () => {
  assert.equal(csitTechnologies.length, 4);
  assert.equal(csitTechnologies.filter((technology) => technology.isNew).length, 2);
  for (const technology of csitTechnologies) assert.ok(coeducationSlugs.has(technology.slug));
  assert.ok(coeducationSlugs.has("dae-chemical"));
});

test("legacy detailed curricula still validate without the new optional fields", () => {
  const scheme = structuredClone(aiCurriculum);
  delete scheme.marksAvailable;
  delete scheme.notes;
  delete scheme.grandTotal.totalHours;
  for (const year of scheme.years) {
    delete year.total.totalHours;
    for (const course of year.courses) delete course.totalHours;
  }
  assert.equal(programCurriculumSchema.safeParse(scheme).success, true);
});
