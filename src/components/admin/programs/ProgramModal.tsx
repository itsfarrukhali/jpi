"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CloudinaryUploadButton } from "@/components/admin/shared/CloudinaryUploadButton";
import { DetailedCurriculumEditor } from "./DetailedCurriculumEditor";
import { programCreateSchema, type ProgramCreateInput, type ProgramCreateOutput } from "@/lib/validations/programs";
import type { ProgramRecord, ProgramSubject } from "@/types/programs";

const defaults: ProgramCreateInput = {
  slug: "", name: "", shortName: "", department: "", duration: "", seats: 25,
  eligibility: [], description: "", icon: "", thumbnail: "", coverImage: "",
  tag: "DAE", category: "dae", listingPage: "DAE",
  subjects: [], curriculum: null, careers: [], published: true,
};

const lines = (value: string) => value.split("\n").map((item) => item.trim()).filter(Boolean);

export function ProgramModal({ open, onOpenChange, program, onSuccess }: {
  open: boolean; onOpenChange: (open: boolean) => void; program?: ProgramRecord | null; onSuccess: () => void;
}) {
  const isEdit = Boolean(program);
  const { register, handleSubmit, reset, setValue, control, formState: { errors, isSubmitting } } =
    useForm<ProgramCreateInput, unknown, ProgramCreateOutput>({ resolver: zodResolver(programCreateSchema), defaultValues: defaults });
  const eligibility = useWatch({ control, name: "eligibility" }) ?? [];
  const careers = useWatch({ control, name: "careers" }) ?? [];
  const subjects = (useWatch({ control, name: "subjects" }) ?? []) as ProgramSubject[];
  const curriculum = useWatch({ control, name: "curriculum" }) ?? null;
  const listingPage = useWatch({ control, name: "listingPage" });
  const thumbnail = useWatch({ control, name: "thumbnail" });
  const coverImage = useWatch({ control, name: "coverImage" });
  const published = useWatch({ control, name: "published" }) ?? true;

  useEffect(() => {
    reset(program ? {
      slug: program.slug, name: program.name, shortName: program.shortName, department: program.department ?? "",
      duration: program.duration, seats: program.seats, eligibility: program.eligibility, description: program.description,
      icon: program.icon ?? "", thumbnail: program.thumbnail ?? "", coverImage: program.coverImage ?? "",
      tag: program.tag, category: program.category, listingPage: program.listingPage, subjects: program.subjects,
      curriculum: program.curriculum, careers: program.careers, published: program.published,
    } : defaults);
  }, [open, program, reset]);

  const submit = async (data: ProgramCreateOutput) => {
    const response = await fetch(isEdit ? `/api/admin/programs/${program!.id}` : "/api/admin/programs", {
      method: isEdit ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    const body = await response.json().catch(() => null) as { error?: string } | null;
    if (!response.ok) return toast.error(body?.error ?? "Unable to save program");
    toast.success(isEdit ? "Program updated" : "Program created");
    onSuccess();
    onOpenChange(false);
  };

  const setSubjects = (next: ProgramSubject[]) => setValue("subjects", next, { shouldDirty: true, shouldValidate: true });

  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-225">
    <DialogHeader><DialogTitle>{isEdit ? "Edit Program" : "Add Program"}</DialogTitle></DialogHeader>
    <form onSubmit={handleSubmit(submit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}><Input {...register("name")} /></Field>
        <Field label="Short Name" error={errors.shortName?.message}><Input {...register("shortName")} /></Field>
        <Field label="Slug" error={errors.slug?.message}><Input {...register("slug")} placeholder="dae-civil" /></Field>
        <Field label="Department (optional)"><Input {...register("department")} /></Field>
        <Field label="Duration" error={errors.duration?.message}><Input {...register("duration")} /></Field>
        <Field label="Seats" error={errors.seats?.message}><Input type="number" {...register("seats", { valueAsNumber: true })} /></Field>
        <Field label="Icon name (optional)"><Input {...register("icon")} placeholder="building" /></Field>
        <Field label="Tag"><select className="h-9 w-full rounded-md border px-3 text-sm" {...register("tag")}><option>DAE</option><option>CERT</option><option>SHORT</option><option value="JEC">JCE</option></select></Field>
        <Field label="Category"><select className="h-9 w-full rounded-md border px-3 text-sm" {...register("category")}><option value="dae">DAE</option><option value="certifications">Certifications</option><option value="short_courses">JCE Short Courses</option><option value="jec">JCE AutoCAD</option></select></Field>
        <Field label="Public Listing Page"><select className="h-9 w-full rounded-md border px-3 text-sm" {...register("listingPage")}><option value="DAE">DAE</option><option value="CERTIFICATIONS">Certifications</option><option value="DIPLOMA_CERTIFICATIONS">Diploma Certifications</option><option value="SHORT_COURSES">JCE Short Courses</option><option value="JEC">JCE AutoCAD</option></select></Field>
      </div>
      <Field label="Description" error={errors.description?.message}><Textarea rows={3} {...register("description")} /></Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Eligibility (one per line)" error={errors.eligibility?.message}><Textarea rows={5} value={eligibility.join("\n")} onChange={(event) => setValue("eligibility", lines(event.target.value), { shouldDirty: true, shouldValidate: true })} /></Field>
        <Field label="Careers (one per line)" error={errors.careers?.message}><Textarea rows={5} value={careers.join("\n")} onChange={(event) => setValue("careers", lines(event.target.value), { shouldDirty: true, shouldValidate: true })} /></Field>
      </div>
      {listingPage !== "DAE" && (
        <div className="space-y-3"><div className="flex items-center justify-between"><Label>Curriculum Sections</Label>
          <Button type="button" variant="outline" onClick={() => setSubjects([...subjects, { year: "", items: [] }])}>Add Section</Button></div>
          {subjects.map((subject, index) => <div className="rounded-md border p-3" key={index}>
            <div className="mb-2 flex gap-2"><Input value={subject.year} placeholder="Section / year name" onChange={(event) => setSubjects(subjects.map((item, i) => i === index ? { ...item, year: event.target.value } : item))} />
              <Button type="button" variant="ghost" size="icon" disabled={subjects.length === 1} onClick={() => setSubjects(subjects.filter((_, i) => i !== index))}><X /></Button></div>
            <Textarea rows={4} value={subject.items.join("\n")} placeholder="One subject per line" onChange={(event) => setSubjects(subjects.map((item, i) => i === index ? { ...item, items: lines(event.target.value) } : item))} />
          </div>)}
          {errors.subjects && <p className="text-xs text-red-500">{errors.subjects.message}</p>}
        </div>
      )}
      {listingPage === "DAE" && (
        <>
          <DetailedCurriculumEditor
            curriculum={curriculum}
            onChange={(next) => setValue("curriculum", next, { shouldDirty: true, shouldValidate: true })}
          />
          {errors.curriculum && <p className="text-xs text-red-500">{errors.curriculum.message}</p>}
        </>
      )}
      <div className="grid gap-5 sm:grid-cols-2"><MediaField label="Thumbnail" url={thumbnail} onUpload={(url) => setValue("thumbnail", url, { shouldDirty: true })} onRemove={() => setValue("thumbnail", "", { shouldDirty: true })} />
        <MediaField label="Cover Image" url={coverImage} onUpload={(url) => setValue("coverImage", url, { shouldDirty: true })} onRemove={() => setValue("coverImage", "", { shouldDirty: true })} /></div>
      <label className="flex items-center gap-2"><Checkbox checked={published} onCheckedChange={(checked) => setValue("published", checked === true, { shouldDirty: true })} /> Published</label>
      <DialogFooter><Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button><Button type="submit" disabled={isSubmitting}>{isSubmitting && <Loader2 className="animate-spin" />}{isEdit ? "Update" : "Create"}</Button></DialogFooter>
    </form>
  </DialogContent></Dialog>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <div><Label>{label}</Label>{children}{error && <p className="mt-1 text-xs text-red-500">{error}</p>}</div>;
}

function MediaField({ label, url, onUpload, onRemove }: { label: string; url?: string | null; onUpload: (url: string) => void; onRemove: () => void }) {
  return <div className="space-y-2"><Label>{label}</Label><div className="flex gap-2"><CloudinaryUploadButton accept="image" folder="programs/images" onUpload={onUpload} />{url && <Button type="button" variant="outline" onClick={onRemove}><X /> Remove</Button>}</div>
    {url && <div className="relative aspect-video overflow-hidden rounded-md border"><Image src={url} alt={`${label} preview`} fill unoptimized className="object-contain" /></div>}
  </div>;
}
