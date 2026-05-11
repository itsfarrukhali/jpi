"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  Download,
  FileText,
  Send,
  MapPin,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { admissionContact, universalFormFields } from "@/data/admissions";
import { toast } from "sonner";

export default function ApplyNowPage() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Check if selected program is DAE (for male-only warning + extra fields)
  const isDAE = selectedProgram.startsWith("dae-");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Map form fields to API shape – no `as` just safe extraction
    const payload = {
      studentName: String(formData.get("fullName") ?? ""),
      fatherName: String(formData.get("fatherName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      program: String(formData.get("interestedProgram") ?? ""),
      technology: isDAE ? String(formData.get("technology") ?? "") : undefined,
      shift: isDAE ? String(formData.get("shift") ?? "") : undefined,
      message: String(formData.get("message") ?? "") || undefined,
    };

    startTransition(async () => {
      try {
        const res = await fetch("/api/admissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await res.json();

        if (result.success) {
          setSubmitted(true);
          form.reset();
          setSelectedProgram("");
          toast.success("Admission inquiry submitted successfully!", {
            icon: <CheckCircle2 size={18} className="text-green-400" />,
            style: {
              background: "var(--color-primary-dark)",
              color: "#fff",
              border: "1px solid var(--color-gold)",
            },
          });
          window.scrollTo({ top: 0, behavior: "smooth" });
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
          title="Application Submitted"
          subtitle="Thank you for your interest in Jinnah Polytechnic Institute."
          breadcrumbs={[
            { label: "Admissions", href: "/admissions" },
            { label: "Apply Now" },
          ]}
          imageUrl="https://picsum.photos/1600/500?random=64"
        />
        <section className="py-20 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Inquiry Received!
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Thank you for submitting your inquiry. Our Admission Department
              will review your information and get back to you within 2–3
              working days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/admissions/how-to-apply"
                className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                How to Apply
              </Link>
              <Link
                href="/programs"
                className="px-5 py-2.5 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
              >
                Browse Programs →
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Apply Now"
        subtitle="Submit your inquiry for any program at Jinnah Polytechnic Institute."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Apply Now" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=64"
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Download Option */}
          <div className="bg-gray-50 border border-gray-200 p-6 text-center">
            <Download size={24} className="mx-auto text-amber-600 mb-2" />
            <h2 className="text-base font-bold text-gray-800 mb-1">
              Prefer to Apply Offline?
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              Download the admission form and submit it in person at our campus.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-amber-600 text-amber-700 text-xs font-medium hover:bg-amber-50 transition-colors"
              download
            >
              <FileText size={12} />
              Download Form (PDF)
            </a>
          </div>

          {/* Inquiry Form */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              Online Inquiry Form
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Fill in your details and select the program you&apos;re interested
              in. Our team will contact you with further information.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 border border-gray-200 p-6 sm:p-8 space-y-5"
            >
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {universalFormFields.slice(0, 5).map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-400 ml-0.5">*</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      >
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    )}
                  </div>
                ))}

                {/* Qualification + Marks Row */}
                <div>
                  <label
                    htmlFor="qualification"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Highest Qualification{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="qualification"
                    name="qualification"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    {universalFormFields[5].options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="lastMarks"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Last Exam Marks (%)
                  </label>
                  <input
                    type="text"
                    id="lastMarks"
                    name="lastMarks"
                    placeholder="Enter percentage (optional)"
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Interested Program — Flat Dropdown */}
              <div>
                <label
                  htmlFor="interestedProgram"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Interested Program <span className="text-red-400">*</span>
                </label>
                <select
                  id="interestedProgram"
                  name="interestedProgram"
                  required
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                >
                  {universalFormFields[7].options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* DAE Warning — Male Only */}
              {isDAE && (
                <div className="bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
                  <AlertTriangle
                    size={16}
                    className="text-amber-600 shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs font-medium text-amber-800 mb-0.5">
                      DAE Programs — Male Students Only
                    </p>
                    <p className="text-xs text-amber-700">
                      Maximum age: Morning 35 years | Evening 45 years. Matric
                      Science with Physics, Chemistry &amp; Mathematics
                      required.
                    </p>
                  </div>
                </div>
              )}

              {/* DAE Extra Fields: Technology + Shift */}
              {isDAE && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="technology"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Preferred Technology
                    </label>
                    <select
                      id="technology"
                      name="technology"
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    >
                      {universalFormFields[8].options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="shift"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Preferred Shift
                    </label>
                    <select
                      id="shift"
                      name="shift"
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    >
                      {universalFormFields[9].options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Your city"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Any questions or additional information..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                />
              </div>
              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3">
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
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
                  {isPending ? "Sending..." : "Submit Inquiry"}
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  This is an inquiry form only. Final admission is subject to
                  document verification and meeting eligibility criteria.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Or Contact Us Directly
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-gray-50 border border-gray-200 p-3 flex items-center gap-3">
                <Phone size={14} className="text-amber-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="text-sm text-gray-800">
                    {admissionContact.phone}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-3 flex items-center gap-3">
                <Mail size={14} className="text-amber-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm text-gray-800">
                    {admissionContact.email}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-3 flex items-center gap-3 sm:col-span-2">
                <MapPin size={14} className="text-amber-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500">Address</div>
                  <div className="text-sm text-gray-800">
                    {admissionContact.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
