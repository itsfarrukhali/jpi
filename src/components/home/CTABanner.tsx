import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 bg-(--color-gold)">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
          Admissions Open 2025
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-serif">
          Admissions Open for 2025–26
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Limited seats available — secure your place in Pakistan&apos;s premier
          polytechnic institute today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/admissions/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-(--color-primary) text-white font-semibold hover:bg-(--color-primary-dark) transition-colors shadow-lg"
          >
            Apply Now →
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Learn About Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
