import S from "@sanity/desk-tool/structure-builder";
import { ReferencedByView } from "part:@indent-oss/sanityio-referenced-by";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdAccessibility, MdLink } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

// Web preview
import IframePreview from "../../components/previews/iframe/IframePreview";
import SeoPreview from "../../components/previews/seo/SeoPreviews";

// a11y preview
import ColorblindPreview from "../../components/previews/a11y/colorblind-filter/ColorblindPreview";
import TextToSpeechPreview from "../../components/previews/a11y/text-to-speech/TextToSpeechPreview";
import BraillePreview from "../../components/previews/a11y/braille/Braille";

import {
  SANITY_STUDIO_PRODUCTION_SITE_URL,
  SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL,
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
} from "../../config";

// Web preview configuration
const remotePreviewUrl = `${SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=`;
const localPreviewUrl = `${SANITY_STUDIO_DEV_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=`;
const previewURL =
  window.location.hostname === "localhost" ? localPreviewUrl : remotePreviewUrl;
const publishedURL = SANITY_STUDIO_PRODUCTION_SITE_URL;

export default S.listItem()
  .title("Checkout")
  .schemaType("mainCheckout")
  .icon(BsBagCheckFill)
  .child(
    S.document()
      .title("Checkout")
      .schemaType("mainCheckout")
      .documentId("mainCheckout")
  );
