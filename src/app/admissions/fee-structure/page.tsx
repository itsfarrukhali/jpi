import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { Banknote, ShieldCheck, FileText, Landmark, GraduationCap, Award, Sparkles, Brain, Heart, ChevronDown } from "lucide-react";
import {
  feeRefundPolicy,
  otherCharges,
  paymentNotes,
} from "@/data/admissions";
import {
  daeFeeStructure,
  daeAiFeeStructure,
  diplomaCertificationsFeeStructure,
  certificationsFeeStructure,
  jceFeeStructure,
  allMedicalFeeSchedules,
  type CategoryFeeStructure,
} from "@/data/fees";

export const metadata: Metadata = {
  title: "Fee Structure — All Programs",
  description:
    "Complete fee structure for all academic programs at Jinnah Polytechnic Institute — DAE, DAE AI, Health Care Diplomas (Physiotherapy, Nursing, Lab Tech, Phlebotomy), Certifications, and JCE Short Courses.",
};

function RenderFeeTable({ structure }: { structure: CategoryFeeStructure }) {
  const hasDuration = structure.headers.includes("Duration");
  const hasAdmission = structure.headers.some(
    (h) => h.includes("Admission") || h.includes("Registration")
  );
  const hasTuition = structure.headers.some(
    (h) => h.includes("Tuition") || h.includes("Course Fee")
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4">
      <table className="w-full text-xs sm:text-sm">
        <thead className="bg-gray-800 text-white">
          <tr>
            {structure.headers.map((h) => (
              <th
                key={h}
                className="px-5 py-3 text-left font-medium text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {structure.rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
            >
              {/* Col 1: Label / Year / Course */}
              <td className="px-5 py-3.5 font-bold text-gray-900">
                {row.label}
              </td>

              {/* Col 2 (Optional): Duration */}
              {hasDuration && (
                <td className="px-5 py-3.5 text-gray-600 font-medium">
                  {row.duration || "—"}
                </td>
              )}

              {/* Col 3 (Optional): Admission / Standard Fee */}
              {hasAdmission && (
                <td className="px-5 py-3.5 text-gray-600 font-medium">
                  {row.admissionFee || "—"}
                </td>
              )}

              {/* Col 4 (Optional): Tuition Fee */}
              {hasTuition && (
                <td className="px-5 py-3.5 text-gray-600 font-medium">
                  {row.tuitionFee || "—"}
                </td>
              )}

              {/* Col 5: Total / Discounted Fee */}
              <td className="px-5 py-3.5 font-bold text-emerald-700">
                {row.totalFee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Transparent &amp; Comprehensive Fee Details for All Program Categories"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=63"
      />

      <section className="py-14 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Quick Category Navigation Pills */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap gap-3 items-center justify-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
              Jump to Category:
            </span>
            <a
              href="#dae-fees"
              className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Landmark size={14} /> DAE Programs
            </a>
            <a
              href="#dae-ai-fees"
              className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Brain size={14} /> DAE Artificial Intelligence
            </a>
            <a
              href="#diploma-certifications-fees"
              className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <GraduationCap size={14} /> Health Care Diplomas (50% Off)
            </a>
            <a
              href="#certifications-fees"
              className="px-4 py-2 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Award size={14} /> Certifications
            </a>
            <a
              href="#jce-fees"
              className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Sparkles size={14} /> Jinnah Center of Excellence
            </a>
          </div>

          {/* 1. DAE General Fee Section */}
          <div id="dae-fees" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${daeFeeStructure.badgeColor}`}>
                  {daeFeeStructure.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                  <Landmark size={20} className="text-blue-700" />
                  {daeFeeStructure.title}
                </h2>
              </div>
              <Link
                href="/admissions/apply-now"
                className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold transition-colors"
              >
                Apply for DAE →
              </Link>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {daeFeeStructure.subtitle}
            </p>

            <RenderFeeTable structure={daeFeeStructure} />

            {daeFeeStructure.notes && (
              <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 mt-4 text-xs text-blue-900 space-y-1">
                <p className="font-semibold text-blue-900 mb-1">DAE Fee Notes:</p>
                <ul className="list-disc list-inside space-y-0.5 text-blue-800">
                  {daeFeeStructure.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 2. DAE Artificial Intelligence Fee Section */}
          <div id="dae-ai-fees" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-2xl border border-indigo-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${daeAiFeeStructure.badgeColor}`}>
                  {daeAiFeeStructure.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                  <Brain size={20} className="text-indigo-700" />
                  {daeAiFeeStructure.title}
                </h2>
              </div>
              <Link
                href="/admissions/apply-now"
                className="px-4 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-semibold transition-colors"
              >
                Apply for DAE AI →
              </Link>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {daeAiFeeStructure.subtitle}
            </p>

            <RenderFeeTable structure={daeAiFeeStructure} />

            {daeAiFeeStructure.notes && (
              <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4 mt-4 text-xs text-indigo-900 space-y-1">
                <p className="font-semibold text-indigo-900 mb-1">AI Program Fee Notes:</p>
                <ul className="list-disc list-inside space-y-0.5 text-indigo-800">
                  {daeAiFeeStructure.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 3. Diploma Certifications (Health Care Technology & Medical Courses) */}
          <div id="diploma-certifications-fees" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${diplomaCertificationsFeeStructure.badgeColor}`}>
                  {diplomaCertificationsFeeStructure.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                  <Heart size={20} className="text-emerald-700" />
                  {diplomaCertificationsFeeStructure.title}
                </h2>
              </div>
              <Link
                href="/admissions/apply-now"
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
              >
                Apply for Medical Course →
              </Link>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {diplomaCertificationsFeeStructure.subtitle}
            </p>

            {/* General Overview Table */}
            <RenderFeeTable structure={diplomaCertificationsFeeStructure} />

            {/* Detailed Installment Schedules for 2 Years, 1 Year, 6 Months */}
            <div className="space-y-4 pt-4 border-t border-emerald-100">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-600" />
                Detailed Payment Schedules (50% Scholarship Discount Package)
              </h3>

              {allMedicalFeeSchedules.map((schedule) => (
                <details
                  key={schedule.programId}
                  className="group bg-emerald-50/40 border border-emerald-200/80 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-800 list-none hover:bg-emerald-100/50 transition-colors text-xs sm:text-sm">
                    <span className="flex items-center gap-2">
                      <Heart size={14} className="text-emerald-600" />
                      {schedule.title}
                      <span className="text-xs font-normal text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {schedule.paymentMonthsText}
                      </span>
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-emerald-700 group-open:rotate-180 transition-transform shrink-0"
                    />
                  </summary>

                  <div className="p-4 sm:p-5 bg-white border-t border-emerald-100 space-y-4">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-xs">
                        <thead className="bg-gray-800 text-white">
                          <tr>
                            <th className="px-3.5 py-2.5 text-left font-medium">Installment Stage</th>
                            <th className="px-3.5 py-2.5 text-left font-medium text-gray-400 line-through">Standard Fee</th>
                            <th className="px-3.5 py-2.5 text-left font-bold text-emerald-400">50% Discount Fee</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {schedule.installments.map((inst, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                              <td className="px-3.5 py-2 font-semibold text-gray-900">{inst.installment}</td>
                              <td className="px-3.5 py-2 text-gray-400 line-through">{inst.regularAmount}</td>
                              <td className="px-3.5 py-2 font-bold text-emerald-700">{inst.discountedAmount}</td>
                            </tr>
                          ))}
                          <tr className="bg-emerald-50 font-bold border-t-2 border-emerald-200">
                            <td className="px-3.5 py-2.5 text-gray-900">Total Course Package</td>
                            <td className="px-3.5 py-2.5 text-gray-500 line-through">{schedule.totalRegular}</td>
                            <td className="px-3.5 py-2.5 text-emerald-800 text-sm">{schedule.totalDiscounted}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-100 text-xs text-emerald-900 space-y-1">
                      <p className="font-bold text-emerald-950">Important Schedule Notes:</p>
                      <ul className="list-disc list-inside space-y-0.5 text-emerald-900">
                        {schedule.notes.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* 4. Certifications Section */}
          <div id="certifications-fees" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${certificationsFeeStructure.badgeColor}`}>
                  {certificationsFeeStructure.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                  <Award size={20} className="text-amber-600" />
                  {certificationsFeeStructure.title}
                </h2>
              </div>
              <Link
                href="/admissions/apply-now"
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors"
              >
                Apply Now →
              </Link>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {certificationsFeeStructure.subtitle}
            </p>

            <RenderFeeTable structure={certificationsFeeStructure} />
          </div>

          {/* 5. Jinnah Center of Excellence (JCE / Short Courses) */}
          <div id="jce-fees" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${jceFeeStructure.badgeColor}`}>
                  {jceFeeStructure.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                  <Sparkles size={20} className="text-purple-700" />
                  {jceFeeStructure.title}
                </h2>
              </div>
              <Link
                href="/admissions/apply-now"
                className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold transition-colors"
              >
                Enroll in Short Course →
              </Link>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {jceFeeStructure.subtitle}
            </p>

            <RenderFeeTable structure={jceFeeStructure} />

            {jceFeeStructure.notes && (
              <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-4 mt-4 text-xs text-purple-900 space-y-1">
                <p className="font-semibold mb-1">JCE Short Courses Notes:</p>
                <ul className="list-disc list-inside space-y-0.5 text-purple-800">
                  {jceFeeStructure.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Payment Notes */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Banknote size={20} className="text-amber-600" />
              Mode of Payment &amp; Rules
            </h2>
            <div className="bg-amber-50/50 border border-amber-200/70 rounded-xl p-5">
              <ul className="space-y-2.5">
                {paymentNotes.map((note, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-700 font-medium"
                  >
                    <span className="text-amber-600 font-bold shrink-0">—</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck size={20} className="text-emerald-600" />
              Fee Refund Policy
            </h2>
            <p className="text-xs text-gray-600">
              Admission Fee is strictly non-refundable. Tuition fee refund is processed based on cancellation date:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs sm:text-sm">
                <thead className="bg-gray-100 text-gray-800">
                  <tr>
                    {[
                      "Refund % Age of Tuition Fee",
                      "Description",
                      "Timeline",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-left font-semibold text-xs uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feeRefundPolicy.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="px-5 py-3 font-bold text-gray-900">
                        {row.percentage}
                      </td>
                      <td className="px-5 py-3 text-gray-700 font-medium">
                        {row.description}
                      </td>
                      <td className="px-5 py-3 text-gray-600 text-xs">
                        {row.timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Other Charges */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              Other Official Charges
            </h2>
            <p className="text-xs text-gray-500">
              All amounts in Pakistani Rupees (Rs.)
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    {["Item Description", "Normal Fee", "Urgent Fee", "Duplicate Fee"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-medium uppercase tracking-wider text-[11px]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {otherCharges.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="px-4 py-2.5 font-medium text-gray-800">{row.item}</td>
                      <td className="px-4 py-2.5 text-gray-600">
                        {row.normal === "—" ? "—" : `Rs. ${row.normal}`}
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        {row.urgent === "—" ? "—" : `Rs. ${row.urgent}`}
                      </td>
                      <td className="px-4 py-2.5 text-gray-600">
                        {row.duplicate === "—" ? "—" : `Rs. ${row.duplicate}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center py-6 border-t border-gray-200 flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/admissions/how-to-apply"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              How to Apply
            </Link>
            <Link
              href="/admissions/apply-now"
              className="px-6 py-3 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 shadow-sm transition-colors"
            >
              Apply Online Now →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
