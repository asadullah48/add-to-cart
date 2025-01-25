import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanity-nextjs-rouge.vercel.app',
        port:'',
        pathname: '/food/**',
        se
      }
    ]
  }
};

export default nextConfig;
