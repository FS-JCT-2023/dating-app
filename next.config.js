/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "uploadthing.com",
      },
    ],
  },
  webpack: (config) => {
    if (!config.externals) {
      config.externals = [];
    } else {
      config.externals = [...config.externals, 'bcrypt', 'prisma-client-lib', 'prisma-client', 'prisma'];
    }
    return config;
  },
}

module.exports = nextConfig
