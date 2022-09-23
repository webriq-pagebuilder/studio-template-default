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
const remotePreviewUrl = `${SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=`;
const localPreviewUrl = `${SANITY_STUDIO_DEV_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=`;
const previewURL =
  window.location.hostname === "localhost" ? localPreviewUrl : remotePreviewUrl;
const publishedURL = SANITY_STUDIO_PRODUCTION_SITE_URL;

/** This shows all collection pages that will replace the preview of the main collection page when their names are matched. **/
export default S.listItem()
  .title("Collections")
  .schemaType("recordOfCollections")
  .icon(BsFillTagFill)
  .child(
    S.documentTypeList("recordOfCollections")
      .title("Collections")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("recordOfCollections")
          .views([
            S.view.form().icon(EditIcon),
            S.view
              .component(ReferencedByView)
              .title("Referenced by")
              .icon(MdLink),
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
          ])
      )
  );
