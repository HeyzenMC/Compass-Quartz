import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("explorer", {
  filterFn: (node) => {
    const omit = new Set(["sonstige", "tags", "tag index"])
    return !omit.has(node.displayName.toLowerCase())
  },
  mapFn: (node) => {
    const iconTag = node.data?.tags?.find((t) => t.startsWith("icon-"))
    if (iconTag) {
      node.displayName = `${iconTag.replace("icon-", "")} ${node.displayName}`
    }
    return node
  },
  // Sortierung direkt auf dem internen Dateinamen basieren
  sortFn: (a, b) => {
    return a.file?.slug.localeCompare(b.file?.slug ?? "") ?? 0
  }
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()