import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { Medal, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Founder — Al-Haj Moulvi Rayazuddin Ahmed (T.I.)",
  description:
    "The life and legacy of Al-Haj Moulvi Rayazuddin Ahmed Akbarabadi (T.I.), founder of Anjuman-e-Islamia Trust Pakistan and pioneer of Muslim female education.",
};

export default function FounderPage() {
  return (
    <>
      <PageHero
        title="Our Founder"
        subtitle="Al-Haj Moulvi Rayazuddin Ahmed Akbarabadi (T.I.) — 1906 to ..."
        breadcrumbs={[
          { label: "About", href: "/about-us" },
          { label: "Our Founder" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=50"
        imageAlt="Founder"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Early Life — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                Early Life &amp; Influences
              </h2>
              <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                Born 1906 — Agra, City of the Taj Mahal
              </p>
              <div className="space-y-4 text-sm text-(--color-text-muted) leading-relaxed">
                <p>
                  <Quote size={18} className="inline text-gold/30 mr-1" />A
                  direct descendant of{" "}
                  <strong className="text-(--color-primary-dark)">
                    Hazrat Sheikh Saleem Uddin Chishty
                  </strong>
                  , Al-Haj Moulvi Rayazuddin Ahmed (T.I.) was born in{" "}
                  <strong>1906</strong> in the city of the Taj Mahal — the city
                  of intellectuals and poets, <strong>Agra</strong>. His early
                  upbringing through his parents and education instilled in him
                  a profound love for education, despite being enslaved in
                  government service.
                </p>
                <p>
                  In an era of conventional thoughts and traditional values, he
                  envisaged that{" "}
                  <strong className="text-(--color-primary-dark)">
                    female education was of paramount importance
                  </strong>
                  . His revolutionary thoughts clashed with the norms of his
                  day, but his commitment and dedication to women&apos;s
                  literacy did not subside.
                </p>
              </div>
            </div>

            {/* Image — Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-40 sm:w-52 lg:w-56 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                <div className="relative w-full aspect-392/551">
                  <Image
                    src="/management/alhaj-sahab.jpeg"
                    alt="Al-Haj Moulvi Rayazuddin Ahmed Akbarabadi (T.I.)"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Inspired by Quaid-e-Azam — Full Width Highlight */}
          <div>
            <div className="bg-(--color-surface) rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                Inspired by the Quaid-e-Azam
              </h2>
              <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                A Blessing That Shaped Our Identity
              </p>
              <div className="space-y-4 text-sm text-(--color-text-muted) leading-relaxed">
                <p>
                  <strong className="text-(--color-primary-dark)">
                    Quaid-e-Azam Mohammad Ali Jinnah
                  </strong>{" "}
                  was the person who inspired Moulvi Sahab. He believed in the
                  dynamic leadership of the Quaid and was very pro-active in the
                  freedom movement under the banner of the{" "}
                  <strong>Muslim League</strong>.
                </p>
                <p>
                  Seeing his dedication and love for education,{" "}
                  <strong className="text-(--color-primary-dark)">
                    Quaid-e-Azam graciously allowed Moulvi Sahab to use his name
                    &ldquo;Jinnah&ldquo;
                  </strong>{" "}
                  for a college he intended to establish at Agra. This blessing
                  would later become the foundation for multiple institutions
                  carrying the Quaid&apos;s name in Karachi — making
                  Anjuman-e-Islamia the only organization of its kind in the
                  subcontinent with this honor.
                </p>
              </div>
            </div>
          </div>

          {/* Founding Anjuman-e-Islamia — Text Right, Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image — Quaid's Letter */}
            <div className="flex justify-center lg:justify-start lg:order-1 order-2">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 p-4">
                <div className="relative w-full aspect-457/272">
                  <Image
                    src="/brand/quiad-letter.png"
                    alt="Quaid-e-Azam's letter granting permission to use the name Jinnah"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-xs text-(--color-text-muted) italic text-center leading-relaxed">
                  Quaid-e-Azam graciously allowed Moulvi Rayazuddin Ahmed to use
                  his name &ldquo;JINNAH&ldquo; for a college he intended to
                  establish at Agra.
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:order-2 order-1">
              <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                Founding Anjuman-e-Islamia Trust
              </h2>
              <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                Pioneer of Muslim Female Education
              </p>
              <div className="space-y-4 text-sm text-(--color-text-muted) leading-relaxed">
                <p>
                  He was the founder of{" "}
                  <strong className="text-(--color-primary-dark)">
                    Anjuman-e-Islamia Trust Pakistan
                  </strong>
                  , a private social organization formed with him as its main
                  driving spirit. This heralded the inception of many
                  educational institutions. He was, in a way, the{" "}
                  <strong>
                    pioneer of Muslim female education in this area
                  </strong>
                  .
                </p>
                <p>
                  After partition, he settled in Karachi and continued to work
                  for his revolutionary and innovative ideas.{" "}
                  <strong>Lack of finances did not deter him</strong> from his
                  pursuit of spreading education. With the meager amount that
                  was donated by the Muslims of Agra and no other financial
                  support, he established the{" "}
                  <strong>first Girls School at Pakistan Chowk</strong>, which
                  later shifted to Nazimabad.
                </p>
              </div>
            </div>
          </div>

          {/* Legacy — Full Width */}
          <div>
            <div className="bg-(--color-surface) rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                A Lasting Legacy
              </h2>
              <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                17 Educational Institutions Since Partition
              </p>
              <div className="space-y-4 text-sm text-(--color-text-muted) leading-relaxed">
                <p>
                  This organization has the distinction of establishing about{" "}
                  <strong className="text-(--color-primary-dark)">
                    17 Educational Institutions
                  </strong>{" "}
                  in Karachi since partition, including:
                </p>
                <ul className="space-y-1 ml-3">
                  <li className="flex items-start gap-2">
                    <span className="text-(--color-gold) mt-1">—</span>
                    Jinnah College, Nazimabad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-(--color-gold) mt-1">—</span>
                    Jinnah University for Women, Nazimabad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-(--color-gold) mt-1">—</span>
                    <strong>Jinnah Polytechnic Institute</strong> (Est. 1961)
                  </li>
                </ul>
                <p>
                  Among these, Jinnah Polytechnic Institute stands as one of the
                  proud projects of Anjuman-e-Islamia Trust Pakistan, continuing
                  Moulvi Sahab&apos;s mission of spreading quality technical and
                  scientific education to the Muslim Ummah.
                </p>
              </div>
            </div>
          </div>

          {/* Tamgha-e-Imtiaz — Text Left, Medal Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <Medal
                size={28}
                className="mx-auto lg:mx-0 text-(--color-gold) mb-3"
              />
              <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                Tamgha-e-Imtiaz
              </h2>
              <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                Conferred by the President of Pakistan
              </p>
              <p className="text-sm text-(--color-text-muted) leading-relaxed">
                In recognition of the meritorious work in the field of education
                especially for women folk, the{" "}
                <strong className="text-(--color-primary-dark)">
                  President of Pakistan
                </strong>{" "}
                has conferred upon Al-Haj Moulvi Rayazuddin Ahmed the honour of
                Tamgha-e-Imtiaz on <strong>23rd March 2015</strong>.
              </p>
              <div className="mt-6">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-(--color-primary) text-(--color-primary) text-sm font-semibold hover:bg-blue-50 transition-colors"
                >
                  About Our Institutions →
                </Link>
              </div>
            </div>

            {/* Medal Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white p-4">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/brand/tamgha-e-imtiaz.png"
                    alt="Tamgha-e-Imtiaz — President of Pakistan"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Link */}
      <section className="py-14 bg-(--color-surface)">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-(--color-text-muted) leading-relaxed italic">
            &ldquo;A visionary who devoted his life to the cause of academic
            excellence — his legacy continues through every student who passes
            through the halls of our institutions.&ldquo;
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/about-us/in-memory"
              className="px-5 py-2.5 rounded-xl bg-(--color-primary) text-white text-sm font-semibold hover:bg-(--color-primary-light) transition-colors"
            >
              In Loving Memory
            </Link>
            <Link
              href="/about-us/general-secretary"
              className="px-5 py-2.5 rounded-xl border border-(--color-primary) text-(--color-primary) text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              General Secretary&apos;s Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
