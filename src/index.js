/** @module read-file-string */

import {pathExists, pathExistsSync, readFile, readFileSync, stat, statSync} from "fs-extra"

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string|null>} File contents in UTF-8 or null if file could not be read
 * @example
 * import readFileString from "read-file-string"
 * const result = await readFileString("readme.md")
 * result === "## Hewwo OwO"
 */
export default async file => {
  const exists = await pathExists(file)
  if (!exists) {
    return null
  }
  const fileStat = await stat(file)
  if (!fileStat.isFile()) {
    return null
  }
  const text = await readFile(file, "utf8")
  return text
}

/**
 * @function
 * @param {string} file Path to a file
 * @returns {string|null} File contents in UTF-8 or null if file could not be read
 * @example
 * import {readFileStringSync} from "read-file-string"
 * const result = readFileStringSync("readme.md")
 * result === "## Hewwo OwO"
 */
export const readFileStringSync = file => {
  const exists = pathExistsSync(file)
  if (!exists) {
    return null
  }
  const fileStat = statSync(file)
  if (!fileStat.isFile()) {
    return null
  }
  const text = readFileSync(file, "utf8")
  return text
}