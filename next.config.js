/** @type {import('next').NextConfig} */

const withInterceptStdout = require('next-intercept-stdout');

module.exports = withInterceptStdout(
  {
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
        config.devtool = 'source-map';
      }
      return config;
    },
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);
