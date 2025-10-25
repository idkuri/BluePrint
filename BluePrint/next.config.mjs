// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    ...(process.env.NODE_ENV === 'development' && {
      dangerouslyAllowLocalIP: true,
    }),

    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '5050', pathname: '/**' },
      { protocol: 'http', hostname: 'backend', port: '5050', pathname: '/**' },
      { protocol: 'https', hostname: 'gradient.idkuri.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
