import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("explorer", {
  filterFn: (node) => node.slug !== "Sonstige" && !node.slug?.startsWith("Sonstige/"),
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()