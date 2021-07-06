export default function resolveProductionUrl(document) {
  const previewUrl = `api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}&slug=${document?.slug?.current}`;
  if (window.location.hostname.includes("localhost")) {
    return `${
      process.env.SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
    }/${previewUrl}`;
  }

  return `${process.env.SANITY_STUDIO_PRODUCTION_SITE_URL}/${previewUrl}`;
}
