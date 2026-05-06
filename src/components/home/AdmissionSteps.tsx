"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FileText, UploadCloud, PenLine, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill Online Form",
    desc: "Complete the online application with your personal and academic details.",
  },
  {
    icon: UploadCloud,
    step: "02",
    title: "Submit Documents",
    desc: "Upload your Matric certificate, CNIC copy, photos, and relevant documents.",
  },
  {
    icon: PenLine,
    step: "03",
    title: "Appear for Test",
    desc: "Sit for the entry test at the JPI campus on the scheduled date.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Get Enrolled",
    desc: "Receive your admission letter and pay fees to confirm your seat.",
  },
];

export default function AdmissionSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-(--color-surface)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
            Admissions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-dark) font-serif">
            How to Join JPI
          </h2>
          <p className="mt-3 text-(--color-text-muted) max-w-lg mx-auto">
            Our simple 4-step admission process gets you enrolled quickly.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-primary/20 via-(--color-gold) to-primary/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-(--color-primary) flex items-center justify-center shadow-md">
                      <Icon size={28} className="text-(--color-primary)" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-(--color-gold) text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-(--color-primary-dark) text-base mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-sm text-(--color-text-muted) max-w-45">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/admissions/apply-now"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-(--color-gold) text-white font-semibold hover:bg-(--color-gold-light) transition-colors shadow-md"
          >
            Start Your Application →
          </Link>
        </div>
      </div>
    </section>
  );
}
