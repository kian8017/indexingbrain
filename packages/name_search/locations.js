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
      throw new Error(`unknown entry type '${entryType}'`)
  }
}

async function getFileName(rootFolder, locationAbbr, entryType){
  const locations = await parseLocations(rootFolder);

  const foundLoc = locations.filter(l => l.abbr === locationAbbr)[0];

  const fileName = locationAbbr[0].toUpperCase() + locationAbbr.slice(1).toLowerCase() + _getEntryTypeAbbr(entryType) + ".txt";
  return path.join(rootFolder, foundLoc.folder, fileName);
};

export { parseLocations, getFileName };
