import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/special-graphics',
  assetPrefix: '/special-graphics/',
};

export default nextConfig;
