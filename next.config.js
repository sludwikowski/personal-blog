/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.pixabay.com', 'pixabay.com', 'cdn.sanity.io'],
  },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
