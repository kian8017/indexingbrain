/*
import { readdir } from "fs/promises";
import path from "path";

async function parseLocations(rootFolder) {
  const fsEntries = await readdir(rootFolder, { withFileTypes: true });
  return fsEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const pieces = entry.name.split(" ");
      const abbr = pieces[0];
      const name = pieces.slice(1).join(" ");
      return {
        name,
        abbr,
        folder: entry.name,
      };
    });
}

function _getEntryTypeAbbr(entryType) {
  switch (entryType) {
    case "names":
      return "N";
    case "places":
      return "P";
    case "other":
      return "O";
    default:
      throw new Error(`unknown entry type '${entryType}'`);
  }
}

async function getFileName(rootFolder, locationAbbr, entryType) {
  const locations = await parseLocations(rootFolder);

  const foundLoc = locations.filter((l) => l.abbr === locationAbbr)[0];

  const fileName =
    locationAbbr[0].toUpperCase() +
    locationAbbr.slice(1).toLowerCase() +
    _getEntryTypeAbbr(entryType) +
    ".txt";
  return path.join(rootFolder, foundLoc.folder, fileName);
}

export { parseLocations, getFileName };
import { describe, it, expect } from "@jest/globals";
import { getFileName, parseLocations } from "./locations";
import path from "path";

const TEST_FOLDER = decodeURIComponent(
  new URL("./test", import.meta.url).pathname
);

describe("parseLocations", () => {
  it("should correctly parse the test folder", async () => {
    const locations = await parseLocations(TEST_FOLDER);
    expect(locations).toMatchSnapshot();
  });
});

describe("getFileName", () => {
  it("should correctly return file name", async () => {
    const spanishOtherFileName = path.join(
      TEST_FOLDER,
      "./SPSH Spanish/SpshO.txt"
    );
    const spanishNamesFileName = path.join(
      TEST_FOLDER,
      "./SPSH Spanish/SpshN.txt"
    );
    await expect(getFileName(TEST_FOLDER, "SPSH", "other")).resolves.toBe(
      spanishOtherFileName
    );
    await expect(getFileName(TEST_FOLDER, "SPSH", "names")).resolves.toBe(
      spanishNamesFileName
    );
  });
});
export async function searchOne(rootFolder) {
  throw new Error();
}
API:

searchOne(rootFolder, locationAbbr, type, query)
searchAll(rootFolder, excludeLocationAbbrs, type, query)

should return objects: {abbr, content}

import { searchOne } from "./names";

const OK_ABBR = "SPSH";
const OK_TYPE = "names";

const TEST_FOLDER = new URL("./test", import.meta.url);

describe("searchOne", () => {
  it("should return proper results for sample query", async () => {
    await expect(searchOne(TEST_FOLDER, OK_ABBR, OK_TYPE, "")).resolves.toBe([
      {abbr: OK_ABBR, content: ""}
    ])
  })
});
*/