import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  Calculator,
  Percent,
  GraduationCap,
  FileCheck,
  Users,
} from "lucide-react";
import { selectionProcedure, importantNotes } from "@/data/admissions";

export const metadata: Metadata = {
  title: "Merit Criteria",
  description:
    "Selection procedure, merit calculation, and allocation of technology at Jinnah Polytechnic Institute.",
};

const selectionIcons = [FileCheck, Users, Calculator];

export default function MeritPage() {
  return (
    <>
      <PageHero
        title="Merit Criteria"
        subtitle="Selection procedure and merit-based admission process."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Merit Criteria" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=62"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Selection Procedure */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Selection Procedure
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              A transparent three-stage process for all DAE admissions
            </p>
            <div className="space-y-4">
              {selectionProcedure.map((step, i) => {
                const Icon = selectionIcons[i];
                return (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 p-6 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                        Step {i + 1}
                      </span>
                      <h3 className="font-medium text-gray-800 text-sm mt-0.5 mb-1">
                        {step.step}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Merit Calculation */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Percent size={18} className="text-amber-600" />
              Merit Calculation
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              How candidates are evaluated for admission
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white border border-gray-200 p-4">
                  <h4 className="font-medium text-gray-800 text-sm mb-2">
                    Matriculation Marks
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The percentage obtained in Matriculation (Science/Technical)
                    examination forms the primary basis for merit calculation as
                    prescribed by SBTE/STEVTA.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4">
                  <h4 className="font-medium text-gray-800 text-sm mb-2">
                    Entry Test (If Applicable)
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    An entry test may be conducted by the Admission Committee.
                    Performance in the test along with matriculation marks
                    determines the final merit position.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <GraduationCap size={18} className="text-amber-600" />
              Important Notes
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Key points to remember regarding admission and merit
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <ul className="space-y-2.5">
                {importantNotes.map((note, i) => (
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
