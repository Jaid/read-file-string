import {createRequire} from 'node:module'

const require = createRequire(import.meta.url)
const commonJsModule = require(`fs-extra`)

export const fs = commonJsModule
export default fs
