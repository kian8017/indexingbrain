/*
const publicPayloadAddress = process.env.NEXT_PUBLIC_PAYLOAD_ADDRESS;

if (publicPayloadAddress === undefined) {
  throw new Error("NEXT_PUBLIC_PAYLOAD_ADDRESS is not defined");
}

const payloadUrl = new URL(publicPayloadAddress);
*/

const path = require("path");

/*
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

*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
module.exports = nextConfig;
