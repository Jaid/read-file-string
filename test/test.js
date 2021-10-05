import {expect, it} from "@jest/globals"

import path from "node:path"
import {fileURLToPath} from "node:url"

const dirName = path.dirname(fileURLToPath(import.meta.url))
const indexPath = process.env.MAIN ? path.resolve(dirName, "..", process.env.MAIN) : path.join(dirName, "..", "src")

/**
 * @type { import("../src") }
 */
const {default: readFileString} = await import(indexPath)

it("should return string", async () => {
  const file = path.join(dirName, "..", "readme.md")
  const result = await readFileString(file)
  expect(typeof result.length).toBe("number")
  expect(result.length).toBeGreaterThan(10)
})

it("should return null for non-existing files", async () => {
  const file = path.join(dirName, "..", "readmeNOT.md")
  const result = await readFileString(file)
  expect(result).toBe(null)
})

it("should return null for folders", async () => {
  const file = path.join(dirName, "..", "src")
  const result = await readFileString(file)
  expect(result).toBe(null)
})