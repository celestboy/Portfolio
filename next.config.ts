import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
      "www.w3.org",
      "cdn.brandfetch.io",
    ],
  },
};

export default nextConfig;
