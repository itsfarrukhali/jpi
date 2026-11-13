"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { homePrograms } from "@/data/home-programs";
import CSITPathways from "@/components/shared/CSITPathways";
import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck } from "lucide-react";

export default function DepartmentsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CSITPathways appearance="home" />
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif">
            Academic Programs
          </h2>
          <p className="mt-3 text-text-muted max-w-lg mx-auto">
            Explore our 10 three-year DAE programs, with annual SBTE examinations
            and practical technical education.
          </p>
        </div>

        {/* All ten DAE pathways, independent of the department grouping. */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {homePrograms.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Link href={`/programs/dae#${program.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-3.5/4 overflow-hidden bg-surface">
                  {program.image ? (
                    <Image src={program.image} alt={program.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center text-primary">
                      {program.slug === "dae-ai" ? <BrainCircuit size={56} strokeWidth={1.25} /> : <ShieldCheck size={56} strokeWidth={1.25} />}
                      <span className="font-serif text-lg font-semibold">{program.name}</span>
                      <span className="text-xs text-text-muted">3-Year DAE Program</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="min-h-18 text-base font-bold leading-6 text-primary-dark font-serif group-hover:text-primary">{program.name}</h3>
                  <p className="mb-4 text-xs text-text-muted">3 Years / Annual SBTE Examinations</p>
                  <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-primary">View Program <ArrowRight size={13} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Button outside the grid, perfectly centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/programs/dae"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold text-white font-semibold hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Programs
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
