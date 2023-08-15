import { readdir } from "fs/promises";
import { join } from "path";

type Location = {
  name: string;
  abbr: string;
  path: string;
};

async function parseLocations(rootFolder: string): Promise<Location[]> {
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
        path: join(rootFolder, entry.name),
      };
    });
}

export { parseLocations };
