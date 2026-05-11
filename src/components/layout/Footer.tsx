"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const result = await res.json();

        if (result.success) {
          setSubscribed(true);
          form.reset();
          toast.success("Thank you for subscribing to our newsletter!", {
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

  return (
    <footer className="text-white bg(--color-primary-dark)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={"/brand/footer-logo.png"}
                alt="JPI Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Established in 1961 under Anjuman-e-Islamia Trust. Providing
              quality technical education for over six decades.
            </p>
            <p className="text-(--color-gold) text-sm font-medium italic">
              &ldquo;Knowledge · Skills · Attitude&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--color-gold) transition-colors"
              >
                <Image
                  src={"/social/facebook.svg"}
                  alt="Facebook"
                  width={14}
                  height={14}
                />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--color-gold) transition-colors"
              >
                <Image
                  src={"/social/youtube.svg"}
                  alt="YouTube"
                  width={14}
                  height={14}
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--color-gold) transition-colors"
              >
                <Image
                  src={"/social/instagram.svg"}
                  alt="Instagram"
                  width={14}
                  height={14}
                />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--color-gold) transition-colors"
              >
                <Image
                  src={"/social/tiktok.svg"}
                  alt="TikTok"
                  width={14}
                  height={14}
                />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--color-gold) transition-colors"
              >
                <Image src={"/social/x.svg"} alt="X" width={14} height={14} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-(--color-gold) mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                ["About JPI", "/about-us"],
                [
                  "Al-Haj Molvi Rayazuddin Ahmed Akbarabadi",
                  "/about-us/alhaj-rayazuddin",
                ],
                ["General Secretary's Message", "/about-us/general-secretary"],
                ["QEC", "/qec"],
                ["Student Affairs", "/student-affairs"],
                ["Facilities", "/facilities"],
                ["News & Events", "/news"],
                ["Contact Us", "/contact-us-us"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-(--color-gold) transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-(--color-gold)] text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-(--color-gold) mb-4 text-sm uppercase tracking-wider">
              Programs
            </h3>
            <ul className="space-y-2">
              {[
                ["DAE — Civil Technology", "/programs/dae"],
                ["DAE — Electrical Technology", "/programs/dae"],
                ["DAE — Mechanical Technology", "/programs/dae"],
                ["DAE — Computer Technology", "/programs/dae"],
                ["AutoCAD Professional", "/programs/certifications"],
                ["Short Courses", "/programs/short-courses"],
                ["JEC Awards", "/programs/jec"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-(--color-gold) transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-(--color-gold)] text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-semibold text-(--color-gold) mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin
                  size={14}
                  className="text-(--color-gold) mt-0.5 shrink-0"
                />
                <span>
                  ST-1 5-C Near Matric Board Office Nazimabad Karachi.
                </span>
              </li>
              <li>
                <a
                  href="tel:+92-21-99260294-5"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-(--color-gold) transition-colors"
                >
                  <Phone size={14} className="text-(--color-gold) shrink-0" />
                  +92-21-99260294-5
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jpikhi.edu.pk"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-(--color-gold) transition-colors"
                >
                  <Mail size={14} className="text-(--color-gold) shrink-0" />
                  info@jpikhi.edu.pk
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <span className="text-gray-500 text-xs block mb-0.5">
                  Office Hours
                </span>
                Mon–Sat: 90:00 AM – 05:00 PM
              </li>
            </ul>
            <h3 className="font-semibold text-(--color-gold) mb-3 text-sm uppercase tracking-wider">
              Newsletter
            </h3>
            {subscribed ? (
              <p className="text-sm text-green-400">
                ✓ Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-3 py-2 text-rounded-lg bg-white/10 text-black text-sm placeholder-gray-500 border border-white/10 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="p-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors disabled:opacity-70"
                >
                  {isPending ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                </button>
                {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Jinnah Polytechnic Institute, Karachi.
            All rights reserved.
          </p>
          <p>
            Under <span className="text-gray-400">Anjuman-e-Islamia Trust</span>{" "}
            · Affiliated with <span className="text-gray-400">SBTE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
