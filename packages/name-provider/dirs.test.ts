import { describe, expect, it } from "@jest/globals";
import { DirsNameProvider } from "./dirs";

describe("DirsNameProvider", () => {
  it("should return the expected name types", async () => {
    const provider = new DirsNameProvider();
    const nameTypes = await provider.getNameTypes();
    await expect(nameTypes).toBe(undefined);
  });
});
