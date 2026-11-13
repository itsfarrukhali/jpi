import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Code2, Network, ShieldCheck } from "lucide-react";
import { csitTechnologies } from "@/data/csit";

const icons = { code: Code2, network: Network, brain: BrainCircuit, shield: ShieldCheck };

export default function CSITPathways({ appearance = "default" }: { appearance?: "default" | "home" }) {
  const home = appearance === "home";
  return (
    <section className={home ? "mb-14 border-b border-gray-200 pb-12" : "bg-slate-950 py-16 text-white"} aria-labelledby="csit-pathways">
      <div className={home ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className={home ? "mb-3 text-xs font-semibold uppercase tracking-wider text-gold" : "mb-3 text-xs font-semibold uppercase tracking-widest text-amber-300"}>CSIT / Four pathways, one department</p>
            <h2 id="csit-pathways" className={home ? "text-2xl md:text-3xl font-bold font-serif text-primary-dark" : "text-3xl font-bold font-serif"}>{home ? "Computer Science & Information Technology" : "Build. Connect. Think. Protect."}</h2>
            <p className={home ? "mt-3 text-sm leading-relaxed text-text-muted" : "mt-4 text-sm leading-relaxed text-slate-300"}>Computer Science &amp; Information Technology brings our computing technologies together. Three years. Annual SBTE examinations. Admissions for boys and girls.</p>
          </div>
          <Link href="/departments/csit" className={`inline-flex items-center gap-2 text-sm font-semibold ${home ? "text-primary" : "text-amber-300"}`}>Explore CSIT <ArrowUpRight size={16} /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {csitTechnologies.map((technology) => {
            const Icon = icons[technology.icon];
            return (
              <Link key={technology.slug} href={`/programs/dae#${technology.slug}`} className={home ? "group flex h-full flex-col rounded-xl border border-gray-200 bg-surface p-5 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-primary" : "group rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-amber-300/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-300"}>
                <div className="mb-5 flex items-center justify-between gap-2"><Icon className={home ? "text-primary" : "text-amber-300"} size={24} />{technology.isNew && <span className={home ? "rounded-full bg-gold/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-dark" : "rounded-full bg-amber-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-950"}>New Technology</span>}</div>
                <h3 className={home ? "text-base font-semibold leading-snug text-primary-dark" : "text-lg font-semibold leading-snug"}>{technology.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${home ? "mb-5 text-text-muted" : "text-slate-300"}`}>{technology.description}</p>
                <span className={`inline-flex items-center gap-2 text-xs font-semibold ${home ? "mt-auto text-primary" : "mt-6 text-amber-300"}`}>View Courses <ArrowUpRight size={14} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
