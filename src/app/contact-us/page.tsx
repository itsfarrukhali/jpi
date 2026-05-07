"use client";

import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sent) {
    return (
      <>
        <PageHero
          title="Contact Us"
          subtitle="We'd love to hear from you. Reach out anytime."
          breadcrumbs={[{ label: "Contact" }]}
          imageUrl="https://picsum.photos/1600/500?random=92"
        />
        <section className="py-20 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Message Sent!
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Thank you for reaching out. We&apos;ll get back to you within 1–2
              business days.
            </p>
            <button
              onClick={() => setSent(false)}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We're here to help. Reach out to us."
        breadcrumbs={[{ label: "Contact" }]}
        imageUrl="https://picsum.photos/1600/500?random=92"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-200">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                        Address
                      </div>
                      <p className="text-sm text-gray-800">
                        ST-1, Nazimabad-5, Karachi 74600
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                        Phone
                      </div>
                      <a
                        href="tel:+922199260294"
                        className="text-sm text-gray-800 hover:text-amber-600 transition-colors block"
                      >
                        021-99260294
                      </a>
                      <a
                        href="tel:+923300370660"
                        className="text-sm text-gray-800 hover:text-amber-600 transition-colors block"
                      >
                        0330-0370660
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:info@jpikhi.edu.pk"
                        className="text-sm text-gray-800 hover:text-amber-600 transition-colors block"
                      >
                        info@jpikhi.edu.pk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      size={16}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                        Office Hours
                      </div>
                      <p className="text-sm text-gray-800">
                        Monday – Saturday: 9:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 pb-1.5 border-b border-gray-200">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/admissions/apply-now"
                    className="block text-xs text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Apply Now →
                  </Link>
                  <Link
                    href="/admissions/how-to-apply"
                    className="block text-xs text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    How to Apply →
                  </Link>
                  <Link
                    href="/admissions/fee-structure"
                    className="block text-xs text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Fee Structure →
                  </Link>
                  <Link
                    href="/programs/dae"
                    className="block text-xs text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Our Programs →
                  </Link>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.app.goo.gl/CKW7PMsuG9e1Kz8p7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <ExternalLink size={14} className="text-amber-600" />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Contact Form + Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-200">
                  Send a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 border border-gray-200 p-6 sm:p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-gray-700 mb-1.5"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
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
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="03XX-XXXXXXX"
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium text-gray-700 mb-1.5"
                      >
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="programs">Program Information</option>
                        <option value="fee">Fee Structure</option>
                        <option value="documents">Document Verification</option>
                        <option value="complaint">Complaint / Grievance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      <Send size={14} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Google Maps */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-200">
                  Our Location
                </h2>
                <div className="border border-gray-200 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2653300000000!2d67.0259874!3d24.9260971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f91913dab87%3A0x250aa761123bea61!2sJINNAH%20POLYTECHNIC%20INSTITUTE!5e0!3m2!1sen!2s!4v1700000000000"
                    width="100%"
                    height="350"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jinnah Polytechnic Institute — Google Maps Location"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  ST-1, Nazimabad-5, Near Matric Board Office, Karachi 74600
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
