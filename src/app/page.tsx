import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import WhyJPI from "@/components/home/WhyJPI";
import AdmissionSteps from "@/components/home/AdmissionSteps";
import DepartmentsGrid from "@/components/home/DepartmentsGrid";
import NewsSection from "@/components/home/NewsSection";
import CTABanner from "@/components/home/CTABanner";
import AboutUs from "@/components/home/AboutUs";
import AccreditationStrip from "@/components/home/AccreditationStrip";

export const metadata: Metadata = {
  title: "Jinnah Polytechnic Institute — Knowledge · Skills · Attitude",
  description:
    "JPI Karachi — a premier technical institute since 1961 offering DAE (Civil, Electrical, Mechanical, Computer), Certifications & Short Courses under SBTE Sindh.",
  keywords: [
    "Jinnah Polytechnic Institute",
    "JPI Karachi",
    "SBTE",
    "NAVTTC",
    "STEVTA",
    "DAE admissions",
    "technical diploma Karachi",
    "polytechnic institute Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jinnah Polytechnic Institute — Knowledge · Skills · Attitude",
    description:
      "Explore programs, admissions, latest academic updates, and accreditation details at JPI Karachi.",
    url: "/",
    siteName: "Jinnah Polytechnic Institute",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/brand/jpi-building.jpeg",
        width: 1200,
        height: 630,
        alt: "Jinnah Polytechnic Institute campus building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinnah Polytechnic Institute — Knowledge · Skills · Attitude",
    description:
      "Admissions, technical programs, affiliations, and latest student updates from JPI Karachi.",
    images: ["/brand/jpi-building.jpeg"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero and institute introduction */}
      <HeroCarousel />
      <AboutUs />

      {/* Accreditation and program highlights */}
      <AccreditationStrip />
      <ProgramsOverview />
      <WhyJPI />

      {/* Admissions and academic departments */}
      <AdmissionSteps />
      <DepartmentsGrid />

      {/* News, notices, and final call to action */}
      <NewsSection />
      <CTABanner />
    </>
  );
}
