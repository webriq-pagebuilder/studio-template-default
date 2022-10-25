import S from "@sanity/desk-tool/structure-builder";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdAccessibility } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

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
const remotePreviewUrl = `${SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=search`;
const localPreviewUrl = `${SANITY_STUDIO_DEV_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=search`;
const previewURL =
  window.location.hostname === "localhost" ? localPreviewUrl : remotePreviewUrl;
const publishedURL = SANITY_STUDIO_PRODUCTION_SITE_URL;

export default S.listItem()
  .title("Search")
  .schemaType("searchPage")
  .icon(FaSearch)
  .child(
    S.document()
      .title("Search")
      .schemaType("searchPage")
      .documentId("searchPage")
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
        S.view.component(BraillePreview).icon(MdAccessibility).title("Braille"),
      ])
  );
