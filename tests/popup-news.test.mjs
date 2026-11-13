import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { nextAnnouncementStage, parsePopupNews } from "../src/lib/popup-news.ts";

const item = (overrides = {}) => ({
  id: "news-1", title: "Published institute update", excerpt: "Official details",
  slug: "institute-update", date: "2025-01-01T00:00:00.000Z",
  category: "NEWS", published: true, ...overrides,
});

test("the admission poster advances to news and then closes without a persistent dismissal gate", () => {
  assert.equal(nextAnnouncementStage("cyber"), "news");
  assert.equal(nextAnnouncementStage("news"), "closed");
  assert.equal(nextAnnouncementStage("closed"), "closed");
  assert.ok(existsSync(new URL("../public/news-events/admissions/cyber-security-admissions.png", import.meta.url)));
});

test("published news older than 45 days is still available and all categories are supported", () => {
  const records = ["NEWS", "ANNOUNCEMENTS", "EVENTS", "SEMINARS"].map((category, index) => item({
    id: `news-${index}`, slug: `news-${index}`, category, date: `2025-01-0${index + 1}T00:00:00.000Z`,
  }));
  const result = parsePopupNews({ data: records });
  assert.equal(result.length, 4);
  assert.equal(result[0].category, "SEMINARS");
  assert.equal(result[3].category, "NEWS");
});

test("unpublished and duplicate entries are excluded and the list is limited to six", () => {
  const data = Array.from({ length: 8 }, (_, index) => item({ id: `news-${index}`, slug: `news-${index}` }));
  data.unshift(item({ slug: "hidden-update", published: false }));
  data.push(item({ id: "duplicate", slug: "news-0" }));
  const result = parsePopupNews({ data });
  assert.equal(result.length, 6);
  assert.ok(!result.some((entry) => entry.slug === "hidden-update"));
  assert.equal(new Set(result.map((entry) => entry.slug)).size, 6);
});

test("empty data is supported and malformed API data is rejected", () => {
  assert.deepEqual(parsePopupNews({ data: [] }), []);
  assert.throws(() => parsePopupNews({ data: [item({ date: "not-a-date" })] }));
  assert.throws(() => parsePopupNews({ data: [item({ slug: "javascript:alert(1)" })] }));
  assert.throws(() => parsePopupNews({ data: "not-an-array" }));
});
