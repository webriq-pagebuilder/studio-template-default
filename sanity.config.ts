import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas/schema"
import deskStructure from "./src/deskStructure"
import { Logo } from "./src/brand/logo"
import { LiveURLBadge } from "./src/badges/LiveURLBadge"
import { SectionBadge } from "./src/badges/sectionBadge"
import {
  SANITY_STUDIO_PROJECT_NAME,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_PROJECT_ID,
} from "./src/config"
import { media } from "sanity-plugin-media"
import { webriqBlog } from "@webriq-pagebuilder/sanity-plugin-webriq-blog"

export default defineConfig({
  title: SANITY_STUDIO_PROJECT_NAME,
  projectId: SANITY_STUDIO_API_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  plugins: [deskStructure, visionTool(), webriqBlog(), media()],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== "vision")
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  schema: {
    types: schemaTypes,
  },
  document: {
    badges: [LiveURLBadge, SectionBadge],
    //   actions: (prev, { schemaType }) => {
    //     if (schemaType === "settings") {
    //       return prev.filter(({ action }) => !["unpublish", "delete", "duplicate"].includes(action))
    //     }
    //     return prev
    //   },
  },
})
