import { describe, it, expect } from "@jest/globals";
import { PayloadFAQProvider } from "./main";

// include protocol
const PAYLOAD_ADDRESS = "http://localhost:3000";

describe("PayloadFAQProvider", () => {
  it("should return the correct number of results with the seeded data", async () => {
    const provider = new PayloadFAQProvider(PAYLOAD_ADDRESS);
    await expect(provider.getFAQs()).resolves.toMatchInlineSnapshot(`
      [
        {
          "answer": "How many?",
          "question": "Third question?",
        },
        {
          "answer": "Do you?",
          "question": "I have a question?",
        },
      ]
    `);
  });
  it("should not throw an error on invalid configuration", async () => {
    const provider = new PayloadFAQProvider("invalid");
    await expect(provider.getFAQs()).resolves.toHaveLength(0);
  });
});
