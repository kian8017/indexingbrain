import { CollectionBeforeValidateHook, CollectionConfig } from "payload/types";
import slug from "slug";

const populateSlug: CollectionBeforeValidateHook = async (p) => {
  if (
    p.operation === "create" &&
    p.data !== undefined &&
    p.data.title !== undefined &&
    p.data.slug === undefined
  ) {
    p.data.slug = slug(p.data.title);
  }
  return p.data;
};

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
        description: ({ value }: { value: unknown }) =>
          value !== undefined
            ? `The page will be located at indexing-brain.org/page/${value}`
            : "",
      },
    },
  ],

  hooks: {
    beforeValidate: [populateSlug],
  },
};

export default Pages;
