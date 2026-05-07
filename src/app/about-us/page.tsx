import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { Award, Users, BookOpen, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jinnah Polytechnic Institute — established in 1961 under Anjuman-e-Islamia Trust Pakistan, blessed by Quaid-e-Azam to carry his name for technical education.",
};

const highlights = [
  { icon: Award, label: "Established", value: "1961" },
  { icon: Building2, label: "Technologies Offered", value: "8" },
  { icon: BookOpen, label: "Program Duration", value: "3 Years" },
  { icon: Users, label: "Location", value: "Nazimabad-5" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Jinnah Polytechnic Institute"
        subtitle="A project of Anjuman-e-Islamia Trust Pakistan — carrying Quaid-e-Azam's name with pride since 1961."
        breadcrumbs={[{ label: "About" }]}
        imageUrl="https://picsum.photos/1600/500?random=30"
        imageAlt="JPI Campus"
      />

      {/* Quick Stats */}
      <section className="py-12 bg-(--color-primary)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="text-white">
                  <Icon
                    size={28}
                    className="mx-auto mb-2 text-(--color-gold)"
                  />
                  <div className="text-2xl font-bold font-serif">{h.value}</div>
                  <div className="text-xs text-white/70 mt-0.5">{h.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Origin & Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
              Our Heritage
            </span>
            <h2 className="text-3xl font-bold text-(--color-primary-dark) mb-5 font-serif">
              Blessed by the Quaid-e-Azam
            </h2>
            <div className="space-y-4 text-(--color-text-muted) text-sm leading-relaxed">
              <p>
                Jinnah Polytechnic Institute was established in{" "}
                <strong className="text-(--color-primary-dark)">1961</strong>{" "}
                under{" "}
                <strong className="text-(--color-primary-dark)">
                  Anjuman-e-Islamia Trust Pakistan
                </strong>
                , a private social organization founded by the late{" "}
                <strong>Alhaj Rayazuddin Ahmed Akbarabadi</strong>. His driving
                spirit laid the foundation for what would become one of
                Karachi&apos;s most respected technical institutions.
              </p>
              <p>
                This organization holds a unique distinction in the subcontinent
                — it is the{" "}
                <strong className="text-(--color-primary-dark)">
                  only institution personally blessed by Quaid-e-Azam Mohammad
                  Ali Jinnah
                </strong>{" "}
                with permission to use his name for establishments that enhance
                technical and scientific education for the Muslim Ummah.
              </p>
              <p>
                Since partition, Anjuman-e-Islamia has established about 15
                educational institutions in Karachi, including Jinnah College
                and Jinnah University for Women, Nazimabad. Jinnah Polytechnic
                Institute stands proudly among them, striving to contribute to
                the cultural, socio-economic, educational, and scientific
                development of our society.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about-us/vision-history-mission"
                className="px-5 py-2.5 rounded-xl bg-(--color-primary) text-white text-sm font-semibold hover:bg-(--color-primary-light) transition-colors"
              >
                Full History
              </Link>
              <Link
                href="/about-us/principals-message"
                className="px-5 py-2.5 rounded-xl border border-(--color-primary) text-(--color-primary) text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Principal&apos;s Message
              </Link>
            </div>
          </div>

          {/* Main Building Image */}
          <div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative w-full aspect-629/354">
                <Image
                  src="/brand/jpi-building.jpeg"
                  alt="Jinnah Polytechnic Institute Main Building — ST-1, Nazimabad-5, Karachi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-(--color-text-muted) italic text-center leading-relaxed">
              Jinnah Polytechnic Institute — ST-1, Nazimabad-5, Karachi 74600
            </p>
          </div>
        </div>
      </section>

      {/* Academic Structure */}
      <section className="py-20 bg-(--color-surface)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-(--color-primary-dark) mb-3 font-serif">
              Academic Framework
            </h2>
            <p className="text-sm text-(--color-text-muted) max-w-2xl mx-auto">
              A structured three-year journey governed by the Sindh Board of
              Technical Education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Affiliation & Governance",
                points: [
                  "Academically controlled by SBTE Karachi",
                  "Curriculum: Revised D.A.E Syllabus 1997",
                  "Annual examination system per SBTE policy",
                ],
              },
              {
                title: "Program Structure",
                points: [
                  "3-year Diploma of Associate Engineer (D.A.E)",
                  "36-week academic year with mid-term & finals",
                  "Day & evening programs available",
                ],
              },
              {
                title: "Faculty & Management",
                points: [
                  "Highly qualified engineering graduates & masters",
                  "Administrative control rests with the Principal",
                  "Subsidized by Anjuman-e-Islamia Trust Pakistan",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-(--color-primary-dark) text-lg mb-4 font-serif">
                  {card.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-(--color-text-muted)">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-(--color-primary) mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-(--color-primary-dark) mb-3 font-serif">
              Technologies We Offer
            </h2>
            <p className="text-sm text-(--color-text-muted) max-w-xl mx-auto">
              3-year D.A.E programs in day and evening shifts at ST-1,
              Nazimabad-5, Karachi 74600
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Electrical",
              "Electronics",
              "Mechanical",
              "Civil",
              "Software",
              "Refrigeration & A/C",
              "Computer Information",
              "Chemical Technology",
            ].map((tech) => (
              <div
                key={tech}
                className="text-center p-4 rounded-xl bg-(--color-surface) hover:bg-primary-light/5 transition-colors border border-gray-100"
              >
                <span className="text-sm font-semibold text-(--color-primary-dark)">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/programs"
              className="text-sm text-(--color-primary) font-semibold hover:underline"
            >
              View all programs with detailed syllabi →
            </Link>
          </div>
        </div>
      </section>

      {/* Guiding Philosophy */}
      <section className="py-20 bg-(--color-surface)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-(--color-primary-dark) mb-10 font-serif">
            Knowledge · Skills · Attitude
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Knowledge",
                desc: "Grounded in SBTE-approved curricula with deep theoretical understanding and real-world application.",
              },
              {
                title: "Skills",
                desc: "Hands-on workshops and labs ensure every graduate is industry-ready with practical expertise.",
              },
              {
                title: "Attitude",
                desc: "We cultivate professionalism, sound character, ethics, and values — making students an asset to the nation.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-(--color-primary-dark) text-xl mb-3 font-serif">
                  {v.title}
                </h3>
                <p className="text-sm text-(--color-text-muted) leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-16 bg-(--color-primary)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold font-serif mb-3">Visit Us</h2>
          <p className="text-white/80 text-sm max-w-lg mx-auto mb-6">
            ST-1, Nazimabad-5, Karachi 74600 — in the heart of one of
            Karachi&apos;s most established educational hubs
          </p>
          <Link
            href="/contact-us-us"
            className="inline-block px-6 py-3 rounded-xl bg-white text-(--color-primary) text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </>
  );
}
