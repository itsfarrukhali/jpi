"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Home page Programs section source.
// Edit this list to update cards shown under "Our Programs".
// Keep image paths in /public/programs and use valid internal href routes.
const programs = [
  {
    image: "/programs/dae.jpg",
    name: "DAE Programs",
    desc: "3-year Diploma of Associate Engineering in Civil, Electrical, Mechanical & Computer Technology.",
    href: "/programs/dae",
  },
  {
    image: "/programs/certifications.jpg",
    name: "Certifications",
    desc: "Industry-recognized courses in AutoCAD, PLC, Web Development, Networking and more.",
    href: "/programs/certifications",
  },
  {
    image: "/programs/short-course.jpg",
    name: "Short Courses",
    desc: "Hands-on training in Welding, Electrician, Plumbing, and IT fundamentals.",
    href: "/programs/short-courses",
  },
  {
    image: "/programs/2-months.jpg",
    name: "JEC Awards",
    desc: "Recognizing academic excellence and outstanding student achievements.",
    href: "/programs/jec",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ProgramsOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-(--color-surface)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-4">
            Our Programs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-dark) font-serif">
            Build Skills. Gain Experience. Earn Recognition.
          </h2>

          <p className="mt-4 text-(--color-text-muted) max-w-2xl mx-auto">
            Start with strong foundations, specialize in modern technologies,
            gain hands-on skills, and achieve excellence at Jinnah Polytechnic
            Institute.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.name}
              variants={item}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={prog.image}
                alt={prog.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white flex flex-col h-full justify-end">
                <h3 className="text-lg font-bold mb-1">{prog.name}</h3>

                <p className="text-sm opacity-90 mb-3 leading-relaxed">
                  {prog.desc}
                </p>

                <Link
                  href={prog.href}
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                >
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
