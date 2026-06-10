"use client";

import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import NewsPopup from "@/components/shared/NewsPopup";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname() || "";

  // Hide public layout for any admin route, login page, and any future /dashboard
  const isAdmin = pathname.startsWith("/admin");
  const isLogin = pathname.startsWith("/login");
  const hidePublicLayout = isAdmin || isLogin;

  if (hidePublicLayout) {
    // Admin / login pages render without Navbar, Footer, Popup
    return (
      <SessionProvider>
        <div className="min-h-screen">{children}</div>
      </SessionProvider>
    );
  }

  // Public pages with full layout
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <NewsPopup />
        <Footer />
        <WhatsAppButton />
      </div>
    </SessionProvider>
  );
}
