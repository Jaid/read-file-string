import {expect, it} from "@jest/globals"

import path from "node:path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: readFileString, readFileStringSync} = indexModule

it("should return string", async () => {
  const file = path.join(__dirname, "..", "readme.md")
  const result = await readFileString(file)
  expect(typeof result.length).toBe("number")
  expect(result.length).toBeGreaterThan(10)
})

it("should return null for non-existing files", async () => {
  const file = path.join(__dirname, "..", "readmeNOT.md")
  const result = await readFileString(file)
  expect(result).toBe(null)
})

it("should return null for folders", async () => {
  const file = path.join(__dirname, "..", "src")
  const result = await readFileString(file)
  expect(result).toBe(null)
})