"use client";

import { useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, X } from "lucide-react";
import { newsCreateSchema, newsCategoryOptions } from "@/lib/validations/news";
import type {
  NewsCreateInput,
  NewsCreateOutput,
} from "@/lib/validations/news";
import type { NewsItemRecord } from "@/types/news";
import { CloudinaryUploadButton } from "@/components/admin/shared/CloudinaryUploadButton";

interface NewsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  newsItem?: NewsItemRecord | null;
  onSuccess: () => void;
}

const defaultValues: NewsCreateInput = {
  title: "",
  excerpt: "",
  content: "",
  category: "NEWS",
  image: "",
  pdfUrl: "",
  slug: "",
  galleryImages: [],
  published: true,
};

export function NewsModal({
  open,
  onOpenChange,
  newsItem,
  onSuccess,
}: NewsModalProps) {
  const isEdit = !!newsItem;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    getValues,
  } = useForm<NewsCreateInput, unknown, NewsCreateOutput>({
    resolver: zodResolver(newsCreateSchema),
    defaultValues,
  });
  const galleryImages = useWatch({ control, name: "galleryImages" }) ?? [];
  const featuredImage = useWatch({ control, name: "image" });
  const pdfUrl = useWatch({ control, name: "pdfUrl" });

  useEffect(() => {
    if (newsItem) {
      reset({
        title: newsItem.title,
        excerpt: newsItem.excerpt,
        content: newsItem.content,
        category: newsItem.category,
        image: newsItem.image,
        pdfUrl: newsItem.pdfUrl ?? "",
        slug: newsItem.slug,
        galleryImages: newsItem.galleryImages,
        published: newsItem.published,
      });
    } else {
      reset(defaultValues);
    }
  }, [newsItem, reset]); // defaultValues is now stable

  const onSubmit = async (data: NewsCreateOutput) => {
    try {
      const url = isEdit
        ? `/api/admin/news/${newsItem!.id}`
        : "/api/admin/news";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        toast.error(text || "Something went wrong");
        return;
      }
      toast.success(isEdit ? "News updated" : "News created");
      onSuccess();
      onOpenChange(false);
    } catch {
      toast.error("Network error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-150 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit News" : "Add News"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input id="title" {...register("title")} placeholder="News title" />
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea
              id="excerpt"
              {...register("excerpt")}
              placeholder="Short summary"
              rows={3}
            />
            {errors.excerpt && (
              <p className="text-xs text-red-500 mt-1">
                {errors.excerpt.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              {...register("content")}
              placeholder="Full article content"
              rows={6}
            />
            {errors.content && (
              <p className="text-xs text-red-500 mt-1">
                {errors.content.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Category *</Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {newsCategoryOptions.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                {...register("slug")}
                placeholder="url-friendly-name"
              />
              {errors.slug && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.slug.message}
                </p>
              )}
            </div>
          </div>

          {/* Image upload with Cloudinary */}
          <div>
            <Label>Featured Image *</Label>
            <div className="flex items-center gap-3">
              <Input
                id="image"
                {...register("image")}
                placeholder="Image URL"
                readOnly
                className="flex-1"
              />
              <CloudinaryUploadButton
                onUpload={(url) =>
                  setValue("image", url, { shouldValidate: true })
                }
                folder="news"
                accept="image"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setValue("image", "/brand/notice-thumb.png", {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              >
                Use Notice Thumbnail
              </Button>
            </div>
            {featuredImage && (
              <div className="relative mt-3 aspect-video w-full max-w-64 overflow-hidden rounded-md border bg-gray-50">
                <Image
                  src={featuredImage}
                  alt="Featured image preview"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            )}
            {errors.image && (
              <p className="text-xs text-red-500 mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* PDF upload */}
          <div>
            <Label>PDF Attachment (optional)</Label>
            <div className="flex items-center gap-3">
              <Input
                id="pdfUrl"
                {...register("pdfUrl")}
                placeholder="PDF URL"
                readOnly
                className="flex-1"
              />
              <CloudinaryUploadButton
                onUpload={(url) =>
                  setValue("pdfUrl", url, { shouldValidate: true })
                }
                folder="news"
                accept="pdf"
              />
            </div>
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-xs text-blue-600 hover:underline"
              >
                <FileText className="size-4" />
                Preview PDF
              </a>
            )}
          </div>

          {/* Gallery images (simplified for now – add multiple URLs separated by commas) */}
          <div className="space-y-2">
            <Label>Gallery Images</Label>
            <CloudinaryUploadButton
              folder="news/gallery"
              accept="image"
              multiple
              onUpload={(url) => {
                const currentImages = getValues("galleryImages") ?? [];
                setValue("galleryImages", [...new Set([...currentImages, url])], {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {galleryImages.map((url) => (
                <div
                  key={url}
                  className="relative aspect-square overflow-hidden rounded-md border bg-gray-50"
                >
                  <Image
                    src={url}
                    alt="Gallery image preview"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute right-1 top-1 opacity-90"
                  aria-label="Remove gallery image"
                  onClick={() =>
                    setValue(
                      "galleryImages",
                      galleryImages.filter((image) => image !== url),
                      { shouldDirty: true, shouldValidate: true },
                    )
                  }
                >
                  <X />
                </Button>
              </div>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-gray-800 hover:bg-gray-700">
              {isEdit ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
