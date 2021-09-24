import S from "@sanity/desk-tool/structure-builder";

import pages from "./pages";
import posts from "@webriq-pagebuilder/sanity-plugin-schema-blog/lib/deskStructure";

const blogs = Object.values(posts);
const hiddenTypes = ["media.tag", "category", "page", "post", "author"];

export default () =>
  S.list()
    .title("Content")
    .items([
      pages,
      S.listItem(...blogs),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
