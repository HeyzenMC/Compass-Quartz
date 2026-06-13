import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("explorer", {
  filterFn: (node) => {
    const omit = new Set(["sonstige", "tags", "tag index"])
    return !omit.has(node.displayName.toLowerCase())
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()