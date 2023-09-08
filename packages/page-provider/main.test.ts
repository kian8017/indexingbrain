import { describe, it, expect } from "@jest/globals";
import { PayloadPageProvider } from "./main";

// include protocol
const PAYLOAD_ADDRESS = "http://localhost:3000";

describe("PayloadPageProvider", () => {
  it("should return the correct number of results with the seeded data", async () => {
    const provider = new PayloadPageProvider(PAYLOAD_ADDRESS);
    await expect(provider.getPage("test-slug")).resolves.toMatchInlineSnapshot(`
      {
        "body": "<div><span>I&#x27;m a test page, yes I am! Filled with test content, just like I can.</span></div><div><span></span></div><h1><span>How about a h1?</span></h1><div><span></span></div><h2><span>h2?</span></h2><h3><span>h3?</span></h3><h4><span>h4?</span></h4><h5><span>h5?</span></h5><h6><span>h6?</span></h6><div><span>and on and on...</span></div><div><span></span></div><ul><li><span>things</span></li><li><span>are</span></li><li><span>unordered</span></li></ul><div><span></span></div><ol><li><span>or</span></li><li><span>more</span></li><li><span>ordered</span></li><li><span>now</span></li></ol><div><span></span></div>",
        "title": "This is a test page",
      }
    `);
  });
  it("should return null when no page exists", async () => {
    const provider = new PayloadPageProvider(PAYLOAD_ADDRESS);
    await expect(provider.getPage("test-slug2")).resolves.toBeNull();
  });
});
