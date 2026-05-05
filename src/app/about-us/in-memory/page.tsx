import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "In Loving Memory",
  description:
    "Remembering the departed souls who served Jinnah Polytechnic Institute and Anjuman-e-Islamia Trust with tireless devotion — Mr. Fasihuddin Ahmed, Mr. Muhammad Uzair Siddiqui, and Mr. Zahid Hussain Usmani.",
};

const tributes = [
  {
    name: "Mr. Fasihuddin Ahmed (Late)",
    designation: "Former General Secretary",
    image: "/management/fasihuddin-ahmed.png",
    aspectRatio: "aspect-[427/534]",
    message: [
      "Mr. FasihUddin Ahmed, the General Secretary of Anjuman-e-Islamia Trust had the ability to successfully follow the footsteps of his father Late Al-Haj Moulvi Rayazuddin Ahmed (Tamgha-e-Imtiaz Pakistan).",
      "After the establishment of Jinnah Polytechnic Institute, Mr. FasihUddin Ahmed worked day and night to complete the mission of his late father. He qualified DAE in Mechanical Technology from Jinnah Polytechnic Institute and served also as Vice Principal in Zubaida Polytechnic Institute for many years.",
      "He realized the important role of educated boys in the Technical education. With this aim he arose to use the tool of education to empower boys with his pure innate intention to serve for the cause of technical education. He was humble person for the weak, the destitute and the needy.",
      "His death created a vacuum and to feel his absence is certainly painful for every person in the Institute. It is a fact that present state of the Institute in terms of infrastructure, academic pursuit and all relevant aspect in this regard is due to tireless, sincere devotion of Mr. Fasihuddin Ahmed (late).",
      "All stakeholders of the Jinnah Polytechnic Institute are thankful and pray for the eternal peace of his departed soul (Ameen).",
    ],
  },
  {
    name: "Mr. Muhammad Uzair Siddiqui (Late)",
    designation: "Former Treasurer",
    image: "/management/muhammad-uzair.png",
    aspectRatio: "aspect-[427/534]",
    message: [
      "Mr. Muhammad Uzair Siddiqui followed the footsteps of his great father, Al-Haj Moulvi Rayazuddin Ahmed (Tamgha-e-Imtiaz Pakistan) the founder of Anjuman-e-Islamia Trust. He was a very active, dedicated and competent member of the trust.",
      "Mr. Muhammad Uzair Siddiqui, started his career as a banker, served BCCI for a number of years and thus, had a great insight in the financial affairs.",
      "Moreover, he devoted time for the day to day affairs of the standard of Jinnah Polytechnic Institute, he gave all his time and energy for the uplift of the Polytechnic Institute, initially, with his father and this continued even after his death till he breathed his last on 19th February, 2016.",
      "Another major area of his expertise was in civil works. He planned, guided and instructed in the construction of the Institute and renovated the existing building of Zubaida Polytechnic Institute / Jinnah Intermediate College for Girls. He played a major and leading role in the physical uplift of the Institution. The spacious and excellent buildings that exist today are the results of his untiring efforts.",
      "The vacuum created by his loss will be difficult to fill. The existing structure will always remind us of his great contribution and dedicated services for the Institute. We will always remember him for his generous, affectionate and caring attitude. May his departed soul rest in peace (Ameen).",
    ],
  },
  {
    name: "Mr. Zahid Hussain Usmani (Late)",
    designation: "Former Principal JPI — Member Anjuman-e-Islamia Trust",
    image: "/management/zahid-hussain.png",
    aspectRatio: "aspect-[400/860]",
    message: [
      "Mr. Zahid Hussain Usmani (late) devoted his time for the day-to-day affairs and for uplifting the standard of Jinnah Polytechnic Institute. He also served as the Principal of Zubaida Polytechnic Institute till his last breath on 28th November, 2020.",
      "He gave all his time and energy for the strengthening the technical education in the Nation via Jinnah Polytechnic & Zubaida Polytechnic Institute. He was a very active, dedicated and competent member of the Anjuman-e-Islamia Trust Pakistan.",
      "Mr. Zahid Hussain Usmani (late) was entrusted with the responsibility of serving the Jinnah Polytechnic Institute as Principal. He realized the important role of educated boys in the technical education. With this aim he arose to use the tool of education to empower boys with his pure innate intention to serve for the cause of technical education.",
      "He was humble person for the weak, the destitute and the needy. His death created a vacuum and to feel his absence is certainly painful for every person in the Institute. It is a fact that present state of the Institute in terms of infrastructure, academic pursuit and all relevant aspect in this regard is due to tireless, sincere devotion of Mr. Zahid Hussain Usmani (late).",
      "All stakeholders of the Jinnah Polytechnic Institute are thankful and pray for the eternal peace of his departed soul (Ameen).",
    ],
  },
];

export default function InMemoryPage() {
  return (
    <>
      <PageHero
        title="In Loving Memory"
        subtitle="Remembering those who served with devotion, humility, and an unwavering commitment to education."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "In Memory" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=54"
        imageAlt="In Loving Memory"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {tributes.map((tribute, index) => (
            <div key={tribute.name}>
              {/* Section */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Column */}
                <div
                  className={`${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h2 className="text-2xl font-bold text-(--color-primary-dark) font-serif mb-2">
                    {tribute.name}
                  </h2>
                  <p className="text-xs text-(--color-gold) font-semibold uppercase tracking-wider mb-6">
                    {tribute.designation}
                  </p>
                  <div className="space-y-4 text-sm text-(--color-text-muted) leading-relaxed">
                    {tribute.message.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"} flex justify-center`}
                >
                  <div className="relative w-52 sm:w-60 lg:w-64 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                    <div className={`relative w-full ${tribute.aspectRatio}`}>
                      <Image
                        src={tribute.image}
                        alt={tribute.name}
                        fill
                        sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 256px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider — except after last */}
              {index < tributes.length - 1 && (
                <div className="mt-16 pt-2">
                  <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-14 bg-(--color-surface)">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-(--color-text-muted) leading-relaxed italic">
            &ldquo;Their dedication, humility, and tireless efforts built the
            foundation upon which Jinnah Polytechnic Institute stands today.
            Their legacy lives on in every student who walks through these
            halls.&ldquo;
          </p>
          <div className="mt-8">
            <Link
              href="/about-us/alhaj-rayazuddin"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-(--color-primary) text-(--color-primary) text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              About Our Founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
