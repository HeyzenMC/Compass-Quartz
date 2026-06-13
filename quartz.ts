import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.Explorer({
  title: "Navigation",
  filterFn: (node) => node.displayName !== "Sonstige",
});