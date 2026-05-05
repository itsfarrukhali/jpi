import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { jecPrograms } from "@/data/programs";
import { Award, Star, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Jinnah Excellence Certificates (JEC)",
  description:
    "The Jinnah Excellence Certificate (JEC) recognizes outstanding academic and co-curricular achievement at JPI.",
};

export default function JECPage() {
  return (
    <>
      <PageHero
        title="Jinnah Excellence Certificates"
        subtitle="Recognizing and rewarding outstanding achievement at JPI."
        breadcrumbs={[{ label: "Programs" }, { label: "JEC" }]}
        imageUrl="https://picsum.photos/1600/500?random=53"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-6xl mb-4">🏅</div>
            <h2 className="text-3xl font-bold text-(--color-primary-dark) mb-4 font-serif">
              What is the JEC?
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              The Jinnah Excellence Certificate (JEC) is JPI&apos;s premier
              recognition program, awarded annually to students who demonstrate
              exceptional performance — whether in academics, co-curricular
              activities, or community service. JEC awardees receive
              scholarships, certificates of distinction, and priority
              consideration for industry internships.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {jecPrograms.map((p, i) => (
              <div
                key={p.id}
                className="bg-(--color-surface) rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {i === 0 ? (
                    <Award size={32} className="text-(--color-gold)" />
                  ) : (
                    <Trophy size={32} className="text-purple-500" />
                  )}
                  <div>
                    <h3 className="font-bold text-lg text-(--color-primary-dark) font-serif">
                      {p.shortName}
                    </h3>
                    <p className="text-xs text-(--color-text-muted)">
                      {p.duration} · {p.seats} awards
                    </p>
                  </div>
                </div>
                <p className="text-sm text-(--color-text-muted) mb-4">
                  {p.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-(--color-primary-dark) uppercase tracking-wider mb-2">
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-1.5">
                    {p.subjects[0].items.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-2 text-sm text-(--color-text-muted)"
                      >
                        <Star
                          size={11}
                          className="text-(--color-gold) fill-(--color-gold)"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-(--color-primary-dark) uppercase tracking-wider mb-2">
                    Benefits
                  </h4>
                  <ul className="space-y-1.5">
                    {p.careers.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-2 text-sm text-(--color-text-muted)"
                      >
                        <span className="text-green-500 text-xs">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-(--color-primary) text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 font-serif">
              Nominations Open Each November
            </h3>
            <p className="text-white/80 max-w-xl mx-auto">
              Students are automatically evaluated based on academic records and
              faculty nominations. Contact the Student Affairs office for more
              details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
