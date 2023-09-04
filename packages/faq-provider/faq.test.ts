import { describe, expect, it } from "@jest/globals";
import { FAQProvider } from "./faq";

describe("FAQProvider", () => {
  it("should return the expected name types", async () => {
    const provider = new FAQProvider();
    const faqPromise = provider.getFaqs();
    await expect(faqPromise).resolves.toHaveLength(3);
  });
});
