import { describe, it, expect } from "@jest/globals";
import { parseLocations } from "./locations";
import { join } from "path";

describe("locations", () => {
  it("should correctly parse the test folder", async () => {
    const testFolder = join(__dirname, "test");
    const locations = await parseLocations(testFolder);
    expect(locations).toMatchSnapshot();
  });
});
