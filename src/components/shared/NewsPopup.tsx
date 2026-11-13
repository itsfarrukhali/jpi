"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2, Megaphone, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { nextAnnouncementStage, parsePopupNews, type AnnouncementStage, type PopupNewsItem } from "@/lib/popup-news";

type NewsState = { status: "loading" | "ready" | "error"; items: PopupNewsItem[] };
const categoryLabels: Record<PopupNewsItem["category"], string> = {
  NEWS: "News", ANNOUNCEMENTS: "Announcement", EVENTS: "Event", SEMINARS: "Seminar",
};

export default function NewsPopup() {
  // In-memory state resets on a full page load, not on SPA navigation.
  const [stage, setStage] = useState<AnnouncementStage>("cyber");
  const [news, setNews] = useState<NewsState>({ status: "loading", items: [] });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    async function loadNews() {
      try {
        const response = await fetch("/api/news?pageSize=6", { signal: controller.signal, cache: "no-store" });
        if (!response.ok) throw new Error("Unable to load published news");
        const items = parsePopupNews(await response.json());
        if (active) setNews({ status: "ready", items });
      } catch {
        if (active) setNews({ status: "error", items: [] });
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void loadNews();
    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [attempt]);

  const advance = () => setStage((current) => nextAnnouncementStage(current));
  const closeAll = () => setStage("closed");
  const retry = () => {
    setNews({ status: "loading", items: [] });
    setAttempt((current) => current + 1);
  };

  return (
    <Dialog open={stage !== "closed"} onOpenChange={(open) => { if (!open) advance(); }}>
      <DialogContent showCloseButton={false} className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-lg p-0 gap-0 sm:max-w-xl">
        <DialogHeader className="relative border-b border-gray-200 px-5 py-4 pr-14">
          <DialogTitle className="flex items-center gap-2 text-base font-bold text-primary-dark"><Megaphone size={18} className="shrink-0 text-amber-600" />{stage === "cyber" ? "Cyber Security Admissions Open" : "Latest News & Events"}</DialogTitle>
          <DialogDescription className="mt-1 text-xs text-gray-600">{stage === "cyber" ? "DAE in Cyber Security and Networks Technology / Three-year diploma" : "Published news, announcements, events, and seminars from JPI."}</DialogDescription>
          <button type="button" onClick={advance} aria-label={stage === "cyber" ? "Close admission poster and view news" : "Close news and events"} className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-primary"><X size={18} /></button>
        </DialogHeader>

        {stage === "cyber" ? (
          <>
            <div className="bg-white p-2">
              <Image src="/news-events/admissions/cyber-security-admissions.png" alt="Jinnah Polytechnic Institute: admissions now open for the three-year DAE in Cyber Security. Learn cyber security fundamentals, computer networks, operating systems, database security, digital forensics, and more." width={1254} height={1254} sizes="(max-width: 640px) 90vw, 560px" priority className="mx-auto h-auto max-h-[60dvh] w-auto max-w-full object-contain" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-5 py-4">
              <Link href="/admissions/apply-now" onClick={closeAll} className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-light">Apply Now <ArrowRight size={13} /></Link>
              <button type="button" onClick={advance} className="cursor-pointer text-xs font-medium text-primary hover:underline">Continue to News &amp; Events →</button>
            </div>
          </>
        ) : (
          <>
            <div className="min-h-24 divide-y divide-gray-100">
              {news.status === "loading" && <p role="status" className="flex items-center gap-2 px-5 py-8 text-sm text-gray-600"><Loader2 size={16} className="animate-spin" />Loading latest updates…</p>}
              {news.status === "error" && <div className="px-5 py-8"><p role="alert" className="mb-3 text-sm text-gray-600">Latest updates are temporarily unavailable. Please try again.</p><button type="button" onClick={retry} className="cursor-pointer border border-gray-300 px-3 py-2 text-xs font-medium text-primary hover:bg-gray-50">Retry loading news</button></div>}
              {news.status === "ready" && news.items.length === 0 && <p className="px-5 py-8 text-sm text-gray-600">No published news or events are available at the moment.</p>}
              {news.status === "ready" && news.items.map((item) => (
                <Link key={item.id} href={"/news?open=" + encodeURIComponent(item.slug)} onClick={closeAll} className="block px-5 py-4 transition-colors hover:bg-gray-50">
                  <div className="mb-2 flex flex-wrap gap-2 text-[10px] text-gray-500"><span className="font-semibold uppercase tracking-wide text-amber-700">{categoryLabels[item.category]}</span><time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time></div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-800">{item.title}</h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">{item.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">Read More <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-5 py-4">
              <Link href="/news" onClick={closeAll} className="text-xs font-semibold text-primary hover:underline">View All News &amp; Events</Link>
              <button type="button" onClick={closeAll} className="cursor-pointer border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100">Dismiss</button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
