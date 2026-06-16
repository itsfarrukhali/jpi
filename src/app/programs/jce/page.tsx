import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { getPublishedPrograms } from "@/lib/program-data";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Sun,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jinnah Center of Excellence (JCE) — Certified Short Courses",
  description:
    "Jinnah Center of Excellence at JPI offers practical certified short courses. These institute certificates are skill-focused and are not SBTE-affiliated diploma programs.",
};

export const dynamic = "force-dynamic";

const highlights = [
  { icon: Award, label: "Institute Certificate Awarded" },
  { icon: Users, label: "Experienced Instructors" },
  { icon: Sun, label: "Practical Learning Environment" },
  { icon: Briefcase, label: "Career-Oriented Skills" },
  { icon: CheckCircle2, label: "Not an SBTE Diploma Program" },
];

export default async function JCEPage() {
  const [shortCourses, excellenceCourses] = await Promise.all([
    getPublishedPrograms("SHORT_COURSES"),
    getPublishedPrograms("JEC"),
  ]);
  const courses = [...shortCourses, ...excellenceCourses];

  return (
    <>
      <PageHero
        title="Jinnah Center of Excellence"
        subtitle="Certified short courses for practical skill development and career growth"
        breadcrumbs={[{ label: "Programs" }, { label: "JCE Short Courses" }]}
        imageUrl="https://picsum.photos/1600/500?random=52"
      />

      <section className="border-b border-amber-100 bg-linear-to-br from-amber-50 to-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-amber-200 bg-amber-100 px-4 py-1.5">
              <GraduationCap size={14} className="text-amber-700" />
              <span className="text-xs font-medium uppercase tracking-wider text-amber-800">
                JCE Initiative
              </span>
            </div>
            <h1 className="mb-4 font-serif text-3xl font-bold text-gray-800 md:text-4xl">
              JPI&apos;s Certified Short Courses Under One Center
            </h1>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              Jinnah Center of Excellence (JCE) is JPI&apos;s dedicated skill
              development initiative. The courses listed here are short,
              practical, certificate-based programs conducted by JPI.
            </p>
            <p className="mb-6 border-l-4 border-amber-500 bg-white px-4 py-3 text-xs leading-relaxed text-gray-600">
              Important: JCE short course certificates are issued by JPI for
              skill development. They are separate from SBTE-affiliated DAE and
              diploma programs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admissions/apply-now"
                className="inline-flex items-center gap-2 bg-amber-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600"
              >
                Apply Now
              </Link>
              <Link
                href="/admissions/how-to-apply"
                className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                How to Apply
              </Link>
            </div>
          </div>
          <div className="border border-gray-200 bg-white p-6">
            <h3 className="mb-4 border-b border-gray-200 pb-2 text-sm font-semibold text-gray-800">
              What JCE Offers
            </h3>
            <div className="space-y-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon size={16} className="shrink-0 text-amber-600" />
                    <span className="text-xs text-gray-700">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 flex items-center gap-2 border-b border-gray-200 pb-2 text-xl font-bold text-gray-800">
            <Sun size={18} className="text-amber-600" />
            Available JCE Short Courses
          </h2>

          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply-now"
              />
            ))}
          </div>

          <h2 className="mb-6 border-b border-gray-200 pb-2 text-xl font-bold text-gray-800">
            Course Details
          </h2>
          <div className="space-y-4">
            {courses.map((program) => (
              <details
                key={program.id}
                className="group border border-gray-200 bg-gray-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 font-medium text-gray-800 transition-colors hover:bg-gray-100">
                  <span>
                    {program.shortName}
                    <span className="ml-2 text-xs font-normal text-gray-400">
                      — {program.duration}
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-gray-500 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 pb-5 pt-2">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Curriculum
                      </h4>
                      <ul className="space-y-1">
                        {program.subjects.flatMap((section) =>
                          section.items.map((item) => (
                            <li
                              key={`${section.year}-${item}`}
                              className="flex items-start gap-1.5 text-xs text-gray-600"
                            >
                              <span className="mt-0.5 text-amber-600">—</span>
                              {section.year === "Curriculum"
                                ? item
                                : `${section.year}: ${item}`}
                            </li>
                          )),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Career Opportunities
                      </h4>
                      <ul className="space-y-1">
                        {program.careers.map((career) => (
                          <li
                            key={career}
                            className="flex items-start gap-1.5 text-xs text-gray-600"
                          >
                            <span className="mt-0.5 text-amber-600">—</span>
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

      <section className="bg-gray-800 py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "2 Months", label: "Typical Duration" },
            { value: `${courses.length}`, label: "Available Courses" },
            { value: "Limited", label: "Seats Per Batch" },
            { value: "JPI", label: "Certificate Issuer" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-amber-400">
                {item.value}
              </div>
              <div className="mt-1 text-xs text-white/60">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-200 bg-white py-12 text-center">
        <h2 className="mb-2 text-lg font-bold text-gray-800">
          Ready to Learn a Practical Skill?
        </h2>
        <p className="mb-6 text-xs text-gray-500">
          Limited seats available. Enroll now to secure your place.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/admissions/how-to-apply"
            className="border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            How to Apply
          </Link>
          <Link
            href="/admissions/apply-now"
            className="bg-amber-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600"
          >
            Register for JCE Courses
          </Link>
        </div>
      </div>
    </>
  );
}
