import {expect, it} from "@jest/globals"

import path from "node:path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: readFileString, readFileStringSync} = indexModule

it("should return string (async)", async () => {
  const file = path.join(__dirname, "..", "readme.md")
  const result = await readFileString(file)
  expect(typeof result.length).toBe("number")
  expect(result.length).toBeGreaterThan(10)
})

it("should return null for non-existing files (async)", async () => {
  const file = path.join(__dirname, "..", "readmeNOT.md")
  const result = await readFileString(file)
  expect(result).toBe(null)
})

it("should return null for folders (async)", async () => {
  const file = path.join(__dirname, "..", "src")
  const result = await readFileString(file)
  expect(result).toBe(null)
})

it("should return string (sync)", () => {
  const file = path.join(__dirname, "..", "readme.md")
  const result = readFileStringSync(file)
  expect(typeof result.length).toBe("number")
  expect(result.length).toBeGreaterThan(10)
})

it("should return null for non-existing files (sync)", () => {
  const file = path.join(__dirname, "..", "readmeNOT.md")
  const result = readFileStringSync(file)
  expect(result).toBe(null)
})

it("should return null for folders (sync)", async () => {
  const file = path.join(__dirname, "..", "src")
  const result = await readFileStringSync(file)
  expect(result).toBe(null)
})