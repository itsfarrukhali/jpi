import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { newsItems } from "@/data/news";
import {
  Calendar,
  ArrowRight,
  Megaphone,
  CalendarDays,
  ImageIcon,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Latest news, announcements, events, and gallery from Jinnah Polytechnic Institute.",
};

// Filter by category
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
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-medium">
                        Read More <ArrowRight size={12} />
                      </span>
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
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ─── Events Gallery ───────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b border-gray-200 flex items-center gap-2">
              <ImageIcon size={18} className="text-amber-600" />
              Events Gallery
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              A visual journey through our campus events and activities
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {newsItems.slice(0, 12).map((item) => (
                <div
                  key={`gallery-${item.id}`}
                  className="relative aspect-square overflow-hidden border border-gray-200 group cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <div className="p-3 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs line-clamp-2 font-medium">
                        {item.title}
                      </p>
                      <p className="text-white/60 text-[10px] mt-0.5">
                        {formatDate(item.date)}
                      </p>
                    </div>
                  </div>
                </div>
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
      </section>
    </>
  );
}
