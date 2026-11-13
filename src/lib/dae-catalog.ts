import type { ProgramRecord } from "../types/programs";

const canonicalSlug = (slug: string) => slug === "sc-ai" ? "dae-ai" : slug;
const newTechnologies = new Set(["dae-ai", "dae-cyber-security"]);

// Include newly announced pathways before their database content migration,
// without overriding existing records or an explicit unpublished status.
export function completeDaeCatalog(records: ProgramRecord[], defaults: ProgramRecord[]): ProgramRecord[] {
  const programs = records.length > 0 ? [...records] : [...defaults];
  for (const program of defaults) {
    if (newTechnologies.has(program.slug) && !programs.some((record) => canonicalSlug(record.slug) === program.slug)) {
      programs.push(program);
    }
  }
  const order = ["dae-civil", "dae-electrical", "dae-mechanical", "dae-electronics", "dae-software", "dae-cit", "dae-refrigeration", "dae-chemical", "dae-ai", "dae-cyber-security"];
  const rank = (slug: string) => {
    const index = order.indexOf(canonicalSlug(slug));
    return index < 0 ? order.length : index;
  };
  return programs.filter((program) => program.published).map((program) => {
    const fallback = defaults.find((item) => item.slug === canonicalSlug(program.slug));
    return {
      ...program,
      curriculum: program.curriculum ?? fallback?.curriculum ?? null,
      careers: program.careers.length > 0 ? program.careers : fallback?.careers ?? [],
    };
  }).sort((a, b) => rank(a.slug) - rank(b.slug));
}
