/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // サーバーサイドのビルド時に node:buffer を無効化
    if (isServer) {
      config.externals.push('node:buffer');
    }

    return config;
  },
}

module.exports = nextConfig
