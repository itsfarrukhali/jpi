import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Download,
  FileText,
  Send,
} from "lucide-react";
import { admissionContact, applicationFormFields } from "@/data/admissions";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Apply for DAE programs at Jinnah Polytechnic Institute — download the admission form or submit your inquiry online.",
};

const contactIcons: Record<string, typeof MapPin> = {
  address: MapPin,
  phone: Phone,
  email: Mail,
  officeHours: Clock,
};

export default function ApplyNowPage() {
  return (
    <>
      <PageHero
        title="Apply Now"
        subtitle="Start your journey toward a rewarding technical career at Jinnah Polytechnic Institute."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Apply Now" },
        ]}
        imageUrl="https://picsum.photos/1600/500?random=64"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Download Form */}
          <div className="bg-gray-50 border border-gray-200 p-8 text-center">
            <Download size={28} className="mx-auto text-amber-600 mb-3" />
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Download Admission Form
            </h2>
            <p className="text-xs text-gray-500 mb-5 max-w-md mx-auto">
              Download the DAE admission form, print it, fill it out carefully,
              and submit it to the Admission Department with all required
              documents.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50 transition-colors"
              download
            >
              <FileText size={14} />
              Download Admission Form (PDF)
            </a>
            <p className="text-xs text-gray-400 mt-3">
              Or collect from the Admission Department counter
            </p>
          </div>

          {/* Online Inquiry Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Submit Your Inquiry
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Fill out the form below and our Admission Department will get back
              to you.
            </p>

            <form className="bg-gray-50 border border-gray-200 p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {applicationFormFields.slice(0, 6).map((field) => (
                  <div
                    key={field.name}
                    className={field.type === "textarea" ? "sm:col-span-2" : ""}
                  >
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
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={field.rows || 3}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                      />
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
              </div>

              {/* Program & Technology Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {applicationFormFields.slice(9, 12).map((field) => (
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
                  </div>
                ))}
              </div>

              {/* Additional Message */}
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
                  placeholder="Any additional information..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  <Send size={14} />
                  Submit Inquiry
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  This is an inquiry form only. Final admission is subject to
                  form submission, document verification, and merit.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Visit or Contact Us
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Get in touch with the Admission Department for any queries
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(admissionContact).map(([key, value]) => {
                const Icon = contactIcons[key] || MapPin;
                return (
                  <div
                    key={key}
                    className="bg-gray-50 border border-gray-200 p-4 flex items-start gap-3"
                  >
                    <Icon
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div className="text-sm text-gray-800 mt-0.5">
                        {value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Reminder */}
          <div className="bg-amber-50 border border-amber-100 p-6 text-center">
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>Reminder:</strong> No cash payments are accepted at JPI.
              All fees must be deposited through the authorized bank challan
              issued by the Admission Department after final selection.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/admissions/how-to-apply"
                className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                How to Apply
              </Link>
              <Link
                href="/admissions/fee-structure"
                className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Fee Structure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
