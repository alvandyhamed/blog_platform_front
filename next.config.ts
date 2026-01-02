import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // ✅ مجاز کردن دامنه گوگل
  },
  /* config options here */
  reactCompiler: true,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'unsafe-none',
        },
      ],
    },
  ],
};

export default nextConfig;
