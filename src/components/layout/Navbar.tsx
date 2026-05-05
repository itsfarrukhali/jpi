"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About JPI", href: "/about-us" },
      {
        label: "Vision, Mission & History",
        href: "/about-us/vision-history-mission",
      },
      {
        label: "Al-Haj Molvi Rayazuddin Ahmed Akbarabadi",
        href: "/about-us/alhaj-rayazuddin",
      },
      {
        label: "General Secretary's Message",
        href: "/about-us/general-secretary",
      },
      {
        label: "In Loving Memory",
        href: "/about-us/in-memory",
      },
      { label: "Principal's Message", href: "/about-us/principals-message" },
    ],
  },
  {
    label: "Programs",
    href: "/programs/dae",
    children: [
      { label: "DAE Programs", href: "/programs/dae" },
      { label: "Certifications", href: "/programs/certifications" },
      { label: "Short Courses", href: "/programs/short-courses" },
      { label: "Jinnah Excellence Certificates", href: "/programs/jec" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "Merit Criteria", href: "/admissions/merit" },
      { label: "Online Application", href: "/admissions/apply" },
    ],
  },
  {
    label: "Departments",
    href: "/departments/civil",
    children: [
      { label: "Civil Technology", href: "/departments/civil" },
      { label: "Electrical Technology", href: "/departments/electrical" },
      { label: "Mechanical Technology", href: "/departments/mechanical" },
      { label: "Computer Technology", href: "/departments/computer" },
    ],
  },
  {
    label: "More",
    href: "#",
    children: [
      { label: "QEC", href: "/qec" },
      { label: "Student Affairs", href: "/student-affairs" },
      { label: "Facilities", href: "/facilities" },
      { label: "News & Events", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function NavbarContent({ pathname }: { pathname: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-(--color-primary-dark) text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="tel:+92-21-99260294-5"
              className="flex items-center gap-1.5 hover:text-(--color-gold) transition-colors"
            >
              <Phone size={13} />
              <span>+92-21-99260294-5</span>
            </Link>
            <Link
              href="tel:+92-330-0370660"
              className="flex items-center gap-1.5 hover:text-(--color-gold) transition-colors"
            >
              <Image
                src={"https://cdn.simpleicons.org/whatsapp/white"}
                alt="WhatsApp"
                width={16}
                height={16}
                unoptimized
                className="hover:text-(--color-gold) transition-colors"
              />
              <span>+92-330-0370660</span>
            </Link>
            <Link
              href="mailto:info@jpikhi.edu.pk"
              className="flex items-center gap-1.5 hover:text-(--color-gold) transition-colors"
            >
              <Mail size={13} />
              <span>info@jpikhi.edu.pk</span>
            </Link>
            <div className="flex items-center gap-1.5 hover:text-(--color-gold) transition-colors">
              <MapPin size={13} />
              <span>ST-1 5-C Near Matric Board Office Nazimabad Karachi.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-gold) transition-colors"
            >
              <Image
                src={"https://cdn.simpleicons.org/facebook/white"}
                alt="Facebook"
                width={16}
                height={16}
                unoptimized
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-gold) transition-colors"
            >
              <Image
                src={"https://cdn.simpleicons.org/youtube/white"}
                alt="YouTube"
                width={16}
                height={16}
                unoptimized
              />
            </Link>
            <Link
              href="https://instgram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-gold) transition-colors"
            >
              <Image
                src={"https://cdn.simpleicons.org/instagram/white"}
                alt="Instagram"
                width={16}
                height={16}
                unoptimized
              />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-gold) transition-colors"
            >
              <Image
                src={"https://cdn.simpleicons.org/tiktok/white"}
                alt="TikTok"
                width={16}
                height={16}
                unoptimized
              />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-gold) transition-colors"
            >
              <Image
                src={"https://cdn.simpleicons.org/x/white"}
                alt="X"
                width={16}
                height={16}
                unoptimized
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src={"/brand/jpi-logo-tp.png"}
                alt="Jinnah Polytechnic Institute"
                width={270}
                height={40}
                loading="eager"
                className="h-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        pathname.startsWith(link.href) && link.href !== "#"
                          ? "text-(--color-primary) bg-blue-50"
                          : "text-(--color-primary-dark) hover:text-(--color-primary) hover:bg-gray-50",
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          activeDropdown === link.label ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2.5 text-sm transition-colors",
                                pathname === child.href
                                  ? "bg-(--color-primary) text-white"
                                  : "text-(--color-primary-dark) hover:bg-(--color-surface) hover:text-(--color-primary)",
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-(--color-primary) bg-blue-50"
                        : "text-(--color-primary-dark) hover:text-(--color-primary) hover:bg-gray-50",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/admissions/apply"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-(--color-gold) text-white text-sm font-semibold hover:bg-(--color-gold-light) transition-colors shadow-sm"
              >
                Apply Now →
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-(--color-primary-dark) hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.label ? null : link.label,
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-(--color-primary-dark) hover:bg-gray-50"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform",
                            mobileExpanded === link.label ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-(--color-text-muted) hover:text-(--color-primary)"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-(--color-primary-dark) hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href="/admissions/apply"
                    className="block w-full text-center px-4 py-2.5 rounded-lg bg-(--color-gold) text-white font-semibold text-sm"
                  >
                    Apply Now →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return <NavbarContent key={pathname} pathname={pathname} />;
}
