import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import {
  Target,
  Eye,
  ShieldCheck,
  Globe,
  Users,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vision, Mission & History",
  description:
    "The vision, mission, aims and history of Jinnah Polytechnic Institute — spreading quality technical education since 1961 under Anjuman-e-Islamia Trust Pakistan.",
};

const timeline = [
  {
    year: "Partition Era",
    event:
      "Anjuman-e-Islamia Trust founded by late Alhaj Rayazuddin Ahmed Akbarabadi. Blessed by Quaid-e-Azam Mohammad Ali Jinnah to use his name for institutions advancing technical and scientific education for the Muslim Ummah.",
  },
  {
    year: "1961",
    event:
      "Jinnah Polytechnic Institute established at ST-1, Nazimabad-5, Karachi — one of 15+ educational institutions founded by the Trust since partition.",
  },
  {
    year: "1960s–70s",
    event:
      "Introduced D.A.E programs in Civil, Electrical, and Mechanical technologies. Established workshops and laboratories for hands-on training.",
  },
  {
    year: "1980s–90s",
    event:
      "Expanded academic infrastructure. Added Electronics Technology program. Strengthened affiliation with Sindh Board of Technical Education.",
  },
  {
    year: "1997",
    event:
      "Adopted the revised D.A.E syllabus prepared by the Directorate of Technical Education, Government of Sindh, and issued by SBTE Karachi.",
  },
  {
    year: "2000s",
    event:
      "Launched Computer Information Technology and Software Technology programs in response to Pakistan's growing IT sector.",
  },
  {
    year: "2010s",
    event:
      "Introduced Refrigeration & Air Conditioning Technology. Expanded to evening programs. Modernized labs and learning resources.",
  },
  {
    year: "Recent Years",
    event:
      "Introduced JIMSET. Continued commitment to producing versatile professionals with sound character for national and international service.",
  },
];

const objectives = [
  {
    icon: Globe,
    title: "National & International Recognition",
    desc: "Become a leading academic institution with standards of teaching and learning recognized nationally and internationally.",
  },
  {
    icon: Users,
    title: "Quality Human Resource",
    desc: "Produce well-equipped, trained graduates with the right mix of skills and character to serve the nation and fulfill market demand.",
  },
  {
    icon: Lightbulb,
    title: "Self-Reliance Through Innovation",
    desc: "Train a community that is application-focused, capable of independent and analytical thinking, and able to develop its own technology.",
  },
  {
    icon: ShieldCheck,
    title: "Character & Collegiality",
    desc: "Develop cultural climate for healthy competition and betterment of society, emphasizing leadership and collegiality among youth.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="Vision, Mission & History"
        subtitle="Guided by a noble purpose — spreading quality education to diversified humanity since 1961."
        breadcrumbs={[
          { label: "About", href: "/about-us" },
          { label: "Vision, Mission & History" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=40"
        imageAlt="JPI Heritage"
      />

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="bg-(--color-primary) text-white rounded-2xl p-9 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              <Eye size={36} className="mb-5 text-(--color-gold)" />
              <h2 className="text-2xl font-bold mb-4 font-serif">Our Vision</h2>
              <p className="text-white/90 leading-relaxed text-sm">
                To spread quality education to diversified humanity in an
                economical way and produce versatile professionals to serve
                nationally and internationally.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-(--color-gold) text-white rounded-2xl p-9 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              <Target size={36} className="mb-5 text-white" />
              <h2 className="text-2xl font-bold mb-4 font-serif">
                Our Mission
              </h2>
              <p className="text-white/90 leading-relaxed text-sm">
                To maintain the leading position in the field of technical
                education by imparting quality education via latest technical
                norms, under the mentorship of highly qualified and skilled
                faculty in a conducive environment, so that well-equipped,
                trained human resource with the right mix may serve the nation
                and fulfill the market demand.
              </p>
            </div>
          </div>

          {/* Aims & Objectives */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
              Our Purpose
            </span>
            <h2 className="text-3xl font-bold text-(--color-primary-dark) font-serif mb-4">
              Aims & Objectives
            </h2>
            <p className="text-sm text-(--color-text-muted) max-w-3xl mx-auto leading-relaxed">
              Our mission is to help build an educated and prosperous Pakistan
              in the 21st century and to provide a quality education system,
              becoming a leading academic institution with national and
              international recognition for standards of teaching and learning.
              We are committed to serving the intellectual, cultural, social,
              environmental, and economic needs of the country — causing human
              development through educational programs and outreach efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
                  className="bg-(--color-surface) rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <Icon size={28} className="text-(--color-primary) mb-4" />
                  <h3 className="font-bold text-(--color-primary-dark) text-base mb-2 font-serif">
                    {obj.title}
                  </h3>
                  <p className="text-xs text-(--color-text-muted) leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Philosophy */}
          <div className="bg-(--color-surface) rounded-2xl p-9 border border-gray-100 mb-16">
            <p className="text-sm text-(--color-text-muted) leading-relaxed mb-4">
              The institute hopes to achieve exemplary education based on an
              integrated core curriculum and technology-aided teaching and
              learning processes. We make every effort to develop the cultural
              climate for bringing about a change in the youth of Pakistan — for
              healthy competition and betterment of society — while emphasizing
              the development of leadership and collegiality.
            </p>
            <p className="text-sm text-(--color-text-muted) leading-relaxed mb-4">
              Our aim is to prepare technologists who have the character and
              skills that the country needs — graduates who would be readily
              employable to serve the nation. The most pressing need of the
              country is self-reliance, to which institutions like ours can
              respond not only by adopting technology from elsewhere but also by
              developing our own.
            </p>
            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              In that pursuit, we endeavor to train a community that is
              application-focused, capable of independent and analytical
              thinking, and possessing strong interpersonal and management
              skills — shaping rational human beings who are assets to the
              nation.
            </p>
          </div>

          {/* Timeline */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-(--color-primary-dark) font-serif">
              A Legacy of Service
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/15 -translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 pl-14 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:pl-14 md:text-left"
                    }`}
                  >
                    <div className="text-(--color-gold) font-bold text-lg mb-1 font-serif">
                      {item.year}
                    </div>
                    <p className="text-sm text-(--color-text-muted) leading-relaxed">
                      {item.event}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-(--color-primary) border-4 border-white shadow-sm -translate-x-1/2 top-1.5 z-10" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
