/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        // TODO: tighten to the exact BabyLoveGrowth image CDN hostname once known
        // (e.g. hostname: 'cdn.babylovegrowth.ai') for improved security.
      },
    ],
  },
}

module.exports = nextConfig
