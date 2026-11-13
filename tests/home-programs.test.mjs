import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { homePrograms } from "../src/data/home-programs.ts";

test("homepage lists all ten distinct DAE technologies", () => {
  assert.equal(homePrograms.length, 10);
  assert.equal(new Set(homePrograms.map((program) => program.slug)).size, 10);
  for (const slug of ["dae-software", "dae-cit", "dae-ai", "dae-cyber-security"]) {
    assert.ok(homePrograms.some((program) => program.slug === slug));
  }
});

test("existing program artwork resolves and missing new artwork uses explicit placeholders", () => {
  for (const program of homePrograms) {
    if (program.image) assert.ok(existsSync(new URL(`../public${program.image}`, import.meta.url)), program.image);
    else assert.ok(["dae-ai", "dae-cyber-security"].includes(program.slug));
  }
});
