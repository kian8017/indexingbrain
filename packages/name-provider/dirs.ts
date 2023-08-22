import { Loc, Name, NameProvider, NameType } from "./interface";

export class DirsNameProvider implements NameProvider {
  constructor() {}
  async getNameTypes() {
    return [];
  }
  async getLocations() {
    return [];
  }
  async searchOneLoc(
    locAbbr: string,
    type: string,
    query: string,
    maxResults: number
  ) {
    return [];
  }
  async searchAllLocs(type: string, query: string, maxResults: number) {
    return [];
  }
}
