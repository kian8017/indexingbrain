import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import CarouselPairs from "./collections/CarouselPairs";
import CouldBes from "./collections/CouldBes";
import Locations from "./collections/Locations";
import Pages from "./collections/Pages";
import Replacements from "./collections/Replacements";
import Message from "./globals/Message";
import Images from "./collections/Images";
import FrequentlyAskedQuestions from "./collections/FrequentlyAskedQuestions";

import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

// GitHub Codespaces rewrites the port-forwarded requests, so this is needed,
//     even though technically the app isn't being accessed at 'localhost:<PORT>'
const secureLocalAddr = `https://localhost:${process.env.PAYLOAD_PUBLIC_PORT}`;

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_ADDRESS,
  admin: {
    user: Users.slug,
  },
  collections: [
    CarouselPairs,
    CouldBes,
    Locations,
    Pages,
    Replacements,
    Users,
    Images,
    FrequentlyAskedQuestions,
  ],
  csrf: [secureLocalAddr, ...process.env.PAYLOAD_PUBLIC_FRONTEND_ADDRESS.split(",")],
  globals: [Message],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
