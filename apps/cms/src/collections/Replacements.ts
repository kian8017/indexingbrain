import { CollectionConfig } from "payload/types";

const Replacements: CollectionConfig = {
  slug: "replacements",
  admin: {
    useAsTitle: "replaceThis",
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "replaceThis",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "withThis",
      type: "text",
      required: true,
    },
  ],
};

export default Replacements;
