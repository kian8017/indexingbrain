import { CollectionConfig } from "payload/types";

const Locations: CollectionConfig = {
  slug: "locations",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "abbreviation",
      type: "text",
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "relatedLocations",
      type: "relationship",
      relationTo: "locations",
      hasMany: true,
      unique: true,
      admin: {
        isSortable: true,
        allowCreate: false,
      },
    },
  ],
};

export default Locations;
