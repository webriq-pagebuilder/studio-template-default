import S from "@sanity/desk-tool/structure-builder";
import { sections } from "../badges/sectionBadge";
import pages from "./pages";

const hiddenTypes = [
  "media.tag",
  "category",
  "page",
  "post",
  "author",
  ...sections,
];
export default () =>
  S.list()
    .title("Content")
    .items([
      pages,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
