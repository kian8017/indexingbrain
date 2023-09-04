import { describe, expect, it } from "@jest/globals";
import { getFaqs } from "./faq";

describe("FAQProvider", () => {
  it("should return the expected name types", async () => {
    const faqPromise = getFaqs();
    await expect(faqPromise).resolves.toHaveLength(3);
  });
});
