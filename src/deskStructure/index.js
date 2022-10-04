import S from "@sanity/desk-tool/structure-builder";
import { sections } from "../badges/sectionBadge";
import pages from "./pages";
import store from "./store/";

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
  ...sections,
];
export default () =>
  S.list()
    .title("Content")
    .items([
      pages,
      S.divider(),
      store,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
