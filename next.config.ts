import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // ✅ مجاز کردن دامنه گوگل
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
