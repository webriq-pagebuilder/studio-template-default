import S from "@sanity/desk-tool/structure-builder";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import TrashIcon from "part:@sanity/base/trash-icon";
import ContentCopyIcon from "part:@sanity/base/content-copy-icon";
import { MdAccessibility, MdDashboard } from "react-icons/md";

// Web preview
import IframePreview from "../components/previews/iframe/IframePreview";
import SeoPreview from "../components/previews/seo/SeoPreviews";
import SeoPane from "sanity-plugin-seo-pane";
import resolveProductionUrl from "../resolvePreviewUrl";

// a11y preview
import ColorblindPreview from "../components/previews/a11y/colorblind-filter/ColorblindPreview";
import TextToSpeechPreview from "../components/previews/a11y/text-to-speech/TextToSpeechPreview";
import BraillePreview from "../components/previews/a11y/braille/Braille";

import {
  SANITY_STUDIO_PRODUCTION_SITE_URL,
  SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL,
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_DEV_SITE_URL,
} from "../config";

// Web preview configuration
const remotePreviewUrl = `${SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=`;
const localPreviewUrl = `${SANITY_STUDIO_DEV_SITE_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=`;
const previewURL =
  window.location.hostname === "localhost" ? localPreviewUrl : remotePreviewUrl;
const publishedURL = SANITY_STUDIO_PRODUCTION_SITE_URL;

export default S.listItem()
  .title("Pages")
  .schemaType("page")
  .icon(MdDashboard)
  .child(
    S.documentTypeList("page")
      .title("Pages")
      .menuItemGroups([
        S.menuItemGroup().id("update-page").title("Update page"),
      ])
      // @TODO: Make this work
      .menuItems([
        S.menuItem({
          title: "Edit",
          icon: EditIcon,
          group: "update-page",
          intent: {
            type: "edit",
            params: {
              type: "page",
            },
          },
        }),
        S.menuItem({
          title: "Duplicate",
          icon: ContentCopyIcon,
          group: "update-page",
          intent: {
            type: "edit",
            params: {
              type: "page",
            },
          },
        }),
        S.menuItem({
          title: "Delete",
          icon: TrashIcon,
          group: "update-page",
          intent: {
            type: "edit",
            params: {
              type: "page",
            },
          },
        }),

        // SORT DOCUMENT ITEMS - working
        S.orderingMenuItem({
          title: "Title",
          by: [{ field: "title", direction: "asc" }],
        }),
        S.orderingMenuItem({
          title: "Last Edited",
          by: [{ field: "lastEdited", direction: "desc" }],
        }),
        S.orderingMenuItem({
          title: "Created",
          by: [{ field: "created", direction: "desc" }],
        }),
      ])
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("page")
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
              .component(SeoPane)
              .options({
                keywords: `seo.seoKeywords`,
                synonyms: `seo.seoSynonyms`,
                url: (document) => resolveProductionUrl(document),
              })
              .icon(EyeIcon)
              .title("SEO Analysis"),
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
