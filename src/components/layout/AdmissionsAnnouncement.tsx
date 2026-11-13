import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

export default function AdmissionsAnnouncement() {
  return (
    <aside aria-label="Admissions announcement" className="border-b border-amber-200 bg-amber-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800"><Megaphone size={16} /> Announcement</span>
        <div className="flex-1 text-xs leading-relaxed text-slate-700">
          <strong className="text-slate-950">Introducing DAE in Artificial Intelligence Technology and Cyber Security and Networks Technology.</strong>{" "}
          Admissions for boys and girls in Software, CIT, AI, Cyber Security and Networks, and Chemical Technology. Three-year programs with annual SBTE examinations.
        </div>
        <Link href="/admissions/apply-now" className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-amber-900 underline-offset-4 hover:underline">Apply now <ArrowRight size={14} /></Link>
      </div>
    </aside>
  );
}
