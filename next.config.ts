import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'img.favpng.com',
      },
      {
        protocol: 'https',
        hostname: 'i.logos-download.com',
      },
      {
        protocol: 'https',
        hostname: 'cmrithyderabad.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'www.kitss.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
    ],
  },
};

export default nextConfig;
