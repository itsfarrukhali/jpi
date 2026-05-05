"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { departments } from "@/data/departments";
import DepartmentCard from "@/components/shared/DepartmentCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DepartmentsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Our Departments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif">
            Academic Departments
          </h2>
          <p className="mt-3 text-text-muted max-w-lg mx-auto">
            Four specialized departments, each with dedicated labs, qualified
            faculty, and industry connections.
          </p>
        </div>

        {/* Grid of cards (data source: src/data/departments.ts) */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {departments.map((dept, i) => (
            <motion.div
              key={dept.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <DepartmentCard department={dept} />
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
            href="/admissions/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold text-white font-semibold hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Departments
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
