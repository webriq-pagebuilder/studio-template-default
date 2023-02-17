import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  apiVersion: "2022-03-21",
  useCdn:
    typeof document !== "undefined" &&
    import.meta.env.NODE_ENV === "production",
});