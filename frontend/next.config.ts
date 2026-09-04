import type { NextConfig } from "next";

const devProxy =
  process.env.NODE_ENV === "development"
    ? {
        async rewrites() {
          return [
            { source: "/api/:path*", destination: "http://localhost:8000/api/:path*" },
            { source: "/login", destination: "http://localhost:8000/login" },
          ];
        },
      }
    : {};

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["127.0.0.1"],
  ...devProxy,
};

export default nextConfig;
