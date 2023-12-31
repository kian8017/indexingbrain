import { describe, it, expect } from "@jest/globals";
import { PayloadCarouselProvider } from "./main";

// include protocol
const PAYLOAD_ADDRESS = "http://localhost:3000";

describe("PayloadCarouselProvider", () => {
  it("should return the correct number of results with the seeded data", async () => {
    const provider = new PayloadCarouselProvider(PAYLOAD_ADDRESS);
    await expect(provider.getSlides()).resolves.toMatchInlineSnapshot(`
      [
        {
          "handwritten": {
            "height": 1634,
            "url": "http://localhost:3000/images/Screen Shot 2023-08-28 at 2.22.16 PM.png",
            "width": 2880,
          },
          "nickname": "samething",
          "typed": {
            "height": 1634,
            "url": "http://localhost:3000/images/Screen Shot 2023-08-28 at 2.22.16 PM.png",
            "width": 2880,
          },
        },
      ]
    `);
  });

  it("should not throw an error on invalid configuration", async () => {
    const provider = new PayloadCarouselProvider("invalid");
    await expect(provider.getSlides()).resolves.toHaveLength(0);
  });
});
