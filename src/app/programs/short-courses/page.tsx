import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { shortCourses } from "@/data/programs";
import {
  ChevronDown,
  Brain,
  Wrench,
  Sparkles,
  Users,
  Clock,
  Tag,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Short Courses",
  description:
    "Short courses and diploma programs at JPI Karachi — Artificial Intelligence, Welding, Electrician, Plumbing, IT Fundamentals. Build practical skills fast.",
};

// AI course
const aiCourse = shortCourses.find((c) => c.id === "sc-ai");
// Skilled trades
const tradeCourses = shortCourses.filter((c) => c.id !== "sc-ai");

const specialFeatures = [
  { icon: Tag, label: "50% Scholarship Available" },
  { icon: Users, label: "Limited Seats" },
  { icon: Clock, label: "Flexible Timings (Morning / Afternoon)" },
  { icon: Sparkles, label: "Practical Assignments" },
  { icon: MessageCircle, label: "WhatsApp Support" },
];

export default function ShortCoursesPage() {
  return (
    <>
      <PageHero
        title="Short Courses"
        subtitle="Build practical skills in 2 months to 1 year. Affordable, hands-on, and career-focused."
        breadcrumbs={[{ label: "Programs" }, { label: "Short Courses" }]}
        imageUrl="https://picsum.photos/1600/500?random=52"
      />

      {/* Overview */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed text-sm">
            Our short courses and diploma programs are designed for people who
            want to enter the workforce quickly or upgrade their skills. With
            minimum eligibility requirements and affordable fees, these programs
            open doors to stable, in-demand careers.
          </p>
        </div>
      </section>

      {/* ─── AI Program ─────────────────────────────── */}
      {aiCourse && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 border border-gray-200 overflow-hidden">
              {/* AI Header */}
              <div className="bg-gray-800 text-white p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Brain size={20} className="text-amber-400" />
                      <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                        1 Year Diploma Program
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold">
                      {aiCourse.name}
                    </h2>
                    <p className="text-sm text-white/70 mt-1">
                      For Boys &amp; Girls
                    </p>
                  </div>
                  <div className="bg-white/10 border border-white/20 px-5 py-3 text-center">
                    <div className="text-xs text-white/60 uppercase tracking-wider">
                      Duration
                    </div>
                    <div className="text-lg font-bold">{aiCourse.duration}</div>
                  </div>
                </div>
              </div>

              {/* AI Content */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Why Choose */}
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-600" />
                    Why Choose This Program
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Industry-Oriented Curriculum",
                      "Experienced Faculty",
                      "Internship Opportunities",
                      "Modern Computer Labs",
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="text-amber-600 mt-0.5 shrink-0">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Modules */}
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                    <ChevronDown size={14} className="text-amber-600" />
                    Course Modules
                  </h3>
                  <ul className="space-y-1.5">
                    {aiCourse.subjects[0].items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who Can Apply + Careers */}
                <div className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                      <Users size={14} className="text-amber-600" />
                      Who Can Apply
                    </h3>
                    <ul className="space-y-1.5">
                      {[
                        "Matric / Intermediate Students",
                        "Diploma Holders",
                        "Job Seekers & Professionals",
                      ].map((item) => (
                        <li
                          key={item}
                          className="text-xs text-gray-600 flex items-start gap-1.5"
                        >
                          <span className="text-amber-600 mt-0.5 shrink-0">
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-3">
                      Career Paths
                    </h3>
                    <ul className="space-y-1.5">
                      {aiCourse.careers.map((career) => (
                        <li
                          key={career}
                          className="text-xs text-gray-600 flex items-start gap-1.5"
                        >
                          <span className="text-amber-600 mt-0.5 shrink-0">
                            —
                          </span>
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Special Features Bar */}
              <div className="border-t border-gray-200 px-6 sm:px-8 py-4 bg-amber-50/50">
                <div className="flex flex-wrap gap-3 justify-center">
                  {specialFeatures.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.label}
                        className="flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 text-xs text-gray-700"
                      >
                        <Icon size={12} className="text-amber-600" />
                        {feature.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Skilled Trades ─────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 mb-3">
              <Wrench size={14} className="text-amber-600" />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skilled Trades
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Technical &amp; Vocational Courses
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Practical, hands-on training in high-demand trades — no prior
              experience required
            </p>
          </div>

          {/* Trade Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {tradeCourses.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply-now"
              />
            ))}
          </div>

          {/* Trade Course Accordions */}
          <div className="space-y-4">
            {tradeCourses.map((program) => (
              <details
                key={program.id}
                className="group bg-white border border-gray-200"
              >
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-50 transition-colors">
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

      {/* Who Are These Courses For */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 text-white p-8">
            <h3 className="font-bold text-lg mb-2">
              Who Are These Courses For?
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Short courses are ideal for school-leavers, homemakers re-entering
              the workforce, job seekers, or anyone who wants a quick, practical
              skill without a multi-year commitment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "School Leavers",
                "Career Changers",
                "Unemployed Youth",
                "Skill Upgraders",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-white/10 border border-white/20 px-4 py-3 text-sm font-medium text-center"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-12 bg-white text-center border-t border-gray-200">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/admissions/how-to-apply"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            How to Apply
          </Link>
          <Link
            href="/admissions/apply-now"
            className="px-5 py-2.5 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
          >
            Register for a Course →
          </Link>
        </div>
      </div>
    </>
  );
}
