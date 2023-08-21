export type NameType = string;

export type Loc = {
  name: string;
  abbr: string;
};

export type Name = {
  locAbbr: string;
  content: string;
  type: NameType;
};

export interface NameProvider {
  getNameTypes: () => NameType[];
  getLocations: () => Loc[];
  searchOneLoc: (
    locAbbr: string,
    type: NameType,
    query: string,
    maxResults: number
  ) => Name[];
  searchAllLocs: (type: NameType, query: string, maxResults: number) => Name[];
}
