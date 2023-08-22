const publicPayloadAddress = process.env.NEXT_PUBLIC_PAYLOAD_ADDRESS;

if (publicPayloadAddress === undefined) {
  throw new Error("NEXT_PUBLIC_PAYLOAD_ADDRESS is not defined");
}

const payloadUrl = new URL(publicPayloadAddress);

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
