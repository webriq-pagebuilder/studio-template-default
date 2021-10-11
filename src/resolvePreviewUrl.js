import {
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
} from "./config";

export default function resolveProductionUrl(document) {
  const previewUrl = `api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=${document?.slug?.current}`;
  if (window.location.hostname.includes("localhost")) {
    return `${
      SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
    }/${previewUrl}`;
  }

  return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/${previewUrl}`;
}
