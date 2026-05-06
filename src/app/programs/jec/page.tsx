import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { jecPrograms } from "@/data/programs";
import {
  CheckCircle2,
  Clock,
  Users,
  GraduationCap,
  Globe,
  Briefcase,
  Home,
  ChevronRight,
  Calendar,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jinnah Excellence Certificates (JEC) — AutoCAD Course",
  description:
    "Professional AutoCAD 2D & 3D course at JPI — Mechanical and Civil drawing. Master skills, shape your future with Jinnah Excellence Certificates.",
};

const whyEssential = [
  {
    icon: Globe,
    title: "High Demand Worldwide",
    desc: "AutoCAD skills are in high demand in every country across the globe.",
  },
  {
    icon: Home,
    title: "Earn from Home",
    desc: "Excellent opportunity to work online and earn by creating drawings remotely.",
  },
  {
    icon: Briefcase,
    title: "Freelancing & Career Growth",
    desc: "Vast opportunities in freelancing platforms and career advancement.",
  },
  {
    icon: CheckCircle2,
    title: "Online Client Work",
    desc: "Create professional drawings and send to customers online anywhere in the world.",
  },
];

const whoCanJoin = [
  "Age limit applicable as per institute policy",
  "No specific educational requirement — open to all",
  "Both male and female students can learn",
  "Ideal for matric-pass students",
  "Highly essential and excellent career opportunity",
];

const courseSchedule = [
  { icon: Clock, label: "Course Duration", value: "2 Months (Short Course)" },
  { icon: Calendar, label: "Class Day", value: "Sunday Only" },
  { icon: Clock, label: "Class Time", value: "10:00 AM – 1:00 PM" },
];

export default function JECPage() {
  const course = jecPrograms[0];

  return (
    <>
      <PageHero
        title="Jinnah Excellence Certificates"
        subtitle="Professional AutoCAD 2D & 3D — Mechanical / Civil Drawing Course"
        breadcrumbs={[{ label: "Programs" }, { label: "JEC" }]}
        imageUrl="https://picsum.photos/1600/500?random=53"
      />

      {/* Hero Banner */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Master Skills, Shape Your Future!
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Professional AutoCAD 2D &amp; 3D
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Mechanical / Civil Drawing Course — Learn from industry experts with
            hands-on practical training
          </p>
        </div>
      </section>

      {/* Course Overview + Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Content — 2/3 width */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Course Content
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.subjects.map((module) => (
                  <div
                    key={module.year}
                    className="bg-gray-50 border border-gray-200 p-5"
                  >
                    <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      {module.year}
                    </h3>
                    <ul className="space-y-1.5">
                      {module.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-gray-600 flex items-start gap-1.5"
                        >
                          <ChevronRight
                            size={10}
                            className="text-amber-600 mt-0.5 shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Sidebar — 1/3 width */}
            <div>
              <div className="bg-gray-50 border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-800 text-sm mb-4 pb-2 border-b border-gray-200">
                  Course Schedule
                </h3>
                <div className="space-y-4">
                  {courseSchedule.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <Icon
                          size={16}
                          className="text-amber-600 shrink-0 mt-0.5"
                        />
                        <div>
                          <div className="text-xs text-gray-500">
                            {item.label}
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Landmark
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs text-gray-500">Course Fee</div>
                      <div className="text-sm font-medium text-gray-800">
                        Contact for details
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs text-gray-500">Eligibility</div>
                      <div className="text-sm font-medium text-gray-800">
                        {course.eligibility}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Users
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs text-gray-500">Seats</div>
                      <div className="text-sm font-medium text-gray-800">
                        {course.seats} seats only
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Course Is Essential */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
            Why is This Course Essential?
          </h2>
          <p className="text-xs text-gray-500 mb-8 text-center">
            AutoCAD skills open doors to global opportunities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyEssential.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 p-5 text-center"
                >
                  <Icon size={24} className="mx-auto text-amber-600 mb-3" />
                  <h3 className="font-medium text-gray-800 text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Join + Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Who Can Join */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Users size={16} className="text-amber-600" />
                Who Can Join?
              </h2>
              <div className="bg-gray-50 border border-gray-200 p-5 space-y-2.5">
                {whoCanJoin.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-green-500 shrink-0 mt-0.5"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Briefcase size={16} className="text-amber-600" />
                Career Opportunities
              </h2>
              <div className="bg-gray-50 border border-gray-200 p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.careers.map((career) => (
                    <div
                      key={career}
                      className="text-xs text-gray-600 flex items-center gap-2 bg-white border border-gray-200 px-3 py-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {career}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-2">
            Master Skills, Shape Your Future!
          </h3>
          <p className="text-white/70 text-sm mb-6">
            Limited seats available. Enroll now to secure your place.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/admissions/how-to-apply"
              className="px-5 py-2.5 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              How to Apply
            </Link>
            <Link
              href="/admissions/apply-now"
              className="px-5 py-2.5 bg-amber-500 text-gray-900 text-sm font-medium hover:bg-amber-400 transition-colors"
            >
              Enroll Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
