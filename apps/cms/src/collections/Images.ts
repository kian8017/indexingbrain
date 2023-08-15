import { CollectionConfig } from "payload/types";

const Images: CollectionConfig = {
  slug: "images",
  upload: {
    staticURL: "/images",
    staticDir: "../data/images",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [],
  access: {
    read: () => true,
  },
};

export default Images;
