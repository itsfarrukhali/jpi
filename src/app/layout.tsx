import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import NewsPopup from "@/components/shared/NewsPopup";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Set a canonical site origin so social images resolve to absolute URLs.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpi.edu.pk",
  ),
  title: {
    default: "Jinnah Polytechnic Institute — Knowledge · Skills · Attitude",
    template: "%s | JPI Karachi",
  },
  description:
    "Jinnah Polytechnic Institute (JPI) Karachi — a premier technical institution established in 1961 under Anjuman-e-Islamia Trust offering DAE, certifications, and short courses in Civil, Electrical, Mechanical & Computer Technology.",
  keywords: [
    "JPI Karachi",
    "Jinnah Polytechnic Institute",
    "DAE programs Karachi",
    "technical education Pakistan",
    "polytechnic college Karachi",
    "engineering diploma",
    "SBTE affiliated",
    "polytechnic Karachi",
    "technical education Karachi",
    "diploma engineering Karachi",
    "short courses Karachi",
    "certifications Karachi",
    "technical training Karachi",
  ],
  authors: [{ name: "Jinnah Polytechnic Institute" }],
  creator: "Jinnah Polytechnic Institute",
  openGraph: {
    url: "https://jpikhi.edu.pk",
    siteName: "Jinnah Polytechnic Institute",
    title: "Jinnah Polytechnic Institute — Knowledge · Skills · Attitude",
    description:
      "Premier technical education in Karachi since 1961. DAE, Certifications & Short Courses.",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px image bana apni
        width: 1200,
        height: 630,
        alt: "Jinnah Polytechnic Institute Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinnah Polytechnic Institute Karachi",
    description:
      "Jinnah Polytechnic Institute (JPI) Karachi — a premier technical institution established in 1961 under Anjuman-e-Islamia Trust offering DAE, certifications, and short courses in Civil, Electrical, Mechanical & Computer Technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        roboto.variable,
        interHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster />
        <NewsPopup />
        <Footer />
        <WhatsAppButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
