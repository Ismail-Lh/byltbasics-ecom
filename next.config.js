const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  // },
};

const config = withBundleAnalyzer(nextConfig);

module.exports = config;
