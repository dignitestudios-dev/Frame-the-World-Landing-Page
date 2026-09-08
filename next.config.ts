import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms-of-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
