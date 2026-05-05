"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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
          {/* Image side with caption */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative h-105 w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/management/alhaj-sahab.jpeg"
                  alt="Alhaj Rayazuddin Ahmed Akbarabadi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                  className="object-contain object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-(--color-primary-dark)">
                  Alhaj Rayazuddin Ahmed Akbarabadi
                </p>
                <p className="text-sm text-(--color-text-muted)">
                  Founder of Anjuman-e-Islamia Trust Pakistan
                </p>
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
              Jinnah Polytechnic Institute
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-dark) mb-5 font-serif">
              About Our Institute
            </h2>
            <p className="text-(--color-primary-dark) mb-7 leading-relaxed">
              The Jinnah Polytechnic Institute is one of the proud projects of
              Anjuman-e-Islamia Trust Pakistan, a private social organization
              was formed by late Alhaj Rayazuddin Ahmed Akbarabadi as its main
              driving spirit.
            </p>
            <p className="text-(--color-text-muted) mb-7 leading-relaxed">
              This organization has the distinction of establishing about 18
              Educational Institutions in Karachi since partition including the
              Jinnah College and Jinnah University for Woman Nazimabad.
            </p>
            <Link href="/about" passHref>
              <Button
                variant="outline"
                size="lg"
                className="mt-4 gap-2 border-primary text-primary hover:bg-blend-soft-light hover:text-primary-light transition-all duration-300 cursor-pointer"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
