import { CollectionConfig } from "payload/types";

const CouldBes: CollectionConfig = {
  slug: "could-bes",
  admin: {
    useAsTitle: "thisCould",
  },
  fields: [
    {
      name: "thisCould",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "beThis",
      type: "text",
      required: true,
    },
  ],
};

export default CouldBes;
