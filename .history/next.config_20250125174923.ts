import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname" "sanity-nextjs-rouge.vercel
      }
    ]
  }
};

export default nextConfig;
