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
    badge: "3-Year Program",
    title: "Diploma of Associate Engineering",
    subtitle: "Civil · Electrical · Mechanical · Computer Technology",
    tag: "DAE",
    cta: "/programs/dae",
    image: "/carousel/dae-final.png",
  },
  {
    id: 1,
    badge: "Professional Certifications",
    title: "Industry-Recognized Certifications",
    subtitle: "AutoCAD · PLC · Web Development · Networking & More",
    tag: "CERT",
    cta: "/programs/certifications",
    image: "/carousel/certifications.png",
  },
  {
    id: 2,
    badge: "3–6 Month Courses",
    title: "Short Courses for Rapid Skill Building",
    subtitle: "Welding · Electrician · Plumbing · IT Fundamentals",
    tag: "SHORT",
    cta: "/programs/short-courses",
    image: "/carousel/short-courses.png",
  },
  {
    id: 3,
    badge: "Excellence Program",
    title: "Jinnah Excellence Certificates",
    subtitle: "Recognizing outstanding academic and co-curricular achievement",
    tag: "JEC",
    cta: "/programs/jec",
    image: "/carousel/jec.png",
  },
];

const tagColors: Record<string, string> = {
  DAE: "bg-[var(--color-gold)]",
  CERT: "bg-[var(--color-rust)]",
  SHORT: "bg-emerald-600",
  JEC: "bg-purple-600",
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
      className="relative w-full h-svh min-h-140 overflow-hidden"
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
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/85 via-primary/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

      {/* Arrows — hidden on mobile */}
      <Button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={20} />
      </Button>
      <Button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur items-center justify-center text-white transition-colors"
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
