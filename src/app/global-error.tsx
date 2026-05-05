"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-(--color-surface)">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,146,26,0.18),transparent_46%)]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="rounded-3xl border border-primary/15 bg-white p-8 md:p-12 shadow-xl text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-rust/10 text-rust">
                <AlertTriangle size={22} />
              </div>

              <h1 className="mt-5 text-3xl md:text-4xl font-bold text-(--color-primary-dark) font-serif">
                Something Went Wrong
              </h1>

              <p className="mt-3 text-(--color-text-muted) leading-relaxed max-w-2xl mx-auto">
                We hit an unexpected issue while loading this page. Please try
                again or return to the home page.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--color-primary-dark)"
                >
                  <RefreshCcw size={16} />
                  Try Again
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-(--color-primary-dark) transition-colors hover:bg-(--color-surface)"
                >
                  Back To Home
                </Link>
              </div>

              {error.digest ? (
                <p className="mt-6 text-xs text-(--color-text-muted)">
                  Reference: {error.digest}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
