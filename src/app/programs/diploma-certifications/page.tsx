import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { diplomaCertifications } from "@/data/programs";
import {
  ChevronDown,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diploma Certifications",
  description:
    "Diploma certification programs at Jinnah Polytechnic Institute — Physiotherapy, Nursing Assistant, Laboratory Technicians, and Artificial Intelligence. Affiliated with SBTE.",
};

// Separate health care from tech diploma
const healthCareDiplomas = diplomaCertifications.filter(
  (p) =>
    p.id === "cert-physiotherapy" ||
    p.id === "cert-nursing" ||
    p.id === "cert-lab-technician",
);

const techDiplomas = diplomaCertifications.filter((p) => p.id === "sc-ai");

const whyChoose = [
  {
    title: "Hands-On Training",
    desc: "State-of-the-art labs and equipment for real-world practical experience.",
  },
  {
    title: "Experienced Faculty",
    desc: "Learn from qualified instructors with industry and clinical experience.",
  },
  {
    title: "Career Support",
    desc: "Job placement assistance and strong network with hospitals and tech companies.",
  },
  {
    title: "Affordable Education",
    desc: "Quality diploma programs at accessible fees with scholarship opportunities.",
  },
];

export default function DiplomaCertificationsPage() {
  return (
    <>
      <PageHero
        title="Diploma Certifications"
        subtitle="1–2 Year professional diploma programs in healthcare and technology. Affiliated with SBTE."
        breadcrumbs={[
          { label: "Programs" },
          { label: "Diploma Certifications" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=55"
      />

      {/* Overview */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed text-sm">
            Our diploma certification programs provide in-depth training over 1
            to 2 years, preparing students for professional careers in the
            rapidly growing healthcare and technology sectors. Each program
            combines theoretical knowledge with extensive practical training.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { icon: Clock, label: "Duration", value: "1–2 Years" },
              { icon: Award, label: "Programs", value: "4 Diplomas" },
              { icon: Heart, label: "Healthcare", value: "3 Programs" },
              { icon: Award, label: "Technology", value: "1 Program" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-white">
                  <Icon size={22} className="mx-auto mb-2 text-amber-500" />
                  <div className="text-lg font-bold">{item.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jinnah Health Care Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-1.5 mb-4">
              <Heart size={14} className="text-red-500" />
              <span className="text-xs font-medium text-red-600 uppercase tracking-wider">
                Jinnah Health Care Technology
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Start Your Career in Healthcare
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Professional healthcare diploma programs designed to prepare you
              for rewarding careers in the rapidly growing medical sector
            </p>
          </div>

          {/* Health Care Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {healthCareDiplomas.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply-now"
              />
            ))}
          </div>

          {/* Eligibility Highlight */}
          <div className="bg-gray-800 text-white p-6 text-center mb-10">
            <p className="text-sm font-medium">
              Eligibility: Matric Science | Age Limit: 35 Years
            </p>
            <p className="text-xs text-white/60 mt-1">
              Both for Boys &amp; Girls
            </p>
          </div>

          {/* Health Care Curriculum Accordions */}
          <div className="space-y-4 mb-4">
            {healthCareDiplomas.map((program) => (
              <details
                key={program.id}
                className="group bg-gray-50 border border-gray-200"
              >
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-100 transition-colors">
                  <span className="flex items-center gap-2">
                    <Heart size={14} className="text-red-500" />
                    {program.shortName}
                    <span className="text-xs text-gray-400 font-normal ml-1">
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
                        Subjects / Topics
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

      {/* Technology Diploma */}
      {techDiplomas.length > 0 && (
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 mb-4">
                <Award size={14} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                  Technology Diploma
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Build a Future in Technology
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Industry-focused technology diploma to prepare you for the
                digital economy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {techDiplomas.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  href="/admissions/apply-now"
                />
              ))}
              {/* Spacer cards for centering single card */}
              <div className="hidden lg:block" />
              <div className="hidden lg:block" />
            </div>

            {/* Tech Curriculum Accordion */}
            <div className="space-y-4">
              {techDiplomas.map((program) => (
                <details
                  key={program.id}
                  className="group bg-white border border-gray-200"
                >
                  <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-50 transition-colors">
                    <span className="flex items-center gap-2">
                      <Award size={14} className="text-blue-600" />
                      {program.shortName}
                      <span className="text-xs text-gray-400 font-normal ml-1">
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
                          Course Modules
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
      )}

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200 text-center">
            Why Choose Our Diploma Programs?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 p-5 text-center"
              >
                <h3 className="font-medium text-gray-800 text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            For Admissions &amp; General Inquiries
          </h2>
          <p className="text-xs text-gray-500 mb-8">
            Contact us for more information about our diploma certification
            programs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <div className="bg-white border border-gray-200 p-4 flex items-center gap-3">
              <Phone size={16} className="text-amber-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone
                </div>
                <div className="text-sm text-gray-800">021-99260294</div>
                <div className="text-sm text-gray-800">0330-0370660</div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 flex items-center gap-3">
              <Mail size={16} className="text-amber-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Email
                </div>
                <div className="text-sm text-gray-800">info@jpikhi.edu.pk</div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 flex items-center gap-3">
              <MapPin size={16} className="text-amber-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Address
                </div>
                <div className="text-sm text-gray-800">
                  ST-1, 5C Nazimabad, Near Matric Board Office, Karachi
                </div>
              </div>
            </div>
          </div>

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
              Apply for Diploma →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
