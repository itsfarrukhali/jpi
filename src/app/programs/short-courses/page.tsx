import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { shortCourses } from "@/data/programs";
import {
  ChevronDown,
  Sun,
  Users,
  Award,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Summer Camp 2026 — Short Courses",
  description:
    "JPI Summer Camp 2026 — 2-month skill development short courses. Workshop Machinist, Industrial Automation, Office Automation, Web Development, Digital Marketing, Advanced Welding, AutoCAD, RAC.",
};

const highlights = [
  { icon: Award, label: "Practical Training" },
  { icon: Users, label: "Experienced Instructors" },
  { icon: Sun, label: "Modern Learning Environment" },
  { icon: Briefcase, label: "Career-Oriented Courses" },
  { icon: CheckCircle2, label: "Certificate Awarded" },
];

export default function ShortCoursesPage() {
  return (
    <>
      <PageHero
        title="Summer Camp 2026"
        subtitle="Short Courses for Skill Development & Career Growth — Admissions Open"
        breadcrumbs={[{ label: "Programs" }, { label: "Short Courses" }]}
        imageUrl="https://picsum.photos/1600/500?random=52"
      />

      {/* Hero Banner */}
      <section className="py-16 bg-linear-to-br from-amber-50 to-white border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-1.5 mb-4">
                <Sun size={14} className="text-amber-600" />
                <span className="text-xs font-medium text-amber-700 uppercase tracking-wider">
                  Summer 2026
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
                Summer Camp — Short Courses
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We offer short courses for skill development and career growth.
                2-month practical training programs designed to make you
                job‑ready with industry‑relevant skills.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/admissions/apply-now"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/admissions/how-to-apply"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  How to Apply
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 text-sm mb-4 pb-2 border-b border-gray-200">
                Why Choose Summer Camp?
              </h3>
              <div className="space-y-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <Icon size={16} className="text-amber-600 shrink-0" />
                      <span className="text-xs text-gray-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Sun size={18} className="text-amber-600" />
            Available Courses — 2 Months
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {shortCourses.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply-now"
              />
            ))}
          </div>

          {/* Course Details Accordions */}
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Course Details
          </h2>
          <div className="space-y-4">
            {shortCourses.map((program) => (
              <details
                key={program.id}
                className="group bg-gray-50 border border-gray-200"
              >
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-100 transition-colors">
                  <span>
                    {program.shortName}
                    <span className="text-xs text-gray-400 font-normal ml-2">
                      — {program.duration}
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-gray-500 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-5 pb-5 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <h4 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Curriculum
                      </h4>
                      <ul className="space-y-1">
                        {program.subjects[0].items.map((item) => (
                          <li
                            key={item}
                            className="text-xs text-gray-600 flex items-start gap-1.5"
                          >
                            <span className="text-amber-600 mt-0.5">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Career Opportunities
                      </h4>
                      <ul className="space-y-1">
                        {program.careers.map((career) => (
                          <li
                            key={career}
                            className="text-xs text-gray-600 flex items-start gap-1.5"
                          >
                            <span className="text-amber-600 mt-0.5">—</span>
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2 Months", label: "Duration" },
              { value: "8 Courses", label: "Available" },
              { value: "Limited", label: "Seats Per Batch" },
              { value: "2026", label: "Summer Camp" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold text-amber-400">
                  {item.value}
                </div>
                <div className="text-xs text-white/60 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-12 bg-white text-center border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Ready to Start Your Summer Journey?
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Limited seats available. Enroll now to secure your place.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/admissions/how-to-apply"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            How to Apply
          </Link>
          <Link
            href="/admissions/apply-now"
            className="px-5 py-2.5 bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 transition-colors"
          >
            Register for Summer Camp →
          </Link>
        </div>
      </div>
    </>
  );
}
