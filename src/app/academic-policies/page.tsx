import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  GraduationCap,
  Building2,
  ArrowUpRight,
  FileCheck,
  AlertTriangle,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Policies",
  description:
    "Academic policies at JPI — higher education opportunities, promotion & attendance rules, grade system, and JIMSET degree programs.",
};

const higherEducationOptions = [
  {
    title: "Bachelor of Studies / Science",
    desc: "Articulation into general bachelor's degree programs at recognized universities.",
    icon: GraduationCap,
  },
  {
    title: "B.Sc / B.Com / BBA / BA",
    desc: "Admission to commerce, business administration, and arts programs with DAE qualification.",
    icon: BookOpen,
  },
  {
    title: "Bachelor of Engineering Technology (B.E. Tech)",
    desc: "Reserved seats for DAE graduates in Engineering Universities and institutions accredited with Pakistan Engineering Council (PEC).",
    icon: Award,
  },
];

const jimsetPrograms = [
  {
    name: "Bachelor of Engineering Technology (Electrical)",
    duration: "4 Years — Evening Program",
  },
  {
    name: "Bachelor of Engineering Technology (Mechanical)",
    duration: "4 Years — Evening Program",
  },
];

const gradeSystem = [
  { number: 1, marks: "80% and above", grade: "A+", remarks: "Excellent" },
  {
    number: 2,
    marks: "70% or above & below 80%",
    grade: "A",
    remarks: "V-Good",
  },
  { number: 3, marks: "60% or above & below 70%", grade: "B", remarks: "Good" },
  { number: 4, marks: "50% or above & below 60%", grade: "C", remarks: "Fair" },
  {
    number: 5,
    marks: "40% or above & below 50%",
    grade: "D",
    remarks: "Satisfactory",
  },
];

const attendanceRules = [
  "A candidate must have completed overall attendance of 75% in all subjects — both theory and practical.",
  "Students falling below 75% attendance may be terminated or barred from appearing in the examination.",
  "The Principal / Executive Director may condone overall attendance up to 10% shortage on the basis of genuine grounds produced before him for his satisfaction.",
  "Attendance shall be counted on the basis of total number of contact hours of theory and practical for which the classes were actually held during an academic session.",
  "If a candidate is officially sent to take part in co-curricular activities, his percentage of attendance will be counted including the lessons/practical missed during the authorized absence.",
  "No Examination form or fee shall be accepted unless it is routed through the Principal / Executive Director concerned.",
  "The Principal / Executive Director will not send the Examination forms of candidates having less than 65% attendance.",
  "The detailed record of attendance shall be produced for inspection to the Board or on inspection of senior officer as and when required.",
];

const examEligibilityRules = [
  "If a candidate is short of the required percentage of attendance at the time of submission of Examination Form and fee to the board but is likely to make up the shortage in due course of time, the Head of institution may send his Examination Form and fee provisionally to the board subject to confirmation when the candidate actually makes up the shortage.",
  "In case the candidate is unable to make up the shortage, the Principal / Executive Director of institution shall withdraw his candidature by writing to the Controller of Examination not later than 15th day before the commencement of the Examination.",
  "The institution will conduct one Send Up / Mid Term examination for the First, Second, and Third year classes respectively during the academic session.",
  "The student has to appear in all the theory subjects of his technology and show satisfactory performance.",
];

