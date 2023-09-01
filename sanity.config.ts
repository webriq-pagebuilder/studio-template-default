import { defineConfig } from "sanity"
import {
  SANITY_STUDIO_PROJECT_NAME,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_PROJECT_ID,
  SANITY_STUDIO_OPENAI_KEY,
} from "./src/config"

// desk customization
import deskStructure from "./src/deskStructure"
import { Logo } from "./src/brand/logo"
import { DefaultStudioTheme } from "./src/brand/theme"
import "./global.css"

// document badge and action
import { LiveURLBadge } from "./src/badges/LiveURLBadge"
import { ResolveDocumentActions } from "./src/documentActions"

// schemas
import { schemaTypes } from "./schemas/schema"

// plugins
import { media } from "sanity-plugin-media"
import { codeInput } from "@sanity/code-input"

import { openaiImageAsset } from "sanity-plugin-asset-source-openai"
import { visionTool } from "@sanity/vision"
import { webriqBlog } from "@webriq-pagebuilder/sanity-plugin-webriq-blog"
import { webriqForms } from "@webriq-pagebuilder/sanity-plugin-webriq-forms"
import { webriqPayments } from "@webriq-pagebuilder/sanity-plugin-webriq-payments"
import { webriqGPT3 } from "@webriq-pagebuilder/sanity-plugin-input-component-gpt3"
import { webriqComponents } from "@webriq-pagebuilder/sanity-plugin-webriq-components"
import { webriQInspectorInlineEdit } from "@webriq-pagebuilder/sanity-plugin-inspector-inline-edit"

// Open preview
import resolveProductionUrl from "./src/resolvePreviewUrl"

export default defineConfig({
  title: SANITY_STUDIO_PROJECT_NAME,
  projectId: SANITY_STUDIO_API_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  plugins: [
    deskStructure,
    webriqComponents(),
    visionTool(),
    webriqForms(),
    webriqPayments(),
    webriqBlog(),
    webriqGPT3(),
    media(),
    codeInput(),
    webriQInspectorInlineEdit(),
    openaiImageAsset({
      API_KEY: SANITY_STUDIO_OPENAI_KEY, // TODO: Update personal API key with default from WebriQ
    }),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (process.env.NODE_ENV !== "production") {
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
      assetSources: (prev) => {
        // only display media browser and openai image assets as default options
        return prev.filter((asset) => asset.name !== "sanity-default")
      },
    },
  },
  schema: {
    types: schemaTypes,
  },
  document: {
    badges: [LiveURLBadge],
    actions: (prev, context) => ResolveDocumentActions({ prev, context }),
  },
})
