import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liveimg.sooplive.co.kr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'profile.img.sooplive.co.kr',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
