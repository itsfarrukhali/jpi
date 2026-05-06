import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { certificationPrograms } from "@/data/programs";
import { ChevronDown, Heart, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Certification Programs",
  description:
    "Industry-recognized certification programs at JPI — AutoCAD, PLC, Web Development, Networking, and Jinnah Health Care Technology programs.",
};

const healthCarePrograms = certificationPrograms.filter(
  (p) =>
    p.id.startsWith("cert-physiotherapy") ||
    p.id.startsWith("cert-nursing") ||
    p.id.startsWith("cert-lab-technician") ||
    p.id.startsWith("cert-phlebotomy"),
);

const whyCertify = [
  {
    icon: "🏆",
    title: "Industry Recognition",
    desc: "Certificates endorsed by leading companies in Karachi's industrial and healthcare sectors.",
  },
  {
    icon: "🔬",
    title: "Hands-On Training",
    desc: "Real equipment, real software, real scenarios — not just theory.",
  },
  {
    icon: "💼",
    title: "Job Placement Support",
    desc: "Our alumni network and industry partnerships help you find work fast.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certification Programs"
        subtitle="Industry-recognized certificates in 3 months to 2 years"
        breadcrumbs={[{ label: "Programs" }, { label: "Certifications" }]}
        imageUrl="https://picsum.photos/1600/500?random=51"
      />

      {/* Overview */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed text-sm">
            Our certification programs are designed for working professionals
            and fresh graduates looking to gain industry-specific skills
            quickly. Each program is taught by experienced practitioners and
            includes hands-on lab work.
          </p>
        </div>
      </section>

      {/* Jinnah Health Care Technology */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 mb-4">
              <Heart size={14} className="text-red-500" />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jinnah Health Care Technology
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Start Your Career Today
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Professional healthcare programs designed to prepare you for
              rewarding careers in the rapidly growing medical sector
            </p>
          </div>

          {/* Health Care Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {healthCarePrograms.map((program) => (
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
          <div className="space-y-4 mb-10">
            {healthCarePrograms.map((program) => (
              <details
                key={program.id}
                className="group bg-white border border-gray-200"
              >
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-gray-800 list-none hover:bg-gray-50 transition-colors">
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

      {/* Why Get Certified */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-800 mb-6">
              Why Get Certified at JPI?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyCertify.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <h4 className="font-medium text-sm text-gray-800 mb-1">
                      {f.title}
                    </h4>
                    <p className="text-xs text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            Contact us for more information about our certification programs
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
              Enroll in a Certification →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
