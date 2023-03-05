/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.pixabay.com', 'pixabay.com'],
  },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
