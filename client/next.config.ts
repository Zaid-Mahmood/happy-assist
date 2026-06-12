import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.1.5:3000" , "192.168.1.5"],
  images: {
  remotePatterns: [
        {
        protocol: "http",
        hostname: "192.168.1.5",
        port: "1337",
        pathname: "/uploads/**",
      },
    {
      protocol: "http",
      hostname: "localhost",
      port: "1337",
      pathname: "/uploads/**",
    },
  ],
},
  reactCompiler: true,
};

export default nextConfig;
