import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas/schema"
import deskStructure from "./src/deskStructure"
import { Logo } from "./src/brand/logo"
import {
  SANITY_STUDIO_PROJECT_NAME,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_PROJECT_ID,
} from "./src/config"

export default defineConfig({
  title: SANITY_STUDIO_PROJECT_NAME,
  projectId: SANITY_STUDIO_API_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  plugins: [deskStructure, visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
})
