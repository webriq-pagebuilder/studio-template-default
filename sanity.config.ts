import { defineConfig } from "sanity"
import {
  SANITY_STUDIO_API_PROJECT_ID,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_OPENAI_KEY,
  SANITY_STUDIO_PROJECT_NAME,
} from "./src/config"

// desk customization
import "./global.css"
import { Logo } from "./src/brand/logo"
import { DefaultStudioTheme } from "./src/brand/theme"
import deskStructure from "./src/deskStructure"

// document badge and action
import { LiveURLBadge } from "./src/badges/LiveURLBadge"
import { ResolveDocumentActions } from "./src/documentActions"

// schemas
import { schemaTypes } from "./schemas/schema"

// plugins
import { codeInput } from "@sanity/code-input"
import { media } from "sanity-plugin-media"

import { visionTool } from "@sanity/vision"
import { webriqGPT3 } from "@webriq-pagebuilder/sanity-plugin-input-component-gpt3"
import { webriqBlog } from "@webriq-pagebuilder/sanity-plugin-webriq-blog"
import { webriqComponents } from "@webriq-pagebuilder/sanity-plugin-webriq-components"
import { webriqForms } from "@webriq-pagebuilder/sanity-plugin-webriq-forms"
import { webriqPayments } from "@webriq-pagebuilder/sanity-plugin-webriq-payments"
import { openaiImageAsset } from "sanity-plugin-asset-source-openai"

// Open preview
import InlineEditBtn from "./src/inspector/InlineEditBtn"

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
    // Open preview link
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const { document } = context

      // write to localStorage our current document
      if (typeof window) {
        window.localStorage.setItem("currentDocument", JSON.stringify(document))
      }

      return prev
    },
    inspectors: (prev, ...rest) => {
      if (rest?.[0]?.documentType === "page") {
        return [InlineEditBtn, ...prev]
      }

      return prev
    },
  },
})
