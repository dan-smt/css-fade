import path, { join } from "node:path"
import fs from "node:fs"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function getPreflightCss() {

  return fs.readFileSync(join(__dirname, '../css/index.css'))

}