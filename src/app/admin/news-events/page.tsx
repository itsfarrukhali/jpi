import { prisma } from "@/lib/prisma";
import { NewsTable } from "@/components/admin/news/NewsTable";
import type { NewsItemRecord } from "@/types/news";
import { redirect } from "next/navigation";
import { canReadContent, getAuthAdmin } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export default async function NewsEventsPage() {
  const admin = await getAuthAdmin();
  if (!admin) redirect("/login");
  if (!canReadContent(admin, "NEWS")) redirect("/admin");

  const news = await prisma.newsItem.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      excerpt: true,
      content: true,
      date: true,
      category: true,
      image: true,
      pdfUrl: true,
      slug: true,
      galleryImages: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Convert dates to serializable format (ISO string)
  const serializedNews: NewsItemRecord[] = news.map((item) => ({
    ...item,
    date: item.date.toISOString(),
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">News & Events</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage all news, announcements, events, and seminars
          </p>
        </div>
      </div>
      <NewsTable news={serializedNews} />
    </div>
  );
}
