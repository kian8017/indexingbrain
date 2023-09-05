import { GlobalConfig } from "payload/types";

const Message: GlobalConfig = {
  slug: "message",
  fields: [
    {
      name: "message",
      type: "text",
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
  admin: {
    description:
      "The pop-up message shown to people when visiting the search page.",
  },
};

export default Message;
