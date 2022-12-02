/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: "edamam-product-images.s3.amazonaws.com" }],
  },
};
