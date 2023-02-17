///<reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_ECWID_STORE_ID: string
  readonly SANITY_STUDIO_ECWID_PUBLIC_TOKEN: string
  readonly SANITY_STUDIO_IN_CSTUDIO: string
  readonly SANITY_STUDIO_API_PROJECT_ID: string
  readonly SANITY_STUDIO_DATASET: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
