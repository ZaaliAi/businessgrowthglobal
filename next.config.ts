import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loirhexauyamqihgphsu.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: [
    "https://3000-firebase-studio-1756357228024.cluster-lu4mup47g5gm4rtyvhzpwbfadi.cloudworkstations.dev",
    "https://6000-firebase-studio-1756357228024.cluster-lu4mup47g5gm4rtyvhzpwbfadi.cloudworkstations.dev",
    "https://9002-firebase-studio-1756357228024.cluster-lu4mup47g5gm4rtyvhzpwbfadi.cloudworkstations.dev",
  ],
};

export default nextConfig;