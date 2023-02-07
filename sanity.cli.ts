import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "9itgab5x",
    dataset: "production",
  },
  vite: (config) => config,
})
