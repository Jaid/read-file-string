/** @module read-file-string */

import fs from "./lib/esm/fs-extra.js"

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string|null>} File contents in UTF-8 or null if file could not be read
 * @example
 * import readFileString from "read-file-string"
 * const result = await readFileString("readme.md")
 * result === "# Hewwo OwO"
 */
const readFileString = async file => {
  const exists = await fs.pathExists(file)
  if (!exists) {
    return null
  }
  const fileStat = await fs.stat(file)
  if (!fileStat.isFile()) {
    return null
  }
  const text = await fs.readFile(file, "utf8")
  return text
}

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string>} File contents in UTF-8 or null if file could not be read
 * @example
 * import {readFileStringString} from "read-file-string"
 * const result = await readFileString("readme.md")
 * result === "# Hewwo OwO"
 */
const readFileStringStrict = async file => {
  const text = await fs.readFile(file, "utf8")
  return text
}

export {readFileString}
export {readFileStringStrict}
export default readFileString