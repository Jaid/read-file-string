/** @module read-file-string */

import fs from './lib/esm/fs-extra.js'

const encoding = `utf8`
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
  const text = await fs.readFile(file, encoding)
  return text
}
/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string>} File content in UTF-8
 * @example
 * import {readFileStringString} from "read-file-string"
 * const result = await readFileString("readme.md")
 * result === "# Hewwo OwO"
 */
const readFileStringStrict = async file => {
  const text = await fs.readFile(file, encoding)
  return text
}

export {readFileString}

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string>} File content in UTF-8
 * @example
 * import {readFileStringString} from "read-file-string"
 * const result = await readFileString("readme.md")
 * result === "# Hewwo OwO"
 */
export {readFileStringStrict}

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string>} File content in UTF-8
 * @example
 * import {readFileStringString} from "read-file-string"
 * const result = await readFileString("readme.md")
 * result === "# Hewwo OwO"
 */
export default readFileString
