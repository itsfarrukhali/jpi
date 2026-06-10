import type { NewsFileRecord } from "@/types/news";

type NewsMedia = {
  image: string;
  pdfUrl: string | null;
  galleryImages: string[];
};

export function getNewsFiles(news: NewsMedia): NewsFileRecord[] {
  return [
    { kind: "thumbnail", url: news.image },
    ...(news.pdfUrl ? [{ kind: "pdf" as const, url: news.pdfUrl }] : []),
    ...news.galleryImages.map((url) => ({ kind: "gallery" as const, url })),
  ];
}
