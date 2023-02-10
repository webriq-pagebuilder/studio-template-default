///<reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_API_PROJECT_ID: string
  readonly SANITY_STUDIO_DATASET: string
  readonly SANITY_STUDIO_PROJECT_NAME: string
  readonly SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL: string
  readonly SANITY_STUDIO_PRODUCTION_SITE_URL: string
  readonly SANITY_STUDIO_DEV_SITE_URL: string
  readonly SANITY_STUDIO_PREVIEW_SECRET: string
  readonly SANITY_STUDIO_APP_URL: string
  readonly SANITY_STUDIO_FROM_STAGING_APP: string
  readonly SANITY_STUDIO_IN_CSTUDIO: string
  readonly SANITY_STUDIO_STORE_CORS_SECRET: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
