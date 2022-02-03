import S from "@sanity/desk-tool/structure-builder";
import pages from "./pages";

const hiddenTypes = [
  "media.tag",
  "category",
  "page",
  "post",
  "author",
  "reusableSections",
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
