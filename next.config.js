/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'], // 最適化対象の画像
    unoptimized: true, // 自動最適化されない画像（アニメーション画像）の場合、最適化前の画像を表示
  },
  experimental: {
    scrollRestoration: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    // 開発環境とプロダクション環境の両方でソースマップを有効化
    if (!isServer) {
      config.devtool = dev ? 'eval-source-map' : 'source-map';

      // 本番環境での最適化設定
      if (!dev) {
        config.optimization = {
          ...config.optimization,
          minimize: true,
          splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 50000,
          },
        };
      }
    }
    return config;
  },
  compiler: {
    // 開発環境でのソースマップの詳細度を上げる
    reactRemoveProperties: process.env.NODE_ENV === 'production',
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
