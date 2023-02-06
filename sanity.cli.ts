import { defineCliConfig } from "sanity/cli"
import { SANITY_STUDIO_DATASET, SANITY_STUDIO_API_PROJECT_ID } from "./src/config"

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
  },
  vite: (config) => config,
})
