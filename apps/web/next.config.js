const payloadAddress = process.env.PAYLOAD_ADDRESS;

if (payloadAddress === undefined) {
  throw new Error("PAYLOAD_ADDRESS is not defined");
}

const payloadUrl = new URL(payloadAddress);

const path = require("path");

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
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

module.exports = nextConfig;