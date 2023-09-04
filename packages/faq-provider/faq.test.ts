import { describe, expect, it } from "@jest/globals";
import { PayloadFAQProvider } from "./faq";

describe("FAQProvider", () => {
  it("should return the expected name types", async () => {
    const provider = new PayloadFAQProvider();
    const faqPromise = provider.getFaqs();
    await expect(faqPromise).resolves.toHaveLength(3);
  });
});
