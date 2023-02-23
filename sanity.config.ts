import { defineConfig } from "sanity"
import {
  SANITY_STUDIO_PROJECT_NAME,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_PROJECT_ID,
} from "./src/config"

// desk customization
import deskStructure from "./src/deskStructure"
import { Logo } from "./src/brand/logo"
import { DefaultStudioTheme } from "./src/brand/styles/theme"

// document badge and action
import { LiveURLBadge } from "./src/badges/LiveURLBadge"
import { SectionBadge } from "./src/badges/sectionBadge"
import { ResolveDocumentActions } from "./src/documentActions"

// schemas
import { schemaTypes } from "./schemas/schema"

// plugins
import { visionTool } from "@sanity/vision"
import { media, mediaAssetSource } from "sanity-plugin-media"
import { webriqBlog } from "@webriq-pagebuilder/sanity-plugin-webriq-blog"
import { webriqForms } from "@webriq-pagebuilder/sanity-plugin-webriq-forms"
import { webriqPayments } from "@webriq-pagebuilder/sanity-plugin-webriq-payments"


export default defineConfig({
  title: SANITY_STUDIO_PROJECT_NAME,
  projectId: SANITY_STUDIO_API_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  plugins: [deskStructure, visionTool(), webriqForms(), webriqPayments(), webriqBlog(), media()],
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
  theme: DefaultStudioTheme,
  form: {
    image: {
      assetSources: () => [mediaAssetSource],
    },
  },
  schema: {
    types: schemaTypes,
  },
  document: {
    badges: [LiveURLBadge, SectionBadge],
    actions: (prev, { schemaType }) => ResolveDocumentActions({prev, schemaType}),
  },
})
