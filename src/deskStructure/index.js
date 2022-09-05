import S from "@sanity/desk-tool/structure-builder";
import { sections } from "../badges/sectionBadge";
import pages from "./pages";
import shop from "./shop";

const hiddenTypes = [
  "media.tag",
  "category",
  "page",
  "post",
  "author",
  "products",
  "categories",
  "siteSettings",
  ...sections,
];
export default () =>
  S.list()
    .title("Content")
    .items([
      pages,
      S.divider(),
      shop,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
