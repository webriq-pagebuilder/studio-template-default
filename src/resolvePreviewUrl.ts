import {
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
} from "./config"
import type { SanityDocumentLike } from "sanity"

export default function resolveProductionUrl(doc: SanityDocumentLike & { slug?: { current: string } }) {
  const currentSlug = doc?.slug?.current || ""
  const previewUrl = `api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=${currentSlug}`

  // only show the "Open Preview" option for the following documents
  if (["page", "post"].includes(doc?._type)) {
    if (window.location.hostname.includes("localhost")) {
      return `${SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"}/${previewUrl}`
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/${previewUrl}`
  } else if (doc?._type === "mainProduct") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=products&slug=${currentSlug}`
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=products&slug=${currentSlug}`
  } else if (doc?._type === "mainCollection") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=collections&slug=${currentSlug}`
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=collections&slug=${currentSlug}`
  } else if (doc?._type === "cartPage") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=cart`
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=cart`
  } else if (doc?._type === "wishlistPage") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=wishlist`
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=wishlist`
  } else if (doc?._type === "searchPage") {
    if (window.location.hostname.includes("localhost")) {
      return `${
        SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
      }/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=search`
    }

    return `${SANITY_STUDIO_PRODUCTION_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=search`
  }

  return undefined
}
