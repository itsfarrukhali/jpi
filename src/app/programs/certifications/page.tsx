import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ProgramCard from "@/components/shared/ProgramCard";
import { certificationPrograms } from "@/data/programs";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Industry-recognized certification programs at JPI — AutoCAD, PLC, Web Development, Networking and more.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certification Programs"
        subtitle="Industry-recognized certificates in 3–6 months"
        breadcrumbs={[{ label: "Programs" }, { label: "Certifications" }]}
        imageUrl="https://picsum.photos/1600/500?random=51"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-(--color-text-muted) leading-relaxed">
              Our certification programs are designed for working professionals
              and fresh graduates looking to gain industry-specific skills
              quickly. Each program is taught by experienced practitioners and
              includes hands-on lab work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certificationPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                href="/admissions/apply-now"
              />
            ))}
          </div>
          <div className="bg-(--color-surface) rounded-2xl p-8 border border-gray-100">
            <h3 className="font-bold text-xl text-(--color-primary-dark) mb-4 font-serif">
              Why Get Certified at JPI?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "Industry Recognition",
                  desc: "Certificates endorsed by leading companies in Karachi's industrial sector.",
                },
                {
                  icon: "🔬",
                  title: "Hands-On Training",
                  desc: "Real equipment, real software, real scenarios — not just theory.",
                },
                {
                  icon: "💼",
                  title: "Job Placement Support",
                  desc: "Our alumni network and industry partnerships help you find work fast.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm text-(--color-primary-dark) mb-1">
                      {f.title}
                    </h4>
                    <p className="text-xs text-(--color-text-muted)">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/admissions/apply-now"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-(--color-gold) text-white font-semibold hover:bg-(--color-gold-light)   transition-colors shadow-md"
            >
              Enroll in a Certification →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
