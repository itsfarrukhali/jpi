import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  Shield,
  Target,
  Users,
  BookOpen,
  Briefcase,
  UserCheck,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Enhancement Cell (QEC)",
  description:
    "JPI's Quality Enhancement Cell — internal quality assurance, strategic objectives, and JPI SEA Cell for student employment and career development.",
};

const strategicObjectives = [
  "Maintaining and enhancing the academic rigor and professional relevance of DAE programs",
  "Providing systems for an efficient and effective utilization of the academic resources of the Institute",
  "Collection of department-wise data and set benchmark",
  "Assess the current status of educational quality at the departmental level",
  "Monitoring and implementation of the recommendations",
  "Train faculty and staff to implement quality at every step",
  "Monitor the implementation of best practices",
];

const qecAims = [
  {
    icon: FileText,
    title: "Policy Making",
  },
  {
    icon: TrendingUp,
    title: "Quality Promotion",
  },
  {
    icon: Users,
    title: "Capacity Development",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Improvement",
  },
  {
    icon: UserCheck,
    title: "Faculty Assessments",
  },
  {
    icon: BookOpen,
    title: "Departmental Reviews",
  },
];

const seaCellComposition = [
  { designation: "Principal / Executive Director", role: "Executive Head" },
  { designation: "Vice Principal", role: "Advisor" },
  { designation: "Academic Coordinator", role: "In-charge" },
  { designation: "All HODs / Advisor QEC", role: "Members" },
];

const seaCellActivities = [
  "JPI Alumni Meet Up",
  "Employment / Apprenticeship / Entrepreneurship",
  "Professional Skills Development Programs",
  "Career Counseling and Professional Guidance",
  "Higher Education Counseling",
  "Industrial / Study Visits within City / Country / Abroad",
  "Guest Lectures Series",
  "Help in Selection of Technology for Newcomers",
];

export default function QECPage() {
  return (
    <>
      <PageHero
        title="Quality Enhancement Cell"
        subtitle="Internal quality assurance and student career development at Jinnah Polytechnic Institute"
        breadcrumbs={[{ label: "About", href: "/about-us" }, { label: "QEC" }]}
        imageUrl="https://picsum.photos/1600/500?random=70"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* ─── What is QEC ─────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Shield size={18} className="text-amber-600" />
              What is Quality Enhancement Cell?
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Internal Quality Assurance Mechanism
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6 space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                Quality Enhancement Cell (QEC) implements the internal quality
                assurance (IQA) mechanism of the Institute to adopt best
                practices to develop the institute into a best institution of
                the country for higher studies and technical education.
              </p>
              <p>
                Keeping in view the contemporary needs, QEC provides an
                educational environment for preparing students equipped with
                competencies and social responsibility to bring social change
                through educational reforms and to prosper the economy of the
                country.
              </p>
            </div>
          </div>

          {/* ─── Strategic Quality Objectives ────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Target size={18} className="text-amber-600" />
              Strategic Quality Objectives
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              The strategic quality objectives of the QEC
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <div className="space-y-3">
                {strategicObjectives.map((obj, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-xs text-gray-600"
                  >
                    <span className="w-5 h-5 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {obj}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── QEC Aims ────────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Target size={18} className="text-amber-600" />
              QEC Aims
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Core focus areas of the Quality Enhancement Cell
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {qecAims.map((aim) => {
                const Icon = aim.icon;
                return (
                  <div
                    key={aim.title}
                    className="bg-gray-50 border border-gray-200 p-4 flex items-center gap-3"
                  >
                    <Icon size={18} className="text-amber-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {aim.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Divider ─────────────────────────────── */}
          <div className="border-t border-gray-200" />

          {/* ─── JPI SEA CELL ────────────────────────── */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 mb-3">
                <Briefcase size={14} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                  JPI SEA CELL
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Students&apos; Employment &amp; Advisory Cell
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Bridging academia and industry for student career development
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                The purpose of <strong>JPI SEA CELL</strong> is to manage and
                facilitate an extensive internship program for JPI students by
                establishing collaboration between Academia &amp; Industry via
                development of sustainable partnership to meet the latest
                requirements.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Jinnah Polytechnic Institute produces work-ready Diploma Holders
                equipped with the right mix of technical skills, critical
                thinking and business knowledge to meet the ongoing industrial
                demands enabling them to drive innovation in their respective
                technology. The JPI SEA CELL links with the business sector and
                renowned industries for creating career development avenues for
                students.
              </p>
            </div>

            {/* Composition + Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Composition */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <Users size={16} className="text-amber-600" />
                  Composition of JPI SEA CELL
                </h3>
                <div className="space-y-2">
                  {seaCellComposition.map((member, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border border-gray-200 p-3 flex items-center justify-between"
                    >
                      <span className="text-xs text-gray-700">
                        {member.designation}
                      </span>
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Activities */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <Lightbulb size={16} className="text-amber-600" />
                  Major Activities
                </h3>
                <div className="space-y-2">
                  {seaCellActivities.map((activity, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border border-gray-200 p-3 flex items-start gap-3"
                    >
                      <ArrowRight
                        size={12}
                        className="text-amber-600 mt-1 shrink-0"
                      />
                      <span className="text-xs text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── CTA ─────────────────────────────────── */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3 justify-center">
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
