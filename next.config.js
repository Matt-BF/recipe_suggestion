/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["edamam-product-images.s3.amazonaws.com"],
  },
};
