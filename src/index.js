/** @module read-file-string */

import fsp from "@absolunet/fsp"
import fss from "@absolunet/fss"

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
  const exists = await fsp.pathExists(file)
  if (!exists) {
    return null
  }
  const stat = await fsp.stat(file)
  if (!stat.isFile()) {
    return null
  }
  const text = await fsp.readFile(file, "utf8")
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
  const exists = fss.pathExists(file)
  if (!exists) {
    return null
  }
  const stat = fss.stat(file)
  if (!stat.isFile()) {
    return null
  }
  const text = fss.readFile(file, "utf8")
  return text
}