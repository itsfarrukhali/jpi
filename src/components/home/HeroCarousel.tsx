"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

// Hero carousel content source for the landing page.
// Add/remove slides here and keep IDs unique.
// Prefer local assets from /public for production-ready images.
const slides = [
  {
    id: 0,
    badge: "3-Year Engineering Diploma",
    title: "Build Your Future with DAE Programs",
    subtitle:
      "Civil · Electrical · Mechanical · CIT & More — SBTE Affiliated Technical Education for Career-Focused Students",
    tag: "DAE",
    cta: "/programs/dae",
    image: "/carousel/dae-final.png",
  },

  {
    id: 1,
    badge: "Professional Diploma Certifications",
    title: "Start a Career in Technology",
    subtitle:
      "AI Certifications & More — SBTE Affiliated. Industry-Focused Diploma Programs with Practical Learning, Professional Labs & Experienced Faculty",
    tag: "CERT",
    cta: "/programs/diploma-certifications",
    image: "/carousel/certifications.png",
  },

  {
    id: 2,
    badge: "Career-Oriented Diplomas",
    title: "Hands-On Training for High-Demand Skills",
    subtitle:
      "Nursing Assistant · Lab Technician · Physiotherapy Technician & More — SBTE Affiliated Diplomas for Healthcare Careers",
    tag: "DIPLOMA",
    cta: "/programs/diploma-certifications",
    image: "/carousel/diploma-certificates.png",
  },

  {
    id: 3,
    badge: "6-Month Professional Certification",
    title: "Become a Certified Phlebotomy Technician",
    subtitle:
      "Hands-On Blood Collection & Diagnostic Lab Training — Ideal for Healthcare Career Beginners",
    tag: "PHLEBOTOMY",
    cta: "/programs/certifications",
    image: "/carousel/phlebotomy.png",
  },

  {
    id: 4,
    badge: "3–6 Month Skill Courses",
    title: "Learn Practical Skills & Start Earning Faster",
    subtitle:
      "Electrician · Plumbing · IT Fundamentals · Technical Skills & More with Practical Training",
    tag: "SKILLS",
    cta: "/programs/short-courses",
    image: "/carousel/short-courses.png",
  },

  {
    id: 5,
    badge: "Jinnah Excellence Program",
    title: "Master AutoCAD with Professional Certification",
    subtitle:
      "2D & 3D Mechanical and Civil Drafting Training with Jinnah Excellence Certificates",
    tag: "JEC",
    cta: "/programs/jec",
    image: "/carousel/jec.png",
  },
];

const tagColors: Record<string, string> = {
  DAE: "bg-blue-700",
  CERT: "bg-[var(--color-rust)]",
  DIPLOMA: "bg-amber-600",
  PHLEBOTOMY: "bg-red-600",
  SKILLS: "bg-emerald-600",
  JEC: "bg-purple-700",
};

const contentVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
  }),
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[80svh] min-h-125 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/85 via-primary/50 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="w-full pb-8 md:pb-10 lg:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                variants={contentVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-2xl"
              >
                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${tagColors[slide.tag]}`}
                >
                  {slide.badge}
                </motion.span>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-serif"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-white/80 mb-8"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link
                    href="/admissions/apply-now"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-(--color-gold) text-white font-semibold text-sm hover:bg-(--color-gold-light) transition-colors shadow-lg"
                  >
                    Apply Now →
                  </Link>
                  <Link
                    href={slide.cta}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/70 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Arrows — hidden on mobile */}
      <Button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur items-center justify-center text-white transition-colors pointer-events-auto"
      >
        <ChevronLeft size={20} />
      </Button>
      <Button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur items-center justify-center text-white transition-colors pointer-events-auto"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <Button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2.5 bg-(--color-gold)"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${slide.id}`}
          className="absolute bottom-0 left-0 h-0.5 bg-(--color-gold) z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      )}
    </section>
  );
}
