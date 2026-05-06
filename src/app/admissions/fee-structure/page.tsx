import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { Banknote, ShieldCheck, FileText, Landmark } from "lucide-react";
import {
  feeStructure,
  feeRefundPolicy,
  otherCharges,
  paymentNotes,
} from "@/data/admissions";

export const metadata: Metadata = {
  title: "Fee Structure",
  description:
    "Complete fee structure for DAE programs at Jinnah Polytechnic Institute — tuition, admission, refund policy, and other charges.",
};

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Complete fee details for DAE programs — 3 Years (Matric Base), Morning & Evening."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=63"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* DAE Fee Table */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Landmark size={18} className="text-amber-600" />
              DAE Program Fee (3 Years)
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              For Regular Morning &amp; Evening Programs — Matric Base
            </p>
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    {["Year", "Admission Fee", "Tuition Fee", "Total Fee"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left font-medium text-xs uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-5 py-3 font-medium text-gray-800">
                        {row.year}
                      </td>
                      <td className="px-5 py-3 text-gray-600">
                        {row.admissionFee}
                      </td>
                      <td className="px-5 py-3 text-gray-600">
                        {row.tuitionFee}
                      </td>
                      <td className="px-5 py-3 font-medium text-gray-800">
                        {row.totalFee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Notes */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Banknote size={18} className="text-amber-600" />
              Mode of Payment &amp; Important Notes
            </h2>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <ul className="space-y-2.5">
                {paymentNotes.map((note, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-600"
                  >
                    <span className="text-amber-600 mt-0.5 shrink-0">—</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Refund Policy */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <ShieldCheck size={18} className="text-amber-600" />
              Fee Refund Policy
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              In case of cancellation of admission
            </p>
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    {["Refund %", "Description", "Timeline"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-2.5 text-left font-medium text-xs text-gray-700"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {feeRefundPolicy.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-5 py-2.5 font-medium text-gray-800">
                        {row.percentage}
                      </td>
                      <td className="px-5 py-2.5 text-gray-600">
                        {row.description}
                      </td>
                      <td className="px-5 py-2.5 text-gray-600 text-xs">
                        {row.timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Other Charges */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FileText size={18} className="text-amber-600" />
              Other Charges
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              All amounts in Pakistani Rupees (Rs.)
            </p>
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-xs">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    {["Item", "Normal", "Urgent", "Duplicate"].map((h) => (
                      <th key={h} className="px-4 py-2.5 text-left font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {otherCharges.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-2 text-gray-700">{row.item}</td>
                      <td className="px-4 py-2 text-gray-600">
                        {row.normal === "—" ? "—" : `Rs. ${row.normal}`}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {row.urgent === "—" ? "—" : `Rs. ${row.urgent}`}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {row.duplicate === "—" ? "—" : `Rs. ${row.duplicate}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
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
