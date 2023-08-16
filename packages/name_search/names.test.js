/*
API:

searchOne(rootFolder, whichLocation, type, query)
searchAll(rootFolder, excludeLocations, type, query)
*/

import { searchOne } from "./names";

const testFolder = new URL("./test", import.meta.url);

describe("searchOne", () => {
  test("throws error on no parameters", async () => {
    await expect(searchOne()).rejects.toBe("error: rootFolder not specified");
  });
});