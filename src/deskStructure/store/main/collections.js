import S from "@sanity/desk-tool/structure-builder";
import { ReferencedByView } from "part:@indent-oss/sanityio-referenced-by";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdAccessibility, MdLink } from "react-icons/md";
import { BsFillTagFill } from "react-icons/bs";

// Web preview
import IframePreview from "../../../components/previews/iframe/IframePreview";
import SeoPreview from "../../../components/previews/seo/SeoPreviews";

// a11y preview
import ColorblindPreview from "../../../components/previews/a11y/colorblind-filter/ColorblindPreview";
import TextToSpeechPreview from "../../../components/previews/a11y/text-to-speech/TextToSpeechPreview";
import BraillePreview from "../../../components/previews/a11y/braille/Braille";

import {
  SANITY_STUDIO_PRODUCTION_SITE_URL,
  SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL,
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
} from "../../../config";

// Web preview configuration
const remotePreviewUrl = `${SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=collections&slug=`;
const localPreviewUrl = `${SANITY_STUDIO_DEV_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&type=collections&slug=`;
const previewURL =
  window.location.hostname === "localhost" ? localPreviewUrl : remotePreviewUrl;
const publishedURL = SANITY_STUDIO_PRODUCTION_SITE_URL;

/** This shows all main collections. If collections with the same name are added from overrides/collections, it will replace the values shown on preview. **/
export default S.listItem()
  .title("Collections")
  .schemaType("mainCollection")
  .icon(BsFillTagFill)
  .child(
    S.documentTypeList("mainCollection")
      .title("Collections")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("mainCollection")
          .views([
            S.view.form().icon(EditIcon),
            S.view
              .component(IframePreview)
              .options({ previewURL })
              .title("Web Preview")
              .icon(EyeIcon),
            S.view
              .component(SeoPreview)
              .options({ previewURL, publishedURL })
              .icon(EyeIcon)
              .title("SEO Preview"),
            S.view
              .component(ColorblindPreview)
              .options({ previewURL })
              .icon(EyeIcon)
              .title("Colorblind"),
            S.view
              .component(TextToSpeechPreview)
              .options({ fields: ["title", "excerpt", "body"] })
              .icon(MdAccessibility)
              .title("Text to speech"),
            S.view
              .component(BraillePreview)
              .icon(MdAccessibility)
              .title("Braille"),
            S.view
              .component(ReferencedByView)
              .title("Referenced by")
              .icon(MdLink),
          ])
      )
  );
