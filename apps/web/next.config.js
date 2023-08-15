const payloadUrl = new URL(process.env.PAYLOAD_ADDRESS);

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: payloadUrl.protocol.replace(/:$/, ""),
        hostname: payloadUrl.hostname,
        port: payloadUrl.port,
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
