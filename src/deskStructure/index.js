import S from "@sanity/desk-tool/structure-builder";

import pages from "./pages";
import posts from "./posts";
// import posts from "@webriq-pagebuilder/sanity-plugin-schema-blog/lib/deskStructure"; // @todo: this doesn't work

const hiddenTypes = ["media.tag", "category", "page", "post", "author"];

export default () =>
  S.list()
    .title("Content")
    .items([
      pages,
      // blog,
      posts,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
