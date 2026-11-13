import test from "node:test";
import assert from "node:assert/strict";
import { csitDepartmentPrograms } from "../src/data/csit-department.ts";
import { departments, facultyMembers } from "../src/data/departments.ts";
import { departments as courseDepartments } from "../src/data/courses.ts";
import { aiCurriculum, cyberCurriculum } from "../src/data/new-dae-curricula.ts";
import { getCSITCourseGroups } from "../src/lib/csit-programs.ts";

test("CSIT includes four technologies, each with an introduction, overview, and practical facilities", () => {
  assert.deepEqual(csitDepartmentPrograms.map((program) => program.slug), ["dae-software", "dae-cit", "dae-ai", "dae-cyber-security"]);
  for (const program of csitDepartmentPrograms) {
    assert.ok(program.introduction.length > 50);
    assert.equal(program.overview.length, 3);
    assert.ok(program.labs.length >= 3);
  }
  for (const program of csitDepartmentPrograms.slice(2)) assert.ok(program.labNote.includes("confirmed"));
});

test("all yearly courses are retained for each of the four technologies", () => {
  const software = courseDepartments.find((department) => department.slug === "software");
  const cit = courseDepartments.find((department) => department.slug === "cit");
  for (const curriculum of [software, cit, aiCurriculum, cyberCurriculum]) {
    const groups = getCSITCourseGroups({ curriculum, subjects: [] });
    assert.equal(groups.length, 3);
    assert.equal(groups.reduce((count, group) => count + group.items.length, 0), curriculum.years.reduce((count, year) => count + year.courses.length, 0));
    assert.ok(groups.every((group) => group.items.every((course) => course.length > 0)));
  }
});

test("subject-only program data remains supported", () => {
  const subjects = [{ year: "Year 1", items: ["Programming Fundamentals"] }];
  assert.deepEqual(getCSITCourseGroups({ curriculum: null, subjects }), subjects);
});

test("department navigation has one CSIT entry and the eight supplied faculty members", () => {
  assert.equal(departments.filter((department) => department.slug === "csit").length, 1);
  assert.ok(!departments.some((department) => ["cit", "software"].includes(department.slug)));
  const faculty = facultyMembers.filter((member) => member.department === "CSIT");
  assert.deepEqual(faculty.map((member) => member.name), ["Mr. Farrukh Ali", "Mr. Idrees Khan", "Ms. Areesha Qamar", "Mr. Anique Ali", "Mr. Moiz Iqbal", "Ms. Isha Saleem", "Mr. Shahbaz Ahmed", "M. Rehan Qureshi"]);
  assert.equal(faculty[0].designation, "Associate H.O.D");
  assert.equal(faculty[6].designation, "Junior Instructor / Data Management Officer");
  assert.equal(faculty[7].designation, "Instructor");
});
