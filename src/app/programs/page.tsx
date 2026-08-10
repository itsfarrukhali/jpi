import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import {
  daePrograms,
  diplomaCertifications,
  certificationPrograms,
  shortCourses,
  jecPrograms,
  type Program,
} from "@/data/programs";
import type { ProgramRecord } from "@/types/programs";
import { Landmark, GraduationCap, Award, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programs",
  description:
    "Explore all academic programs offered at Jinnah Polytechnic Institute — DAE (3-Year Diplomas), Diploma Certifications, Certifications, and Jinnah Center of Excellence (JCE/JEC) Short Courses.",
};

function formatProgramToRecord(program: Program): ProgramRecord {
  let listingPage: ProgramRecord["listingPage"] = "DAE";
  if (program.category === "short-courses") listingPage = "SHORT_COURSES";
  else if (program.category === "certifications") listingPage = "CERTIFICATIONS";
  else if (program.category === "jec") listingPage = "JEC";

  let tag: ProgramRecord["tag"] = "DAE";
  if (program.tag === "CERT") tag = "CERT";
  else if (program.tag === "SHORT") tag = "SHORT";
  else if (program.tag === "JEC") tag = "JEC";

  let category: ProgramRecord["category"] = "dae";
  if (program.category === "certifications") category = "certifications";
  else if (program.category === "jec" || program.category === "short-courses") category = "jec";

  return {
    id: program.id,
    slug: program.id,
    name: program.name,
    shortName: program.shortName,
    department: null,
    duration: program.duration,
    seats: program.seats,
    eligibility: [program.eligibility],
    description: program.description,
    icon: program.icon,
    thumbnail: null,
    coverImage: null,
    tag,
    category,
    listingPage,
    subjects: program.subjects,
    curriculum: null,
    careers: program.careers,
    published: true,
  };
}

export default function ProgramsOverviewPage() {
  const daeRecords = daePrograms.map(formatProgramToRecord);
  const diplomaRecords = diplomaCertifications.map(formatProgramToRecord);
  const certRecords = certificationPrograms.map(formatProgramToRecord);
  const jceRecords = [...shortCourses, ...jecPrograms].map(formatProgramToRecord);

  return (
    <>
      <PageHero
        title="Academic Programs"
        subtitle="3-Year DAE Diplomas, Health Care Certifications &amp; Professional Short Courses"
        breadcrumbs={[{ label: "Programs" }]}
        imageUrl="https://picsum.photos/1600/500?random=55"
      />

      <section className="py-14 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Quick Jump Bar */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
                Filter Categories:
              </span>
              <a
                href="#dae-section"
                className="px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Landmark size={14} /> DAE Programs ({daeRecords.length})
              </a>
              <a
                href="#diploma-section"
                className="px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <GraduationCap size={14} /> Diploma Certifications ({diplomaRecords.length})
              </a>
              <a
                href="#cert-section"
                className="px-3.5 py-2 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Award size={14} /> Certifications ({certRecords.length})
              </a>
              <a
                href="#jce-section"
                className="px-3.5 py-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Sparkles size={14} /> JCE Short Courses ({jceRecords.length})
              </a>
            </div>

            <Link
              href="/admissions/fee-structure"
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <BookOpen size={14} /> View All Fee Structures
            </Link>
          </div>

          {/* 1. DAE Programs */}
          <div id="dae-section" className="scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-700 text-white">
                  DAE (3 Years)
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                  <Landmark size={20} className="text-blue-700" />
                  Diploma of Associate Engineer (DAE)
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  SBTE Affiliated 3-Year Technical Engineering Diplomas
                </p>
              </div>
              <Link
                href="/programs/dae"
                className="text-xs font-semibold text-blue-700 hover:text-blue-800 underline"
              >
                View Full DAE Curriculum &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {daeRecords.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  href="/admissions/apply-now"
                />
              ))}
            </div>
          </div>

          {/* 2. Diploma Certifications */}
          <div id="diploma-section" className="scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-700 text-white">
                  Health Care Technology
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                  <GraduationCap size={20} className="text-emerald-700" />
                  Diploma Certifications
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Jinnah Health Care Technology Diplomas &amp; Allied Health Courses
                </p>
              </div>
              <Link
                href="/programs/diploma-certifications"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline"
              >
                View Diploma Certifications &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {diplomaRecords.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  href="/admissions/apply-now"
                />
              ))}
            </div>
          </div>

          {/* 3. Certifications */}
          <div id="cert-section" className="scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-600 text-white">
                  Skill Boosters
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                  <Award size={20} className="text-amber-600" />
                  Certifications
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Short Professional Certificate Courses
                </p>
              </div>
              <Link
                href="/programs/certifications"
                className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline"
              >
                View Certifications &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {certRecords.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  href="/admissions/apply-now"
                />
              ))}
            </div>
          </div>

          {/* 4. Jinnah Center of Excellence (JCE & JEC) */}
          <div id="jce-section" className="scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-700 text-white">
                  Summer Camp &amp; Short Courses
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                  <Sparkles size={20} className="text-purple-700" />
                  Jinnah Center of Excellence (JCE &amp; JEC)
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  2-Month Practical Hands-On Training Courses
                </p>
              </div>
              <Link
                href="/programs/short-courses"
                className="text-xs font-semibold text-purple-700 hover:text-purple-800 underline"
              >
                View JCE Short Courses &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {jceRecords.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  href="/admissions/apply-now"
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
