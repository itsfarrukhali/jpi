import type { NewsCategory } from "../../generated/prisma/client";

export type NewsItemRecord = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: NewsCategory;
  image: string;
  pdfUrl: string | null;
  slug: string;
  galleryImages: string[];
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type NewsFileRecord = {
  kind: "thumbnail" | "pdf" | "gallery";
  url: string;
};

export type NewsCategoryOption = {
  value: NewsCategory;
  label: string;
};
