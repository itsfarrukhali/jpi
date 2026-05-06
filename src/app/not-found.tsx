import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-(--color-surface)">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,63,122,0.14),transparent_48%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="rounded-3xl border border-primary/15 bg-white p-8 md:p-12 shadow-xl text-center">
          <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--color-primary)">
            Error 404
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-(--color-primary-dark) font-serif">
            Page Not Found
          </h1>

          <p className="mt-4 text-(--color-text-muted) max-w-2xl mx-auto leading-relaxed">
            The page you are looking for may have been moved, deleted, or the
            link might be incorrect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--color-primary-dark)"
            >
              <Home size={16} />
              Go To Home
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-(--color-primary-dark) transition-colors hover:bg-(--color-surface)"
            >
              <ArrowLeft size={16} />
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
