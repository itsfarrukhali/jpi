"use client";

import { useMemo, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { X, Megaphone, ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";

const TWO_WEEKS_MS = 14 * 24 * 60 * 60 * 1000;
const FORTY_FIVE_DAYS_MS = 45 * 24 * 60 * 60 * 1000;

function getAge(dateStr: string): number {
  return Date.now() - new Date(dateStr).getTime();
}

function isNew(dateStr: string): boolean {
  return getAge(dateStr) <= TWO_WEEKS_MS;
}

export default function NewsPopup() {
  const router = useRouter();

  const visible = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("news-popup-dismissed", onStoreChange);
      return () =>
        window.removeEventListener("news-popup-dismissed", onStoreChange);
    },
    () => !sessionStorage.getItem("newsPopupDismissed"),
    () => false,
  );

  // Only items published within the last 45 days
  const filtered = useMemo(
    () => newsItems.filter((item) => getAge(item.date) <= FORTY_FIVE_DAYS_MS),
    [],
  );

  const handleClose = () => {
    sessionStorage.setItem("newsPopupDismissed", "true");
    window.dispatchEvent(new Event("news-popup-dismissed"));
  };

  const handleItemClick = (slug: string) => {
    router.push(`/news?open=${slug}`);
    handleClose();
  };

  if (!visible || filtered.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 text-amber-700">
            <Megaphone size={18} />
            <span className="font-bold text-sm">Latest News &amp; Notices</span>
          </div>
          <button type="button" onClick={handleClose} aria-label="Close popup">
            <X size={18} className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-100">
          {filtered.map((item) => {
            const fresh = isNew(item.date);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.slug)}
                className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors flex gap-4 items-start"
              >
                {/* Status dot */}
                <div className="shrink-0 mt-0.5">
                  {fresh ? (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                  ) : (
                    <span className="inline-block w-3 h-3 rounded-full bg-gray-300" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium text-gray-800 line-clamp-1">
                      {item.title}
                    </h4>
                    {fresh && (
                      <span className="shrink-0 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                    {!fresh && (
                      <span className="shrink-0 text-[10px] font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        RECENT
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-amber-600 font-medium">
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-5 py-3 text-center">
          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
