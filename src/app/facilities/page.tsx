import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  Wrench,
  Library,
  BookOpen,
  Users,
  Bus,
  ShoppingBag,
  Zap,
  Droplets,
  BookMarked,
  Church,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Campus facilities at Jinnah Polytechnic Institute — workshops, laboratories, libraries, transport, tuck shop, prayer area, and more.",
};

const mainFacilities = [
  {
    icon: Wrench,
    title: "Workshop & Laboratories",
    desc: "The Institution has all necessary Workshop and well-equipped Laboratory facilities supported by trained faculty. These facilities have been planned to give maximum opportunity to students for conducting their practical assignments/projects which covers 70% of the prescribed syllabi.",
    highlight: true,
  },
  {
    icon: Library,
    title: "Reference Library",
    desc: "The Institution has a Reference Library with a large number of latest books on all relevant subjects. The library caters all needs of the students for their academic pursuits.",
  },
  {
    icon: BookOpen,
    title: "Rental Library",
    desc: "Rental Library facilities are available in the Institute for lending prescribed textbooks for specific duration to students on nominal charges.",
  },
];

const additionalFacilities = [
  {
    icon: Users,
    title: "Congenial Environment",
    desc: "The Institute provides a supportive and welcoming atmosphere conducive to learning and personal growth.",
  },
  {
    icon: GraduationCap,
    title: "Co-Curricular Activities / Events",
    desc: "The students are encouraged to actively participate in all Co-Curricular activities which are organized by JPI, SBTE, STEVTA, and other organizations.",
  },
  {
    icon: Bus,
    title: "Transport",
    desc: "Transport is arranged by the Institute only to conduct study tours and other official activities of the students.",
  },
];

const campusAmenities = [
  { icon: ShoppingBag, title: "Tuck Shop" },
  { icon: Zap, title: "Stand by Generator" },
  { icon: Droplets, title: "Filter Water" },
  { icon: BookMarked, title: "Book Stall" },
  { icon: Church, title: "Prayer Area" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Our Facilities"
        subtitle="Everything you need for a complete educational experience at Jinnah Polytechnic Institute"
        breadcrumbs={[
          { label: "About", href: "/about-us" },
          { label: "Facilities" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=79"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ─── Overview ───────────────────────────── */}
          <div className="text-center">
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Jinnah Polytechnic Institute provides comprehensive facilities to
              ensure students receive quality technical education in a
              well-equipped and supportive environment. From advanced workshops
              to a well-stocked library, every resource is designed to enhance
              the learning experience.
            </p>
          </div>

          {/* ─── Main Facilities ─────────────────────── */}
          <div className="space-y-6">
            {mainFacilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.title}
                  className={`border bg-gray-50 p-6 ${
                    facility.highlight
                      ? "border-amber-200 bg-amber-50/30"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {facility.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── Additional Facilities ───────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Additional Facilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {additionalFacilities.map((facility) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={facility.title}
                    className="bg-gray-50 border border-gray-200 p-5"
                  >
                    <Icon size={22} className="text-amber-600 mb-3" />
                    <h3 className="font-medium text-gray-800 text-sm mb-1.5">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Campus Amenities ────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Campus Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {campusAmenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={amenity.title}
                    className="bg-gray-50 border border-gray-200 p-4 text-center"
                  >
                    <Icon size={24} className="mx-auto text-amber-600 mb-2" />
                    <span className="text-xs font-medium text-gray-700">
                      {amenity.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Key Stats ───────────────────────────── */}
          <div className="bg-gray-800 text-white p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "70%", label: "Practical Coverage in Syllabi" },
                { value: "5", label: "Campus Amenities" },
                { value: "2", label: "Library Types" },
                { value: "8", label: "DAE Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CTA ─────────────────────────────────── */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/admissions/apply-now"
                className="px-5 py-2.5 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
