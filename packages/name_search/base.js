/**
 * @module name_search
 *
 * The name_search package
 *
 * This package runs a regex query against a set of specific files, organized in a specific structure.
 *
 * File structure:
 *   here's an example of a sample file name:
 *     /SPSH Spanish/SpshN.txt
 *
 *   SPSH is the location abbreviation
 *   Spanish is the location name (can contain spaces)
 *   N (after "Spsh") is the entry type
 *     - it's typically either "N" (names), "P" (places) or "O" (other)
 *
 *   this file contains a list of spanish names, one per line
 *
 *   locations are typically either countries or languages
 */

/**
 * The default maxiumum number of results to return, if no other max is specified.
 */
export const MAX_RESULTS = 100;

/**
 * @typedef {Object} EntryType
 * @property {string} name - full name, pluralized, like "names", "places", or "other"
 * @property {string} abbr - abbreviation, single character
 */

/**
 * @typedef {Object} Entry
 * @property {string} locationAbbr
 * @property {string} content
 */

/**
 * @typedef {Object} Location
 * @property {string} name - full name of the
 * @property {string} abbr
 */

/** An error thrown if ran on a basic class */
const NOT_IMPLEMENTED = new Error("not implemented on NameSearchBase");

/**
 * @interface
 */

export class NameSearchBase {
  /**
   * Returns a list of entry types (name, place, other, etc)
   * @returns {EntryType[]}
   */
  async getEntryTypes() {
    throw NOT_IMPLEMENTED;
  }

  /**
   * Returns a list of locations
   * @returns {Location[]}
   */
  async getLocations() {
    throw NOT_IMPLEMENTED;
  }

  /**
   * Searches a single location and type.
   * @param {string} abbr
   * @param {string} type - Entry type
   * @param {Regexp} query
   * @param {number} maxResults
   * @returns {Entry[]}
   */
  async searchOne(abbr, type, query, maxResults = MAX_RESULTS) {
    throw NOT_IMPLEMENTED;
  }

  /**
   * Searches all locations within a specific entry type.
   * This will not return entries that are within any locations specified in abbrsToExclude.
   * @param {string[]} abbrsToExclude - array of location abbreviations to exclude
   * @param {string} type
   * @param {Regexp} query
   * @param {number} maxResults
   * @returns {Entry[]}
   */
  async searchAll(abbrsToExclude, type, query, maxResults = MAX_RESULTS) {
    throw NOT_IMPLEMENTED;
  }
}
