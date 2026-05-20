import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Latest news, announcements, events, and gallery from Jinnah Polytechnic Institute.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
