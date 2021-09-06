import S from "@sanity/desk-tool/structure-builder";
import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdAccessibility, MdDashboard } from "react-icons/md";
import { FaFile, FiEdit, FiInbox, FiDatabase, FiLayers } from "react-icons/fi";

// Web preview
import IframePreview from "../components/previews/iframe/IframePreview";
import SeoPreview from "../components/previews/seo/SeoPreviews";
import SeoPane from "sanity-plugin-seo-pane";
import resolveProductionUrl from "../resolvePreviewUrl";

// a11y preview
import ColorblindPreview from "../components/previews/a11y/colorblind-filter/ColorblindPreview";
import TextToSpeechPreview from "../components/previews/a11y/text-to-speech/TextToSpeechPreview";
import BraillePreview from "../components/previews/a11y/braille/Braille";

// Web preview configuration
const remotePreviewUrl = `${
  process.env.SANITY_STUDIO_PRODUCTION_SITE_URL
}/api/preview?secret=${
  process.env.SANITY_STUDIO_PREVIEW_SECRET || "secret"
}&slug=`; // @todo: swap with Next.js one
const localPreviewUrl = `${
  process.env.SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000"
}/api/preview?secret=${
  process.env.SANITY_STUDIO_PREVIEW_SECRET || "secret"
}&slug=`;
const previewURL =
  window.location.hostname === "localhost" ? localPreviewUrl : remotePreviewUrl;
const publishedURL = `${process.env.SANITY_STUDIO_PRODUCTION_SITE_URL}`;

export default S.listItem()
  .title("Blog")
  .child(
    S.list()
      .title("Blog")
      .items([
        S.listItem()
          .title("Posts")
          .child(
            S.list()
              .title("Status")
              .items([
                S.listItem()
                  .title("All Posts")
                  .icon(FiDatabase)
                  .schemaType("post")
                  .child(S.documentTypeList("post").title("All Posts")),
                S.listItem()
                  .title("Published (including new edits)")
                  .icon(FiLayers)
                  .schemaType("post")
                  .child(
                    S.documentTypeList("post")
                      .title("Published (including new edits)")
                      .filter(
                        "_type == $type && defined(hasBeenPublished) && _id in path('drafts.**')"
                      )
                      .params({
                        type: "post",
                      })
                  ),
                S.listItem()
                  .title("Drafts (never published)")
                  .icon(FiEdit)
                  .schemaType("post")
                  .child(
                    S.documentTypeList("post")
                      .title("Drafts (never published)")
                      .filter(
                        "_type == $type && _id in path('drafts.**') && !defined(hasBeenPublished)"
                      )
                      .params({
                        type: "post",
                        state: "drafts",
                      })
                  ),
                S.listItem()
                  .title("Unpublished (previously published)")
                  .icon(FiInbox)
                  .schemaType("post")
                  .child(
                    S.documentTypeList("post")
                      .title("Unpublished (previously published)")
                      .filter(
                        "_type == $type && (_id in path('drafts.**')) && defined(hasBeenPublished) && !hasBeenPublished"
                      )
                      .params({
                        type: "post",
                        state: "drafts",
                      })
                  ),
              ])
          ),
        S.listItem()
          .title("Categories")
          .child(S.documentTypeList("category").title("Categories")),
        S.listItem()
          .title("Authors")
          .child(S.documentTypeList("author").title("Authors")),
      ])
  );
