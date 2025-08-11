import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // or '20mb' depending on your needs
    },
  },

   images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
