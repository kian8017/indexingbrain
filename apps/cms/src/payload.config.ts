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

export default buildConfig({
  serverURL: "http://localhost:3000",
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
  globals: [Message],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
