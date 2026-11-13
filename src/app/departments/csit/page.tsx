import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Briefcase, ChevronDown, FlaskConical, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { departments, facultyMembers } from "@/data/departments";
import { csitDepartmentPrograms } from "@/data/csit-department";
import { getPublishedPrograms } from "@/lib/program-data";
import { getCSITCourseGroups } from "@/lib/csit-programs";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "CSIT - Computer Science and Information Technology",
  description: "JPI's CSIT department: DAE Software, Computer Information Technology, Artificial Intelligence, and Cyber Security and Networks. Courses, practical facilities, career scope, and faculty.",
};

export default async function CSITDepartmentPage() {
  const department = departments.find((item) => item.slug === "csit")!;
  const published = await getPublishedPrograms("DAE");
  const technologies = csitDepartmentPrograms.flatMap((detail) => {
    const program = published.find((item) => (item.slug === "sc-ai" ? "dae-ai" : item.slug) === detail.slug);
    return program ? [{ ...detail, program, courseGroups: getCSITCourseGroups(program) }] : [];
  });
  const faculty = facultyMembers.filter((member) => member.department === "CSIT");

  return (
    <>
      <PageHero title="CSIT" subtitle="Department of Computer Science and Information Technology" breadcrumbs={[{ label: "Departments", href: "/departments" }, { label: "CSIT" }]} imageUrl={department.image} imageAlt="Computer Science and Information Technology department" />

      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Computer Science and Information Technology</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">The CSIT department brings together Software Technology, Computer Information Technology, Artificial Intelligence Technology, and Cyber Security and Networks Technology. Each DAE program follows a three-year annual system with SBTE examinations for each year.</p>
          <p className="mb-6 text-xs text-gray-600">Admissions for boys and girls. Department lead: {department.hod}, {department.hodDesignation}.</p>
          <nav aria-label="CSIT page sections" className="flex flex-wrap gap-2">
            {[ ["#programs", "Programs & Overview"], ["#courses", "Courses"], ["#labs", "Labs & Facilities"], ["#careers", "Career Scope"], ["#faculty", "Faculty"] ].map(([href, label]) => <a key={href} href={href} className="border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100">{label}</a>)}
          </nav>
        </div>
      </section>

      <section id="programs" className="scroll-mt-24 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800">Programs, Introduction &amp; Overview</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {technologies.map((technology) => <article key={technology.slug} className="flex flex-col border border-gray-200 bg-white p-5">
              <h3 className="mb-3 text-base font-semibold text-gray-800">DAE {technology.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">{technology.introduction}</p>
              <ul className="mb-5 list-disc space-y-2 pl-4 text-xs leading-relaxed text-gray-600">{technology.overview.map((point) => <li key={point}>{point}</li>)}</ul>
              <Link href={`/programs/dae#${technology.slug}`} className="mt-auto text-xs font-medium text-primary hover:underline">View Program &amp; Fee Structure →</Link>
            </article>)}
          </div>
        </div>
      </section>

      <section id="courses" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800"><BookOpen size={16} className="text-amber-600" />Courses Offered</h2>
          <p className="mb-6 text-xs text-gray-500">Complete year-wise course lists for each technology. Detailed hours and credits are available on the DAE Programs page.</p>
          <div className="space-y-4">{technologies.map((technology) => <details key={technology.slug} className="group border border-gray-200 bg-gray-50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 text-sm font-medium text-gray-800 hover:bg-gray-100"><span>{technology.name}</span><ChevronDown size={16} className="shrink-0 text-gray-500 transition-transform group-open:rotate-180" /></summary>
            <div className="space-y-6 border-t border-gray-200 bg-white p-5">{technology.courseGroups.map((group, index) => <div key={`${group.year}-${index}`}>
              <h3 className="mb-3 text-sm font-semibold text-gray-800">{group.year}</h3>
              <ol className="grid gap-2 sm:grid-cols-2">{group.items.map((course, courseIndex) => <li key={`${course}-${courseIndex}`} className="flex items-start gap-3 border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs text-gray-700"><span className="shrink-0 text-amber-600">{courseIndex + 1}.</span>{course}</li>)}</ol>
            </div>)}</div>
          </details>)}</div>
        </div>
      </section>

      <section id="labs" className="scroll-mt-24 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800"><FlaskConical size={16} className="text-amber-600" />Labs &amp; Facilities</h2>
          <div className="grid gap-5 sm:grid-cols-2">{technologies.map((technology) => <article key={technology.slug} className="border border-gray-200 bg-white p-5">
            <h3 className="mb-4 text-sm font-semibold text-gray-800">{technology.name}</h3>
            <ul className="space-y-4">{technology.labs.map((lab) => <li key={lab.name}><h4 className="mb-1 text-xs font-semibold text-gray-800">{lab.name}</h4><p className="text-xs leading-relaxed text-gray-600">{lab.description}</p></li>)}</ul>
            {technology.labNote && <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-relaxed text-gray-500">{technology.labNote}</p>}
          </article>)}</div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800"><Briefcase size={16} className="text-amber-600" />Career Scope</h2>
          <div className="grid gap-5 sm:grid-cols-2">{technologies.map((technology) => <article key={technology.slug} className="border border-gray-200 bg-gray-50 p-5"><h3 className="mb-4 text-sm font-semibold text-gray-800">{technology.name}</h3><ul className="list-disc space-y-2 pl-4 text-xs text-gray-600">{technology.program.careers.map((career) => <li key={career}>{career}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section id="faculty" className="scroll-mt-24 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800"><Users size={16} className="text-amber-600" />Faculty Members</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{faculty.map((member) => <article key={member.id} className="flex items-center gap-4 border border-gray-200 bg-white p-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200">{member.photo ? <Image src={member.photo} alt={member.name} fill className="object-cover" /> : <span aria-hidden="true" className="flex h-full items-center justify-center text-xs font-semibold text-gray-600">{member.name.split(" ").slice(1).map((part) => part[0]).join("")}</span>}</div>
            <div><h3 className="text-xs font-medium text-gray-800">{member.name}</h3><p className="mt-1 text-xs text-amber-600">{member.designation}</p></div>
          </article>)}</div>
        </div>
      </section>

      <div className="border-t border-gray-200 bg-white py-12 text-center"><Link href="/admissions/apply-now" className="inline-flex border border-amber-600 px-5 py-2.5 text-sm font-medium text-amber-700 transition-colors hover:bg-amber-50">Apply for a CSIT Program →</Link></div>
    </>
  );
}
