import S from "@sanity/desk-tool/structure-builder";

import { MdSettingsSuggest } from "react-icons/md";

export default S.listItem()
  .title("Site settings")
  .schemaType("siteSettings")
  .icon(MdSettingsSuggest)
  .child(
    S.document()
      .title("Site settings")
      .schemaType("siteSettings")
      .documentId("siteSettings")
  );
