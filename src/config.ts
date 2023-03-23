// Studio project values
export const SANITY_STUDIO_API_PROJECT_ID = process.env.SANITY_STUDIO_API_PROJECT_ID || "9itgab5x"
export const SANITY_STUDIO_DATASET = process.env.SANITY_STUDIO_DATASET || "production"
export const SANITY_STUDIO_PROJECT_NAME = process.env.SANITY_STUDIO_PROJECT_NAME || "landing-page-builder"

// Site Netlify app used for web preview
export const SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL = process.env.SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL

// Site LIVE domain URL
export const SANITY_STUDIO_PRODUCTION_SITE_URL = process.env.SANITY_STUDIO_PRODUCTION_SITE_URL

// Defaults to `localhost:3000` but can be override as per your local settings
export const SANITY_STUDIO_DEV_SITE_URL = process.env.SANITY_STUDIO_DEV_SITE_URL

// Preview secret key both shared by site and studio. Randomly generated in production
export const SANITY_STUDIO_PREVIEW_SECRET = process.env.SANITY_STUDIO_PREVIEW_SECRET || "secret"

// LIVE App URL
export const SANITY_STUDIO_APP_URL = process.env.SANITY_STUDIO_APP_URL

// Verify if Studio was created via WebriQ App Staging or Live
export const SANITY_STUDIO_FROM_STAGING_APP = process.env.SANITY_STUDIO_FROM_STAGING_APP

// Helps check if current studio is in C-Studio or W-Studio
export const SANITY_STUDIO_IN_CSTUDIO = process.env.SANITY_STUDIO_IN_CSTUDIO

// Studio secret token to authenticate Ecwid API endpoint requests
export const SANITY_STUDIO_STORE_CORS_SECRET = process.env.SANITY_STUDIO_STORE_CORS_SECRET || "cors_wE67XmOkBOgIXTmAs1iWJc5btQiCBosI"

// Open AI key
export const SANITY_STUDIO_OPENAI_KEY = process.env.SANITY_STUDIO_OPENAI_KEY || "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" 
