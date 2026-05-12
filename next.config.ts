import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allowed image qualities for next/image `quality` prop
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
