"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CloudinaryUploadButton } from "@/components/admin/shared/CloudinaryUploadButton";
import {
  jobOpeningCreateSchema,
  type JobOpeningCreateInput,
  type JobOpeningCreateOutput,
} from "@/lib/validations/careers";
import type { JobOpeningRecord } from "@/types/careers";

interface CareerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  opening?: JobOpeningRecord | null;
  onSuccess: () => void;
}

const defaults: JobOpeningCreateInput = {
  slug: "",
  title: "",
  department: "",
  type: "Full-Time",
  qualification: "",
  description: "",
  responsibilities: [],
  officialNoticeUrl: "",
  officialNoticeType: null,
  published: true,
};

export function CareerModal({
  open,
  onOpenChange,
  opening,
  onSuccess,
}: CareerModalProps) {
  const isEdit = Boolean(opening);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<JobOpeningCreateInput, unknown, JobOpeningCreateOutput>({
    resolver: zodResolver(jobOpeningCreateSchema),
    defaultValues: defaults,
  });

  const noticeUrl = useWatch({ control, name: "officialNoticeUrl" });
  const noticeType = useWatch({ control, name: "officialNoticeType" });
  const published = useWatch({ control, name: "published" }) ?? true;
  const responsibilities = useWatch({ control, name: "responsibilities" }) ?? [];

  useEffect(() => {
    reset(
      opening
        ? {
            slug: opening.slug,
            title: opening.title,
            department: opening.department,
            type: opening.type,
            qualification: opening.qualification,
            description: opening.description,
            responsibilities: opening.responsibilities,
            officialNoticeUrl: opening.officialNoticeUrl ?? "",
            officialNoticeType: opening.officialNoticeType,
            published: opening.published,
          }
        : defaults,
    );
  }, [opening, open, reset]);

  const submit = async (data: JobOpeningCreateOutput) => {
    const response = await fetch(
      isEdit ? `/api/admin/careers/${opening!.id}` : "/api/admin/careers",
      {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      toast.error(body?.error ?? "Unable to save job opening");
      return;
    }

    toast.success(isEdit ? "Job opening updated" : "Job opening created");
    onSuccess();
    onOpenChange(false);
  };

  const setNotice = (url: string, type: "IMAGE" | "PDF") => {
    setValue("officialNoticeUrl", url, { shouldDirty: true, shouldValidate: true });
    setValue("officialNoticeType", type, { shouldDirty: true, shouldValidate: true });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-175">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Job Opening" : "Add Job Opening"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="job-title">Title *</Label>
              <Input id="job-title" {...register("title")} />
              {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <Label htmlFor="job-slug">Slug *</Label>
              <Input id="job-slug" {...register("slug")} placeholder="senior-instructor-mechanical" />
              {errors.slug && <p className="mt-1 text-xs text-red-500">{errors.slug.message}</p>}
            </div>
            <div>
              <Label htmlFor="job-department">Department *</Label>
              <Input id="job-department" {...register("department")} placeholder="Department of Mechanical Technology" />
            </div>
            <div>
              <Label htmlFor="job-type">Employment Type *</Label>
              <Input id="job-type" {...register("type")} placeholder="Full-Time" />
            </div>
          </div>
          <div>
            <Label htmlFor="job-qualification">Qualification *</Label>
            <Textarea id="job-qualification" {...register("qualification")} rows={2} />
          </div>
          <div>
            <Label htmlFor="job-description">Description *</Label>
            <Textarea id="job-description" {...register("description")} rows={4} />
          </div>
          <div>
            <Label htmlFor="job-responsibilities">Responsibilities *</Label>
            <Textarea
              id="job-responsibilities"
              value={responsibilities.join("\n")}
              placeholder="One responsibility per line"
              rows={6}
              onChange={(event) =>
                setValue(
                  "responsibilities",
                  event.target.value.split("\n").map((value) => value.trim()).filter(Boolean),
                  { shouldDirty: true, shouldValidate: true },
                )
              }
            />
            {errors.responsibilities && (
              <p className="mt-1 text-xs text-red-500">{errors.responsibilities.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Official Notice (optional image or PDF)</Label>
            <div className="flex flex-wrap gap-2">
              <CloudinaryUploadButton
                accept="image"
                folder="careers/notices"
                onUpload={(url) => setNotice(url, "IMAGE")}
              />
              <CloudinaryUploadButton
                accept="pdf"
                folder="careers/notices"
                onUpload={(url) => setNotice(url, "PDF")}
              />
              {noticeUrl && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setValue("officialNoticeUrl", "", { shouldDirty: true });
                    setValue("officialNoticeType", null, { shouldDirty: true });
                  }}
                >
                  <X /> Remove Notice
                </Button>
              )}
            </div>
            {noticeUrl && noticeType === "IMAGE" && (
              <div className="relative aspect-video max-w-sm overflow-hidden rounded-md border">
                <Image src={noticeUrl} alt="Official notice preview" fill unoptimized className="object-contain" />
              </div>
            )}
            {noticeUrl && noticeType === "PDF" && (
              <a href={noticeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                <FileText /> Preview Official Notice PDF
              </a>
            )}
          </div>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={published}
              onCheckedChange={(checked) =>
                setValue("published", checked === true, { shouldDirty: true })
              }
            />
            Published
          </label>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="animate-spin" />}
              {isEdit ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
