import { z } from "zod";

export const newsCategoryEnum = z.enum([
  "NEWS",
  "ANNOUNCEMENTS",
  "EVENTS",
  "SEMINARS",
]);

const publicOrRemoteUrl = z.string().refine(
  (value) => value.startsWith("/") || URL.canParse(value),
  "Must be a public path or valid URL",
);

export const newsCreateSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: newsCategoryEnum,
  image: publicOrRemoteUrl,
  pdfUrl: publicOrRemoteUrl.optional().nullable().or(z.literal("")),
  slug: z
    .string()
    .min(3, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must be lowercase letters, numbers, and hyphens",
    ),
  galleryImages: z.array(publicOrRemoteUrl).optional().default([]),
  published: z.boolean().optional().default(true),
});

export const newsUpdateSchema = z.object({
  title: z.string().min(5).optional(),
  excerpt: z.string().min(10).optional(),
  content: z.string().min(20).optional(),
  category: newsCategoryEnum.optional(),
  image: publicOrRemoteUrl.optional(),
  pdfUrl: publicOrRemoteUrl.optional().nullable().or(z.literal("")),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/)
    .optional(),
  galleryImages: z.array(publicOrRemoteUrl).optional(),
  published: z.boolean().optional(),
});

export type NewsCreateInput = z.input<typeof newsCreateSchema>;
export type NewsCreateOutput = z.output<typeof newsCreateSchema>;
export type NewsUpdateInput = z.input<typeof newsUpdateSchema>;
export type NewsUpdateOutput = z.output<typeof newsUpdateSchema>;

export const newsCategoryOptions = [
  { value: "NEWS", label: "News" },
  { value: "ANNOUNCEMENTS", label: "Announcements" },
  { value: "EVENTS", label: "Events" },
  { value: "SEMINARS", label: "Seminars" },
] as const;
