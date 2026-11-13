import test from "node:test";
import assert from "node:assert/strict";
import { completeDaeCatalog } from "../src/lib/dae-catalog.ts";
import { homePrograms } from "../src/data/home-programs.ts";
import { aiCurriculum, cyberCurriculum } from "../src/data/new-dae-curricula.ts";

const defaults = homePrograms.map(({ slug, name }) => ({
  id: slug, slug, name, shortName: name, department: null,
  duration: "3 Years", seats: 0, eligibility: [], description: name,
  icon: null, thumbnail: null, coverImage: null, tag: "DAE", category: "dae",
  listingPage: "DAE", subjects: [], published: true, careers: ["Technician"],
  curriculum: slug === "dae-ai" ? aiCurriculum : slug === "dae-cyber-security" ? cyberCurriculum : null,
}));

test("existing eight programs are retained and both new technologies are appended", () => {
  const existing = defaults.slice(0, 8).map((program) => ({ ...program, id: `database-${program.slug}` }));
  const result = completeDaeCatalog(existing, defaults);
  assert.equal(result.length, 10);
  assert.deepEqual(result.slice(0, 8), existing);
  assert.deepEqual(result[8].curriculum, aiCurriculum);
  assert.deepEqual(result[9].curriculum, cyberCurriculum);
  assert.ok(result.every((program) => program.careers.length > 0));
});

test("legacy AI slug receives the supplied curriculum without creating duplicate programs", () => {
  const records = defaults.map((program) => program.slug === "dae-ai" ? { ...program, slug: "sc-ai", curriculum: null } : program);
  const result = completeDaeCatalog(records, defaults);
  assert.equal(result.length, 10);
  assert.equal(result.filter((program) => ["dae-ai", "sc-ai"].includes(program.slug)).length, 1);
  assert.deepEqual(result.find((program) => program.slug === "sc-ai").curriculum, aiCurriculum);
});

test("unpublished new technologies stay hidden and existing admin content is retained", () => {
  const records = defaults.map((program) => ({ ...program, published: program.slug !== "dae-cyber-security" }));
  records[8] = { ...records[8], careers: ["Custom career"], curriculum: { ...aiCurriculum, notes: ["Admin revision"] } };
  const result = completeDaeCatalog(records, defaults);
  assert.equal(result.length, 9);
  assert.ok(!result.some((program) => program.slug === "dae-cyber-security"));
  assert.deepEqual(result.find((program) => program.slug === "dae-ai").careers, ["Custom career"]);
  assert.deepEqual(result.find((program) => program.slug === "dae-ai").curriculum.notes, ["Admin revision"]);
});

test("an unavailable database falls back to all ten programs", () => {
  assert.equal(completeDaeCatalog([], defaults).length, 10);
});
