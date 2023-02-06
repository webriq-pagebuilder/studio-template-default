import { deskTool as sanityDesktool } from "sanity/desk"
import Iframe from "sanity-plugin-iframe-pane"
import type { SanityDocument } from "sanity"
import resolveProductionUrl from "../resolvePreviewUrl"

export default sanityDesktool({
  structure: (S) =>
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Pages")
          .schemaType("page")
          .child(
            S.documentTypeList("page")
              .title("Pages")
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("page")
                  .views([
                    S.view.form(),
                    // Including the iframe pane, with a function to create the url
                    S.view
                      .component(Iframe)
                      .options({ url: (doc: SanityDocument) => resolveProductionUrl(doc) })
                      .title("Preview"),
                  ])
              )
          ),
      ]),
  name: "desk",
  title: "Desk",
})
