import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanity-nextjs-rouge.vercel.app',
        port:'',
        pat
      }
    ]
  }
};

export default nextConfig;
