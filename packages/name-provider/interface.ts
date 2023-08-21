export type NameTypeName = string;
export type NameType = {
  name: NameTypeName;
  abbr: string;
};

export type Loc = {
  name: string;
  abbr: string;
};

export type Name = {
  locAbbr: string;
  content: string;
  type: NameTypeName;
};

export interface NameProvider {
  getNameTypes: () => Promise<NameType[]>;
  getLocations: () => Promise<Loc[]>;
  searchOneLoc: (
    locAbbr: string,
    type: NameTypeName,
    query: string,
    maxResults: number
  ) => Promise<Name[]>;
  searchAllLocs: (
    type: NameTypeName,
    query: string,
    maxResults: number
  ) => Promise<Name[]>;
}
