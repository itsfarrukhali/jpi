import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { shortCourses } from "@/data/programs";

export const metadata: Metadata = {
  title: "Short Courses",
  description:
    "Rapid skill-building short courses at JPI Karachi — Welding, Electrician, Plumbing, IT Fundamentals and more.",
};

export default function ShortCoursesPage() {
  return (
    <>
      <PageHero
        title="Short Courses"
        subtitle="Build practical skills in 2–3 months. No prior experience required."
        breadcrumbs={[{ label: "Programs" }, { label: "Short Courses" }]}
        imageUrl="https://picsum.photos/1600/500?random=52"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-(--color-text-muted) leading-relaxed">
              Our short courses are designed for people who want to enter the
              workforce quickly. With minimum eligibility requirements and
              affordable fees, these programs open doors to stable, in-demand
              trades and technical roles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {shortCourses.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply"
              />
            ))}
          </div>
          <div className="bg-(--color-primary) text-white rounded-2xl p-8">
            <h3 className="font-bold text-2xl mb-2 font-serif">
              Who Are These Courses For?
            </h3>
            <p className="text-white/80 mb-6">
              Short courses are ideal for school-leavers, homemakers re-entering
              the workforce, or anyone who wants a quick, practical skill
              without a multi-year commitment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "School Leavers",
                "Career Changers",
                "Unemployed Youth",
                "Skill Upgraders",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-white/10 rounded-xl px-4 py-3 text-sm font-medium text-center"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-(--color-gold) text-white font-semibold hover:bg-(--color-gold-light) transition-colors shadow-md"
            >
              Register for a Course →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
