import { defineConfig } from "sanity"
import {
  SANITY_STUDIO_PROJECT_NAME,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_PROJECT_ID,
} from "./config"

import { LiveURLBadge } from "./badges/LiveURLBadge"
import { SectionBadge } from "./badges/sectionBadge"

export default defineConfig({
  name: SANITY_STUDIO_PROJECT_NAME,
  title: "WebriQ Studio Default",
  projectId: SANITY_STUDIO_API_PROJECT_ID,
  dataset:  SANITY_STUDIO_DATASET,
  document: {
    badges: 
  },
})
