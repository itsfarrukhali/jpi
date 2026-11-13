import type { ProgramRecord } from "@/types/programs";
import { BookOpen, ChevronDown } from "lucide-react";

export default function AnnualScheme({ program }: { program: ProgramRecord }) {
  const curriculum = program.curriculum;
  if (!curriculum) return null;
  return (
    <details className="group border border-gray-200 bg-gray-50">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 font-medium text-gray-800 transition-colors hover:bg-gray-100">
        <span className="flex items-center gap-2"><BookOpen size={14} className="shrink-0 text-amber-600" />{program.shortName}</span>
        <ChevronDown size={16} className="shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
      </summary>
      <div className="space-y-8 p-4 sm:p-6">
        {curriculum.notes?.map((note) => <p key={note} className="text-xs leading-relaxed text-slate-600">{note}</p>)}
        {curriculum.years.map((year) => (
          <section key={year.year}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><h3 className="font-semibold text-slate-900">Year {year.year}</h3><span className="text-xs text-slate-600">Published annual hours: {year.total.totalHours} / Credits: {year.total.creditHours}</span></div>
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full min-w-150 text-left text-xs">
                <caption className="sr-only">Year {year.year} scheme of studies for {program.shortName}</caption>
                <thead className="bg-gray-800 text-white"><tr>{["Code", "Subject", "Total Hrs", "T", "P", "C"].map((label) => <th key={label} scope="col" className="px-3 py-2">{label}</th>)}</tr></thead>
                <tbody>{year.courses.map((course, index) => <tr key={`${course.code}-${index}`} className="border-t border-slate-100 even:bg-slate-50"><td className="whitespace-nowrap px-3 py-3 text-slate-500">{course.code}</td><td className="px-3 py-3 font-medium text-slate-800">{course.name}</td><td className="px-3 py-3">{course.totalHours}</td><td className="px-3 py-3">{course.contactHours.theory}</td><td className="px-3 py-3">{course.contactHours.practical}</td><td className="px-3 py-3">{course.creditHours}</td></tr>)}</tbody>
                <tfoot className="border-t-2 border-gray-300 bg-gray-100 font-medium"><tr><th scope="row" colSpan={2} className="px-3 py-3">Published Year {year.year} Total</th><td className="px-3 py-3">{year.total.totalHours}</td><td className="px-3 py-3">{year.total.contactHours.theory}</td><td className="px-3 py-3">{year.total.contactHours.practical}</td><td className="px-3 py-3">{year.total.creditHours}</td></tr></tfoot>
              </table>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">T: Theory / P: Practical / C: Credits. Total Hrs is the annual hours figure from the supplied scheme, not T + P. Marks distribution is awaiting confirmation.</p>
          </section>
        ))}
      </div>
    </details>
  );
}
