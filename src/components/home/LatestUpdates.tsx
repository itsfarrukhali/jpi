import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

// Keep all home-page academic notices here.
// To add a new notice, append a new object with title, description, and href.
const updates = [
  {
    title: "1st Year - Batch 2024",
    description:
      "The Date Sheet for the Annual Examinations 2025 has been released. Students are advised to check their schedule and start preparing for exams.",
    // Replace with a real PDF route, for example: /downloads/date-sheet-2025.pdf
    href: "#",
  },
  {
    title: "3rd Year Result 2025",
    description:
      "The Final Result for DAE 3rd Year (Session 2022-2025) has been officially announced! Students can download their marksheets from the link below.",
    // Replace with a real PDF route, for example: /downloads/dae-3rd-year-result-2025.pdf
    href: "#",
  },
];

export default function LatestUpdates() {
  return (
    <section className="py-20 bg-(--color-surface)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Alerts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-dark) font-serif">
            Latest Updates
          </h2>
          <p className="mt-3 text-(--color-text-muted) max-w-2xl mx-auto">
            Stay updated with exam schedules, result announcements and other
            important academic notices.
          </p>
        </div>

        {/* Updates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-(--color-primary-dark) font-serif">
                {item.title}
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-(--color-text-muted)">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-(--color-primary) text-white text-sm font-semibold hover:bg-(--color-primary-dark) transition-colors"
              >
                <ArrowDownToLine size={16} />
                Download
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
