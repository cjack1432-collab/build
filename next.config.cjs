/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'csuxjmfbwmkxiegfpljm.supabase.co',
        // BabyLoveGrowth article image CDN (Supabase storage).
        // If BabyLoveGrowth migrates their CDN, update this hostname.
      },
    ],
  },
}

module.exports = nextConfig
