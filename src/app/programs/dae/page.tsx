import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { daePrograms } from "@/data/programs";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "DAE Programs",
  description:
    "3-year Diploma of Associate Engineering programs at Jinnah Polytechnic Institute — Civil, Electrical, Mechanical, Electronics, Software, CIT, Refrigeration & AC, and Bio-Medical. SBTE Sindh affiliated.",
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

          {/* Curriculum Accordions */}
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Curriculum Overview
          </h2>
          <div className="space-y-4">
            {daePrograms.map((program) => (
              <details
                key={program.id}
                className="group bg-gray-50 border border-gray-200"
              >
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-100 transition-colors">
                  <span>{program.shortName}</span>
                  <ChevronDown
                    size={16}
                    className="text-gray-500 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                  {program.subjects.map((yr) => (
                    <div key={yr.year}>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">
                        {yr.year}
                      </h4>
                      <ul className="space-y-1">
                        {yr.items.map((subj) => (
                          <li
                            key={subj}
                            className="text-xs text-gray-600 flex items-start gap-1.5"
                          >
                            <span className="text-amber-600 mt-0.5">—</span>
                            {subj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
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
