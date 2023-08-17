import { describe } from "@jest/globals";
import { NameSearchDirs } from "./dirs";

describe("NameSearchDirs", () => {
  it("should throw an error if not given a directory", () => {
    expect(() => new NameSearchDirs()).toThrow("rootDir not specified");
  });
});
