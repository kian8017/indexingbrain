import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import CarouselPairs from "./collections/CarouselPairs";
import CouldBes from "./collections/CouldBes";
import Locations from "./collections/Locations";
import Pages from "./collections/Pages";
import Replacements from "./collections/Replacements";
import Message from "./globals/Message";
import Images from "./collections/Images";
import FrequentlyAskedQuestions from "./collections/FrequentlyAskedQuestions";

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
  //csrf: [secureLocalAddr, ...process.env.PAYLOAD_PUBLIC_FRONTEND_ADDRESS.split(",")],
  globals: [Message],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
