"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { newsItems } from "@/data/news";
import {
  Calendar,
  Megaphone,
  CalendarDays,
  ImageIcon,
  FileText,
} from "lucide-react";
import GalleryLightbox from "@/components/shared/GalleryLightbox";

// Filter lists (static, not reactive)
const newsAndAnnouncements = newsItems.filter(
  (item) => item.category === "news" || item.category === "announcement",
);

const events = newsItems.filter((item) => item.category === "event");

const categoryStyles: Record<string, string> = {
  news: "bg-blue-50 text-blue-700 border-blue-100",
  event: "bg-purple-50 text-purple-700 border-purple-100",
  announcement: "bg-amber-50 text-amber-700 border-amber-100",
};

const categoryLabels: Record<string, string> = {
  news: "News",
  event: "Event",
  announcement: "Announcement",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsEventsPage() {
  const [galleryOpen, setGalleryOpen] = useState<string[] | null>(null);

  const openGallery = (images: string[] | undefined) => {
    if (images && images.length > 0) {
      setGalleryOpen(images);
    }
  };

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay up-to-date with the latest happenings at Jinnah Polytechnic Institute"
        breadcrumbs={[{ label: "News & Events" }]}
        imageUrl="https://picsum.photos/1600/500?random=90"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* ─── News & Announcements ────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b border-gray-200 flex items-center gap-2">
              <Megaphone size={18} className="text-amber-600" />
              News &amp; Announcements
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Latest updates, achievements, and important notices from the
              Institute
            </p>

            {/* Featured / Latest News */}
            {newsAndAnnouncements.length > 0 && (
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50 border border-gray-200">
                  <div className="relative min-h-56 lg:min-h-full">
                    <Image
                      src={newsAndAnnouncements[0].image}
                      alt={newsAndAnnouncements[0].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 border capitalize ${
                          categoryStyles[newsAndAnnouncements[0].category]
                        }`}
                      >
                        {categoryLabels[newsAndAnnouncements[0].category]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={11} />
                        {formatDate(newsAndAnnouncements[0].date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {newsAndAnnouncements[0].title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {newsAndAnnouncements[0].excerpt}
                    </p>
                    {newsAndAnnouncements[0].pdfUrl && (
                      <Link
                        href={newsAndAnnouncements[0].pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 border border-amber-200 px-3 py-1.5 hover:bg-amber-50 transition-colors self-start"
                      >
                        <FileText size={12} />
                        View Official Notice
                      </Link>
                    )}
                    {newsAndAnnouncements[0].galleryImages &&
                      newsAndAnnouncements[0].galleryImages.length > 0 && (
                        <button
                          onClick={() =>
                            openGallery(newsAndAnnouncements[0].galleryImages)
                          }
                          className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-amber-700 border border-amber-200 px-3 py-1.5 hover:bg-amber-50 transition-colors"
                        >
                          <ImageIcon size={12} />
                          View Gallery (
                          {newsAndAnnouncements[0].galleryImages.length} photos)
                        </button>
                      )}
                  </div>
                </div>
              </div>
            )}

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {newsAndAnnouncements.slice(1).map((item) => (
                <article
                  key={item.id}
                  className="bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 border capitalize ${
                          categoryStyles[item.category]
                        }`}
                      >
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                      <Calendar size={11} />
                      {formatDate(item.date)}
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {item.excerpt}
                    </p>
                    {item.pdfUrl && (
                      <Link
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium 
                                 text-amber-700 border border-amber-200 px-3 py-1.5 
                                 hover:bg-amber-50 transition-colors"
                      >
                        <FileText size={12} />
                        View Official Notice
                      </Link>
                    )}
                    {item.galleryImages && item.galleryImages.length > 0 && (
                      <button
                        onClick={() => openGallery(item.galleryImages)}
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-amber-700 border border-amber-200 px-3 py-1.5 hover:bg-amber-50 transition-colors"
                      >
                        <ImageIcon size={12} />
                        View Gallery ({item.galleryImages.length} photos)
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ─── Events ──────────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b border-gray-200 flex items-center gap-2">
              <CalendarDays size={18} className="text-amber-600" />
              Events &amp; Activities
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Industrial visits, workshops, competitions, guest lectures, and
              co-curricular activities
            </p>

            {/* Upcoming / Latest Event */}
            {events.length > 0 && (
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-800 text-white">
                  <div className="relative min-h-56 lg:min-h-full">
                    <Image
                      src={events[0].image}
                      alt={events[0].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-medium px-2.5 py-1 border border-white/30 text-white capitalize">
                        {categoryLabels[events[0].category]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={12} className="text-amber-400" />
                      <span className="text-xs text-white/60">
                        {formatDate(events[0].date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {events[0].title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {events[0].excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {events[0].galleryImages &&
                        events[0].galleryImages.length > 0 && (
                          <button
                            onClick={() => openGallery(events[0].galleryImages)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 border border-white/20 px-3 py-1.5 hover:bg-white/10 transition-colors"
                          >
                            <ImageIcon size={12} />
                            View ({events[0].galleryImages.length} photos)
                          </button>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.slice(1).map((item) => (
                <article
                  key={item.id}
                  className="bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 border capitalize ${
                          categoryStyles[item.category]
                        }`}
                      >
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                      <Calendar size={11} />
                      {formatDate(item.date)}
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {item.excerpt}
                    </p>
                    {item.galleryImages && item.galleryImages.length > 0 && (
                      <button
                        onClick={() => openGallery(item.galleryImages)}
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-amber-700 border border-amber-200 px-3 py-1.5 hover:bg-amber-50 transition-colors"
                      >
                        <ImageIcon size={12} />
                        View Gallery ({item.galleryImages.length} photos)
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ─── CTA ─────────────────────────────────── */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link
              href="/admissions/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Apply Now →
            </Link>
          </div>
        </div>

        {/* Lightbox */}
        {galleryOpen && (
          <GalleryLightbox
            images={galleryOpen}
            onClose={() => setGalleryOpen(null)}
          />
        )}
      </section>
    </>
  );
}
