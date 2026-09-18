/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-348bf9f55d504d0ba3e026db3213202c.r2.dev",
      },
    ],
  },
};

export default nextConfig;
