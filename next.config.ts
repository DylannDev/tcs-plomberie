import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placekitten.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["@heroicons/react", "framer-motion"],
    turbo: {
      loaders: {
        // Configuration des loaders pour Turbopack
        ".ts": ["swc"],
        ".tsx": ["swc"],
        ".js": ["swc"],
        ".jsx": ["swc"],
      },
    },
  },
};

export default nextConfig;
