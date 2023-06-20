import { defineCliConfig } from "sanity/cli"
import { SANITY_STUDIO_API_PROJECT_ID, SANITY_STUDIO_DATASET } from "./src/config"

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
  },
})
