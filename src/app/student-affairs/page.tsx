import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  Shield,
  AlertTriangle,
  ClipboardList,
  Scale,
  Gavel,
  MessageCircle,
  Users,
  BookOpen,
  Heart,
  Briefcase,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Student Affairs",
  description:
    "Student Affairs at JPI — discipline policy, rules & regulations, student support services, and campus life.",
};

const studentServices = [
  {
    icon: BookOpen,
    title: "Academic Counseling",
    desc: "One-on-one academic support sessions with experienced faculty mentors to help students excel in their studies.",
  },
  {
    icon: Heart,
    title: "Personal Support",
    desc: "Confidential guidance and support for students facing personal, emotional, or adjustment challenges.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Resume writing workshops, mock interviews, and job placement assistance through our industry network.",
  },
  {
    icon: GraduationCap,
    title: "Financial Aid Guidance",
    desc: "Information and assistance on scholarships, grants, and fee concession opportunities.",
  },
  {
    icon: Shield,
    title: "Anti-Harassment Support",
    desc: "Safe reporting mechanism and zero-tolerance policy for harassment of any kind on campus.",
  },
  {
    icon: MessageCircle,
    title: "Student Grievance Redressal",
    desc: "Formal channel for students to raise concerns and have them addressed fairly and promptly.",
  },
];

const disciplinePrinciples = [
  {
    title: "Code of Conduct",
    desc: "Every student must uphold the dignity and reputation of the Institute through their conduct, both on and off campus.",
  },
  {
    title: "Respect for Authority",
    desc: "Students must show due respect to faculty, staff, and fellow students at all times.",
  },
  {
    title: "Punctuality & Attendance",
    desc: "Regular and punctual attendance is mandatory for all academic and co-curricular activities.",
  },
  {
    title: "Dress Code",
    desc: "Students are required to maintain a decent and proper dress code as prescribed by the Institute.",
  },
  {
    title: "Property Care",
    desc: "Institute property, equipment, and facilities must be handled with care. Any damage is liable for recovery.",
  },
  {
    title: "Zero Tolerance",
    desc: "Ragging, harassment, substance use, and any form of violence are strictly prohibited and punishable.",
  },
];

const conductGuidelines = [
  "Students must carry their Institute Identity Card at all times within the campus.",
  "Mobile phones must be switched off or kept on silent during classes and lab sessions.",
  "Smoking, chewing gum, and eating in classrooms, labs, and corridors is not permitted.",
  "Students must maintain silence in the library and academic areas.",
  "Parking of vehicles must be in designated areas only.",
  "Students are expected to keep the campus clean and use waste bins.",
  "Political activities, unauthorized meetings, and distribution of pamphlets are prohibited.",
  "Students must obtain prior permission for organizing any event or activity.",
  "Misuse of Institute internet and computer facilities is strictly prohibited.",
  "Students must leave classrooms and labs promptly after sessions to allow for the next class.",
];

const disciplinaryActions = [
  "Verbal warning and counseling by the concerned HOD",
  "Written warning issued to the student and parents/guardians informed",
  "Fine as determined by the Disciplinary Committee",
  "Suspension from classes for a specified period",
  "Rustication from the Institute for a semester or academic year",
  "Expulsion from the Institute with cancellation of admission",
];

export default function StudentAffairsPage() {
  return (
    <>
      <PageHero
        title="Student Affairs"
        subtitle="Discipline, rules, regulations, and student support services at Jinnah Polytechnic Institute"
        breadcrumbs={[
          { label: "About", href: "/about-us" },
          { label: "Student Affairs" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=91"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* ─── Discipline ─────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Scale size={18} className="text-amber-600" />
              Discipline
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Student Code of Conduct &amp; Disciplinary Policy
            </p>

            <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                Strict discipline, both in letter and spirit, is required to be
                observed by the students. Any breach in discipline will render
                the students liable to disciplinary action including expulsion
                from the Institute. The{" "}
                <strong>Principal / Executive Director</strong> of the Institute
                shall be the sole and final authority in all matters pertaining
                to disciplinary action, interpretation of rules, and all other
                relevant matters.
              </p>
            </div>

            {/* Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {disciplinePrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="bg-gray-50 border border-gray-200 p-4"
                >
                  <h3 className="font-medium text-gray-800 text-sm mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Disciplinary Actions */}
            <div className="border border-red-100 bg-red-50 p-5">
              <h3 className="font-medium text-gray-800 text-sm mb-3 flex items-center gap-2">
                <AlertTriangle size={14} className="text-red-500" />
                Consequences of Breach — Disciplinary Actions
              </h3>
              <div className="space-y-1.5">
                {disciplinaryActions.map((action, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-700"
                  >
                    <span className="text-red-500 font-bold mt-0.5 shrink-0">
                      {i + 1}.
                    </span>
                    {action}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Rules & Regulations ────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <ClipboardList size={18} className="text-amber-600" />
              Rules &amp; Regulations
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Students are required to strictly follow all rules and regulations
              laid down by the Institute to properly regulate their academic and
              co-curricular activities.
            </p>

            <div className="bg-gray-50 border border-gray-200 p-6">
              <h3 className="font-medium text-gray-800 text-sm mb-4 pb-2 border-b border-gray-200">
                General Conduct Guidelines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {conductGuidelines.map((rule, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-600"
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
          </div>

          {/* ─── Final Authority ────────────────────── */}
          <div className="bg-gray-800 text-white p-6 text-center">
            <Gavel size={24} className="mx-auto text-amber-400 mb-3" />
            <p className="text-sm leading-relaxed">
              The <strong>Principal / Executive Director</strong> of the
              Institute shall be the sole and final authority in all matters
              pertaining to disciplinary action, interpretation of rules, and
              all other relevant matters.
            </p>
          </div>

          {/* ─── Student Support Services ────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Users size={18} className="text-amber-600" />
              Student Support Services
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              We are committed to supporting students beyond the classroom
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {studentServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-gray-50 border border-gray-200 p-5"
                  >
                    <Icon size={20} className="text-amber-600 mb-3" />
                    <h3 className="font-medium text-gray-800 text-sm mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Contact ────────────────────────────── */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Contact Administration →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
