import Link from "next/link";
import { Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { type Program } from "@/data/programs";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  DAE: "bg-[var(--color-primary)] text-white",
  CERT: "bg-[var(--color-gold)] text-white",
  SHORT: "bg-[var(--color-rust)] text-white",
  JEC: "bg-purple-600 text-white",
};

interface ProgramCardProps {
  program: Program;
  href: string;
}

export default function ProgramCard({ program, href }: ProgramCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <span
            className={cn(
              "text-xs font-semibold px-2.5 py-1 rounded-full",
              tagColors[program.tag] || "bg-gray-100 text-gray-600",
            )}
          >
            {program.tag}
          </span>
        </div>
        <h3 className="font-bold text-(--color-primary-dark) text-base leading-snug mb-2 group-hover:text-(--color-primary) transition-colors font-serif">
          {program.shortName}
        </h3>
        <p className="text-sm text-(--color-text-muted) leading-relaxed mb-4 flex-1">
          {program.description}
        </p>
        <div className="space-y-1.5 mb-5">
          <div className="flex items-center gap-2 text-xs text-(--color-text-muted)">
            <Clock size={12} className="text-(--color-gold) shrink-0" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-(--color-text-muted)">
            <Users size={12} className="text-(--color-gold) shrink-0" />
            <span>{program.seats} seats</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-(--color-text-muted)">
            <CheckCircle size={12} className="text-(--color-gold) shrink-0" />
            <span>{program.eligibility}</span>
          </div>
        </div>
        <Link
          href={href}
          className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-(--color-primary) text-white text-sm font-semibold hover:bg-(--color-primary-light) transition-colors"
        >
          Apply Now <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
