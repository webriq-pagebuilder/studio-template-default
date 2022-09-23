import S from "@sanity/desk-tool/structure-builder";
import { BsFillTagFill } from "react-icons/bs";

/** This shows all collection pages that will replace the preview of the main collection page when their names are matched. **/
export default S.listItem()
  .title("Collections")
  .schemaType("collectionSettings")
  .icon(BsFillTagFill)
  .child(
    S.document()
      .title("Collections")
      .schemaType("collectionSettings")
      .documentId("collectionSettings")
  );
