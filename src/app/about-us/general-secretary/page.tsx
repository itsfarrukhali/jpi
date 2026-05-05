import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "General Secretary's Message",
  description:
    "Message from Mr. Wajeeh Uddin Ahmed, General Secretary of Anjuman-e-Islamia Trust Pakistan — continuing the noble mission of his father Al-Haj Moulvi Rayazuddin Ahmed (T.I.).",
};

export default function GeneralSecretaryPage() {
  return (
    <>
      <PageHero
        title="General Secretary's Message"
        subtitle="Mr. Wajeeh Uddin Ahmed — General Secretary, Anjuman-e-Islamia Trust Pakistan"
        breadcrumbs={[
          { label: "About", href: "/about-us" },
          { label: "General Secretary's Message" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=52"
        imageAlt="Anjuman-e-Islamia Trust"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
            {/* Text Column */}
            <div>
              <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                General Secretary&apos;s Message
              </h2>
              <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                Carrying Forward a Noble Mission
              </p>
              <div className="space-y-4 text-sm text-(--color-text-muted) leading-relaxed">
                <p>
                  <Quote size={18} className="inline text-gold/30 mr-1" />
                  Education has been unanimously regarded as the key factor for
                  playing a pivotal role in the development of personality of an
                  individual, as well as that of a society and nation.
                  Consequently, sincere efforts put in education lead to
                  formidable behavioral changes. Knowledge was the first gift
                  given to humanity by its creator when human being was created.
                  Similarly, Islamic religion tradition began with the command
                  from creator to read, contemplate and produce knowledge in
                  order to serve humanity.
                </p>

                <p>
                  In this regard, my father{" "}
                  <strong className="text-(--color-primary-dark)">
                    Al Haj Moulvi Rayazuddin Ahmed
                  </strong>{" "}
                  being a visionary personality devoted his life for the cause
                  of academic excellence by extending educational facilities to
                  every single student and as such he established{" "}
                  <strong className="text-(--color-primary-dark)">
                    Anjuman-e-Islamia Trust Pakistan
                  </strong>{" "}
                  under which{" "}
                  <strong>
                    17 educational institutions for boys &amp; girls
                  </strong>{" "}
                  were established in Karachi to achieve the goals.
                </p>

                <p>
                  <strong className="text-(--color-primary-dark)">
                    Jinnah Polytechnic Institute
                  </strong>{" "}
                  is the first Institute of Pakistan, established in private
                  sector by my father in <strong>1961</strong> and is one of its
                  kinds in sub-continent which has been blessed by{" "}
                  <strong className="text-(--color-primary-dark)">
                    Quaid-e-Azam Muhammad Ali Jinnah
                  </strong>{" "}
                  to use his name.
                </p>

                <p>
                  Since its inception, the Jinnah Polytechnic Institute is
                  spreading technical education on{" "}
                  <strong>no Profit and no loss basis</strong> without any
                  financial benefits providing standard and quality technical
                  education in Morning and Evening Programs.
                </p>

                <p className="italic text-(--color-primary-dark)">
                  &ldquo;In recognition of the meritorious work in the field of
                  education, the President of Pakistan has conferred upon{" "}
                  <strong>Tamgha-e-Imtiaz Pakistan</strong> to my father on{" "}
                  <strong>23rd March 2015</strong>.&ldquo;
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="relative w-44 sm:w-56 lg:w-60 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                <div className="relative w-full aspect-461/558">
                  <Image
                    src="/management/wajeehuddin-ahmed.jpg"
                    alt="Mr. Wajeeh Uddin Ahmed — General Secretary, Anjuman-e-Islamia Trust"
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 240px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-(--color-primary-dark) font-medium text-center lg:text-right">
                Mr. Wajeeh Uddin Ahmed
              </p>
              <p className="text-xs text-(--color-text-muted) text-center lg:text-right">
                General Secretary
              </p>
              <p className="text-xs text-(--color-text-muted) text-center lg:text-right">
                Anjuman-e-Islamia Trust
              </p>
            </div>
          </div>

          {/* Closing Message — Full Width */}
          <div className="bg-(--color-surface) rounded-2xl p-8 border border-gray-100 mb-12">
            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              May Allah give us the vision and strength to fulfill the noble
              cause of my father&apos;s dream through a team of dedicated
              teaching faculty and staff so as to produce skilled and high
              quality Associate Engineers to serve Nationally and
              Internationally.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-8 border-t border-gray-200 mb-10">
            <p className="text-sm text-(--color-primary-dark) font-medium">
              Mr. Wajeeh Uddin Ahmed
            </p>
            <p className="text-xs text-(--color-text-muted)">
              General Secretary
            </p>
            <p className="text-xs text-(--color-text-muted)">
              Anjuman-e-Islamia Trust Pakistan
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about-us"
              className="px-5 py-2.5 rounded-xl bg-(--color-primary) text-white text-sm font-semibold hover:bg-(--color-primary-light) transition-colors"
            >
              About JPI
            </Link>
            <Link
              href="/about-us/alhaj-rayazuddin"
              className="px-5 py-2.5 rounded-xl border border-(--color-primary) text-(--color-primary) text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Our Founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
