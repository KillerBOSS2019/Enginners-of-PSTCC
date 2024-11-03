import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.search.brave.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
// https://imgs.search.brave.com/0nNH9faSaC6tVvRzKWyKVFFV9QbWaM3FVPe0IWqL3Jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0xvZ28tQm9laW5n/LTUwMHgzMTMucG5n