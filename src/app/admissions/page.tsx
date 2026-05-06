import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  FileText,
  Calculator,
  IndianRupee,
  PenLine,
  Clock,
  AlertTriangle,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admission criteria, eligibility, fee structure, and application process for DAE programs at Jinnah Polytechnic Institute, Karachi.",
};

const quickLinks = [
  {
    label: "How to Apply",
    href: "/admissions/how-to-apply",
    icon: PenLine,
    desc: "Step-by-step admission procedure",
  },
  {
    label: "Merit Criteria",
    href: "/admissions/merit",
    icon: Calculator,
    desc: "Selection & merit calculation",
  },
  {
    label: "Fee Structure",
    href: "/admissions/fee-structure",
    icon: Landmark,
    desc: "Complete fee details & policies",
  },
  {
    label: "Apply Online",
    href: "/admissions/apply-now",
    icon: FileText,
    desc: "Submit your application",
  },
];

const highlights = [
  { icon: Clock, label: "Morning Program Age Limit", value: "35 Years" },
  { icon: Clock, label: "Evening Program Age Limit", value: "45 Years" },
  { icon: IndianRupee, label: "1st Year Total Fee", value: "Rs. 44,000" },
  { icon: AlertTriangle, label: "Cash Payment", value: "Strictly Prohibited" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Your journey to becoming a skilled Associate Engineer starts here."
        breadcrumbs={[{ label: "Admissions" }]}
        imageUrl="https://picsum.photos/1600/500?random=60"
      />

      {/* Quick Highlights */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="text-white">
                  <Icon size={24} className="mx-auto mb-2 text-amber-500" />
                  <div className="text-lg font-bold">{h.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{h.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Link Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">
            Admission Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-gray-50 border border-gray-200 hover:border-amber-300 p-6 transition-colors flex items-start gap-4"
                >
                  <Icon size={22} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm group-hover:text-amber-700 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Admission Overview
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Jinnah Polytechnic Institute offers 3-year Diploma of Associate
            Engineering (DAE) programs in 8 technologies, affiliated with the
            Sindh Board of Technical Education (SBTE). Admissions are open
            annually for both Morning and Evening shifts. The institute operates
            on a <strong>no-profit, no-loss basis</strong>, ensuring quality
            technical education remains accessible and affordable.
          </p>
          <div className="mt-8">
            <Link
              href="/admissions/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
