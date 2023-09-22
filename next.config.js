/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  //for mongoose actions
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  //allowing to add profile img
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
