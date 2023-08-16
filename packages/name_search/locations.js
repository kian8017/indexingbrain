import { readdir } from "fs/promises";

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

async function getFileName(){
  return "/workspaces/indexingbrain/packages/name_search/test/SPSH Spanish/SpshO.txt";
};

export { parseLocations, getFileName };
