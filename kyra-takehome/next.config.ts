import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    KYRA_STATS_HISTORY_API_URL: process.env.KYRA_STATS_HISTORY_API_URL,
    KYRA_BASE_DATA_API_URL: process.env.KYRA_BASE_DATA_API_URL,
    KYRA_SWAGGER_HEADER_KEY: process.env.KYRA_SWAGGER_HEADER_KEY,
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
