"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Calendar, AlertTriangle } from "lucide-react";

const categoryColors: Record<string, string> = {
  news: "bg-blue-100 text-blue-700",
  event: "bg-purple-100 text-purple-700",
  announcement: "bg-amber-100 text-amber-700",
};

const categoryIcons: Record<string, React.ReactNode> = {
  news: null,
  event: null,
  announcement: <AlertTriangle size={10} className="mr-1" />,
};

export default function NewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Home page only shows first 3 records — since array is ordered newest first,
  // the top items are announcements (admit card, date sheet, admissions)
  const latest = newsItems.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Latest
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif">
              News &amp; Academic Alerts
            </h2>
          </div>
          <Link
            href="/news?category=announcement"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            All Announcements <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid of cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {latest.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`group rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 ${
                item.category === "announcement"
                  ? "bg-amber-50/60 border-amber-200"
                  : "bg-surface border-gray-100"
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                      categoryColors[item.category]
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-text-muted mb-2">
                  <Calendar size={11} />
                  <span>{formatDate(item.date)}</span>
                  {item.category === "announcement" && (
                    <span className="flex items-center text-amber-600 ml-1">
                      {categoryIcons[item.category]}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-primary-dark text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
                  {item.excerpt}
                </p>
                <Link
                  href={`/news#${item.slug}`}
                  className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={11} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
