// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // ✅ Recommended
  swcMinify: true,       // ✅ Faster builds with SWC

  experimental: {
    typedRoutes: false,  // ✅ Fixes Vercel "Type 'string' is not assignable..." error
  },
};

export default nextConfig;
