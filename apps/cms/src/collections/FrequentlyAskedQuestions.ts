import { CollectionConfig } from "payload/types";

const FrequentlyAskedQuestions: CollectionConfig = {
  slug: "faq",
  admin: {
    useAsTitle: "question",
  },
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "answer",
      type: "text",
      required: true,
    },
  ],
};

export default FrequentlyAskedQuestions;
