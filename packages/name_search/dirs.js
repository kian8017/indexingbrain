import { readdir } from "fs/promises";
import { MAX_RESULTS, NameSearchBase } from "./base";

export class NameSearchDirs extends NameSearchBase {
  #rootDir;
  constructor(rootDir) {
    super();
    this.#rootDir = rootDir;
  }

  async init() {
    if (this.#rootDir === undefined) {
      throw new Error("rootDir not specified");
    }
  }

  async getEntryTypes() {
    return [
      { name: "names", abbr: "N" },
      { name: "places", abbr: "P" },
      { name: "other", abbr: "O" },
    ];
  }

  async getLocations() {
    const fsEntries = await readdir(this.#rootDir, { withFileTypes: true });
    return fsEntries
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const pieces = entry.name.split(" ");
        return {
          abbr: pieces[0],
          name: pieces.slice(1).join(" "),
        };
      });
  }

  async searchOne(abbr, type, query, maxResults = MAX_RESULTS) {
    throw new Error("invalid entryType");
  }
}
