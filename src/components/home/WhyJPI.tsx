"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "SBTE (Sindh Board of Technical Education) Affiliated",
  "State-of-the-art labs and workshops",
  "Experienced & qualified faculty members",
  "Hostel & transport facility available",
  "Merit & need-based scholarships",
  "Industry partnerships for internships",
  "62+ years of excellence in technical education",
  "Low fees with monthly installment option",
];

export default function WhyJPI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl">
              <Image
                src="/brand/jpi-building.jpeg"
                alt="JPI Campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-(--color-gold) text-white px-5 py-4 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold font-serif">62+</div>
              <div className="text-xs font-medium opacity-90">
                Years of Excellence
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
              Why Choose JPI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-dark) mb-5 font-serif">
              Your Gateway to a Technical Career
            </h2>
            <p className="text-(--color-text-muted) mb-7 leading-relaxed">
              Jinnah Polytechnic Institute has been shaping skilled engineers
              and technicians since 1961. Our commitment to quality education,
              industry alignment, and holistic development makes us the
              preferred choice for students across Karachi.
            </p>
            <ul className="space-y-3">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-(--color-primary-dark)"
                >
                  <CheckCircle2
                    size={17}
                    className="text-(--color-gold) shrink-0"
                  />
                  {reason}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
