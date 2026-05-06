import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  ClipboardList,
  FileCheck,
  Users,
  Stethoscope,
  School,
  AlertTriangle,
} from "lucide-react";
import {
  admissionProcedure,
  requiredDocuments,
  disqualificationRules,
} from "@/data/admissions";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "Step-by-step admission procedure for DAE programs at Jinnah Polytechnic Institute — from form submission to final selection.",
};

const procedureIcons = [
  ClipboardList,
  FileCheck,
  Users,
  Users,
  Stethoscope,
  School,
];

const procedureTitles = [
  "Obtain Admission Form",
  "Submit Completed Form",
  "Initial Scrutiny",
  "Interview",
  "Medical Fitness",
  "Final Selection & Fee Payment",
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHero
        title="How to Apply"
        subtitle="Complete admission procedure for DAE programs — step by step."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "How to Apply" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=61"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Admission Procedure */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Admission Procedure
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Follow these steps to complete your admission process
            </p>
            <div className="space-y-5">
              {admissionProcedure.map((desc, i) => {
                const Icon = procedureIcons[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-200 p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm flex items-center gap-2">
                        <Icon size={14} className="text-amber-600" />
                        {procedureTitles[i]}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Required Documents
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Copies of the following documents must be attached with the
              admission form at the time of submission
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <div className="space-y-3">
                {requiredDocuments.map((doc, i) => (
                  <div key={doc.id} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-medium text-gray-800">
                        {doc.label}
                      </span>
                      <span className="text-gray-400 text-xs ml-1.5">
                        — {doc.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disqualification */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} className="text-red-500" />
              Disqualification Rules
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Important — please read carefully before applying
            </p>
            <div className="bg-red-50 border border-red-100 p-5 space-y-2.5">
              {disqualificationRules.map((rule) => (
                <div
                  key={rule.id}
                  className="flex items-start gap-2 text-xs text-gray-700"
                >
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">
                    !
                  </span>
                  {rule.rule}
                </div>
              ))}
            </div>
          </div>

          {/* Authority Note */}
          <div className="bg-gray-50 border border-gray-200 p-6 text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              The <strong>Principal / Executive Director</strong>, being
              Chairman of the Admission Committee, shall be the final authority
              in all matters concerning admission, including interpretation of
              rules and regulations.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link
              href="/admissions/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Proceed to Apply →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
