import { z } from "zod";

const popupNewsResponseSchema = z.object({
  data: z.array(z.object({
    id: z.string().min(1), title: z.string().min(1), excerpt: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    date: z.string().refine((value) => Number.isFinite(Date.parse(value))),
    category: z.enum(["NEWS", "ANNOUNCEMENTS", "EVENTS", "SEMINARS"]),
    published: z.boolean(),
  })),
});

export type PopupNewsItem = z.infer<typeof popupNewsResponseSchema>["data"][number];
export type AnnouncementStage = "cyber" | "news" | "closed";

export function nextAnnouncementStage(stage: AnnouncementStage): AnnouncementStage {
  return stage === "cyber" ? "news" : "closed";
}

export function parsePopupNews(value: unknown): PopupNewsItem[] {
  const response = popupNewsResponseSchema.parse(value);
  const seen = new Set<string>();
  return response.data.filter((item) => {
    if (!item.published || seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  }).sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0, 6);
}
