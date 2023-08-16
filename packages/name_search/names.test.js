/*
API:

searchOne(rootFolder, whichLocation, type, query)
searchAll(rootFolder, excludeLocations, type, query)
*/

import { searchOne } from "./names";

const TEST_FOLDER = new URL("./test", import.meta.url);

describe("searchOne", () => {
  it("should error when called with no parameters", async () => {
    await expect(searchOne()).rejects.toBe("please specify a rootFolder");
  });

  it("should error when location not specified", async () => {
    await expect(searchOne(TEST_FOLDER)).rejects.toBe("please specify a location")
  })
});