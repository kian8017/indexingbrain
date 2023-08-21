import { describe } from "@jest/globals";
import { NameSearchDirs } from "./dirs";

const TEST_FOLDER = decodeURIComponent(
  new URL("test", import.meta.url).pathname
);

describe("NameSearchDirs", () => {
  describe("constructor and init", () => {
    it("should throw an error if not given a directory", async () => {
      const NSD = new NameSearchDirs();
      await expect(NSD.init()).rejects.toThrow("rootDir");
    });

    it("should return ok given a directory", async () => {
      const NSD = new NameSearchDirs(TEST_FOLDER);
      await expect(NSD.init()).resolves.toBeUndefined();
    });
  });

  describe("getEntryTypes", () => {
    it("should return a list of entry types", async () => {
      const NSD = new NameSearchDirs(TEST_FOLDER);
      await NSD.init();
      const entryTypes = await NSD.getEntryTypes();
      expect(entryTypes.length).toBe(3);
      for (let curEntry of entryTypes) {
        expect(curEntry).toHaveProperty("name");
        expect(curEntry).toHaveProperty("abbr");
      }
    });
  });

  describe("getLocations", () => {
    it("should return the correct number of locations", async () => {
      const NSD = new NameSearchDirs(TEST_FOLDER);
      await NSD.init();
      const locations = await NSD.getLocations();
      expect(locations.length).toBe(3);
      for (let curLocation of locations) {
        expect(curLocation).toHaveProperty("name");
        expect(curLocation).toHaveProperty("abbr");
      }
    });
  });

  describe("searchOne", () => {
    let NSD;

    beforeEach(async () => {
      NSD = new NameSearchDirs(TEST_FOLDER);
      await NSD.init();
    });

    afterEach(() => {
      NSD = undefined;
    });

    it("should throw an error for invalid entry type", async () => {
      await expect(() => NSD.searchOne()).rejects.toThrow("invalid entryType");
    });

    it("should throw an error for an invalid abbreviation", async () => {
      await expect;
    });
  });
});
