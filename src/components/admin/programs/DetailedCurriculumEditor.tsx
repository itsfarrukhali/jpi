"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateCourseTotals } from "@/lib/programs";
import type {
  ProgramCourse,
  ProgramCurriculum,
  ProgramCurriculumTotal,
  ProgramCurriculumYear,
} from "@/types/programs";

const emptyCourse = (): ProgramCourse => ({
  code: "",
  name: "",
  contactHours: { theory: 0, practical: 0 },
  creditHours: 0,
  marks: { theory: 0, practical: 0, total: 0 },
});
const emptyTotal = (): ProgramCurriculumTotal => ({
  contactHours: { theory: 0, practical: 0 },
  creditHours: 0,
  marks: { theory: 0, practical: 0, total: 0 },
});

export function DetailedCurriculumEditor({
  curriculum,
  onChange,
}: {
  curriculum: ProgramCurriculum | null;
  onChange: (curriculum: ProgramCurriculum) => void;
}) {
  const years = curriculum?.years ?? [];
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const activeYearIndex = Math.min(selectedYearIndex, Math.max(0, years.length - 1));
  const activeYear = years[activeYearIndex];
  const updateYear = (index: number, year: ProgramCurriculumYear) =>
    onChange({
      grandTotal: curriculum?.grandTotal ?? emptyTotal(),
      years: years.map((item, itemIndex) => itemIndex === index ? year : item),
    });

  return (
    <div className="space-y-4 rounded-lg border bg-gray-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <Label>Detailed DAE Curriculum</Label>
          <p className="text-xs text-gray-500">
            Edit one year at a time. Published totals can differ from the row calculation.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => onChange({
            grandTotal: curriculum?.grandTotal ?? emptyTotal(),
            years: [...years, { year: years.length + 1, total: emptyTotal(), courses: [emptyCourse()] }],
          })}
        >
          <Plus /> Add Year
        </Button>
      </div>

      {years.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {years.map((year, index) => (
            <Button
              key={index}
              type="button"
              size="sm"
              variant={index === activeYearIndex ? "default" : "outline"}
              onClick={() => setSelectedYearIndex(index)}
            >
              Year {year.year}
            </Button>
          ))}
        </div>
      )}

      {activeYear && (() => {
        const year = activeYear;
        const yearIndex = activeYearIndex;
        const calculated = calculateCourseTotals(year.courses);
        return (
          <div key={yearIndex} className="space-y-3 rounded-md border bg-white p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Label>Year</Label>
                <Input
                  className="w-20"
                  type="number"
                  min={1}
                  value={year.year}
                  onChange={(event) => updateYear(yearIndex, { ...year, year: Number(event.target.value) })}
                />
              </div>
              <div className="text-xs text-gray-500">
                Row calculation: Contact {calculated.contactHours.theory + calculated.contactHours.practical} |
                Credits {calculated.creditHours} | Marks {calculated.marks.total}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={years.length === 1}
                onClick={() => onChange({
                  grandTotal: curriculum?.grandTotal ?? emptyTotal(),
                  years: years.filter((_, index) => index !== yearIndex),
                })}
              >
                <Trash2 className="text-red-500" />
              </Button>
            </div>
            <TotalEditor label={`Published Year ${year.year} Total`} total={year.total} onChange={(total) => updateYear(yearIndex, { ...year, total })} />

            <div className="overflow-x-auto">
              <table className="min-w-250 text-xs">
                <thead>
                  <tr className="border-b text-left text-gray-500">
                    <th className="p-1">Code</th><th className="p-1">Course Name</th>
                    <th className="p-1">Contact T</th><th className="p-1">Contact P</th>
                    <th className="p-1">Credits</th><th className="p-1">Marks T</th>
                    <th className="p-1">Marks P</th><th className="p-1">Total</th><th />
                  </tr>
                </thead>
                <tbody>
                  {year.courses.map((course, courseIndex) => (
                    <CourseRow
                      key={courseIndex}
                      course={course}
                      canRemove={year.courses.length > 1}
                      onChange={(next) => updateYear(yearIndex, {
                        ...year,
                        courses: year.courses.map((item, index) => index === courseIndex ? next : item),
                      })}
                      onRemove={() => updateYear(yearIndex, {
                        ...year,
                        courses: year.courses.filter((_, index) => index !== courseIndex),
                      })}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateYear(yearIndex, { ...year, courses: [...year.courses, emptyCourse()] })}
            >
              <Plus /> Add Course
            </Button>
          </div>
        );
      })()}

      {years.length === 0 && (
        <Button type="button" variant="outline" onClick={() => onChange({ grandTotal: emptyTotal(), years: [{ year: 1, total: emptyTotal(), courses: [emptyCourse()] }] })}>
          <Plus /> Start Detailed Curriculum
        </Button>
      )}
      {curriculum && (
        <TotalEditor
          label="Published Grand Total"
          total={curriculum.grandTotal}
          onChange={(grandTotal) => onChange({ ...curriculum, grandTotal })}
        />
      )}
    </div>
  );
}

