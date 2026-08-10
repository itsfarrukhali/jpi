"use client";

import { useState } from "react";
import Link from "next/link";
import { ReceiptText, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProgramRecord } from "@/types/programs";
import { getFeeStructureForProgram, getMedicalFeeSchedule } from "@/data/fees";

export function ProgramFeeDialog({ program }: { program: ProgramRecord }) {
  const [open, setOpen] = useState(false);
  const feeStructure = getFeeStructureForProgram(
    program.id,
    program.category,
    program.tag
  );

  const medicalSchedule = getMedicalFeeSchedule(program.id);

  const hasDuration = feeStructure.headers.includes("Duration");
  const hasAdmission = feeStructure.headers.some(
    (h) => h.includes("Admission") || h.includes("Registration")
  );
  const hasTuition = feeStructure.headers.some(
    (h) => h.includes("Tuition") || h.includes("Course Fee")
  );

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="w-full cursor-pointer border-amber-200 text-amber-700 hover:bg-amber-50 font-medium text-xs py-2 flex items-center justify-center gap-1.5"
        onClick={() => setOpen(true)}
      >
        <ReceiptText size={14} className="text-amber-600" />
        View Fee Structure
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full ${feeStructure.badgeColor}`}
              >
                {feeStructure.badge}
              </span>
              {medicalSchedule && (
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <Sparkles size={11} /> 50% Scholarship Discount
                </span>
              )}
            </div>
            <DialogTitle className="text-lg font-bold text-gray-900">
              {program.shortName || program.name} — Fee Details
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500 leading-relaxed">
              {medicalSchedule
                ? medicalSchedule.paymentMonthsText
                : feeStructure.subtitle}
            </DialogDescription>
          </DialogHeader>

          {/* If Medical Schedule exists, show detailed payment schedule */}
          {medicalSchedule ? (
            <div className="space-y-4 mt-2">
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xs">
                <table className="w-full text-xs">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="px-3.5 py-2.5 text-left font-medium">
                        Payment Installment
                      </th>
                      <th className="px-3.5 py-2.5 text-left font-medium text-gray-300 line-through">
                        Standard Fee
                      </th>
                      <th className="px-3.5 py-2.5 text-left font-bold text-emerald-400">
                        50% Discount Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {medicalSchedule.installments.map((inst, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-3.5 py-2.5 font-semibold text-gray-900">
                          {inst.installment}
                        </td>
                        <td className="px-3.5 py-2.5 text-gray-400 line-through">
                          {inst.regularAmount}
                        </td>
                        <td className="px-3.5 py-2.5 font-bold text-emerald-700">
                          {inst.discountedAmount}
                        </td>
                      </tr>
                    ))}
                    {/* Total Row */}
                    <tr className="bg-emerald-50/80 font-bold border-t-2 border-emerald-200">
                      <td className="px-3.5 py-3 text-gray-900">Total Package</td>
                      <td className="px-3.5 py-3 text-gray-500 line-through">
                        {medicalSchedule.totalRegular}
                      </td>
                      <td className="px-3.5 py-3 text-emerald-800 text-sm">
                        {medicalSchedule.totalDiscounted}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Medical Notes */}
              <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-xl p-3.5 space-y-1.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                  Medical Program Fee Rules
                </h4>
                <ul className="space-y-1 text-xs text-emerald-900">
                  {medicalSchedule.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Standard Table for DAE, Short Courses, JCE */
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 shadow-xs">
              <table className="w-full text-xs">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    {feeStructure.headers.map((header) => (
                      <th
                        key={header}
                        className="px-3.5 py-2.5 text-left font-medium uppercase tracking-wider text-[11px]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {feeStructure.rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                    >
                      <td className="px-3.5 py-2.5 font-semibold text-gray-900">
                        {row.label}
                      </td>

                      {hasDuration && (
                        <td className="px-3.5 py-2.5 text-gray-600">
                          {row.duration || "—"}
                        </td>
                      )}

                      {hasAdmission && (
                        <td className="px-3.5 py-2.5 text-gray-600">
                          {row.admissionFee || "—"}
                        </td>
                      )}

                      {hasTuition && (
                        <td className="px-3.5 py-2.5 text-gray-600">
                          {row.tuitionFee || "—"}
                        </td>
                      )}

                      <td className="px-3.5 py-2.5 font-bold text-amber-700">
                        {row.totalFee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Standard Notes */}
          {!medicalSchedule && feeStructure.notes && feeStructure.notes.length > 0 && (
            <div className="mt-4 bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5 space-y-1.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                Important Payment Notes
              </h4>
              <ul className="space-y-1 text-xs text-amber-900/90">
                {feeStructure.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold shrink-0">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              For complete policy &amp; other charges:
            </span>
            <Link
              href="/admissions/fee-structure"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 underline"
            >
              Full Fee Structure Page <ExternalLink size={12} />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
