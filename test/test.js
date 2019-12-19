import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: readFileString, readFileStringSync} = indexModule

it("should return string (async)", async () => {
  const result = await readFileString(path.join(__dirname, "..", "readme.md"))
  expect(typeof result.length).toBe("number")
  expect(result.length).toBeGreaterThan(10)
})

it("should return string (async)", async () => {
  const result = await readFileString(path.join(__dirname, "..", "readmeNOT.md"))
  expect(result).toBe(null)
})

it("should return string (sync)", () => {
  const result = readFileStringSync(path.join(__dirname, "..", "readme.md"))
  expect(typeof result.length).toBe("number")
  expect(result.length).toBeGreaterThan(10)
})

it("should return string (sync)", () => {
  const result = readFileStringSync(path.join(__dirname, "..", "readmeNOT.md"))
  expect(result).toBe(null)
})