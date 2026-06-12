// scripts/resolve-canvas-wikilinks.mjs
//
// Converts [[Wikilinks]] inside .canvas text nodes into normal Markdown
// links ([Text](/slug/path)), since the canvas-page plugin only renders
// plain GFM markdown and doesn't resolve wikilinks.
//
// Run this BEFORE `npx quartz build`. It only touches files inside the
// `content` directory of the build checkout — never your local vault.

import { promises as fs } from "fs"
import path from "path"

const CONTENT_DIR = process.argv[2] || "content"

// Build a lookup table: lowercase filename (without extension) -> slug path
async function buildSlugIndex(dir, baseDir = dir, index = new Map()) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await buildSlugIndex(fullPath, baseDir, index)
    } else if (entry.name.endsWith(".md")) {
      const rel = path.relative(baseDir, fullPath)
      const withoutExt = rel.replace(/\.md$/, "")
      const name = path.basename(withoutExt)

      // Build a Quartz-style slug: lowercase, spaces -> hyphens,
      // "&" -> "-and-", strip other special chars.
      const slugify = (p) =>
        p
          .split(/[\\/]/)
          .map((seg) =>
            seg
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9\-_.]/g, ""),
          )
          .join("/")

      const slug = "/" + slugify(withoutExt)

      // Index by both the bare filename and the relative path (lowercase),
      // mirroring Quartz's "shortest" link resolution.
      const lowerName = name.toLowerCase()
      if (!index.has(lowerName)) {
        index.set(lowerName, slug)
      }
      index.set(rel.toLowerCase().replace(/\.md$/, ""), slug)
    }
  }
  return index
}

// Replace [[Target]] and [[Target|Alias]] inside a text string
function resolveWikilinks(text, slugIndex) {
  return text.replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (match, target, alias) => {
    const cleanTarget = target.trim()
    const display = (alias ?? cleanTarget).trim()
    const key = cleanTarget.toLowerCase()

    const slug = slugIndex.get(key) || slugIndex.get(path.basename(key))
    if (!slug) {
      // Leave unresolved links untouched rather than breaking them
      return match
    }
    return `[${display}](${slug})`
  })
}

async function processCanvasFile(filePath, slugIndex) {
  const raw = await fs.readFile(filePath, "utf-8")
  let json
  try {
    json = JSON.parse(raw)
  } catch (err) {
    console.warn(`Skipping ${filePath}: invalid JSON (${err.message})`)
    return false
  }

  let changed = false
  if (Array.isArray(json.nodes)) {
    for (const node of json.nodes) {
      if (node.type === "text" && typeof node.text === "string" && node.text.includes("[[")) {
        const resolved = resolveWikilinks(node.text, slugIndex)
        if (resolved !== node.text) {
          node.text = resolved
          changed = true
        }
      }
    }
  }

  if (changed) {
    await fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf-8")
  }
  return changed
}

async function findCanvasFiles(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await findCanvasFiles(fullPath, results)
    } else if (entry.name.endsWith(".canvas")) {
      results.push(fullPath)
    }
  }
  return results
}

async function main() {
  console.log(`Building slug index from ${CONTENT_DIR}...`)
  const slugIndex = await buildSlugIndex(CONTENT_DIR)
  console.log(`Indexed ${slugIndex.size} note paths.`)

  const canvasFiles = await findCanvasFiles(CONTENT_DIR)
  console.log(`Found ${canvasFiles.length} .canvas files.`)

  let totalChanged = 0
  for (const file of canvasFiles) {
    const changed = await processCanvasFile(file, slugIndex)
    if (changed) {
      totalChanged++
      console.log(`Resolved wikilinks in: ${file}`)
    }
  }
  console.log(`Done. Updated ${totalChanged} canvas file(s).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
