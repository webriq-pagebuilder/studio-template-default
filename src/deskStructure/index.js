import S from "@sanity/desk-tool/structure-builder";
import pages from "./pages";
import ComposeIcon from "part:@sanity/base/compose-icon";

const hiddenTypes = ["media.tag", "category", "page", "post", "author"];
export default () =>
  S.list()
    .title("Content")
    .menuItems([
      S.menuItem()
        .title("Page")
        .icon(ComposeIcon)
        .intent({
          type: "create",
          params: { type: "page", template: "page" },
        })
        .showAsAction(false),
      S.menuItem()
        .title("Media Tag")
        .icon(ComposeIcon)
        .intent({
          type: "create",
          params: { type: "media.tag", template: "media.tag" },
        })
        .showAsAction(false),
      S.menuItem()
        .title("Blog Post")
        .icon(ComposeIcon)
        .intent({
          type: "create",
          params: { type: "post", template: "post" },
        })
        .showAsAction(false),
      S.menuItem()
        .title("Blog Category")
        .icon(ComposeIcon)
        .intent({
          type: "create",
          params: { type: "category", template: "category" },
        })
        .showAsAction(false),
    ])
    .items([
      pages,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
