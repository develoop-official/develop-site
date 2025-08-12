import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
    ],
    // ローカル画像の最適化を無効化（Next.js 15での推奨設定）
    unoptimized: true,
  },
};

export default nextConfig;
