/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  compress: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
