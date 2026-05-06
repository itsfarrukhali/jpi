import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { daePrograms } from "@/data/programs";
import { departments, type Department, type Year } from "@/data/courses";
import { ChevronDown, BookOpen, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "DAE Programs",
  description:
    "3-year Diploma of Associate Engineering programs at Jinnah Polytechnic Institute — Civil, Electrical, Mechanical, Electronics, Software, CIT, Refrigeration & AC, and Chemical. SBTE Sindh affiliated.",
};

export default function DAEPage() {
  return (
    <>
      <PageHero
        title="DAE Programs"
        subtitle="3-Year Diploma of Associate Engineering — SBTE Sindh Affiliated"
        breadcrumbs={[{ label: "Programs" }, { label: "DAE" }]}
        imageUrl="https://picsum.photos/1600/500?random=50"
      />

      {/* Overview */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed text-sm">
            The Diploma of Associate Engineering (DAE) is a 3-year (6 semesters)
            technical qualification recognized across Pakistan. Graduates can
            work as Junior Engineers, Technicians, and Supervisors — or pursue
            B.Tech / BE degrees for further advancement. All programs are
            affiliated with <strong>SBTE Sindh</strong>.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">
            Available DAE Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {daePrograms.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply-now"
              />
            ))}
          </div>

          {/* Detailed Curriculum from courses.ts */}
          <h2 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b border-gray-200">
            Detailed Curriculum — SBTE Syllabus
          </h2>
          <p className="text-xs text-gray-500 mb-8">
            Complete course breakdown with contact hours, credit hours, and
            marks distribution as per SBTE revised syllabus
          </p>

          <div className="space-y-6">
            {departments.map((dept) => (
              <CurriculumSection key={dept.slug} department={dept} />
            ))}
          </div>

          {/* Career Prospects */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Career Prospects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {daePrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-gray-50 p-5 border border-gray-200"
                >
                  <h4 className="font-medium text-sm text-gray-800 mb-3">
                    {program.shortName}
                  </h4>
                  <ul className="space-y-1.5">
                    {program.careers.map((career) => (
                      <li
                        key={career}
                        className="text-xs text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-amber-600 mt-0.5">—</span>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/admissions/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Apply for DAE →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Curriculum Section Component ────────────────────

function CurriculumSection({ department }: { department: Department }) {
  return (
    <details className="group bg-gray-50 border border-gray-200">
      <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-100 transition-colors">
        <span className="flex items-center gap-2">
          <BookOpen size={14} className="text-amber-600" />
          {department.name}
        </span>
        <ChevronDown
          size={16}
          className="text-gray-500 group-open:rotate-180 transition-transform shrink-0"
        />
      </summary>

      <div className="px-5 pb-6 pt-2 space-y-8">
        {department.years.map((year) => (
          <YearSection key={year.year} year={year} />
        ))}

        {/* Grand Total */}
        <div className="border-t border-gray-300 pt-4">
          <GrandTotal total={department.grandTotal} />
        </div>
      </div>
    </details>
  );
}

// ─── Year Section Component ──────────────────────────

function YearSection({ year }: { year: Year }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-3">
        <h4 className="font-semibold text-sm text-gray-800">
          Year {year.year}
        </h4>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={11} className="text-amber-600" />
            Contact Hrs:{" "}
            {year.total.contactHours.theory + year.total.contactHours.practical}
          </span>
          <span className="flex items-center gap-1">
            <Award size={11} className="text-amber-600" />
            Credit Hrs: {year.total.creditHours}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={11} className="text-amber-600" />
            Marks: {year.total.marks.total}
          </span>
        </div>
      </div>

      {/* Courses Table */}
      <div className="overflow-x-auto border border-gray-200 mb-4">
        <table className="w-full text-xs">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-3 py-2 text-left font-medium w-8">#</th>
              <th className="px-3 py-2 text-left font-medium">Course</th>
              <th className="px-3 py-2 text-center font-medium w-16">T</th>
              <th className="px-3 py-2 text-center font-medium w-16">P</th>
              <th className="px-3 py-2 text-center font-medium w-16">CH</th>
              <th className="px-3 py-2 text-center font-medium w-16">T</th>
              <th className="px-3 py-2 text-center font-medium w-16">P</th>
              <th className="px-3 py-2 text-center font-medium w-16">Total</th>
            </tr>
            <tr className="bg-gray-700 text-white/70 text-[10px]">
              <th className="px-3 py-1"></th>
              <th className="px-3 py-1 text-left">Name</th>
              <th className="px-3 py-1 text-center" colSpan={2}>
                Contact Hours
              </th>
              <th className="px-3 py-1 text-center">Credits</th>
              <th className="px-3 py-1 text-center" colSpan={3}>
                Marks
              </th>
            </tr>
          </thead>
          <tbody>
            {year.courses.map((course, i) => (
              <tr
                key={i}
                className={`border-t border-gray-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-3 py-1.5 text-gray-400 text-center">
                  {i + 1}
                </td>
                <td className="px-3 py-1.5 text-gray-700">
                  {course.code && (
                    <span className="text-gray-400 mr-1">{course.code}</span>
                  )}
                  {course.name}
                </td>
                <td className="px-3 py-1.5 text-center text-gray-600">
                  {course.contactHours.theory || "—"}
                </td>
                <td className="px-3 py-1.5 text-center text-gray-600">
                  {course.contactHours.practical || "—"}
                </td>
                <td className="px-3 py-1.5 text-center text-gray-700 font-medium">
                  {course.creditHours}
                </td>
                <td className="px-3 py-1.5 text-center text-gray-600">
                  {course.marks.theory || "—"}
                </td>
                <td className="px-3 py-1.5 text-center text-gray-600">
                  {course.marks.practical || "—"}
                </td>
                <td className="px-3 py-1.5 text-center text-gray-700 font-medium">
                  {course.marks.total}
                </td>
              </tr>
            ))}

            {/* Year Total Row */}
            <tr className="border-t-2 border-gray-300 bg-gray-100 font-medium">
              <td className="px-3 py-2" colSpan={2}>
                Year {year.year} Total
              </td>
              <td className="px-3 py-2 text-center text-gray-800">
                {year.total.contactHours.theory}
              </td>
              <td className="px-3 py-2 text-center text-gray-800">
                {year.total.contactHours.practical}
              </td>
              <td className="px-3 py-2 text-center text-gray-800">
                {year.total.creditHours}
              </td>
              <td className="px-3 py-2 text-center text-gray-800">
                {year.total.marks.theory}
              </td>
              <td className="px-3 py-2 text-center text-gray-800">
                {year.total.marks.practical}
              </td>
              <td className="px-3 py-2 text-center text-gray-800">
                {year.total.marks.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Year Summary Cards (Mobile) */}
      <div className="grid grid-cols-3 gap-3 lg:hidden">
        <div className="bg-white border border-gray-200 p-3 text-center">
          <div className="text-xs text-gray-500">Contact Hrs</div>
          <div className="text-sm font-medium text-gray-800">
            {year.total.contactHours.theory + year.total.contactHours.practical}
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-3 text-center">
          <div className="text-xs text-gray-500">Credit Hrs</div>
          <div className="text-sm font-medium text-gray-800">
            {year.total.creditHours}
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-3 text-center">
          <div className="text-xs text-gray-500">Marks</div>
          <div className="text-sm font-medium text-gray-800">
            {year.total.marks.total}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Grand Total Component ───────────────────────────

function GrandTotal({ total }: { total: Department["grandTotal"] }) {
  return (
    <div className="bg-gray-800 text-white p-5">
      <div className="flex flex-wrap items-center justify-between">
        <h4 className="font-semibold text-sm">Grand Total — 3 Years</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3 text-center">
        <div>
          <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
            Contact Hours
          </div>
          <div className="text-lg font-bold">
            {total.contactHours.theory + total.contactHours.practical}
          </div>
          <div className="text-xs text-white/50">
            Theory: {total.contactHours.theory} | Practical:{" "}
            {total.contactHours.practical}
          </div>
        </div>
        <div>
          <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
            Credit Hours
          </div>
          <div className="text-lg font-bold">{total.creditHours}</div>
        </div>
        <div>
          <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
            Theory Marks
          </div>
          <div className="text-lg font-bold">{total.marks.theory}</div>
        </div>
        <div>
          <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
            Practical Marks
          </div>
          <div className="text-lg font-bold">{total.marks.practical}</div>
        </div>
      </div>
      <div className="text-center mt-3 pt-3 border-t border-white/20">
        <span className="text-xs text-white/60 uppercase tracking-wider">
          Total Marks
        </span>
        <div className="text-xl font-bold">{total.marks.total}</div>
      </div>
    </div>
  );
}
