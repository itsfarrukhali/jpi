"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  Briefcase,
  Users,
  GraduationCap,
  Heart,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Shield,
  ArrowRight,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { currentOpenings } from "@/data/careers";

const whyJoinJPI = [
  {
    icon: GraduationCap,
    title: "Teaching & Learning Excellence",
    desc: "Be part of an institution committed to quality technical education and shaping the next generation of engineers.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    desc: "Work alongside dedicated faculty and staff in a supportive, collegial atmosphere.",
  },
  {
    icon: Sparkles,
    title: "Professional Development",
    desc: "Access to training, workshops, and opportunities to enhance your skills and advance your career.",
  },
  {
    icon: Heart,
    title: "Make a Difference",
    desc: "Contribute to the mission of providing affordable, quality education to the youth of Pakistan.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    desc: "Structured working hours with weekends off and generous leave policies.",
  },
  {
    icon: Shield,
    title: "Job Security & Benefits",
    desc: "Stable employment with Anjuman-e-Islamia Trust Pakistan, one of Karachi's most respected educational organizations.",
  },
];

const benefits = [
  "Competitive salary package based on qualification and experience",
  "Annual increments and performance-based bonuses",
  "Provident fund and gratuity as per Trust policy",
  "Medical coverage for employees and dependents",
  "Paid annual leave, casual leave, and sick leave",
  "Professional development and training opportunities",
  "Prayer breaks and Ramadan timings",
  "Supportive and respectful work culture",
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // All fields are already in formData.
    // The file input (name="cv") will be included automatically.

    startTransition(async () => {
      try {
        const res = await fetch("/api/careers", {
          method: "POST",
          body: formData, // multipart/form-data automatically set by browser
        });

        const result = await res.json();

        if (result.success) {
          setSubmitted(true);
          form.reset();
          window.scrollTo({ top: 0, behavior: "smooth" });
          toast.success("Application submitted successfully!", {
            icon: <CheckCircle2 size={18} className="text-green-400" />,
            style: {
              background: "var(--color-primary-dark)",
              color: "#fff",
              border: "1px solid var(--color-gold)",
            },
          });
        } else {
          setError(result.error ?? "Something went wrong. Please try again.");
        }
      } catch {
        setError("Network error. Please check your connection.");
      }
    });
  };

  if (submitted) {
    return (
      <>
        <PageHero
          title="Careers"
          subtitle="Join our team and shape the future of technical education."
          breadcrumbs={[{ label: "Careers" }]}
          imageUrl="https://picsum.photos/1600/500?random=93"
        />
        <section className="py-20 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Application Submitted!
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Thank you for your interest in joining Jinnah Polytechnic
              Institute. Our HR department will review your application and
              contact you if your profile matches our requirements.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join our team of dedicated educators and professionals at Jinnah Polytechnic Institute"
        breadcrumbs={[{ label: "Careers" }]}
        imageUrl="https://picsum.photos/1600/500?random=93"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* ─── Why Join JPI ────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Heart size={18} className="text-amber-600" />
              Why Join Jinnah Polytechnic Institute?
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Build a rewarding career with one of Karachi&apos;s most respected
              technical education institutions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyJoinJPI.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-gray-50 border border-gray-200 p-5"
                  >
                    <Icon size={20} className="text-amber-600 mb-3" />
                    <h3 className="font-medium text-gray-800 text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Current Openings ────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Briefcase size={18} className="text-amber-600" />
              Current Openings
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Explore available positions at JPI. Click on a position to view
              details.
            </p>

            <div className="space-y-4">
              {currentOpenings.map((job) => (
                <div key={job.id} className="bg-gray-50 border border-gray-200">
                  <button
                    onClick={() =>
                      setOpenJob(openJob === job.id ? null : job.id)
                    }
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin size={10} className="text-amber-600" />
                          {job.department}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock size={10} className="text-amber-600" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform shrink-0 ${
                        openJob === job.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openJob === job.id && (
                    <div className="px-5 pb-5 border-t border-gray-200 pt-4">
                      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-gray-700 mb-2">
                          Qualification:
                        </h4>
                        <p className="text-xs text-gray-600 bg-white border border-gray-200 px-3 py-2">
                          {job.qualification}
                        </p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-gray-700 mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1.5">
                          {job.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <span className="text-amber-600 mt-0.5 shrink-0">
                                —
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#apply-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("apply-form")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 hover:text-amber-600 transition-colors"
                      >
                        Apply for this position <ArrowRight size={12} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Don&apos;t see a suitable position? You can still submit a general
              application below.
            </p>
          </div>

          {/* ─── Benefits ────────────────────────────── */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Shield size={18} className="text-amber-600" />
              Benefits &amp; Perks
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              What we offer to our valued team members
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-700"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-green-500 shrink-0 mt-0.5"
                    />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Application Form ────────────────────── */}
          <div id="apply-form">
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Send size={18} className="text-amber-600" />
              Submit Your Application
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Send us your details and CV. We&apos;ll contact you if your
              profile matches our requirements.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 border border-gray-200 p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="03XX-XXXXXXX"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="position"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Position Applying For{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="">Select a position</option>
                    {currentOpenings.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                    <option value="general">General / Open Application</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="qualification"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Highest Qualification{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    placeholder="e.g., B.E Mechanical, DAE Electrical"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Years of Experience <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0 – 1 Year</option>
                    <option value="1-3">1 – 3 Years</option>
                    <option value="3-5">3 – 5 Years</option>
                    <option value="5-10">5 – 10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>
              </div>

              {/* CV Upload */}
              <div>
                <label
                  htmlFor="cv"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Attach CV (PDF only, max 5 MB)
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,application/pdf"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:bg-white file:text-xs file:font-medium file:text-gray-700 hover:file:bg-gray-50"
                />
              </div>

              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  placeholder="Tell us why you'd be a great fit for JPI..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                />
              </div>
              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3">
                  {error}
                </div>
              )}

              <div className="bg-amber-50 border border-amber-100 p-4 text-center">
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Please email your CV and supporting
                  documents to{" "}
                  <a
                    href="mailto:info@jpikhi.edu.pk"
                    className="text-amber-700 hover:underline"
                  >
                    info@jpikhi.edu.pk
                  </a>{" "}
                  with the position title in the subject line. You may also
                  visit the campus to submit your application in person.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-70"
                >
                  {isPending ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  {isPending ? "Sending..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>

          {/* ─── Contact ─────────────────────────────── */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              Have questions about career opportunities?
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
