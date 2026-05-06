import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { departments, facultyMembers } from "@/data/departments";
import { departments as courseDepartments } from "@/data/courses";
import { Clock, BookOpen, FlaskConical, Briefcase, MapPin } from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return { title: "Department Not Found" };
  return {
    title: `${dept.name} — JPI`,
    description: `${dept.fullName} — ${dept.description.substring(0, 150)}`,
  };
}

export default async function DepartmentPage({ params }: Params) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();

  const deptFaculty = facultyMembers.filter(
    (f) =>
      f.department.toLowerCase() === dept.name.toLowerCase() ||
      f.department.toLowerCase() === dept.slug.toLowerCase() ||
      f.department.toLowerCase() === slug.toLowerCase(),
  );

  // pull course names from src/data/courses.ts (structured by years)
  const courseDept = courseDepartments.find((d) => d.slug === slug);
  const courseNames = courseDept
    ? Array.from(
        new Set(
          courseDept.years.flatMap((y) => y.courses.map((c) => c.name)),
        ),
      )
    : [];

  return (
    <>
      <PageHero
        title={dept.name}
        subtitle={dept.fullName}
        breadcrumbs={[
          { label: "Departments", href: "/departments" },
          { label: dept.name },
        ]}
        imageUrl={dept.image}
        imageAlt={dept.name}
      />

      {/* Department Overview */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-6">
            <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5">
              <Clock size={12} className="text-amber-600" />
              Established: {dept.established}
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5">
              <BookOpen size={12} className="text-amber-600" />
              DAE — 3 Years
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5">
              <MapPin size={12} className="text-amber-600" />
              Nazimabad-5, Karachi
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {dept.description}
          </p>
          <ul className="space-y-1.5">
            {dept.overview.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-gray-600"
              >
                <span className="text-amber-600 mt-0.5 shrink-0">—</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="text-center shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-amber-500/50">
                  <Image
                    src={dept.hodPhoto}
                    alt={dept.hod}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-medium text-gray-800 text-sm">
                  {dept.hod}
                </div>
                <div className="text-xs text-gray-500">
                  {dept.hodDesignation}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                  Message from the HOD
                </span>
                <blockquote className="text-sm text-gray-600 leading-relaxed mt-2 italic">
                  &ldquo;{dept.hodMessage}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses & Labs */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Courses */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <BookOpen size={16} className="text-amber-600" />
              Courses Offered
            </h2>
            <div className="space-y-2">
              {courseNames.map((course, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2.5 text-xs text-gray-700"
                >
                  <span className="w-5 h-5 rounded-full bg-gray-800 text-white text-xs flex items-center justify-center font-medium shrink-0">
                    {i + 1}
                  </span>
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Labs */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <FlaskConical size={16} className="text-amber-600" />
              Labs &amp; Facilities
            </h2>
            <div className="space-y-2">
              {dept.labs.map((lab, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2.5 text-xs text-gray-700"
                >
                  <span className="text-amber-600 shrink-0">—</span>
                  {lab}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Briefcase size={16} className="text-amber-600" />
            Career Scope
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dept.careerScope.map((career, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 px-4 py-3 text-xs text-gray-700 flex items-start gap-2"
              >
                <span className="text-amber-600 mt-0.5 shrink-0">—</span>
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      {deptFaculty.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Faculty Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deptFaculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-50 border border-gray-200 p-4 flex items-center gap-4"
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-xs">
                      {member.name}
                    </h4>
                    <p className="text-xs text-amber-600">
                      {member.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {dept.galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative border border-gray-200 overflow-hidden ${
                  i === 0
                    ? "md:col-span-2 md:row-span-2 aspect-video"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img}
                  alt={`${dept.name} gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
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
            Apply for {dept.name} →
          </Link>
        </div>
      </div>
    </>
  );
}
