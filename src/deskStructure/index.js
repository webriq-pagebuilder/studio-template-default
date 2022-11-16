import S from "@sanity/desk-tool/structure-builder";
import { sections } from "../badges/sectionBadge";
import pages from "./pages";
import store from "./store/";
import { SANITY_STUDIO_IN_CSTUDIO, SANITY_PROJECT_DATASET } from "../config";

const isProductionDataset = SANITY_PROJECT_DATASET === "production";
const hidden = isProductionDataset && SANITY_STUDIO_IN_CSTUDIO === "false";

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
      hidden // Hide STORE on "production" dataset and C-Studio is disabled
        ? defaultListItems
        : [...defaultListItems, S.divider(), store] // Show STORE on "production" OR "staging" dataset and C-Studio is enabled
    );