export default function AcademicPoliciesPage() {
  return (
    <>
      <PageHero
        title="Academic Policies"
        subtitle="Higher education opportunities, promotion rules, attendance requirements, and grade system at Jinnah Polytechnic Institute"
        breadcrumbs={[
          { label: "About", href: "/about-us" },
          { label: "Academic Policies" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=72"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* ─── Higher Education Opportunities ──────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <GraduationCap size={18} className="text-amber-600" />
              Higher Education Opportunities
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Pathways available for Diploma of Associate Engineer graduates in
              Government and recognized institutions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {higherEducationOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="bg-gray-50 border border-gray-200 p-5"
                  >
                    <Icon size={22} className="text-amber-600 mb-3" />
                    <h3 className="font-medium text-gray-800 text-sm mb-1.5">
                      {option.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {option.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── JIMSET ──────────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Building2 size={18} className="text-amber-600" />
              Jinnah Institute of Management Sciences, Engineering, and
              Technology (JIMSET)
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              4-Year Graduate Degree Programs — New Block at JPI
            </p>

            {/* About JIMSET */}
            <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                JPI has newly introduced a block area dedicated to our 4-year
                graduate degree program. This block is named the{" "}
                <strong>
                  Jinnah Institute of Management Sciences, Engineering, and
                  Technology (JIMSET)
                </strong>
                .
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                JIMSET is a premier institution dedicated to advancing knowledge
                and fostering innovation. With a focus on engineering,
                technology, and new media, it provides a dynamic learning
                environment that empowers students to excel. Our commitment to
                academic excellence and practical skills development equips
                future leaders to thrive in an ever-evolving world.
              </p>
            </div>

            {/* Affiliation */}
            <div className="bg-blue-50 border border-blue-100 p-5 mb-6">
              <h3 className="font-medium text-gray-800 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-600" />
                Affiliation &amp; Accreditation
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                JIMSET is affiliated with{" "}
                <strong>
                  Benazir Bhutto Shaheed University of Technology and Skill
                  Development, Khairpur Mirs (BBSUTSD)
                </strong>
                , and Accredited by{" "}
                <strong>National Technology Council (NTC)</strong>.
              </p>
            </div>

            {/* Programs Offered */}
            <div>
              <h3 className="font-medium text-gray-800 text-sm mb-3 pb-2 border-b border-gray-200">
                Currently Offering — Bachelor of Engineering &amp; Technology
                Programs (Evening)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {jimsetPrograms.map((program) => (
                  <div
                    key={program.name}
                    className="bg-gray-50 border border-gray-200 p-4 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">
                        {program.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {program.duration}
                      </p>
                    </div>
                    <Link
                      href="https://jimset.com/"
                      target="_blank"
                      className="text-amber-600 hover:underline text-xs font-medium flex items-center gap-1"
                    >
                      <ArrowUpRight
                        size={16}
                        className="text-amber-600 shrink-0"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Promotion Rules ─────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FileCheck size={18} className="text-amber-600" />
              Promotion Rules — Prescribed by SBTE
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Students must maintain a minimum attendance of 75% in all subjects
              — both theory and practical. Students falling below 75% attendance
              may be <strong>terminated</strong> or{" "}
              <strong>barred from appearing in the exam</strong>.
            </p>

            {/* Award of Diploma — Grade System */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 text-sm mb-3 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Award size={14} className="text-amber-600" />
                Award of Diploma — Grade Categories
              </h3>
              <div className="overflow-x-auto border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      {["No.", "Marks", "Grade", "Remarks"].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-2.5 text-left font-medium text-xs uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {gradeSystem.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-5 py-2.5 text-gray-600 text-center">
                          {row.number}
                        </td>
                        <td className="px-5 py-2.5 text-gray-700">
                          {row.marks}
                        </td>
                        <td className="px-5 py-2.5">
                          <span className="font-bold text-gray-800">
                            {row.grade}
                          </span>
                        </td>
                        <td className="px-5 py-2.5 text-gray-600">
                          {row.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assessment Rules */}
            <div className="bg-gray-50 border border-gray-200 p-5">
              <h3 className="font-medium text-gray-800 text-sm mb-2">
                Assessment Rules of Institutional Examination
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The institution will conduct one Send Up / Mid Term examination
                for the First, Second, and Third year classes respectively
                during the academic session. The student has to appear in all
                the theory subjects of his technology and show satisfactory
                performance.
              </p>
            </div>
          </div>

          {/* ─── Attendance Rules ────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Clock size={18} className="text-amber-600" />
              Attendance Rules
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Detailed attendance requirements as prescribed by SBTE
            </p>

            <div className="bg-gray-50 border border-gray-200 p-6 space-y-3">
              {attendanceRules.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-600"
                >
                  <span className="w-4 h-4 rounded-full bg-gray-800 text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {rule}
                </div>
              ))}
            </div>
          </div>

          {/* ─── Examination Eligibility ─────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-600" />
              Examination Form &amp; Eligibility Rules
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Important provisions regarding examination form submission and
              provisional candidature
            </p>

            <div className="bg-amber-50 border border-amber-100 p-5 space-y-3">
              {examEligibilityRules.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-700"
                >
                  <CheckCircle2
                    size={12}
                    className="text-amber-600 shrink-0 mt-0.5"
                  />
                  {rule}
                </div>
              ))}
            </div>
          </div>

          {/* ─── CTA ─────────────────────────────────── */}
          <div className="text-center pt-8 border-t border-gray-200">
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
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
