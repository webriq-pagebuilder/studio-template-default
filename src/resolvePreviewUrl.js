import {
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
} from "./config";

export default function resolveProductionUrl(document) {
  const previewUrl = `api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=${document?.slug?.current}`;

  // only show the "Open Preview" option for the following documents
  if (["page", "post", "cartPage"].includes(document?._type)) {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/${previewUrl}`;
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/${previewUrl}`;
  } else if (document?._type === "mainProduct") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=products&slug=${
        document?.slug?.current
      }`;
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=products&slug=${document?.slug?.current}`;
  } else if (document?._type === "mainCollection") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=collections&slug=${
        document?.slug?.current
      }`;
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=collections&slug=${document?.slug?.current}`;
  }

  return undefined;
}
