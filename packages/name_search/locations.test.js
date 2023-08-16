import { describe, it, expect } from "@jest/globals";
import { getFileName, parseLocations } from "./locations";
import path from "path";

const TEST_FOLDER = decodeURIComponent(new URL("./test", import.meta.url).pathname);

describe("parseLocations", () => {
  it("should correctly parse the test folder", async () => {
    const locations = await parseLocations(TEST_FOLDER);
    expect(locations).toMatchSnapshot();
  });
});


describe("getFileName", () => {
  it("should correctly return file name", async () => {
    const spanishOtherFileName = path.join(TEST_FOLDER, "./SPSH Spanish/SpshO.txt")
    await expect(getFileName(TEST_FOLDER, "SPSH", "other")).resolves.toBe(spanishOtherFileName);
  });
});