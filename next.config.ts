import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The experience is fully static — no server, no API routes.
  output: 'export',
  images: {
    // Static export cannot use the Next image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
