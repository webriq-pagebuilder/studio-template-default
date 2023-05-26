import S from "@sanity/desk-tool/structure-builder";
import { sections } from "../badges/sectionBadge";
import pages from "./pages";
import store from "./store/";
import {
  SANITY_STUDIO_FROM_STAGING_APP,
  SANITY_STUDIO_IN_CSTUDIO,
} from "../config";

const hidden =
  SANITY_STUDIO_FROM_STAGING_APP === "false" &&
  SANITY_STUDIO_IN_CSTUDIO === "false";

const hiddenTypes = [
  "media.tag",
  "category",
  "page",
  "post",
  "author",
  "mainProduct",
  "mainCollection",
  "productSettings",
  "collectionSettings",
  "cartPage",
  "wishlistPage",
  "searchPage",
  "slotProductInfo",
  "slotCollectionInfo",
  "aiWriterGPT3",
  ...sections,
];

const defaultListItems = [
  pages,
  ...S.documentTypeListItems().filter(
    (listItem) => !hiddenTypes.includes(listItem.getId())
  ),
];

export default () =>
  S.list()
    .title("Content")
    .items(
      hidden // Hide STORE if studio was created from Live App and C-Studio is disabled
        ? defaultListItems
        : [...defaultListItems, S.divider(), store] // Show STORE if C-Studio is enabled whether it was created via Live App or Staging App
    );
