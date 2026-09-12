import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Learn_Python',
  assetPrefix: '/Learn_Python/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;