/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["i.ytimg.com", "img.youtube.com"],
  },
};

module.exports = nextConfig;
