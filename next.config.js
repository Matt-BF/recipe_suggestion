/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["edamam-product-images.s3.amazonaws.com"],
  },
};
