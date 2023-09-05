import { CollectionConfig } from "payload/types";

const CarouselPairs: CollectionConfig = {
  slug: "carousel-pairs",
  admin: {
    useAsTitle: "nickname",
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "nickname",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "handwrittenImage",
      type: "upload",
      relationTo: "images",
      required: true,
    },
    {
      name: "typedImage",
      type: "upload",
      relationTo: "images",
      required: true,
    },
  ],
};

export default CarouselPairs;
