import { z } from "zod";

const publicOrRemoteUrl = z.string().refine(
  (value) => value.startsWith("/") || URL.canParse(value),
  "Must be a public path or valid URL",
);

export const officialNoticeTypeSchema = z.enum(["IMAGE", "PDF"]);

const jobOpeningBaseSchema = z.object({
    slug: z
      .string()
      .min(3, "Slug is required")
      .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens"),
    title: z.string().min(5, "Title must be at least 5 characters"),
    department: z.string().min(2, "Department is required"),
    type: z.string().min(2, "Employment type is required"),
    qualification: z.string().min(5, "Qualification is required"),
    description: z.string().min(20, "Description must be at least 20 characters"),
    responsibilities: z
      .array(z.string().min(3))
      .min(1, "Add at least one responsibility"),
    officialNoticeUrl: publicOrRemoteUrl.optional().nullable().or(z.literal("")),
    officialNoticeType: officialNoticeTypeSchema.optional().nullable(),
    published: z.boolean().optional().default(true),
  });

function validateOfficialNotice(
  data: {
    officialNoticeUrl?: string | null;
    officialNoticeType?: "IMAGE" | "PDF" | null;
  },
  context: z.RefinementCtx,
) {
    const hasUrl = Boolean(data.officialNoticeUrl);
    const hasType = Boolean(data.officialNoticeType);
    if (hasUrl !== hasType) {
      context.addIssue({
        code: "custom",
        path: ["officialNoticeUrl"],
        message: "Official notice URL and type must be provided together",
      });
    }
}

export const jobOpeningCreateSchema =
  jobOpeningBaseSchema.superRefine(validateOfficialNotice);
export const jobOpeningUpdateSchema =
  jobOpeningBaseSchema.partial().superRefine(validateOfficialNotice);

export type JobOpeningCreateInput = z.input<typeof jobOpeningCreateSchema>;
export type JobOpeningCreateOutput = z.output<typeof jobOpeningCreateSchema>;