function TotalEditor({ label, total, onChange }: {
  label: string;
  total: ProgramCurriculumTotal;
  onChange: (total: ProgramCurriculumTotal) => void;
}) {
  const setNumber = (value: string) => Math.max(0, Number(value) || 0);
  const fields = [
    ["Contact T", total.contactHours.theory, (value: number) => onChange({ ...total, contactHours: { ...total.contactHours, theory: value } })],
    ["Contact P", total.contactHours.practical, (value: number) => onChange({ ...total, contactHours: { ...total.contactHours, practical: value } })],
    ["Credits", total.creditHours, (value: number) => onChange({ ...total, creditHours: value })],
    ["Marks T", total.marks.theory, (value: number) => onChange({ ...total, marks: { ...total.marks, theory: value } })],
    ["Marks P", total.marks.practical, (value: number) => onChange({ ...total, marks: { ...total.marks, practical: value } })],
    ["Marks Total", total.marks.total, (value: number) => onChange({ ...total, marks: { ...total.marks, total: value } })],
  ] as const;
  return <div className="rounded-md border bg-gray-50 p-3"><Label>{label}</Label>
    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
      {fields.map(([fieldLabel, value, update]) => <label className="text-xs text-gray-500" key={fieldLabel}>
        {fieldLabel}<Input type="number" min={0} value={value} onChange={(event) => update(setNumber(event.target.value))} />
      </label>)}
    </div>
  </div>;
}

function CourseRow({
  course,
  canRemove,
  onChange,
  onRemove,
}: {
  course: ProgramCourse;
  canRemove: boolean;
  onChange: (course: ProgramCourse) => void;
  onRemove: () => void;
}) {
  const number = (value: string) => Math.max(0, Number(value) || 0);
  return (
    <tr className="border-b last:border-0">
      <td className="p-1"><Input className="w-20" value={course.code ?? ""} onChange={(event) => onChange({ ...course, code: event.target.value })} /></td>
      <td className="p-1"><Input className="w-64" value={course.name} onChange={(event) => onChange({ ...course, name: event.target.value })} /></td>
      <td className="p-1"><NumberInput value={course.contactHours.theory} onChange={(value) => onChange({ ...course, contactHours: { ...course.contactHours, theory: value } })} /></td>
      <td className="p-1"><NumberInput value={course.contactHours.practical} onChange={(value) => onChange({ ...course, contactHours: { ...course.contactHours, practical: value } })} /></td>
      <td className="p-1"><NumberInput value={course.creditHours} onChange={(value) => onChange({ ...course, creditHours: value })} /></td>
      <td className="p-1"><NumberInput value={course.marks.theory} onChange={(value) => onChange({ ...course, marks: { ...course.marks, theory: value } })} /></td>
      <td className="p-1"><NumberInput value={course.marks.practical} onChange={(value) => onChange({ ...course, marks: { ...course.marks, practical: value } })} /></td>
      <td className="p-1"><NumberInput value={course.marks.total} onChange={(value) => onChange({ ...course, marks: { ...course.marks, total: value } })} /></td>
      <td className="p-1"><Button type="button" variant="ghost" size="icon-sm" disabled={!canRemove} onClick={onRemove}><Trash2 className="text-red-500" /></Button></td>
    </tr>
  );

  function NumberInput({ value, onChange }: { value: number; onChange: (value: number) => void }) {
    return <Input className="w-20" type="number" min={0} value={value} onChange={(event) => onChange(number(event.target.value))} />;
  }
}
