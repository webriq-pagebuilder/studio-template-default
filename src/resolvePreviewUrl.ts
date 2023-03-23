import {
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
} from "./config"
import type { SanityDocumentLike } from "sanity"

export default function resolveProductionUrl(doc: SanityDocumentLike & { slug?: { current: string } }) {
  const currentSlug = doc?.slug?.current || ""

  // localhost
  if(window.location.hostname.includes("localhost")) {
    return PreviewURL(SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000", SANITY_STUDIO_PREVIEW_SECRET, doc?._type, currentSlug)
  }

  // live site
  return PreviewURL(SANITY_STUDIO_PRODUCTION_SITE_URL || "http://localhost:3000", SANITY_STUDIO_PREVIEW_SECRET, doc?._type, currentSlug)
}

// only show the "Open Preview" option for the following documents
function PreviewURL(siteUrl: string, previewSecret: string, documentType: string, slug: string) {
  if (["page", "post"].includes(documentType)) {
    return `${BaseUrl(siteUrl, previewSecret)}&slug=${slug}`
  } else if (documentType === "mainProduct") {
    return `${BaseUrl(siteUrl, previewSecret)}&type=products&slug=${slug}`
  } else if (documentType === "mainCollection") {
    return `${BaseUrl(siteUrl, previewSecret)}&type=collections&slug=${slug}`
  } else if (documentType === "cartPage") {
    return `${BaseUrl(siteUrl, previewSecret)}&slug=cart`
  } else if (documentType === "wishlistPage") {
    return `${BaseUrl(siteUrl, previewSecret)}&slug=wishlist`
  } else if (documentType === "searchPage") {
    return `${BaseUrl(siteUrl, previewSecret)}&slug=search`
  }

  return undefined
}

function BaseUrl (siteUrl: string, previewSecret: string) {
  return `${siteUrl}/api/preview?secret=${previewSecret}&source=studio`
}
